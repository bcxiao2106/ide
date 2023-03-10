import { ISection } from "../interfaces/interfaces";

export const SiderSections: ISection[] = [
    {title: 'Info', component: 'ProjectInfoComponent', isExpanded: true },
    {title: 'Files', component: 'TreeMenuComponent', isExpanded: true, config: { id: 'root', text: 'root', viewId: 'siderFilesTree', children: ['001', '002', '003'], path: [], level: 0 } },
    {title: 'Dependencies', component: 'ListViewComponent', isExpanded: true }
];