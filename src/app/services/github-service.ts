import { Injectable } from "@angular/core";
import { OctokitResponse } from "@octokit/types";
import { Octokit } from "octokit";
import { IBranch, IRepo, IRepoBasics, IResource } from "../interfaces/github.interfaces";
import { ITreeNode } from "../interfaces/interfaces";
import { TreeNode } from "../classes/tree.node.class";
import { Observable, Subject } from "rxjs";
import { getHostingContext } from "../config/hosting-context.config";

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
  private owner: string = 'bcxiao2106'; //will fetch from login user
  private repositories: any[] = [];
  private repoSelectionSubject: Subject<IBranch>;
  private selectedRepo!: string;
  repoChange$: Observable<IBranch>;

  constructor() {
    this.repoSelectionSubject = new Subject<IBranch>();
    this.repoChange$ = this.repoSelectionSubject.asObservable();
    this.octokit = new Octokit({ auth: `${this.fetchTokenResponse['token_type']} ${atob(this.fetchTokenResponse['access_token'])}` });
  }

  async loadRepositories(owner?: string): Promise<void> {
    try {
      let response: OctokitResponse<any> = await this.octokit.request("GET /users/{owner}/repos", {
        owner: owner ? owner : this.owner
      });
      if (response && response.data && Array.isArray(response.data)) {
        this.repositories = response.data;
      }
    } catch (error) {
      console.log(typeof error, JSON.stringify(error));
    }
  }

  async loadRepo(repo: string, branch?: string): Promise<void> {
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
      if(!branch) await this.loadBranches(repo);
      await this.loadContents(repo, ref, '', rootNode?.viewId!, rootNode);
    }
    this.emitChange(repo);
  }

  private async loadContents(repo: string, branch: string, path: string, viewId: string, parentNode?: ITreeNode): Promise<void> {
    let response: OctokitResponse<any> = await this.octokit.request("GET /repos/{owner}/{repo}/contents/{filePath}", {
      owner: this.owner,
      repo: repo,
      filePath: path,
      ref: branch
    });
    console.log(response);
    let subDirs: any[] = [];
    if (response?.data && Array.isArray(response.data)) {
      for (let i = 0; i < response.data.length; i++) {
        response.data[i].repo = repo;
        let [id, text, type] = [response.data[i].sha, response.data[i].name, response.data[i].type];
        let treeNode: ITreeNode = new TreeNode(id, viewId, text, type, response.data[i]);
        this.getCurrent(repo)?.tree.push(treeNode);
        parentNode?.children?.push(id);
        this.getCurrent(repo)?.fs.set(id, response.data[i]);
        console.log(this.map);
        if (type === 'dir') {
          subDirs.push({ repo: repo, path: response.data[i].path, viewId: viewId, treeNode: treeNode });
        }
      }
    }
    this.repoSelectionSubject.next(this.getCurrent(repo)!);
    for (let i = 0; i < subDirs.length; i++) {
      await this.loadContents(subDirs[i].repo, branch, subDirs[i].path, subDirs[i].viewId, subDirs[i].treeNode);
    }
  }

  async loadBranches(repo: string): Promise<void> {
    if(this.map.get(repo)?.branches && this.map.get(repo)?.branches.length == 0) {
      let response = await this.octokit.request("GET /repos/{owner}/{repo}/branches", {
        owner: this.owner,
        repo: repo
      });
  
      console.log('loadBranches', response.data);
      this.map.get(repo)?.branches.push(...response.data);
    }
    await this.switchToBranch(repo, this.repositories.find(rp => rp.name == repo).default_branch);
  }

  getRepositories(filter?: string): any[] {
    if (!filter) return this.repositories;
    return this.repositories.filter(repo => repo.name.includes(filter));
  }

  getRepo(repo: string): IRepo | undefined {
    return this.map.get(repo);
  }

  getSelectedRepo(): string {
    return this.selectedRepo;
  }

  async switchToBranch(repo: string, branch: string) {
    let repository: IRepo = this.map.get(repo)!;
    repository.currentBranch = branch;
    repository.branches.forEach(b => {
      b.current = b.name == branch;
    });
    if(!repository.branchMap.has(branch)) {
      await this.loadRepo(repo, branch);
    } else this.emitChange(repo);
  }

  private getCurrent(repo: string): IBranch {
    return this.map.get(repo)?.branchMap.get(this.getCurrentBranchName(repo))!;
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
      node.resource.raw = response.data.content;
      node.resource.textual = atob(node.resource.raw);
      node.resource.local = atob(node.resource.raw);
      node.resource.changed = false;
      this.getCurrent(node.resource.repo)?.resources.set(node.resource.sha, { raw: node.resource.raw, code: node.resource.textual, local: node.resource.local, changed: node.resource.changed });
      console.log(this.map);
    }
  }

  private updateRepo(repo: string, basics: IRepoBasics, branch: string) {
    let viewId: string = `tree_${repo}`;
    let rootNode = new TreeNode('root', viewId, '', 'dir');
    if(!this.map.has(repo)) {
      this.map.set(repo, this.getNewRepo(repo, basics, rootNode));
    } else if(!this.map.get(repo)?.branchMap.has(branch)) {
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
      changes: []
    };
  }

  private emitChange(repo: string) {
    let repository: IBranch = this.getCurrent(repo)!;
    if (repository) {
      this.repoSelectionSubject.next(repository);
      this.selectedRepo = repo;
    }
  }
}