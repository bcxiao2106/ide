import { Injectable } from "@angular/core";
import { OctokitResponse, RequestParameters } from "@octokit/types";
import { Buffer } from 'buffer';
import { Octokit } from "octokit";
import { IBranch, IPullRequest, IRepo, IRepoBasics, IResource, IResourceChange, PullRequest } from "../interfaces/github.interfaces";
import { ITreeNode } from "../interfaces/interfaces";
import { TreeNode } from "../classes/tree.node.class";
import { Observable, Subject } from "rxjs";
import { OWNER, getHostingContext } from "../config/hosting-context.config";
import { RestEndpointMethodTypes } from "@octokit/rest";

@Injectable()
export class GithubService {
  private map: Map<string, IRepo> = new Map<string, IRepo>();
  private octokit: Octokit;
  private context = getHostingContext();
  private fetchTokenResponse: any = {
    "access_token": this.context.tk,
    "expires_in": 28800,
    "refresh_token": this.context.rtk,
    "refresh_token_expires_in": 15724800,
    "token_type": "bearer",
    "scope": ""
  };
  private owner: string = OWNER; //will fetch from login user
  private repositories: any[] = [];
  private repoSelectionSubject: Subject<IBranch>;
  private resourceChangeSubject: Subject<IResourceChange>;
  private prChangeSubject: Subject<PullRequest[]>;
  private selectedRepo!: string;
  repoChange$: Observable<IBranch>;
  resourceChange$: Observable<IResourceChange>;
  prChange$: Observable<PullRequest[]>;

  constructor() {
    this.repoSelectionSubject = new Subject<IBranch>();
    this.repoChange$ = this.repoSelectionSubject.asObservable();
    this.resourceChangeSubject = new Subject<IResourceChange>();
    this.resourceChange$ = this.resourceChangeSubject.asObservable();
    this.prChangeSubject = new Subject<PullRequest[]>();
    this.prChange$ = this.prChangeSubject.asObservable();
    this.octokit = new Octokit({ auth: `${this.fetchTokenResponse['token_type']} ${this.fetchTokenResponse['access_token']}` });
  }

  async loadRepositories(owner?: string): Promise<void> {
    try {
      // let response: OctokitResponse<any> = await this.octokit.request("GET /orgs/{owner}/repos", {
      //   owner: owner ? owner : this.owner,
      //   per_page: 5000
      // });
      let response = await this.octokit.rest.search.repos({
        q: 'nexxe.ng',
        per_page: 100
      })
      // let response: OctokitResponse<any> = await this.octokit.request("GET /users/{owner}/repos", {
      //   owner: owner ? owner : this.owner
      // });
      if (response && response.data.items && Array.isArray(response.data.items)) {
        this.repositories = response.data.items;
      }
    } catch (error) {
      console.log('loadRepositories', typeof error, JSON.stringify(error));
    }
  }

  async loadRepo(repo: string, branch?: string): Promise<void> {
    try {
      let ref: string = branch ? branch : this.repositories.find(rp => rp.name == repo).default_branch;
      if (!this.map.has(repo) || !this.map.get(repo)?.branchMap.has(ref)) {
        let response: OctokitResponse<any> = await this.octokit.request("GET /repos/{owner}/{repo}", {
          owner: this.owner,
          repo: repo,
          ref: ref
        });
        console.log(response);
        this.updateRepo(repo, response.data, ref);
        let rootNode = this.map.get(repo)?.branchMap.get(ref)?.tree[0];
        if (!branch) await this.loadBranches(repo);
        await this.getAllPullRequests(repo);
        // await this.loadContents(repo, ref, '', rootNode?.viewId!, rootNode!);
        let repos = await this.octokit.rest.git.getTree({
          owner: this.owner,
          repo: repo,
          tree_sha: ref, // Use the commit SHA of the branch
          recursive: 'false',
        });
        console.log('processTreeSturcture'.toUpperCase(), repos);
        this.processTreeSturcture(repos.data.tree);
      }
      this.emitChange(repo);
    } catch (error) {
      console.log('loadRepo', error);
    }
  }

