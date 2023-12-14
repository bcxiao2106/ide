import { ISection } from "../interfaces/interfaces";

export const SiderSections: ISection[] = [
  { title: 'Repositories', component: 'RepoSelectorComponent', isExpanded: true },
  { title: 'Info', component: 'ProjectInfoComponent', isExpanded: true },
  { title: 'Files', component: 'VirualTreeComponent', isExpanded: true },
  { title: 'Dependencies', component: 'ListViewComponent', isExpanded: true }
];

export const GitSiderSections: ISection[] = [
  { title: 'Commit Changes', component: 'RepoChangesComponent', isExpanded: true, style: {"min-height": "100px"} },
  { title: 'New Pull Request', component: 'RepoPullRequestsComponent', isExpanded: true, style: {"min-height": "100px"} },
  { title: 'Pull Requests', component: 'RepoPullsComponent', isExpanded: false, style: {"min-height": "100px"} }
];
