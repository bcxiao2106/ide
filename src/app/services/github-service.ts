import { Injectable } from "@angular/core";
import { OctokitResponse } from "@octokit/types";
import { Octokit } from "octokit";
import { IRepo, IResource } from "../interfaces/github.interfaces";
import { ITreeNode } from "../interfaces/interfaces";
import { TreeNode } from "../classes/tree.node.class";
import { siderFilesTreeViewId } from "../config/sider-files.config";
import { Observable, Subject } from "rxjs";

@Injectable()
export class GithubService {
  private map: Map<string, IRepo> = new Map<string, IRepo>();
  private octokit: Octokit;
  private fetchTokenResponse: any = {
    "access_token": "ghu_6cKmzlRexDSrV2dOhYOEiIH1z9IJqA44iAdn",
    "expires_in": 28800,
    "refresh_token": "ghr_A96GaUR6ahRRTHXE7aK6caTVmiZpuM6nBW7sxPXNI4Or6YRrrTtUHS5EAMwosG3ZSWnRZi31pMCd",
    "refresh_token_expires_in": 15811200,
    "token_type": "bearer",
    "scope": ""
  };
  private owner: string = 'bcxiao2106'; //will fetch from login user
  private repositories: any[] = [];
  private repoSelectionSubject: Subject<IRepo>;
  repoChange$: Observable<IRepo>;

  constructor() {
    this.repoSelectionSubject = new Subject<IRepo>();
    this.repoChange$ = this.repoSelectionSubject.asObservable();
    this.octokit = new Octokit({ auth: `${this.fetchTokenResponse['token_type']} ${this.fetchTokenResponse['access_token']}` });
  }

  async loadRepositories(owner?: string): Promise<void> {
    let response: OctokitResponse<any> = await this.octokit.request("GET /users/{owner}/repos", {//GET /users/{username}/repos //GET /repos/{owner}/{repo}/contents/{filePath}
      owner: owner ? owner : this.owner
    });
    if (response && response.data && Array.isArray(response.data)) {
      this.repositories = response.data;
    }
  }

  async loadRepo(repo: string): Promise<void> {
    if (!this.map.has(repo)) {
      await this.loadContents(repo, '', `tree_${repo}`);
    }
    let repository: IRepo = this.map.get(repo)!;
    if (repository) this.repoSelectionSubject.next(repository);
  }

  private async loadContents(repo: string, path: string, viewId: string, parentNode?: ITreeNode): Promise<void> {
    //GET /repos/{owner}/{repo}/contents/{filePath}
    if (!this.map.has(repo)) {
      this.map.set(repo, this.getNewRepo(repo));
      if (!parentNode) parentNode = new TreeNode('root', viewId, '', 'dir');
      this.map.get(repo)?.tree.push(parentNode);
    }
    let response: OctokitResponse<any> = await this.octokit.request("GET /repos/{owner}/{repo}/contents/{filePath}", {//GET /users/{username}/repos //GET /repos/{owner}/{repo}/contents/{filePath}
      owner: this.owner,
      repo: repo,
      filePath: path
    });
    console.log(response);
    let subDirs: any[] = [];
    if (response?.data && Array.isArray(response.data)) {
      for (let i = 0; i < response.data.length; i++) {
        response.data[i].repo = repo;
        let [id, text, type] = [response.data[i].sha, response.data[i].name, response.data[i].type];
        let treeNode: ITreeNode = new TreeNode(id, viewId, text, type, response.data[i]);
        this.map.get(repo)?.tree.push(treeNode);
        parentNode?.children?.push(id);
        this.map.get(repo)?.repository.set(id, response.data[i]);
        console.log(this.map);
        if (type === 'dir') {
          subDirs.push({ repo: repo, path: response.data[i].path, viewId: viewId, treeNode: treeNode });
        }
      }
    }
    this.repoSelectionSubject.next(this.map.get(repo)!);
    for (let i = 0; i < subDirs.length; i++) {
      await this.loadContents(subDirs[i].repo, subDirs[i].path, subDirs[i].viewId, subDirs[i].treeNode);
    }
  }

  getRepositories(filter?: string): any[] {
    if (!filter) return this.repositories;
    return this.repositories.filter(repo => repo.name.includes(filter));
  }

  getRepo(repo: string): IRepo | undefined {
    return this.map.get(repo);
  }

  async getResourceRaw(node: ITreeNode): Promise<any> {
    let response = await this.octokit.request("GET /repos/{owner}/{repo}/contents/{filePath}", {//GET /users/{username}/repos //GET /repos/{owner}/{repo}/contents/{filePath}
      owner: this.owner,
      repo: node.resource.repo,
      filePath: node.resource.path
    });

    node.resource.raw = response.data.content;
    node.resource.textual = atob(node.resource.raw);
    this.map.get(node.resource.repo)?.resources.set(node.resource.path, { raw: node.resource.raw, code: node.resource.textual });
  }

  private getNewRepo(repo: string): IRepo {
    return {
      name: repo,
      repository: new Map<string, any>(),
      tree: [],
      resources: new Map<string, IResource>()
    }
  }
}
