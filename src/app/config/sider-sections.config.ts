import { ISection } from "../interfaces/interfaces";

export const SiderSections: ISection[] = [
    {title: 'Info', component: 'ProjectInfoComponent', isExpanded: true },
    {title: 'Files', component: 'TreeMenuComponent', isExpanded: true },
    {title: 'Dependencies', component: 'ListViewComponent', isExpanded: true }
];