import { ISection, ITab } from "../interfaces/interfaces";

export const FunctionalSections: ISection[] = [
    { title: 'Meta', component: 'ListViewComponent', isExpanded: true },
    { title: 'Publish', component: 'ListViewComponent', isExpanded: true },
    { title: 'Problems', component: 'ListViewComponent', isExpanded: true }
]

export const FunctionalTabs: ITab[] = [
    { id: 'preview', text: 'Preview', focused: true, component: 'PreviewComponent', attachedConfig: {} },
    { id: 'deploy', text: 'Deploy', focused: false, component: 'DeployComponent', attachedConfig: {} }
]