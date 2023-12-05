//Analytics
//specs
//API
//new version
//no change on typings, for example
//figma changes -> html template?
//github editor changes -> new version -> release flow
export interface IComponent {
    name: string;
    description: string;
    external: IExternal;
    contributors: string[];
    latest: string;
    versions: Record<string, IComponentVersion>;
    requirements: IRequirement[];
}
export interface IComponentVersion {
    name: string;
    version: string;
    author: string;
    description: string;
    dependencies: ICompDepdency[];
    typings: IGit;
    preview: IPreview;
    visual: string;//Figma URL
    test: ItestCase[];
    graph: IGraph;
    accessibility: any;
}
export interface IExternal {
    git?: IGit;
    confluence?: string;
    figma?: string;
}
export interface IGit {
    repo: string;
    owner: string;
    path: string;
}
export interface ICompDepdency {
    name: string;
    version: string;
}
export interface IPreview {
    config: Object;
    dataModel: Object;
}
export interface ItestCase extends IPreview {
    order: number;
}
export interface IGraph {

}
export interface IRequirement {
    id: string;
    title: string;
    category: string;
    description: string;
    createdBy: string;
    timestamp: string;
    upvotes: number;
    downvotes: number;
    associatedTickets: string[];
    status: string;
    planned: boolean;
    plan: string;
}