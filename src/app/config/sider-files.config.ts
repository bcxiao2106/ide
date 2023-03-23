import { EditorType } from "../interfaces/enums";
import { ITreeNode } from "../interfaces/interfaces";
export const siderFilesTreeViewId: string = 'siderFilesTree';
export const SiderMenu: ITreeNode[] = [
    { id: 'root', text: '', viewId: siderFilesTreeViewId, children: ['001', '002', '003'], editorType: EditorType.none },
    { id: '001', text: 'Invoice-DG', viewId: siderFilesTreeViewId, children: ['1-01', '1-02'], editorType: EditorType.none },
    { id: '002', text: 'Order-DG', viewId: siderFilesTreeViewId, children: ['2-01'], editorType: EditorType.none },
    { id: '003', text: 'Contract-DG', viewId: siderFilesTreeViewId, children: ['3-01'], editorType: EditorType.none },
    { id: '1-01', text: 'Invoice.Entry.cs', viewId: siderFilesTreeViewId, editorType: EditorType.monaco },
    { id: '1-02', text: 'Invoice.Helpers.cs', viewId: siderFilesTreeViewId, editorType: EditorType.monaco },
    { id: '2-01', text: 'Order.Entry.cs', viewId: siderFilesTreeViewId, editorType: EditorType.monaco },
    { id: '3-01', text: 'Contract.Entry.cs', viewId: siderFilesTreeViewId, editorType: EditorType.monaco }
];
