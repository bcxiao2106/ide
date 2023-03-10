import { ITreeNode } from "../interfaces/interfaces";
export const siderFilesTreeViewId: string = 'siderFilesTree';
export const SiderMenu: ITreeNode[] = [
    { id: 'root', text: '', viewId: siderFilesTreeViewId, children: ['001', '002', '003'] },
    { id: '001', text: 'Invoice-DG', viewId: siderFilesTreeViewId, children: ['1-01', '1-02'] },
    { id: '002', text: 'Order-DG', viewId: siderFilesTreeViewId, children: ['2-01'] },
    { id: '003', text: 'Contract-DG', viewId: siderFilesTreeViewId, children: ['3-01'] },
    { id: '1-01', text: 'Invoice.Entry.cs', viewId: siderFilesTreeViewId },
    { id: '1-02', text: 'Invoice.Helpers.cs', viewId: siderFilesTreeViewId },
    { id: '2-01', text: 'Order.Entry.cs', viewId: siderFilesTreeViewId },
    { id: '3-01', text: 'Contract.Entry.cs', viewId: siderFilesTreeViewId }
];