  // private async loadContents(repo: string, branch: string, path: string, viewId: string, parentNode: ITreeNode): Promise<void> {
  //   let response: OctokitResponse<any> = await this.octokit.request("GET /repos/{owner}/{repo}/contents/{filePath}", {
  //     owner: this.owner,
  //     repo: repo,
  //     filePath: path,
  //     ref: branch
  //   });
  //   console.log(response);
  //   let subDirs: any[] = [];
  //   if (response?.data && Array.isArray(response.data)) {
  //     for (let i = 0; i < response.data.length; i++) {
  //       response.data[i].repo = repo;
  //       let [id, text, type] = [response.data[i].sha, response.data[i].name, response.data[i].type];
  //       let treeNode: ITreeNode = new TreeNode(id, viewId, text, type, parentNode.id, response.data[i]);
  //       this.getCurrent(repo)?.tree.push(treeNode);
  //       parentNode?.children?.push(id);
  //       this.getCurrent(repo)?.fs.set(id, response.data[i]);
  //       console.log(this.map);
  //       if (type === 'dir') {
  //         subDirs.push({ repo: repo, path: response.data[i].path, viewId: viewId, treeNode: treeNode });
  //       }
  //     }
  //   }
  //   this.repoSelectionSubject.next(this.getCurrent(repo)!);
  //   for (let i = 0; i < subDirs.length; i++) {
  //     await this.loadContents(subDirs[i].repo, branch, subDirs[i].path, subDirs[i].viewId, subDirs[i].treeNode);
  //   }
  // }

  async loadBranches(repo: string): Promise<void> {
    try {
      if (this.map.get(repo)?.branches && this.map.get(repo)?.branches.length == 0) {
        let response = await this.octokit.request("GET /repos/{owner}/{repo}/branches", {
          owner: this.owner,
          repo: repo,
          per_page: 1000
        });
        console.log('loadBranches', response.data);
        this.map.get(repo)?.branches.push(...response.data);
      }
      await this.switchToBranch(repo, this.repositories.find(rp => rp.name == repo).default_branch);
    } catch (error) {
      console.log('loadBranches', error);
    }

  }

  async getAllPullRequests(repo?: string): Promise<void> {
    try {
      let response: any = await this.octokit.rest.pulls.list({
        owner: this.owner,
        repo: repo ? repo : this.selectedRepo
      });
      let repository = this.getRepo()!;
      repository.pulls = response.data!;
      this.prChangeSubject.next(response.data!);
      console.log('getAllPullRequests'.toUpperCase(), response.data);
    } catch (error) {
      console.log('getAllPullRequests', error);
    }
  }

  async closePullRequest(prNum: number): Promise<void> {
    try {
      let response = await this.octokit.rest.pulls.update({
        owner: this.owner,
        repo: this.selectedRepo,
        pull_number: prNum,
        state: 'closed'
      });
      await this.getAllPullRequests();
    } catch (error) {
      console.log('closePullRequest', error);
    }
  }

  async createPullRequest(compare: string, base: string, title: string, description: string): Promise<void> {
    let response = await this.octokit.rest.pulls.create({
      owner: this.owner,
      repo: this.selectedRepo,
      title: (title == '') ? 'untitled' : title,
      head: compare,
      base: base,
      body: description == '' ? 'no description' : description
    });
    console.log('createPullRequest'.toUpperCase(), response);
    await this.getAllPullRequests();
  }

  getRepositories(filter?: string): any[] {
    if (!filter) return this.repositories;
    return this.repositories.filter(repo => repo.name.includes(filter));
  }

  getRepo(repo?: string): IRepo | undefined {
    return this.map.get(repo ? repo : this.selectedRepo);
  }

  getSelectedRepo(): string {
    return this.selectedRepo;
  }

  async switchToBranch(repo: string, branch: string) {
    let repository: IRepo = this.map.get(repo)!;
    repository.currentBranch = branch;
    repository.branches.forEach(b => {
      b.current = b.name == branch;
      b.isDefault = b.name == this.getRepo()?.basics?.default_branch;
    });
    if (!repository.branchMap.has(branch)) {
      await this.loadRepo(repo, branch);
    } else this.emitChange(repo);
  }

  getCurrent(repo?: string): IBranch {
    let currentRepo: string = repo ? repo : this.selectedRepo;
    return this.map.get(currentRepo)?.branchMap.get(this.getCurrentBranchName(currentRepo))!;
  }

  private getCurrentBranchName(repo: string): string {
    let repository: IRepo = this.map.get(repo)!;
    return repository.currentBranch ? repository.currentBranch! : repository.basics?.default_branch!;
  }

