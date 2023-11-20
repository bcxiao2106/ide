import { ITreeNode } from "./interfaces";

export interface IRepo {
  name: string;
  basics?: IRepoBasics;
  branches: IBranchBasic[];
  branchMap: Map<string, IBranch>;
  currentBranch: string;
}

export interface IBranch {
  name: string;
  branch: string;
  fs: Map<string, IRepoFs>;
  tree: ITreeNode[];
  resources: Map<string, IResource>;
  changes: Record<string, string>;
}

export interface IRepoBasics {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: object;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: object;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: object;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: object;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: object;
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  permissions: object;
  parent: object;
  source: object;
  network_count: number;
  subscribers_count: number;
}

export interface IRepoFs {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  _links: IRepositoryLinks;
  raw?: string;
  textual?: string;
}

export interface IRepositoryLinks {
  self: string;
  git: string;
  html: string;
}

export interface IResource {
  rid: string;
  name: string;
  path: string;
  raw: string;
  code: string;
  local?: string;
  changed?: boolean;
}

export interface IResourceChange {
  rid: string;
  isDirty: boolean;
}

export interface IBranchBasic {
  commit: ICommit;
  name: string;
  protected: boolean;
  current?: boolean;
}
export interface ICommit {
  sha: string;
  url: string;
}

