import { ISection } from "../interfaces/interfaces";

export const SiderSections: ISection[] = [
  { title: 'Repositories', component: 'RepoSelectorComponent', isExpanded: true },
  { title: 'Info', component: 'ProjectInfoComponent', isExpanded: true },
  { title: 'Files', component: 'FsTreeComponent', isExpanded: true },
  { title: 'Dependencies', component: 'ListViewComponent', isExpanded: true }
];

export const GitSiderSections: ISection[] = [
  { title: 'Commit Changes', component: 'RepoChangesComponent', isExpanded: true },
  { title: 'Pull Requests', component: 'RepoPullRequestsComponent', isExpanded: true }
];