  async getResourceRaw(node: ITreeNode): Promise<any> {
    if (!this.getCurrent(node.resource.repo)?.resources.has(node.id)) {
      let branch: string = this.getCurrentBranchName(node.resource.repo);
      let response = await this.octokit.request("GET /repos/{owner}/{repo}/contents/{filePath}", {//GET /users/{username}/repos //GET /repos/{owner}/{repo}/contents/{filePath}
        owner: this.owner,
        repo: node.resource.repo,
        filePath: node.resource.path,
        ref: branch
      });
      node.resource.name = response.data.name;
      node.resource.raw = response.data.content;
      node.resource.textual = atob(node.resource.raw);
      node.resource.local = node.resource.textual;
      node.resource.changed = false;
      this.getCurrent(node.resource.repo)?.resources.set(node.resource.sha, this.createNewResource(node.resource));
      console.log(this.map);
    }
  }

  setChange(rid: string, changed: boolean, newValue?: string) {
    let current: IBranch = this.getCurrent();
    let resource: IResource = current.resources.get(rid)!;
    resource.changed = changed;
    if (changed) {
      current.changes[rid] = newValue!;
    } else delete current.changes[rid];
    this.resourceChangeSubject.next({ rid: rid, isDirty: changed });
    this.markDirtyRecussively(rid);
    // this.generateChangesTree();
    console.log(this.getCurrent());
  }

  async commit(resources: any[], message: string) {
    // try {
    //   let files = await Promise.all(resources.map(resource => this.createOrUpdateFile(resource, message)));
    //   console.log(files);

    //   const tree = files.reduce((acc, file) => {
    //     acc.push({
    //       path: file.content.path,
    //       sha: file.content.sha,
    //       mode: '100644',
    //       type: 'blob',
    //     });
    //     return acc;
    //   }, []);
    //   console.log('tree'.toUpperCase(), tree);

    //   const baseTree = await this.octokit.rest.git.getRef({
    //     owner: this.owner,
    //     repo: this.selectedRepo,
    //     ref: `heads/${this.getCurrent().branch}`,
    //   });
    //   console.log('baseTree'.toUpperCase(), baseTree);

    //   const newTree = await this.octokit.rest.git.createTree({
    //     owner: this.owner,
    //     repo: this.selectedRepo,
    //     base_tree: baseTree.data.object.sha,
    //     tree: tree,
    //   });
    //   console.log('newTree'.toUpperCase(), newTree);

    //   const commit = await this.octokit.rest.git.createCommit({
    //     owner: this.owner,
    //     repo: this.selectedRepo,
    //     message: message,
    //     tree: newTree.data.sha,
    //     parents: [baseTree.data.object.sha],
    //   });
    //   console.log('commit'.toUpperCase(), commit);

    //   await this.octokit.rest.git.updateRef({
    //     owner: this.owner,
    //     repo: this.selectedRepo,
    //     ref: `heads/${this.getCurrent().branch}`,
    //     sha: commit.data.sha,
    //   });

    //   return commit.data;
    // } catch (error) {
    //   console.error("Error creating commit:", error);
    //   throw error;
    // }
    for (let i = 0; i < resources.length; i++) {
      let id: string = resources[i].id;
      const contentBase64 = Buffer.from(this.getModifiedContentById(id)).toString('base64');
      let params: any = {
        owner: this.owner,
        repo: this.selectedRepo,
        path: this.getResourcePathById(id),
        message: message,
        content: contentBase64,
        branch: this.getCurrentBranch(), //`heads/${this.getCurrentBranch()}`,
        sha: id
      };
      console.log(params);
      try {
        const res = await this.octokit.rest.repos.createOrUpdateFileContents({
          owner: this.owner,
          repo: this.selectedRepo,
          path: this.getResourcePathById(id),
          message: message,
          content: contentBase64,
          branch: this.getCurrentBranch(), //`heads/${this.getCurrentBranch()}`,
          sha: id
        });
        console.log('commit'.toUpperCase(), res);
        // this.octokit.rest.git.createCommit({

        // })
        // const response = await this.octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", params);
      } catch (error) {
        console.log('commit', error);
      }
    }
  }

  getResource(rid: string): IResource {
    let current = this.getCurrent();
    return current.resources.get(rid)!;
  }

  private updateRepo(repo: string, basics: IRepoBasics, branch: string) {
    let viewId: string = `fs_tree_${repo}`;
    let rootNode = new TreeNode('root', viewId, '', 'dir', undefined);
    if (!this.map.has(repo)) {
      this.map.set(repo, this.getNewRepo(repo, basics, rootNode));
    } else if (!this.map.get(repo)?.branchMap.has(branch)) {
      this.map.get(repo)?.branchMap.set(branch, this.getNewBranch(repo, branch, rootNode));
    }
  }

