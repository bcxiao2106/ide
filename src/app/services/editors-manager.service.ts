import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { IEditorTab, ITreeNode } from "../interfaces/interfaces";

@Injectable()
export class EditorsManagerService {
    private groupId: number = 0;
    public activeGroup: number = 0;
    private map: Map<number, IEditorTab[]>;
    private subject: Subject<number>;
    public change$: Observable<number>;

    constructor() {
        this.map = new Map<number, IEditorTab[]>();
        this.subject = new Subject()
        this.change$ = this.subject.asObservable();
        this.addGroup();
    }

    open(node: ITreeNode) {
        let tabs: IEditorTab[] | undefined = this.map.get(this.activeGroup);
        (!tabs?.find(tab => tab.id == node.id)) && tabs?.push({
            id: node.id,
            text: node.text,
            group: this.activeGroup,
            attachedConfig: getEditorConfig()
        });
        this.setFocus(node.id, tabs!);
        this.map.set(this.activeGroup, tabs!);
        this.subject.next(this.activeGroup);
    }

    activate(id: string) {

    }

    remove(id: string) {
        let tabs: IEditorTab[] | undefined = this.map.get(this.activeGroup);
        let index: number | undefined = tabs?.findIndex(tab => tab.id == id);
        if(index) tabs = tabs?.splice(index, 1);
        this.map.set(this.activeGroup, tabs!);
    }

    addGroup() {
        if (this.groupId == 2) return;
        this.activeGroup = this.groupId;
        this.groupId++;
        this.map.set(this.activeGroup, []);

    }

    get(groupId: number): IEditorTab[] | undefined {
        return this.map.get(groupId);
    }

    setFocus(id: string, tabs: IEditorTab[]) {
        tabs.forEach(tab=> {
            tab.focused = tab.id == id;
        });
    }
}

