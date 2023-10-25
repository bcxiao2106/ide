import { ITreeNode } from "./interfaces";

export interface IRepo {
  repository: Map<string, IRepository>;
  tree: ITreeNode[];
  name: string;
}

export interface IRepository {
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