  private getNewRepo(repo: string, basics: IRepoBasics, rootNode: ITreeNode): IRepo {
    let branchMap: Map<string, IBranch> = new Map<string, IBranch>();
    branchMap.set(basics.default_branch, this.getNewBranch(repo, basics.default_branch, rootNode));
    return {
      name: repo,
      basics: basics,
      currentBranch: basics.default_branch,
      branches: [],
      branchMap: branchMap
    };
  }

  private getNewBranch(repo: string, branch: string, rootNode: ITreeNode): IBranch {
    return {
      name: repo,
      branch: branch,
      fs: new Map<string, any>(),
      tree: [rootNode],
      resources: new Map<string, IResource>(),
      changes: {},
      changeTree: [rootNode]
    };
  }

  private createNewResource(resource: any): IResource {
    return {
      rid: resource.sha,
      name: resource.name,
      path: resource.path,
      raw: resource.raw,
      code: resource.textual,
      local: resource.local,
      changed: resource.changed
    }
  }

  private getResourcePathById(rid: string): string {
    return this.getCurrent().resources.get(rid)?.path!;
  }

  private getModifiedContentById(rid: string): string {
    return this.getCurrent().changes[rid];
  }

  private getCurrentBranch(): string {
    return this.getCurrent().branch;
  }

  private emitChange(repo: string) {
    let repository: IBranch = this.getCurrent(repo)!;
    if (repository) {
      this.repoSelectionSubject.next(repository);
      this.selectedRepo = repo;
    }
  }

  private generateChangesTree() {
    let current = this.getCurrent();
    let tree = current.tree;
    let changesTree = [current?.changeTree[0]];
    for (let id in current.changes) {
      let node = tree.find(node => node.id == id)!;
      changesTree.push(node);
    }
    current.changeTree = changesTree;
  }

  private markDirtyRecussively(rid: string) {
    let node = this.getCurrent().tree.find(n => n.id == rid)!;
    if (node.id == 'root') return;
    if (node.children) {
      if (node.isDirty != this.hasDirtyChild(node.children)) {
        node.isDirty = this.hasDirtyChild(node.children);
        this.resourceChangeSubject.next({ rid: rid, isDirty: node.isDirty });
      }
    }
    this.markDirtyRecussively(node.parent!);
  }

  private hasDirtyChild(children: string[]): boolean {
    let current = this.getCurrent();
    for (let rid of children) {
      if (current.tree.find(node => node.id == rid)?.isDirty)
        return true;
    }
    return false;
  }

  private async createOrUpdateFile(resource: any, message: string): Promise<any> {
    try {
      const contentBase64 = Buffer.from(this.getModifiedContentById(resource.id)).toString('base64');
      const response = await this.octokit.rest.git.createBlob({
        owner: this.owner,
        repo: this.selectedRepo,
        message: message,
        content: contentBase64,
        encoding: 'base64'
      });

      // Return the response data
      let blob: any = response.data;
      blob['path'] = this.getResourcePathById(resource.id)
      return response.data;
    } catch (error) {
      console.error("Error creating or updating file:", error);
      throw error;
    }
  }

  private processTreeSturcture(tree: any[]) {
    let current = this.getCurrent();
    let pathMap: Map<string, ITreeNode> = new Map<string, ITreeNode>();
    pathMap.set('.', current.tree[0]);
    tree.forEach(item => {
      item['name'] = item.path.substring(item.path.lastIndexOf('/') + 1);
      item['repo'] = this.selectedRepo;
      let parentPath: string = '.';
      if (item.path.lastIndexOf('/') > -1) {
        parentPath = item.path.substring(0, item.path.lastIndexOf('/'));
      }
      let parent = pathMap.get(parentPath);
      console.log(pathMap.size);
      current.fs.set(item.sha, item);
      let type = item.type == 'tree' ? 'dir' : 'file';
      let node = new TreeNode(item.sha, current.tree[0].viewId, item.name, type, parent?.id, item);
      if (item.type == 'tree') {
        pathMap.set(item.path, node);
      }
      parent?.children?.push(node.id);
      current.tree.push(node);
    });
    console.log(current);
  }

  // private async createOrUpdateFile(resource: any, message: string): Promise<any> {
  //   try {
  //     const contentBase64 = Buffer.from(this.getModifiedContentById(resource.id)).toString('base64');
  //     const response = await this.octokit.rest.repos.createOrUpdateFileContents({
  //       owner: this.owner,
  //       repo: this.selectedRepo,
  //       path: this.getResourcePathById(resource.id),
  //       message: message,
  //       content: contentBase64,
  //       branch: this.getCurrentBranch(),
  //       sha: resource.id
  //     });

  //     // Return the response data
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error creating or updating file:", error);
  //     throw error;
  //   }
  // }
}