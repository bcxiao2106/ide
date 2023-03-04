import { ITreeNode } from "../interfaces/interfaces";

export const SiderMenu: ITreeNode[] = [
    { id: 'root', text: '', children: ['001', '002', '003', '004', '005', '006'] },
    { id: '001', text: 'Constants', children: ['1-01', '1-02', '1-03', '1-04', '1-05', '1-06', '1-07', '1-08', '1-09'] },
    { id: '002', text: 'Interfaces', children: ['2-01', '2-02', '2-03', '2-04', '2-05', '2-06', '2-07', '2-08', '2-09', '2-10'] },
    { id: '003', text: 'Utilities', children: ['3-01', '3-02', '3-03', '3-04', '3-05', '3-06', '3-07', '3-08', '3-09', '3-10'] },
    { id: '004', text: 'Constant.cs' },
    { id: '005', text: 'Enum.cs' },
    { id: '006', text: 'Lei.RfxPricesheetV2.Core.csproj' },
    { id: '1-01', text: 'AvlFieldConstant.cs' },
    { id: '1-02', text: 'ColumnConstants.cs' },
    { id: '1-03', text: 'ColumnsMapTo.cs' },
    { id: '1-04', text: 'DataRowsConstants.cs' },
    { id: '1-05', text: 'Enums.cs' },
    { id: '1-06', text: 'FieldConstants.cs' },
    { id: '1-07', text: 'PricesheetConstants.cs' },
    { id: '1-08', text: 'QueryConstants.cs' },
    { id: '1-09', text: 'UrlConstants.cs' },
    { id: '2-01', text: 'IColumnService.cs' },
    { id: '2-02', text: 'ICommonService.cs' },
    { id: '2-03', text: 'ICrossSheetService.cs' },
    { id: '2-04', text: 'IDataRowService.cs' },
    { id: '2-05', text: 'ILinkedPriceSheetService.cs' },
    { id: '2-06', text: 'IPriceSheetService.cs' },
    { id: '2-07', text: 'IPricesheetEvaluationService.cs' },
    { id: '2-08', text: 'IPricesheetPublishService.cs' },
    { id: '2-09', text: 'ISupplierResponseService.cs' },
    { id: '2-10', text: 'IWorkbenchService.cs' },
    { id: '3-01', text: 'CommonUtilities.cs' },
    { id: '3-02', text: 'DatarowExtension.cs' },
    { id: '3-03', text: 'DefaultDataRows.cs' },
    { id: '3-04', text: 'DefaultEventColumns.cs' },
    { id: '3-05', text: 'DefaultResponseColumns.cs' },
    { id: '3-06', text: 'PriceSheetSummaryDefaultColumns.cs' },
    { id: '3-07', text: 'PricesheetDefaultColumns.cs' },
    { id: '3-08', text: 'IPricesheetPublishService.cs' },
    { id: '3-09', text: 'PricesheetDefaultModels.cs' },
    { id: '3-10', text: 'ResponseSummaryDefaultColumns.cs' },
];