import { ISection } from "../interfaces/interfaces";

export const SiderSections: ISection[] = [
    {title: 'Info', component: 'ProjectInfoComponent', isExpanded: true },
    {title: 'Files', component: 'TreeMenuComponent', isExpanded: true, config: { id: 'root', text: 'root', children: ['001', '002', '003', '004', '005', '006'] } },
    {title: 'Dependencies', component: 'ListViewComponent', isExpanded: true }
];