export function getEditorConfig(): any {
    return {
        options: {
          theme: 'vs-dark',
          language: 'typescript',
          readOnly: false
        },
        code: CODE
      }
}
export const CODE: string = `namespace Leo.RFxPricesheetV2.Core.Utilities
{
    using Leo.RFxCommonV2.Constants;
    using Leo.RFxCommonV2.Enumerators;
    using Leo.RFxCommonV2.Extensions;
    using Newtonsoft.Json.Linq;
    using System;
    using System.Collections.Generic;
    using System.Diagnostics.CodeAnalysis;
    using System.Linq;
    using System.Text.RegularExpressions;

    /// <summary>
    /// 
    /// </summary>
    [ExcludeFromCodeCoverage]
    public static class CommonUtility
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="VirtualId"></param>
        /// <returns></returns>
        public static int GetVirtualIdNum(string VirtualId)
        {
            VirtualId = VirtualId.Substring(1);
            return Convert.ToInt32(VirtualId);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="lstPriceSheetColumns"></param>
        /// <returns></returns>
        public static int GeMaxVirtualId(IEnumerable<JToken> lstPriceSheetColumns)
        {
            int numVirtualId = 0;
            string strRegex = @"^v[0-9]+";
            Regex re = new Regex(strRegex, RegexOptions.IgnoreCase);
            numVirtualId = lstPriceSheetColumns.Where(c => re.Match(c.TextValue(FieldNames.virtualId)).Success).Max(z => int.Parse(z.TextValue(FieldNames.virtualId).Replace("v", "")));
            return numVirtualId;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="exisingVirtualIds"></param>
        /// <returns></returns>
        public static int GetMaxPricesheetVirtualId(List<string> exisingVirtualIds)
        {
            var numVirtualId = 0;
            if(exisingVirtualIds==null || !exisingVirtualIds.Any())
            {
                return ++numVirtualId;
            }
            var strRegex = @"^p[0-9]+";
            var re = new Regex(strRegex, RegexOptions.IgnoreCase);
            var tempResult = exisingVirtualIds.Where(p => re.Match(p).Success);
            if (tempResult.Any())
            {
                numVirtualId = tempResult.Max(p => int.Parse(p.Replace("p", "")));
            }
            return ++numVirtualId;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public static Dictionary<string, dynamic> GetSectionLevelActionMenu()
        {
            return new Dictionary<string, dynamic>() {
                //{ "addItemFromItemMaster", true },
                { "acceptableSuppliers", true },
                { "createPricesheet", true },
                { "copyPricesheet", true },
                { "downloadPricesheet", true },
                { "downloadAnalyzeViewPricesheet", true },
                { "deletePricesheet", true },
                { "done", true },
                { "editPricesheet", true },
                { "enableSupplierAddRow", true },
                { "evaluatePricesheet", true },
                //{ "enableItemLevelMulticurrency", true },
                //{ "isAnalyzeView", true },
                { "importPricesheetFromRepository", true },
                { "heading", true },
                //{ "linkPriceSheets", true },
                { "manageDataSource", true },
                { "manageColumns", true },
                { "manageSubtotal", true },
                { "priceSheetIds", true },
                { "pushPricesheetToRepository", true },
                { "revisionCycle", true },
                { "rearrangePricesheet", true },
                { "submitResponse", true },
                { "saveAsTemplate", true },
                { "savePricesheet", true },
                //{ "submitRevisedResponses", true },
                { "uploadPricesheet", true },
                { "viewManageColumnsPopup", true },
                { "viewManageSubtotalsPopup", true },
            };
        }

        /// <summary>
        /// Get virtualIds for columns visible to supplier
        /// </summary>
        /// <param name="columns"></param>
        /// <param name="isVisibleToSupplier"></param>
        /// <returns></returns>
        public static IEnumerable<string> GetVirtualIds(IEnumerable<JToken> columns, bool? isVisibleToSupplier)
        {
            if(isVisibleToSupplier != null)
            {
                columns = columns.Where(c => c.Equals(FieldNames.isVisibleToSupplier, isVisibleToSupplier.Value));
            }
            var virtualIds = columns.Select(c => c.TextValue(FieldNames.virtualId));

            return virtualIds;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="priceSheet"></param>
        /// <returns></returns>
        public static IEnumerable<string> GetVirtualIdsForPricesheet(JToken priceSheet/*, bool? isVisibleToSupplier*/)
        {
            var columns = priceSheet[FieldNames.columns] as IList<JToken>;
            var virtualIds = GetVirtualIds(columns, true)
                                .ToList();
            priceSheet.ForEach(FieldNames.linkedPriceSheetInfo, lp => 
                {
                    var pricesheetVirtualId = lp.TextValue(FieldNames.priceSheetVirtualId);
                    lp.ForEach(FieldNames.crossSheetColumns, c =>
                    {
                        var columnVirtualId = c.TextValue(FieldNames.virtualId);
                        virtualIds.Add($"{pricesheetVirtualId}{columnVirtualId}");
                    });
                });

            var linkedPriceSheetTokens = priceSheet.SelectToken(FieldNames.linkedPriceSheetInfo);

            if (priceSheet.SelectToken(FieldNames.linkedPriceSheetInfo).HasItems())
            {
                var crossSheetColumnIds = priceSheet.SelectToken(FieldNames.linkedPriceSheetInfo)
                    .Select(sheet => sheet.SelectToken(FieldNames.crossSheetColumns)
                    .Select(column => $"{sheet.TextValue(FieldNames.priceSheetVirtualId)}{column.TextValue(FieldNames.virtualId)}"))
                    .SelectMany(id => id);

                /*var crossSheetIds = crossSheetColumnIds
                    .Where(id => columns.Exists(column => column.BoolValue(FieldNames.isVisibleToSupplier)
                                            && column.TextValue(FieldNames.type) == ColumnTypes.COMPUTED
                                            && column.SelectToken(FieldNames.settings).SelectToken(FieldNames.formulaBuffer).Contains(id))
                    );*/
                //virtualIds = virtualIds.Concat(crossSheetIds);
            }

            return virtualIds;
        }

        /// <summary>
        /// Get supplier from list of supplier by partner code
        /// </summary>
        /// <param name="documentRules"></param>
        /// <param name="partnerCode"></param>
        /// <returns></returns>
        public static JToken GetSupplierByPartnerCodeFromDocumentRules(JToken documentRules, long partnerCode)
        {
            var suppliers = documentRules.SelectToken(FieldNames.suppliers) as JArray;
            var supplier = GetSupplierByPartnerCode(suppliers, partnerCode);
            return supplier;
        }

        /// <summary>
        /// Get supplier from list of supplier by partner code
        /// </summary>
        /// <param name="suppliers"></param>
        /// <param name="partnerCode"></param>
        /// <returns></returns>
        public static JToken GetSupplierByPartnerCode(JArray suppliers, long partnerCode)
        {
            var supplier = suppliers.FirstOrDefault(sc => sc.LongValue(FieldNames.partnerCode) == partnerCode);
            return supplier;
        }

        /// <summary>
        /// Get supplier from list of supplier by partner code
        /// </summary>
        /// <param name="dependentColumns"></param>
        /// <param name="columnVirtualId"></param>
        /// <returns></returns>
        public static JToken GetcolumnVirtualIdByPartnerCode(JArray dependentColumns, string columnVirtualId)
        {
            var supplier = dependentColumns.FirstOrDefault(sc => sc.TextValue(FieldNames.columnVirtualId) == columnVirtualId);
            return supplier;
        }

        /// <summary>
        /// Filter out the assigned pricesheets for supplier
        /// </summary>
        /// <param name="pricesheets"></param>
        /// <param name="supplier"></param>
        /// <returns></returns>
        public static IEnumerable<JToken> GetSupplierPricesheets(JArray pricesheets, JToken supplier)
        {
            var supplierPricesheetAssignments = supplier.SelectToken(FieldNames.pricesheetsAssignments) as JArray;
            if (supplierPricesheetAssignments == null || !supplierPricesheetAssignments.HasItems()) return new List<JToken>();

            supplierPricesheetAssignments.ForEach(spa => {
                if (string.IsNullOrEmpty(spa.TextValue(FieldNames.currency)))
                    spa.Remove();
            });
            var supplierPricesheets = pricesheets.Where(e => supplierPricesheetAssignments.Any(sc => sc.TextValue(FieldNames.pricesheetId) == e.TextValue(DocumentConstants._id)));
            return supplierPricesheets;
        }

        /// <summary>
        /// Get the pricesheet assignment token for supplier by pricesheet id
        /// </summary>
        /// <param name="supplier"></param>
        /// <param name="priceSheetId"></param>
        /// <returns></returns>
        public static JToken GetPricesheetAssignmentByPricesheetId(JToken supplier, string priceSheetId)
        {
            var supplierPricesheetAssignment = supplier.FirstOrDefault(
                FieldNames.pricesheetsAssignments,
                spa => spa.TextValue(FieldNames.pricesheetId) == priceSheetId
            );

            return supplierPricesheetAssignment;
        }

        /// <summary>
        /// Get suppliers with given pricesheet assignment
        /// </summary>
        /// <param name="suppliers"></param>
        /// <param name="priceSheetId"></param>
        /// <returns></returns>
        public static IEnumerable<JToken> GetSupplierWithPricesheetAssignment(IEnumerable<JToken> suppliers, string priceSheetId)
        {
            List<JToken> assignedSuppliers = new List<JToken>();
            foreach (var supplier in suppliers)
            {
                var priceSheetAssignments = supplier.SelectToken("pricesheetsAssignments");

                if (priceSheetAssignments == null) continue; 

                var assignedPricesheet = priceSheetAssignments.FirstOrDefault(pa => pa.TextValue(FieldNames.pricesheetId) == priceSheetId);

                if (assignedPricesheet == null) continue;

                var currency = assignedPricesheet.TextValue(FieldNames.currency);

                if (string.IsNullOrEmpty(currency)) continue;

                assignedSuppliers.Add(supplier);
            }
            return assignedSuppliers;
        }

        /// <summary>
        /// Returns true if document has mentioned document timeline
        /// </summary>
        /// <param name="documentTimelines"></param>
        /// <param name="timelineType"></param>
        /// <returns></returns>
        public static JToken GetTimeline(JArray documentTimelines, TimelineType timelineType)
        {
            try
            {
                var timeline = documentTimelines.GetTimeline(timelineType);
                return timeline;
            }
            catch
            {
                return null;
            }
            
        }

    }
}`