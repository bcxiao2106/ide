export const CODE: any = {
    "004": `namespace Leo.RFxPricesheetV2.Core
    {
        using System.Diagnostics.CodeAnalysis;
    
        /// <summary>
        ///     The constants
        /// </summary>
        [ExcludeFromCodeCoverage] //Nothing to test here
        public static class Constant
        {
            /// <summary>
            /// RedisConnectionKeyFromTCS
            /// LogLevelKey
            /// </summary>
            public const string CacheConnectionConfigKey = "CacheConnection";
    
            /// <summary>
            /// TCS LogLevelKey
            /// </summary>
            public const string LogLevelConfigKey = "LogLevel";
    
    
            /// <summary>
            ///     Each "app" needs to have a unique value assigned for this in order to get configuration data
            ///     from the configuration service. 199 is the one for this template project, so it cannot be used in
            ///     a derivative project created for this template. Contact the NEXXE DB team
            ///     to reserve one for your app and put it here. It will not need to be configurable.
            /// </summary>
            public const string AppId = "702";
    
            /// <summary>
            /// Correlation ID in request headers
            /// </summary>
            public const string CorrelationId = "x-gep-transaction-scope-id";
    
            /// <summary>
            /// The following are constants related to logging default values. The values can be changed according to project needs
            /// </summary>
            public const string DefaultLogLovel = "ALL";
    
            /// <summary>
            /// DefaultBuyerPartnercode
            /// </summary>
            public const int DefaultBuyerPartnerCode = 111111111;
    
            /// <summary>
            /// DefaultContact Code
            /// </summary>
            public const int DefaultContactCode = 1111111;
    
            /// <summary>
            /// Claim for BPC
            /// </summary>
            public const string ClaimTypeBuyerPartnerCode = "http://www.gep.com/c/15";
    
            /// <summary>
            /// Claim for Contact code
            /// </summary>
            public const string ClaimTypeContactCode = "http://www.gep.com/c/4";
    
            /// <summary>
            /// Pusher Cluster
            /// </summary>
            public const string PusherClusterConfigKey = "LeoPusherCluster";
    
            /// <summary>
            /// Pusher App Key
            /// </summary>
            public const string PusherApplicationConfigKey = "LeoPusherAppKey";
            /// <summary>
            /// Default Connection Key name
            /// </summary>
            public const string CacheConnection = "CacheConnection";
            /// <summary>
            /// Default Connection Value
            /// </summary>
            public const string DefaultConnection = "0";
            /// <summary>
            /// Separate Storage BPC List
            /// </summary>
            public const string SeparateStorageEnabledBpcs = "SeparateStorageEnabledBPCs";
        }
    }`, 
    "005": `

    namespace Leo.RFxPricesheetV2.Core
    {
        using System.Diagnostics.CodeAnalysis;
    
        /// <summary>
        /// 
        /// </summary>
        public enum ColumnSourceEnum
        {
            /// <summary>
            /// 
            /// </summary>
            PRICESHEET_COLUMN = 1,
            /// <summary>
            /// 
            /// </summary>
            ITEMMASTER_COLUMN = 2
        }
    
        /// <summary>
        /// 
        /// </summary>
        public enum DataRowSourceEnum
        {
            /// <summary>
            /// 
            /// </summary>
            PRICESHEET_ROW = 1,
            /// <summary>
            /// 
            /// </summary>
            ITEMMASTER_ROW = 2
        }
    }
    `, 
    "006": `<Project Sdk="Microsoft.NET.Sdk">
    <PropertyGroup>
      <TargetFramework>netcoreapp3.1</TargetFramework>
      <IsPackable>false</IsPackable>
      <GenerateDocumentationFile>true</GenerateDocumentationFile>
    </PropertyGroup>
    <PropertyGroup Condition="'$(Configuration)|$(Platform)'=='Debug|AnyCPU'">
      <TreatWarningsAsErrors>true</TreatWarningsAsErrors>
      <DebugType>embedded</DebugType>
      <DebugSymbols>true</DebugSymbols>
    </PropertyGroup>
    <PropertyGroup Condition="'$(Configuration)|$(Platform)'=='Release|AnyCPU'">
      <TreatWarningsAsErrors>true</TreatWarningsAsErrors>
      <DebugType>embedded</DebugType>
      <DebugSymbols>true</DebugSymbols>
    </PropertyGroup>
    <ItemGroup>
      <PackageReference Include="Leo.RFxCommonV2" Version="1.0.55" />
      <PackageReference Include="Leo.Storage.LogEnricher" Version="1.0.25" />
      <PackageReference Include="Newtonsoft.Json" Version="13.0.2" />
      <PackageReference Include="org.matheval" Version="1.0.0.3" />
    </ItemGroup>
  </Project>`, 
    "1-01": `using System;
    using System.Collections.Generic;
    using System.Diagnostics.CodeAnalysis;
    using System.Text;
    
    
    namespace Leo.RFxPricesheetV2.Core.Constants
    {
        /// <summary>
        /// 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class AvlFieldConstant
        {
            /// <summary>
            /// 
            /// </summary>
            public const string advancedFilters = "AdvancedFilters";
    
            /// <summary>
            /// 
            /// </summary>
            public const string from = "from:1";
    
            /// <summary>
            /// 
            /// </summary>
            public const string to = "to:100";
    
            /// <summary>
            /// 
            /// </summary>
            public const string sortField = "sortField:customerItemNumber|ASC";
    
            /// <summary>
            /// 
            /// </summary>
            public const string pageNumber = "PageNumber";
    
            /// <summary>
            /// 
            /// </summary>
            public const string pageSize = "PageSize";
    
            /// <summary>
            /// 
            /// </summary>
            public const string columnName = "ColumnName";
    
            /// <summary>
            /// 
            /// </summary>
            public const string customerItemNumber = "customerItemNumber";
    
            /// <summary>
            /// 
            /// </summary>
            public const string sortDirection = "SortDirection";
    
            /// <summary>
            /// 
            /// </summary>
            public const string sortDirectionAsc = "asc";
    
            /// <summary>
            /// 
            /// </summary>
            public const string sort = "Sort";
    
            /// <summary>
            /// 
            /// </summary>
            public const string filters = "Filters";
    
            /// <summary>
            /// 
            /// </summary>
            public const string search = "Search";
    
            /// <summary>
            /// 
            /// </summary>
            public const string or = "Or";
    
            /// <summary>
            /// 
            /// </summary>
            public const string isExact = "IsExact";
    
            /// <summary>
            /// 
            /// </summary>
            public const string key = "Key";
    
            /// <summary>
            /// 
            /// </summary>
            public const string values = "Values";
    
    
        }
    
        /// <summary>
        /// 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class CmdsCompositeKeysMapping
        {
            /// <summary>
            /// 
            /// </summary>
            public static readonly Dictionary<string, string> avlCompositeKeysFieldMapping = new Dictionary<string, string>()
            {
                { "ItemNumber", "customerItemNumber" },
                { "LOB", "customerLOB" },
                { "Revision" , "revision" },
                { "Version" , "itemVersion" },
                { "SourceSystem" , "sourceSystem" },
            };
    
            /// <summary>
            /// 
            /// </summary>
            public static readonly Dictionary<string, string> itemMasterCompositeKeysFieldMapping = new Dictionary<string, string>()
            {
                { "ItemNumber", "itemNumber" },
                { "LOB", "lobCode" },
                { "Revision" , "revision" },
                { "Version" , "itemVersion" },
                { "SourceSystem" , "sourceSystem" },
            };
        }
        /// <summary>
        /// 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class CMDSDataSourceConstants
        {
            /// <summary>
            /// 
            /// </summary>
            public const string itemMaster = "Item Master";
    
            /// <summary>
            /// 
            /// </summary>
            public const string itemAMPL = "Item AMPL";
        }
    }
    `, 
    "1-02": `namespace Leo.RFxPricesheetV2.Core.Constants
    {
        using Newtonsoft.Json.Linq;
        using System;
        using System.Collections.Generic;
        using System.Diagnostics.CodeAnalysis;
        using System.Text;
    
        /// <summary>
        /// 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class StandardColumnNames
        {
            /// <summary>
            /// 
            /// </summary>
            public static readonly string ItemName = "Item name";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string Role = "Role";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string ItemNmber = "Item number";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string Description = "Description";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string Volumn = "Volume";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string Unit = "Unit";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string BPPU = "Baseline price per unit";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string TotalBaselinePrice = "Total baseline price";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string PPU = "Price per unit";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string TotalPrice = "Total price";
    
            
        }
    
        /// <summary>
        /// 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class StandardMapToColumns
        {
            /// <summary>
            /// 
            /// </summary>
            public static readonly string ItemName = "Item name";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string Role = "Role";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string ItemNmber = "Item number";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string Description = "Description";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string Volumn = "Volume";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string Unit = "Unit";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string IntentToBid = "intent to Bid";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string BPPU = "Baseline price per unit";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string TotalBaselinePrice = "Total baseline price";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string PPU = "Price per unit";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string TotalPrice = "Total price";
        }
    
        /// <summary>
        /// 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class PriceSheetColumnNames
        {
            /// <summary>
            /// 
            /// </summary>
            public const string BaselinePricePerUnit = "Baseline price per unit";
            /// <summary>
            /// 
            /// </summary>
            public const string BaselineSpend = "Baseline Spend";
            /// <summary>
            /// 
            /// </summary>
            public const string BidType = "Bid Type";
            /// <summary>
            /// 
            /// </summary>
            public const string EvaluatorScore = "My Score";
            /// <summary>
            /// 
            /// </summary>
            public const string IntentToBid = "Intent to Bid";
            /// <summary>
            /// 
            /// </summary>
            public const string ItemByLineCoverage = "Item Coverage";
            /// <summary>
            /// 
            /// </summary>
            public const string ItemByLineCoveragePer = "Item Coverage %";
            /// <summary>
            /// 
            /// </summary>
            public const string NormalizedSavings = "Normalized Savings";
            /// <summary>
            /// 
            /// </summary>
            public const string NormalizedSavingsPer = "Normalized Savings %";
            /// <summary>
            /// 
            /// </summary>
            public const string NormalizedSupplierPrice = "Normalized Supplier Price";
            /// <summary>
            /// 
            /// </summary>
            public const string NormalizedSupplierPriceExcludingBaselineZero = "Normalized Supplier Price Excluding Baseline Zero";
            /// <summary>
            /// 
            /// </summary>
            public const string NormalizedTotalPrice = "Normalized Total Price";
            /// <summary>
            /// 
            /// </summary>
            public const string OverallScore = "Overall Score";
            /// <summary>
            /// 
            /// </summary>
            public const string PricePerUnit = "Price per unit";
            /// <summary>
            /// 
            /// </summary>
            public const string PriceSheetCurrency = "Price Sheet Currency";
            /// <summary>
            /// 
            /// </summary>
            public const string TotalPriceSheetScore = "Total Price Sheet Score";
            /// <summary>
            /// 
            /// </summary>
            public const string Savings = "Savings";
            /// <summary>
            /// 
            /// </summary>
            public const string SavingsPer = "Savings %";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierCurrency = "Currency";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierExchange = "Exchange Rate";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierId = "SupplierId";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierName = "Supplier Name";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierPrice = "Supplier Price";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierPriceExcludingBaselineZeroVirtualId = "supplierPriceExcludingBaselineZero";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierSpendCoverage = "Supplier Spend Coverage";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierSpendCoveragePer = "Supplier Spend Coverage%";
            /// <summary>
            /// 
            /// </summary>
            public const string TotalBaseLinePrice = "Total baseline price";
            /// <summary>
            /// 
            /// </summary>
            public const string TotalItemsByLines = "Total Items";
            /// <summary>
            /// 
            /// </summary>
            public const string TotalPrice = "Total price";
            /// <summary>
            /// 
            /// </summary>
            public const string Volume = "Volume";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierPriceExcludingBaselineZero = "Supplier Price Excluding Baseline Zero";
            /// <summary>
            /// 
            /// </summary>
            public const string ppuMin = "Minimum Price Per Unit";
            /// <summary>
            /// 
            /// </summary>
            public const string ppuMax = "Maximum Price Per Unit";
            /// <summary>
            /// 
            /// </summary>
            public const string ppuAvg = "Average Price Per Unit";
            /// <summary>
            /// 
            /// </summary>
            public const string linkedToLine = "Linked To Line";
            /// <summary>
            /// 
            /// </summary>
            public const string preStgLineNo = "Previous Stage Line Number";
            /// <summary>
            /// 
            /// </summary>
            public const string currenttgLineNo = "Current Stage Line Number";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierQuotingCurrency = "Quoting Currency";
            /// <summary>
            /// 
            /// </summary>
            public const string MyEvaluationStatus = "My Evaluation";
            /// <summary>
            /// 
            /// </summary>
            public const string MyTechnicalScore = "My Technical Evaluation";
            /// <summary>
            /// 
            /// </summary>
            public const string MyCommercialScore = "My Commercial Evaluation";
            /// <summary>
            /// 
            /// </summary>
            public const string ItemStatus = "Item Status";
    
            /// <summary>
            /// 
            /// </summary>
            public static readonly string ItemMaster = "Item Master";
        }
    
        /// <summary>
        /// Additional Column Names for PriceSheet.ResponseColumns. 
        /// Use PriceSheetColumnNames for names you do not find here.
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class PriceSheetResponseColumnNames
        {
            /// <summary>
            /// 
            /// </summary>
            public const string Currency = "Currency";
            /// <summary>
            /// 
            /// </summary>
            public const string Exchange = "Exchange";
            /// <summary>
            /// 
            /// </summary>
            public const string MyScore = "My Score";
            /// <summary>
            /// 
            /// </summary>
            public const string PriceSheetName = "Price Sheet Name";
            /// <summary>
            /// 
            /// </summary>
            public const string PriceSheetWeight = "Price Sheet Weight";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierId = "SupplierId";
            /// <summary>
            /// 
            /// </summary>
            public const string MyEvaluation = "My Evaluation";
        }
    
        /// <summary>
        /// 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class EventResponseColumnNames
        {
            /// <summary>
            /// 
            /// </summary>
            public const string EventScore = "Event Score";
            /// <summary>
            /// 
            /// </summary>
            public const string OverallQuestionnaireScore = "Overall Questionnaire Score";
            /// <summary>
            /// 
            /// </summary>
            public const string OverallPriceSheetScore = "Overall Price sheet score";
            /// <summary>
            /// 
            /// </summary>
            public const string EventCurrency = "Event Currency";
            /// <summary>
            /// 
            /// </summary>
            public const string BaselineSpend = "Baseline Spend";
            /// <summary>
            /// 
            /// </summary>
            public const string Savings = "Savings";
            /// <summary>
            /// 
            /// </summary>
            public const string SavingsPer = "Savings %";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierId = "SupplierId";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierLineCoveragePer = "Supplier Line Coverage%";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierName = "Supplier Name";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierPrice = "Supplier Price";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierPriceExcludingBaselineZero = "Supplier Price Excluding Baseline Zero";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierSpendCoverage = "Supplier Spend Coverage";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierSpendCoveragePer = "Supplier Spend Coverage%";
            /// <summary>
            /// 
            /// </summary>
            public const string ShortlistedForCommercial = "Shortlisted For Commercial";
        }
    
        /// <summary>
        /// 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class PriceSheetLocaleKeys
        {
            /// <summary>
            /// 
            /// </summary>
            public const string BaseLineSpend = "SRCG_RFX_COLUMN_BaseLineSpend";
            /// <summary>
            /// 
            /// </summary>
            public const string ItemCoverage = "SRCG_RFX_COLUMN_ItemCoverage";
            /// <summary>
            /// 
            /// </summary>
            public const string ItemCoveragePer = "SRCG_RFX_COLUMN_ItemCoveragePer";
            /// <summary>
            /// 
            /// </summary>
            public const string Overallscore = "SRCG_RFX_COLUMN_Overallscore";
            /// <summary>
            /// 
            /// </summary>
            public const string PriceSheetCurrency = "SRCG_RFX_COLUMN_PriceSheetCurrency";
            /// <summary>
            /// 
            /// </summary>
            public const string TotalPriceSheetScore = "SRCG_RFX_COLUMN_TotalPriceSheetScore";
            /// <summary>
            /// 
            /// </summary>
            public const string Savings = "SRCG_RFX_COLUMN_Savings";
            /// <summary>
            /// 
            /// </summary>
            public const string SavingsPer = "SRCG_RFX_COLUMN_SavingsPer";
            /// <summary>
            /// 
            /// </summary>
            public const string SupId = "SRCG_RFX_COLUMN_SupId";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierName = "SRCG_RFX_COLUMN_SupplierName";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierPrice = "SRCG_RFX_COLUMN_SupplierPrice";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierSpendCoverage = "SRCG_RFX_COLUMN_SupplierSpendCoverage";
            /// <summary>
            /// 
            /// </summary>
            public const string SupplierSpendCoveragePer = "SRCG_RFX_COLUMN_SupplierSpendCoveragePer";
            /// <summary>
            /// 
            /// </summary>
            public const string TotalItems = "SRCG_RFX_COLUMN_TotalItems";
        }
    
        /// <summary>
        /// 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class SheetTypeConstant
        {
            /// <summary>
            /// 
            /// </summary>
            public const string MATERIAL = "Material";
            /// <summary>
            /// 
            /// </summary>
            public const string SERVICE = "Service";
        }
        /// <summary>
        /// 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class ColumnMap
        {
            /// <summary>
            /// 
            /// </summary>
            public static JObject BaselineSpend { 
                get { 
                        return new JObject() 
                        { 
                            new JProperty("name", "Baseline Spend"),
                            new JProperty("virtualId", "v6"),
                        };
                } 
            }
        }
    
        /// <summary>
        /// My Evaluation Status
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class MyEvaluationStatus
        {
            /// <summary>
            /// Accceptable
            /// </summary>
            public static readonly string Accceptable = "Acceptable";
    
            /// <summary>
            /// NonAccceptable
            /// </summary>
            public static readonly string NonAccceptable = "Non Acceptable";
        }
    }
    `, 
    "1-03": `namespace Leo.RFxPricesheetV2.Core.Constants
    {
        using Leo.RFxCommonV2.Constants;
        using Newtonsoft.Json.Linq;
        using System;
        using System.Collections.Generic;
        using System.Diagnostics.CodeAnalysis;
        using System.Text;
    
        /// <summary>
        /// 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class ColumsMapTo
        {
            /// <summary>
            /// 
            /// </summary>
            /// <returns></returns>
            public static List<JObject> GetTextMapToColumn()
            {
                return new List<JObject>()
                {
                    MapToColumn("None"),
                    MapToColumn("Item Name"),
                    MapToColumn("Item Number")
    
                 };
            }
    
            /// <summary>
            /// 
            /// </summary>
            /// <returns></returns>
            public static List<JObject> GetNumericMapToColumns()
            {
                return new List<JObject>()
                {
                    MapToColumn("None"),
                    MapToColumn("Volume")
                 };
            }
    
            /// <summary>
            /// 
            /// </summary>
            /// <returns></returns>
            public static List<JObject> GetDropDownMapToColumns()
            {
                return new List<JObject>()
                {
                    MapToColumn("None"),
                    MapToColumn("Unit"),
                    MapToColumn("Incumbent Suppliers", "SRCG_Rfx_BO_Incumbent"),
                    MapToColumn("Approved Suppliers", "SRCG_Rfx_BO_Approved"),
                    MapToColumn("Preferred Suppliers", "UnSRCG_Rfx_BO_Preferredit"),
                    MapToColumn("Suppliers")
                 };
            }
    
            /// <summary>
            /// 
            /// </summary>
            /// <returns></returns>
            public static List<JObject> GetComputedMapToColumns()
            {
                return new List<JObject>()
                {
                    MapToColumn("None"),
                    MapToColumn("Total Baseline Price"),
                     MapToColumn("Total Price")
                 };
            }
    
            /// <summary>
            /// 
            /// </summary>
            /// <returns></returns>
            public static List<JObject> GetCurrencyMapToColumns()
            {
                return new List<JObject>()
                {
                    MapToColumn("None"),
                    MapToColumn("Baseline Price Per Unit"),
                    MapToColumn("Price Per Unit")
                 };
            }
    
            /// <summary>
            /// 
            /// </summary>
            /// <returns></returns>
            public static List<JObject> GetDefaultMapToColumns()
            {
                return new List<JObject>()
                {
                    MapToColumn("None")
                 };
            }
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="common"></param>
            /// <param name="localeKey"></param>
            /// <returns></returns>
            public static JObject MapToColumn(string common, string localeKey = null)
            {
                var mapToColumn = new JObject()
                    {
                        { FieldNames.title, common },
                        {  FieldConstants.value, common },
                        {  FieldConstants.localeKey, localeKey ?? common }
                    };
    
                return mapToColumn;
            }
        }
    }
    `, 
    "1-04": `namespace Leo.RFxPricesheetV2.Core.Constants
    {
        using System;
        using System.Collections.Generic;
        using System.Diagnostics.CodeAnalysis;
    
        /// <summary>
        /// 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class DataRowsConstants
        {
            /// <summary>
            /// 
            /// </summary>
            public static readonly int DefaultDataRows = 50;
            /// <summary>
            /// 
            /// </summary>
            public static readonly string SupplierTotalPriceWithExchange = "supplierExchangeTotalPrice";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string ITEM_MDM_UNIQUE_ID = "itemMDMUniqueId";
    
        }
    
        /// <summary>
        /// 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class DataRowTypes
        {
            /// <summary>
            /// 
            /// </summary>
            public static readonly int BuyerDataRows = 1;
            /// <summary>
            /// 
            /// </summary>
            public static readonly int SupplierRows = 2;
            /// <summary>
            /// 
            /// </summary>
            public static readonly int SupplierSummaryRow = 3;
            /// <summary>
            /// 
            /// </summary>
            public static readonly int EventSummaryRow = 4;
        }
    }
    `, 
    "1-05": `namespace Leo.RFxPricesheetV2.Core.Constants
    {
        using System;
        using System.Collections.Generic;
        using System.ComponentModel;
        using System.Text;
    
        /// <summary>
        /// 
        /// </summary>
        public enum ExternalFlipType
        {
            /// <summary>
            /// 
            /// </summary>
            None = 0,
            /// <summary>
            /// 
            /// </summary>
            Project = 1,
            /// <summary>
            /// 
            /// </summary>
            ItemMaster = 2,
            /// <summary>
            /// 
            /// </summary>
            Contract = 3
        }
    
        /// <summary>
        /// 
        /// </summary>
        public enum PricesheetSourceType
        {
            /// <summary>
            /// 
            /// </summary>
            [Description("None")]
            None = 0,
            /// <summary>
            /// 
            /// </summary>
            [Description("Inbound")]
            Inbound = 1,
            /// <summary>
            /// 
            /// </summary>
            [Description("Outbound")]
            Outbound = 2
        }
    }
    `, 
    "1-06": `namespace Leo.RFxPricesheetV2.Core.Constants
    {
        using Leo.RFxCommonV2.Constants;
        using System;
        using System.Collections.Generic;
        using System.Diagnostics.CodeAnalysis;
        using System.Text;
    
        /// <summary>
        /// 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public class FieldConstants
        {
            #region FactSheetViewModel
    
            /// <summary>
            /// 
            /// </summary>
            public const string responseSummary = "responseSummary";
            /// <summary>
            /// 
            /// </summary>
            public const string pricesheetSummary = "pricesheetSummary";
            /// <summary>
            /// 
            /// </summary>
            public const string pricesheetDetails = "pricesheetDetails";
    
            #endregion
    
            /// <summary>
            /// 
            /// </summary>
            public const string isSupplierCurrencyView = "isSupplierCurrencyView";
            /// <summary>
            /// 
            /// </summary>
            public const string isSupplierCurrencyViewVisible = "isSupplierCurrencyViewVisible";
            /// <summary>
            /// 
            /// </summary>
            public const string documentSourceType = "documentSourceType";
    
            #region ColumnsTypeChangedViewModel
    
            /// <summary>
            /// 
            /// </summary>
            public const string changedColType = "changedColType";
            /// <summary>
            /// 
            /// </summary>
            public const string mode = "mode";
            /// <summary>
            /// 
            /// </summary>
            public const string delColumns = "delColumns";
    
            #endregion
    
            #region ColumnsTypeChanged
    
            /// <summary>
            /// 
            /// </summary>
            public const string columnType = "columnType";
            /// <summary>
            /// 
            /// </summary>
            public const string forceUpdate = "forceUpdate";
            /// <summary>
            /// 
            /// </summary>
            public const string old = "old";
            /// <summary>
            /// 
            /// </summary>
            public const string New = "new";
    
            #endregion
    
            
            /// <summary>
            /// 
            /// </summary>
            public const string value = "value";
            /// <summary>
            /// 
            /// </summary>
            public const string pricesheetColumns = "pricesheetColumns";
            /// <summary>
            /// 
            /// </summary>
            public const string selectedRowHierarchy = "selectedRowHierarchy";
            /// <summary>
            /// 
            /// </summary>
            public const string selectedRowId = "selectedRowId";
            /// <summary>
            /// 
            /// </summary>
            public const string selectedRowSequence = "selectedRowSequence";
            /// <summary>
            /// 
            /// </summary>
            public const string isViewFeedback = "isViewFeedback";
            /// <summary>
            /// 
            /// </summary>
            public const string dir_title = "dir_title";
            
            /// <summary>
            /// 
            /// </summary>
            public const string supplierDataRows = "supplierDataRows";
            /// <summary>
            /// 
            /// </summary>
            public const string _schemaver = "_schemaver";
            /// <summary>
            /// 
            /// </summary>
            public const string location = "location";
            /// <summary>
            /// 
            /// </summary>
            public const string bpc = "bpc";
            /// <summary>
            /// 
            /// </summary>
            public const string sourceColumnMapping = "sourceColumnMapping";
    
            /// <summary>
            /// 
            /// </summary>
            public const string rowType = "rowType";
            /// <summary>
            /// 
            /// </summary>
            public const string referenceRow = "referenceRow";
            /// <summary>
            /// 
            /// </summary>
            public const string s_id = "s_id";
            /// <summary>
            /// 
            /// </summary>
            public const string s_name = "s_name";
            /// <summary>
            /// 
            /// </summary>
            public const string columnValues = "columnValues";
            /// <summary>
            /// 
            /// </summary>
            public const string s_pstatus = "s_pstatus";
            /// <summary>
            /// 
            /// </summary>
            public const string formattingData = "formattingData";
            /// <summary>
            /// 
            /// </summary>
            public const string currentStageLineNumber = "currentStageLineNumber";
            /// <summary>
            /// 
            /// </summary>
            public const string previousStageLineNumber = "previousStageLineNumber";
            /// <summary>
            /// 
            /// </summary>
            public const string linkedToLine = "linkedToLine";
            
            /// <summary>
            /// 
            /// </summary>
            public const string rowHierarchy = "rowHierarchy";
            /// <summary>
            /// 
            /// </summary>
            public const string linkedMasterRowId = "linkedMasterRowId";
            /// <summary>
            /// 
            /// </summary>
            public const string s_currency = "s_currency";
            /// <summary>
            /// 
            /// </summary>
            public const string s_quotingCurrency = "s_quotingCurrency";
            /// <summary>
            /// 
            /// </summary>
            public const string s_exchange = "s_exchange";
            /// <summary>
            /// 
            /// </summary>
            public const string S_pstatus = "s_pstatus";
    
            /// <summary>
            /// 
            /// </summary>
            public const string rowSource = "rowSource";
            /// <summary>
            /// 
            /// </summary>
            public const string timeStamp = "timeStamp";
            /// <summary>
            /// 
            /// </summary>
            public const string isPSResponsesFlipped = "isPSResponsesFlipped";
            /// <summary>
            /// 
            /// </summary>
            public const string supplierProfileStatus = "supplierProfileStatus";
            /// <summary>
            /// 
            /// </summary>
            public const string feedbackSettings = "feedbackSettings";
            /// <summary>
            /// 
            /// </summary>
            public const string evaluatorMapping = "evaluatorMapping";
            /// <summary>
            /// 
            /// </summary>
            public const string localeKey = "localeKey";
            /// <summary>
            /// 
            /// </summary>
            public const string multiRoundColId = "multiRoundColId";
            /// <summary>
            /// 
            /// </summary>
            public const string columnSource = "columnSource";
            /// <summary>
            /// 
            /// </summary>
            public const string isNewColumn = "isNewColumn";
            /// <summary>
            /// 
            /// </summary>
            public const string formatting = "formatting";
            /// <summary>
            /// 
            /// </summary>
            public const string evaluatorId = "evaluatorId";
            /// <summary>
            /// 
            /// </summary>
            public const string evaluatorName = "evaluatorName";
            /// <summary>
            /// 
            /// </summary>
            public const string isEvaluatorColumn = "isEvaluatorColumn";
            /// <summary>
            /// 
            /// </summary>
            public const string visible = "visible";
            /// <summary>
            /// 
            /// </summary>
            public const string feedbackColumnType = "feedbackColumnType";
            /// <summary>
            /// 
            /// </summary>
            public const string isPostBidColumnEnabled = "isPostBidColumnEnabled";
            /// <summary>
            /// 
            /// </summary>
            public const string isPostBidColumn = "isPostBidColumn";
            /// <summary>
            /// 
            /// </summary>
            public const string evaluationType = "evaluationType";
            /// <summary>
            /// 
            /// </summary>
            public const string isEvaluationTypeEnabled = "isEvaluationTypeEnabled";
            /// <summary>
            /// 
            /// </summary>
            public const string priceSheetName = "priceSheetName";
            /// <summary>
            /// 
            /// </summary>
            public const string taggedCells = "taggedCells";
            /// <summary>
            /// 
            /// </summary>
            public const string action = "action";
            /// <summary>
            /// 
            /// </summary>
            public const string totalRows = "totalRows";
            /// <summary>
            /// 
            /// </summary>
            public const string cards = "cards";
            /// <summary>
            /// 
            /// </summary>
            public const string pricesheet = "pricesheet";
            /// <summary>
            /// 
            /// </summary>
            public const string actionMenu = "actions";
            /// <summary>
            /// 
            /// </summary>
            public const string allSheets = "allSheets";
            /// <summary>
            /// 
            /// </summary>
            public const string isSubmitted = "IsSubmitted";
            /// <summary>
            /// 
            /// </summary>
            public const string linked_contractNumber = "linked_contractNumber";
            /// <summary>
            /// 
            /// </summary>
            public const string linked_contractLink = "linked_contractLink";
            /// <summary>
            /// 
            /// </summary>
            public const string linked_contractDocCode = "linked_contractDocCode";
    
            /*
             * SourcingUpdateRequest
             */
            /// <summary>
            /// 
            /// </summary>
            public const string sourcingRequestDocumentId = "sourcingRequestDocumentId";
            /// <summary>
            /// 
            /// </summary>
            public const string sourcingRequestItemId = "sourcingRequestItemId";
            /// <summary>
            /// 
            /// </summary>
            public const string sourcingDocumentId = "sourcingDocumentId";
            /// <summary>
            /// 
            /// </summary>
            public const string sourcingDataRowId = "sourcingDataRowId";
            /// <summary>
            /// 
            /// </summary>
            public const string isSynced = "isSynced";
    
            /// <summary>
            /// 
            /// </summary>
            public const string itemMasterRecords = "itemMasterRecords";
    
            /// <summary>
            /// 
            /// </summary>
            public const string columnName = "columnName";
    
            /// <summary>
            /// 
            /// </summary>
            public const string field = "field";
    
            /// <summary>
            /// 
            /// </summary>
            public const string manageDataSourceVirtualId = "imdsv1";
    
            /// <summary>
            /// 
            /// </summary>
            public const string isSuccess = "isSuccess";
    
            /// <summary>
            /// 
            /// </summary>
            public const string returnValue = "returnValue";
    
            /// <summary>
            /// 
            /// </summary>
            public const string masterRecords = "masterRecords";
    
            /// <summary>
            /// 
            /// </summary>
            public const string none = "None";
    
            /// <summary>
            /// 
            /// </summary>
            public const string gepId = "gepId";
    
            /// <summary>
            /// 
            /// </summary>
            public const string avlSuppliers = "avlSuppliers";
    
            /// <summary>
            /// 
            /// </summary>
            public const string dataSource = "dataSource";
            
             /// <summary>
            /// 
            /// </summary>
            public const string cmdsCompositeKeyData = "cmdsCompositeKeyData";
        }
    
        /// <summary>
        /// Field constants for view models
        /// </summary>
        [ExcludeFromCodeCoverage]
        public class ViewModelConstants
        {
            /// <summary>
            /// 
            /// </summary>
            public const string id = "id";
            /// <summary>
            /// 
            /// </summary>
            public const string value = "value";
            /// <summary>
            /// 
            /// </summary>
            public const string priceSheetType = "priceSheetType";
            /// <summary>
            /// 
            /// </summary>
            public const string projectType = "projectType";
            /// <summary>
            /// 
            /// </summary>
            public const string selectedPricesheetDetails = "selectedPricesheetDetails";
            /// <summary>
            /// 
            /// </summary>
            public const string columnName = "columnName";
            /// <summary>
            /// 
            /// </summary>
            public const string dataType = "dataType";
            /// <summary>
            /// 
            /// </summary>
            public const string selectedColumn = "selectedColumn";
            /// <summary>
            /// 
            /// </summary>
            public const string availableColumns = "availableColumns";
            /// <summary>
            /// 
            /// </summary>
            public const string dynamicCheckbox = "dynamicCheckbox";
            /// <summary>
            /// 
            /// </summary>
            public const string headerName = "headerName";
            /// <summary>
            /// 
            /// </summary>
            public const string field = "field";
            /// <summary>
            /// 
            /// </summary>
            public const string attachedConfig = "attachedConfig";
            /// <summary>
            /// 
            /// </summary>
            public const string sourceColumnName = "sourceColumnName";
            /// <summary>
            /// 
            /// </summary>
            public const string selectDataKey = "selectDataKey";
            /// <summary>
            /// 
            /// </summary>
            public const string SourceColumnName = "SourceColumnName";
            /// <summary>
            /// 
            /// </summary>
            public const string SourceColumnId = "SourceColumnId";
            /// <summary>
            /// 
            /// </summary>
            public const string rowDetails = "rowDetails";
            /// <summary>
            /// 
            /// </summary>
            public const string dynamicColumns = "dynamicColumns";
            /// <summary>
            /// 
            /// </summary>
            public const string rowData = "rowData";
    
            /// <summary>
            /// 
            /// </summary>
            public const string rowSource = "RowSource";       
    
        }
    
        /// <summary>
        /// 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public class ActionMenuConstants
        {
            /// <summary>
            /// 
            /// </summary>
            public const string PRICESHEET_IDS = "priceSheetIds";
            /// <summary>
            /// 
            /// </summary>
            public const string SUBMIT_REVISED_RESPONSES = "submitRevisedResponses";
            /// <summary>
            /// 
            /// </summary>
            public const string EDIT_PRICESHEET = "editPricesheet";
            /// <summary>
            /// 
            /// </summary>
            public const string ACCEPTABLE_SUPPLIERS = "acceptableSuppliers";
            /// <summary>
            /// 
            /// </summary>
            public const string EVALUATE_PRICESHEET = "evaluatePricesheet";
            #region Price Sheet Row Level Action Constants
            /// <summary>
            /// 
            /// </summary>
            public const string BID_REVISION_IS_ALLOWED = "bidRevisionIsAllowed";
            #endregion
    
        }
    
        /// <summary>
        /// Constants for workbench 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public class WorkbenchConstants
        {
            /// <summary>
            /// 
            /// </summary>
            public const string itemCoveragePercent = "itemCoveragePercent";
            /// <summary>
            /// 
            /// </summary>
            public const string supplierSpend = "supplierSpend";
            /// <summary>
            /// 
            /// </summary>
            public const string totalBaseLineSpend = "totalBaseLineSpend";
            /// <summary>
            /// 
            /// </summary>
            public const string savingsPer = "savingsPer";
            /// <summary>
            /// 
            /// </summary>
            public const string supplierSpendCoverage = "supplierSpendCoverage";
            /// <summary>
            /// 
            /// </summary>
            public const string supplierPrice = "supplierPrice";
        }
    
    }
    `, 
    "1-07": `
    namespace Leo.RFxPricesheetV2.Core.Constants
    {
        /// <summary>
        /// Questionnaire Constants Class
        /// </summary>
        public static class PriceSheetConstants
        {
            #region Actions
    
            /// <summary>
            /// 
            /// </summary>
            public const string download = "downloadPricesheet";
    
            /// <summary>
            /// 
            /// </summary>
            public const string create = "createPricesheet";
    
            /// <summary>
            /// 
            /// </summary>
            public const string copy = "copyPricesheet";
    
            /// <summary>
            /// 
            /// </summary>
            public const string edit = "editPricesheet";
    
            /// <summary>
            /// 
            /// </summary>
            public const string delete = "deletePricesheet";
    
            /// <summary>
            /// 
            /// </summary>
            public const string importFromRepo = "importPricesheetFromRepository";
    
            /// <summary>
            /// 
            /// </summary>
            public const string save = "savePricesheet";
    
            /// <summary>
            /// 
            /// </summary>
            public const string done = "done";
    
            /// <summary>
            /// 
            /// </summary>
            public const string upload = "uploadPricesheet";
    
            /// <summary>
            /// 
            /// </summary>
            public const string saveAsTemplate = "saveAsTemplate";
    
            /// <summary>
            /// 
            /// </summary>
            public const string pricesheetsActions = "pricesheetsActions";
    
            /// <summary>
            /// 
            /// </summary>
            public const string enableAGGridPriceSheet = "enableAGGridPriceSheet";
    
            /// <summary>
            /// 
            /// </summary>
            public const string rearrange = "rearrangePricesheet";
    
            /// <summary>
            /// 
            /// </summary>
            public const string downloadAnalyzeView = "downloadAnalyzeViewPricesheet";
    
            /// <summary>
            /// 
            /// </summary>
            public const string enableItemLevelMulticurrency = "enableItemLevelMulticurrency";
    
            /// <summary>
            /// 
            /// </summary>
            public const string enableSupplierAddRow = "enableSupplierAddRow";
    
            /// <summary>
            /// 
            /// </summary>
            public const string viewManageColumnsPopup = "viewManageColumnsPopup";
    
            /// <summary>
            /// 
            /// </summary>
            public const string viewManageSubtotalsPopup = "viewManageSubtotalsPopup";
    
            /// <summary>
            /// 
            /// </summary>
            public const string linkPriceSheets = "linkPriceSheets";
    
            /// <summary>
            /// 
            /// </summary>
            public const string manageDataSource = "manageDataSource";
    
            /// <summary>
            /// 
            /// </summary>
            public const string addItemFromItemMaster = "addItemFromItemMaster";
    
            /// <summary>
            /// 
            /// </summary>
            public const string manageColumns = "manageColumns";
    
            /// <summary>
            /// 
            /// </summary>
            public const string manageSubtotal = "manageSubtotal";
    
            /// <summary>
            /// 
            /// </summary>
            public const string enableAutoImportSuppliersFromItemAMPL = "enableAutoImportSuppliersFromItemAMPL";
    
            /// <summary>
            /// 
            /// </summary>
            public const string submit = "submitResponse";
    
            /// <summary>
            /// 
            /// </summary>
            public const string dataSourceMappings = "dataSourceMappings";
    
            #endregion
        }
    }
    `, 
    "1-08": `namespace Leo.RFxPricesheetV2.Core.Constants
    {
        using System;
        using System.Collections.Generic;
        using System.Diagnostics.CodeAnalysis;
        using System.Text;
    
        /// <summary>
        /// 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class QueryConstants
        {
            #region DB Settings
            /// <summary>
            /// 
            /// </summary>
            public const string DATA_SOURCE = "Sourcing";
            /// <summary>
            /// 
            /// </summary>
            public const string DATA_ROW_COLLECTION_NAME = "datarows";
    
            #endregion
    
            #region Query Types
            /// <summary>
            /// 
            /// </summary>
            public const string DELETE = "delete";
            /// <summary>
            /// 
            /// </summary>
            public const string GET = "get";
    
            #endregion
    
            #region Projection Columns
            /// <summary>
            /// 
            /// </summary>
            public const string DEFAULT_PROJECTION_CONSTANTS = "_id,documentId,title,description,createdBy,createdOn,modifiedBy, modifiedOn,currency,rowsCount,isValidSheet,sequence,columns,responseColumns,responseCompletion,linkedInfo,sheetType, isFeedbackEnabled,isMasterSheet,isDataRowCountChanged,isLinkedSheet";
            /// <summary>
            /// 
            /// </summary>
            public const string ID_PROJECTION_CONSTANTS = "_id,virtualId";
            /// <summary>
            /// 
            /// </summary>
            public const string MANANGE_COLUMN_PROJECTION_CONSTANTS = "columns,documentId,title,sheetType,linkedPriceSheetInfo";
            /// <summary>
            /// 
            /// </summary>
            public const string LINKED_PRICESHEET_BY_DOCUMENT_PROJECTION_CONSTANTS = "_id, sequence, documentId, virtualId, title, description, createdBy, createdOn, modifiedBy, modifiedOn,currency, rowsCount,isValidSheet, columns, responseColumns, responseCompletion,linkedInfo, sheetType, isFeedbackEnabled, dependentPriceSheets,linkedPriceSheetInfo,crossSheetColumns,isDirty,isMasterSheet,isLinkedSheet,additionalSupplierRows";
            #endregion
        }
    }
    `, 
    "1-09": `namespace Leo.RFxPricesheetV2.Core.Constants
    {
        using System;
        using System.Diagnostics.CodeAnalysis;
    
        /// <summary>
        /// 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class URLConstants
        {
            /// <summary>
            /// 
            /// </summary>
            public static readonly string GET_LOGGED_IN_USER_DETAILS = "leo-rfxcore-api/api/v1/SmartHelper/GetTeamMemberDetailByContactCode";
            /// <summary>
            /// 
            /// </summary>
            public const string SYNC_KAFKA = "/leo-rfxcore-api/api/v1/RFxDocument/SyncToKafka?documentId=";
            /// <summary>
            /// 
            /// </summary>
            public const string GET_FINALISED_SCORE_CARD = "/leo-rfxEvaluationv2-api/api/v1/ScoreCard/GetFinalisedScoreCard?documentId=";
            /// <summary>
            /// 
            /// </summary>
            public const string GET_ALL_SUPPLIER_ATTACHMENTS = "/leo-rfxcorev2-api/api/v1/SupplierAttachment/GetAttachmentCountByPartnerCodes?documentId=";
            /// <summary>
            /// 
            /// </summary>
            public const string GET_PRICESHEET_WEIGHTED_SCORES = "/leo-rfxEvaluationv2-api/api/v1/ScoreCard/GetWeightedPricesheetScores?documentId=";
            /// <summary>
            /// 
            /// </summary>
            public const string COPY_RESPONSES = "leo-rfxpricesheetv2/api/v1/PriceSheet/ClonePricesheetResponses?documentId=";
            /// <summary>
            /// 
            /// </summary>
            public const string DELETE_RESPONSES = "leo-rfxpricesheetv2/api/v1/PriceSheet/DeletePricesheetResponses?documentId=";
            /// <summary>
            /// 
            /// </summary>
            public const string SYNC_PRICESHEET_TO_KAFKA = "/leo-rfxpricesheetv2/api/v1/HostedService/SyncPricesheetToKafka?documentId=";
            /// <summary>
            /// 
            /// </summary>
            public const string SYNC_DATAROW_TO_KAFKA = "/leo-rfxpricesheetv2/api/v1/HostedService/SyncDataRowToKafka?documentId=";
            /// <summary>
            /// 
            /// </summary>
            public const string UPDATE_PRICESHEET_WEIGHTS_IN_SCORECARD_URL = "leo-rfxEvaluationv2-api/api/v1/Scorecard/UpdatePricesheetWeights/";
            /// <summary>
            /// 
            /// </summary>
            public const string DELETE_PRICESHEET_ASSIGNMENTS = "leo-rfxcorev2-api/api/v1/DocumentSupplier/DeletePriceSheetAssignments?documentId=";
            /// <summary>
            /// 
            /// </summary>
            public const string ASSIGN_DEFAULT_CURRENCY_TO_SUPPLIER = "leo-rfxcorev2-api/api/v1/DocumentSupplier/AssignDefaultPricesheetCurrencyToSupplier?documentId=";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string GET_CONTRACT_MASTERDATA = "/leo-clm-masterdata/api/v1/ContractType/Get?isActive=true&culture=en-US&DocumentCode=1";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string GET_RESPONSE_SUMMARY = "leo-rfxpricesheet/api/v1/Workbench/GetResponseSummary?documentId=";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string GET_CONTRACT_LINEITEMS = "/leo-clm-lines/api/v1/LineItem/columns";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string CREATE_BID_REVISION_VERSION = "leo-rfxpricesheet/api/v1/PriceSheet/CreateBidRevisionVersion?documentId=";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string UPDATE_SOURCING_REQUEST_ITEM_STATUS = "leo-srf-core-api/api/v1/RequestItem/UpdateItemRequestStatus";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string SYNC_SOURCING_REQUEST_DOCUMENTS_TO_KAFKA = "leo-srf-core-api/api/v1/HostedService/SyncAllDocumentToKafka";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string RUN_CALCULATIONS = "/leo-rfxpricesheet/api/v1/CrossSheet/RunComputations?documentId=";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string GET_ALLUOMS = "/leo-centraldata-uomservice/api/v1/UOM?PageNumber=1&PageSize=1500";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string DELINK_SRF = "leo-srf-core-api/api/v1/SRfDocument/DeLinkRFx?rfxDocumentId=";
    
            /// <summary>
            /// 
            /// </summary>
            public static readonly string GET_ITEM_MASTER_COMPOSITE_KEY_CONFIG = "/leo-platform-configurationmanager/api/v1/Configurations?appId=45&objType=Nexxe-CMDS";
    
            /// <summary>
            /// 
            /// </summary>
            public static readonly string ITEM_AVL_AdvanceFilter_CMDS_URL = "cmds-itemavl/api/v1/itemAvl/AdvanceFilterSearch";
    
            /// <summary>
            /// 
            /// </summary>
            public static readonly string ADD_DOCUMENT_SUPPLIERS = "leo-rfxcorev2-api/api/v1/DocumentSupplier/AddDocumentSuppliers?documentId=";
    
            /// <summary>
            /// 
            /// </summary>
            public static readonly string GET_SUPPLIERS_BY_CLIENTCODES = "leo-rfxsearchv2-api/api/v1/Search/GetSuppliersByClientCodes";
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <returns></returns>
            public static string UPDATE_LINKED_DATA_ROWS(string documentId, string priceSheetId)
            {
                return $"leo-rfxpricesheetv2-api/api/v1/CrossSheet/UpdateLinkedRowsAsDirty?documentId={documentId}&priceSheetId={priceSheetId}";
            }
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <returns></returns>
            public static string UPDATE_DIRTY_FLAG(string documentId, string priceSheetId)
            {
                return $"leo-rfxpricesheetv2-api/api/v1/CrossSheet/UpdateDirtyFlag?documentId={documentId}&priceSheetId={priceSheetId}";
            }
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="priceSheetId"></param>
            /// <param name="getAllRows"></param>
            /// <param name="index"></param>
            /// <param name="isSave"></param>
            /// <returns></returns>
            public static string UPDATE_DIRTY_ROWS(string priceSheetId, bool getAllRows = false, int index = 0, bool isSave = true)
            {
                return $"leo-rfxpricesheetv2-api/api/v1/CrossSheet/UpdateAndGetDirtyRows?priceSheetId={priceSheetId}&getAllRows={getAllRows}&index={index}&isSave={isSave}";
            }
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <param name="selectedMasterRowSequence"></param>
            /// <param name="supplierCurrency"></param>
            /// <param name="isMultiCurrency"></param>
            /// <param name="exchangeRate"></param>
            /// <returns></returns>
            public static string ADD_ROWS_TO_LINKED_SHEETS(string documentId, string priceSheetId, int selectedMasterRowSequence, string supplierCurrency = "", bool isMultiCurrency = false, double exchangeRate = 1)
            {
                return $"leo-rfxpricesheetv2-api/api/v1/CrossSheet/AddDataRowsToLinkedSheet?documentId={documentId}&priceSheetId={priceSheetId}&selectedMasterRowSequence={selectedMasterRowSequence}&supplierCurrency={supplierCurrency}&isMultiCurrency={isMultiCurrency}&exchangeRate={exchangeRate}";
            }
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <param name="minRowIndex"></param>
            /// <returns></returns>
            public static string DELETE_ROWS_FROM_LINKED_SHEET(string documentId, string priceSheetId, int minRowIndex)
            {
                return $"leo-rfxpricesheetv2-api/api/v1/CrossSheet/DeleteDataRowsFromLinkedSheet?documentId={documentId}&priceSheetId={priceSheetId}&minRowIndex={minRowIndex}";
            }
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <returns></returns>
            public static string DELETE_LINKED_COLUMNS(string documentId, string priceSheetId)
            {
                return $"leo-rfxpricesheetv2-api/api/v1/CrossSheet/DeleteLinkedColumns?documentId={documentId}&priceSheetId={priceSheetId}";
            }
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <returns></returns>
            public static string DELETE_DEPENDENT_COLUMNS(string documentId, string priceSheetId)
            {
                return $"leo-rfxpricesheetv2-api/api/v1/CrossSheet/DeleteDependentColumns?documentId={documentId}&priceSheetId={priceSheetId}";
            }
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <returns></returns>
            public static string UPLOAD_REVISED_RESPONSES(string documentId)
            {
                return $"leo-rfx-impex-download-api/api/v1/Impex/UploadRevisedResponses?documentId={documentId}";
            }
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="notificationCode"></param>
            /// <returns></returns>
            public static string SEND_EVENT_NOTIFICATION(string documentId, string notificationCode)
            {
                return $"leo-rfx-notification/api/v1/HostedService/Notification/SendEventBasedNotifications?documentId={documentId}&notificationCode={notificationCode}";
            }
        }
    }
    `, 
    "2-01": `namespace Leo.RFxPricesheetV2.Core.Interface
    {
        using Newtonsoft.Json.Linq;
        using System;
        using System.Collections.Generic;
        using System.Text;
        using System.Threading.Tasks;
    
        /// <summary>
        /// 
        /// </summary>
        public interface IColumnService
        {
            #region Controller Methods
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <returns></returns>
            Task<JObject> GetAsync(string priceSheetId, string documentId);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="mcvm"></param>
            /// <returns></returns>
            Task<JToken> UpdateColumnsAsync(JObject mcvm);
    
            #endregion
    
            #region Methods
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <returns></returns>
            Task<JObject> GetByPricesheetId(string documentId, string priceSheetId);
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="pricesheetId"></param>
            /// <returns></returns>
            Task<List<JObject>> GetAllPricesheetColumns(string documentId, string pricesheetId);
            /// <summary>
            /// 
            /// </summary>
            /// <param name="columns"></param>
            /// <param name="pricesheetId"></param>
            /// <param name="linkedPriceSheetInfos"></param>
            /// <returns></returns>
            Task<JToken> ManageColumns(IEnumerable<JToken> columns, string pricesheetId, IEnumerable<JToken> linkedPriceSheetInfos);
            #endregion
        }
    }
    `, 
    "2-02": `namespace Leo.RFxPricesheetV2.Core.Interface
    {
        using Leo.RFxCommonV2.Service;
        using Newtonsoft.Json.Linq;
        using System;
        using System.Collections.Generic;
        using System.Net.Http;
        using System.Text;
        using System.Threading.Tasks;
    
        /// <summary>
        /// Contains common service required by all other services
        /// </summary>
        public interface ICommonService
        {
            /// <summary>
            /// Get document curreny for given document id
            /// </summary>
            /// <param name="documentId"></param>
            /// <returns></returns>
            Task<JObject> GetDocumentCurrencyAsync(string documentId);
    
            /// <summary>
            /// Allows user to get all pricesheets in specified document.
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="projections"> Allows user to specify the properties needed in returned object. </param>
            /// <returns></returns>
            Task<JArray> GetPricesheetsByDocumentId(string documentId, List<string> projections = null);
    
            /// <summary>
            /// Get pricesheet by pricesheet Id
            /// </summary>
            /// <param name="pricesheetId"></param>
            /// <param name="projections"></param>
            /// <returns></returns>
            Task<JToken> GetPricesheetByIdAsync(string pricesheetId, List<string> projections = null);
    
            /// <summary>
            /// Allows user to get multiple pricesheets by passing in Id's for all required sheets.
            /// </summary>
            /// <param name="priceSheetIds"></param>
            /// <param name="documentId"></param>
            /// <returns></returns>
            Task<JArray> GetMultiplePriceSheets(List<string> priceSheetIds, string documentId);
    
            /// <summary>
            /// get document settings from document rules
            /// </summary>
            /// <param name="documentId"></param>
            /// <returns></returns>
            Task<JObject> GetDocumentRulesDocumentSettingsAsync(string documentId);
    
            /// <summary>
            /// Get stakeholders from document rules
            /// </summary>
            /// <param name="documentId"></param>
            /// <returns></returns>
            Task<IEnumerable<JToken>> GetStackHoldersByDocumentIdAsync(string documentId);
    
            /// <summary>
            /// Http response helper to get http response
            /// </summary>
            /// <param name="apiUrl"></param>
            /// <param name="baseUrl"></param>
            /// <param name="isPost"></param>
            /// <param name="body"></param>
            /// <returns></returns>
            Task<T> GetResponseAsync<T>(string apiUrl, string baseUrl = null, bool isPost = false, object body = null);
    
            /// <summary>
            /// Update pricesheet row count.
            /// </summary>
            /// <param name="priceSheet"></param>
            /// <returns></returns>
            Task<int> UpdatePriceSheetRowCount(JObject priceSheet);
    
            /// <summary>
            /// Get All UOM Master Data
            /// </summary>
            /// <returns></returns>
            Task<JArray> GetAllUOMs();
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="aVLPayload"></param>
            /// <returns></returns>
            Task<JArray> GetItemAVLData(JObject aVLPayload);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="suppliers"></param>
            /// <returns></returns>
            Task<bool> AddDocumentSuppliers(string documentId, JArray suppliers);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="clientCodes"></param>
            /// <returns></returns>
            Task<JArray> GetSuppliersByCientCodes(JArray clientCodes);
        }
    }
    `, 
    "2-03": `namespace Leo.RFxPricesheetV2.Core.Interface
    {
        using Newtonsoft.Json.Linq;
        using System;
        using System.Collections.Generic;
        using System.Text;
        using System.Threading.Tasks;
    
        /// <summary>
        /// 
        /// </summary>
        public interface ICrossSheetService
        {
            /// <summary>
            /// Updated the linked rows as dirty when user updates values in datarows.
            /// </summary>
            /// <param name="documentId">Id for the RFx</param>
            /// <param name="priceSheetId">Id for the pricesheet</param>
            /// <param name="datarows">List of datarows that are changed.</param>
            /// <returns></returns>
            Task<bool> UpdateLinkedRowsAsDirty(string documentId, string priceSheetId, List<string> datarows);
    
            /// <summary>
            /// If computation column is deleted from pricesheet, updates the data rows and corresponding priceSheets.
            /// </summary>
            /// <param name="linkedPriceSheetInfo">Array of sheets linked to current sheet.</param>
            /// <param name="documentId">Id for the RFx</param>
            /// <param name="priceSheetId">Id for the pricesheet</param>
            /// <returns></returns>
            Task<bool> DeleteLinkedColumns(string documentId, string priceSheetId, List<JToken> linkedPriceSheetInfo);
    
            /// <summary>
            /// Deletes the columns from all the linked sheet once it's deleted.
            /// </summary>
            /// <param name="linkedPriceSheetInfos">Array of deleted infos.</param>
            /// <param name="documentId">ID of the RFx.</param>
            /// <param name="priceSheetId">ID of the sheet from which column is deleted.</param>
            /// <returns></returns>
            Task<bool> DeleteDependentColumns(List<JToken> linkedPriceSheetInfos, string documentId, string priceSheetId);
    
            /// <summary>
            /// Checks the rows of pricesheet to see if any row is marked dirty, else marked the pricesheet as not dirty.
            /// </summary>
            /// <param name="documentId">Document ID of the event.</param>
            /// <param name="priceSheetId">ID for the pricesheet to check.</param>
            Task UpdateDirtyFlag(string documentId, string priceSheetId);
    
            /// <summary>
            /// Runs all the calculations for given document id / list of pricesheets.
            /// </summary>
            /// <param name="documentId">Document ID of the event.</param>
            /// <param name="priceSheetIds">List of pricesheet IDs for which calculations are performed.</param>
            /// <param name="runAllCalculations">If calculation should be run for all sheets (defaults to false, if set to true, priceSheetIds is ignored.</param>
            /// <param name="isAnalyzeView">If the current request is from analyze view.</param>
            /// <returns></returns>
            Task<List<JToken>> RunCalculations(string documentId, List<string> priceSheetIds, bool runAllCalculations = false, bool isAnalyzeView = false);
    
            /// <summary>
            /// In case of pricesheet marked dirty, re-runs the calculations for dirty rows
            /// </summary>
            /// <param name="documentId">Document ID of the event.</param>
            /// <param name="priceSheetId">ID of pricesheet marked dirty.</param>
            /// <param name="linkedPriceSheetInfo">LinkedPriceSheetInfo for pricesheet.</param>
            /// <param name="getAllRows">Boolean to run calculations for all rows. Defaults to false.</param>
            /// <param name="index">In case calculation is required for 1000 rows past certain index. Defaults to 0.</param>
            /// <param name="isSave">In case rows need to be saved in DB as well. Defaults to false.</param>
            /// <returns></returns>
            Task<List<JObject>> UpdateAndGetDirtyRows(string documentId, string priceSheetId, List<JObject> linkedPriceSheetInfo, bool getAllRows = false, int index = 0, bool isSave = false);
    
            /// <summary>
            /// If rows are added to parent sheet, the same are replicated across all it's linked child sheets.
            /// </summary>
            /// <param name="documentId">ID of the RFx</param>
            /// <param name="masterSheetId">ID of the parent sheet.</param>
            /// <param name="datarows">New datarows added.</param>
            /// <param name="selectedMasterRowSequence">In case duplicate rows are added, to modify the sequence in child sheets. Default to -1.</param>
            /// <param name="supplierCurrency">In case of multicurrency event. Defaults to empty string.</param>
            /// <param name="isMultiCurrency">In case of multicurrency event. Default to false.</param>
            /// <param name="exchangeRate">In case of multicurrency event. Default to 1.</param>
            /// <returns></returns>
            Task AddDataRowsToLinkedSheets(string documentId, string masterSheetId, List<JToken> datarows, int selectedMasterRowSequence = -1, string supplierCurrency = "", bool isMultiCurrency = false, double exchangeRate = 1);
    
            /// <summary>
            /// If rows are deleted from linked sheet, the linked rows are deleted / marked dirty across all it's linked sheets.
            /// </summary>
            /// <param name="documentId">ID of the RFx</param>
            /// <param name="masterSheetId">ID of the parent sheet.</param>
            /// <param name="dataRowDeleteViewModel">Model containing deleted rows id and linked parent row id.</param>
            /// <param name="minRowIndex">In case of cross sheet, to mark all rows below current as dirty.</param>
            /// <returns></returns>
            Task DeleteDataRowsFromLinkedSheet(string documentId, string masterSheetId, JObject dataRowDeleteViewModel, int minRowIndex = -1);
    
            /// <summary>
            /// When sheets are linked as parent / child, replicates the rows from parent into child.
            /// </summary>
            /// <param name="priceSheets">List of all pricesheets (includes both parent / child).</param>
            /// <returns></returns>
            Task AddDefaultDatarowsToLinkedSheetAndSave(List<JToken> priceSheets);
    
            /// <summary>
            /// In case link between parent / child is removed, removes the link between corresponding data rows as well.
            /// </summary>
            /// <param name="priceSheets">List of all pricesheets (includes both parent / child).</param>
            /// <returns></returns>
            Task DeleteLinkForDataRows(List<JToken> priceSheets);
    
            /// <summary>
            /// In case a new RFx is created from existing / template, then creates the link 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="templatePriceSheets"></param>
            /// <param name="linkedPriceSheetDict"></param>
            /// <returns></returns>
            Task<bool> UpdateLinkedSheetsAndRowsForCopy(string documentId, IEnumerable<JToken> templatePriceSheets, Dictionary<string, string> linkedPriceSheetDict);
        }
    }
    `, 
    "2-04": `namespace Leo.RFxPricesheetV2.Core.Interface
    {
        using Leo.RFxCommonV2.Enumerators;
        using Leo.RFxPricesheetV2.Core.Constants;
        using Newtonsoft.Json.Linq;
        using System;
        using System.Collections.Generic;
        using System.Text;
        using System.Threading.Tasks;
    
        /// <summary>
        /// Interface for Data Row Services
        /// </summary>
        public interface IDataRowService
        {
    
            #region ControllerLogic
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="priceSheet"></param>
            /// <returns></returns>
            Task<JArray> CreateAsync(JObject priceSheet);
    
            #endregion
    
            #region Methods
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="pricesheet"></param>
            /// <param name="dataRows"></param>
            /// <param name="exchangeRate"></param>
            bool CalculateSupplierCurrencyColumnsDataRowsValues(JObject pricesheet, List<JObject> dataRows, double exchangeRate = 1);
            /// <summary>
            /// 
            /// </summary>
            /// <param name="dataRowIds"></param>
            /// <param name="priceSheetId"></param>
            /// <returns></returns>
            Task<bool> DeleteDataRowsAsync(List<string> dataRowIds, string priceSheetId);
            /// <summary>
            /// 
            /// </summary>
            /// <param name="priceSheetId"></param>
            /// <param name="rowType"></param>
            /// <param name="supplierId"></param>
            /// <param name="columns"></param>
            /// <returns></returns>
            Task<Dictionary<string, object>> GetColumnWiseResponseCountAsync(string priceSheetId, DataRowType rowType, long supplierId, List<string> columns);
            /// <summary>
            /// Get total filled data rows in pricesheet
            /// </summary>
            /// <param name="pricesheetId"></param>
            /// <param name="columns"></param>
            /// <returns></returns>
            Task<int> GetNonEmptyDataRowsQueryAsync(string pricesheetId, IEnumerable<JToken> columns);
            /// <summary>
            /// 
            /// </summary>
            /// <param name="priceSheet"></param>
            /// <param name="rowsCount"></param>
            /// <returns></returns>
            Task<JArray> CreateDataRowsAsync(JObject priceSheet, int? rowsCount);
    
            /// <summary>
            /// Get all datarows for pricesheets
            /// </summary>
            /// <param name="priceSheetIds"></param>
            /// <returns></returns>
            Task<JArray> GetAllDataRowsAsync(List<string> priceSheetIds);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="priceSheet"></param>
            /// <param name="startIndex"></param>
            /// <param name="limit"></param>
            /// <returns></returns>
            Task<IEnumerable<JObject>> GetAllBuyerDataRowsAsync(JToken priceSheet, int startIndex, int limit = 0);
    
            /// <summary>
            /// Delete data rows by id
            /// </summary>
            /// <param name="dataRowIds"></param>
            /// <returns></returns>
            Task<bool> DeleteDataRowsAsync(List<string> dataRowIds);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="rowTypeList"></param>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <param name="properties"></param>
            /// <returns></returns>
            Task<bool> DeleteDataRowsKeysByDocumentIdAsync(
                List<DataRowType> rowTypeList, 
                string documentId, 
                string priceSheetId, 
                IEnumerable<string> properties
            );
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <returns></returns>
            Task<bool> BulkDeleteSummaryRowsAsync(string documentId);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="dataRowDeleteViewModel"></param>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <param name="minDataRowIndex"></param>
            /// <returns></returns>
            Task<bool> DeleteDataRowsAndUpdateDirtyAsync(
                JObject dataRowDeleteViewModel,
                string documentId,
                string priceSheetId,
                int minDataRowIndex = -1
            );
    
            /// <summary>
            /// Delete supplier datarows
            /// </summary>
            /// <param name="dataRowDeleteViewModel"></param>
            /// <param name="priceSheetId"></param>
            /// <param name="minDataRowIndex"></param>
            /// <returns></returns>
            Task<bool> DeleteSupplierDataRowsAsync(JObject dataRowDeleteViewModel, string priceSheetId, int minDataRowIndex = -1);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="createdDataRows"></param>
            /// <param name="selectedRowHierarchy"></param>
            /// <returns></returns>
            Task<JArray> UpdateCreatedRowHierarchyAsync(JArray createdDataRows, List<string> selectedRowHierarchy);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="createdDataRows"></param>
            /// <param name="pricesheet"></param>
            /// <returns></returns>
            Task<JArray> UpdateCreatedRowSequenceOrderAsync(JArray createdDataRows, JObject pricesheet);
    
            /// <summary>
            /// get all supplier datarows in a pricesheet
            /// </summary>
            /// <param name="priceSheet"></param>
            /// <param name="rowType"></param>
            /// <param name="startIndex"></param>
            /// <param name="supplierId"></param>
            /// <param name="virtualIds"></param>
            /// <param name="isDirSheet"></param>
            /// <param name="exchangeRate"></param>
            /// <param name="limit"></param>
            /// <returns></returns>
            Task<IEnumerable<JObject>> GetAllSupplierDataRowsAsync(
                JObject priceSheet,
                int rowType,
                int startIndex,
                long supplierId,
                List<string> virtualIds = null,
                bool isDirSheet = false,
                double exchangeRate = 1,
                int limit = 0
            );
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="priceSheet"></param>
            /// <param name="rowType"></param>
            /// <param name="isDirSheet"></param>
            /// <param name="s_Currency"></param>
            /// <param name="isMultiCurrency"></param>
            /// <param name="exchangeRate"></param>
            /// <returns></returns>
            Task<bool> CreateSupplierDataRowsAsync(
                JObject priceSheet,
                int rowType,
                bool isDirSheet = false,
                string s_Currency = "",
                bool isMultiCurrency = false,
                double exchangeRate = 1
            );
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="datarows"></param>
            /// <param name="clearSupplierResponses"></param>
            /// <param name="updateLinkedRows"></param>
            /// <returns></returns>
            Task<int> UpdateBuyerDataRowsAsync(List<JToken> datarows, bool clearSupplierResponses, bool updateLinkedRows = true);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="datarows"></param>
            /// <param name="updateLinkedRows"></param>
            /// <returns></returns>
            Task<int> UpdateBuyerDataRowsBySupplierAsync(List<JToken> datarows, bool updateLinkedRows = true);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="priceSheetId"></param>
            /// <param name="virtualId"></param>
            /// <returns></returns>
            Task<double> GetTotalBaseLineSpendAsync(string priceSheetId, string virtualId);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="pricesheetId"></param>
            /// <param name="supplierId"></param>
            /// <returns></returns>
            Task<object> GetFilledCellPercentageAsync(string pricesheetId, long supplierId);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="pricesheetId"></param>
            /// <param name="columnVirutalIds"></param>
            /// <returns></returns>
            Task<bool> DeleteSupplierResponsesForColumnAsync(string documentId, string pricesheetId, IEnumerable<string> columnVirutalIds);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="pricesheetId"></param>
            /// <returns></returns>
            Task<bool> DeleteSupplierRowsAsync(string documentId, string pricesheetId);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="priceSheet"></param>
            /// <param name="rowsToModify"></param>
            /// <param name="dataRows"></param>
            /// <param name="rowType"></param>
            /// <param name="startIndex"></param>
            /// <param name="supplierId"></param>
            /// <param name="virtualIds"></param>
            /// <param name="isDirSheet"></param>
            /// <param name="exchangeRate"></param>
            /// <returns></returns>
            Task<bool> AddLinkedDataRowIdToChildSheetAsync(
                JObject priceSheet,
                List<JObject> rowsToModify,
                List<JObject> dataRows,
                int rowType,
                int startIndex,
                long supplierId,
                List<string> virtualIds = null,
                bool isDirSheet = false,
                double exchangeRate = 1
            );
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="columnsTypeChangedViewModel"></param>
            /// <returns></returns>
            Task<bool> ApplySchemaInDataRowsAsync(JObject columnsTypeChangedViewModel);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="priceSheet"></param>
            /// <param name="rowsCount"></param>
            /// <param name="exchangeRate"></param>
            /// <param name="documentRules"></param>
            /// <param name="documentCurrency"></param>
            /// <param name="isMultiCurrency"></param>
            /// <returns></returns>
            Task<JArray> CreateDirSupplierDataRowsAsync(
                JObject priceSheet, int? rowsCount, double exchangeRate, JToken documentRules, 
                JToken documentCurrency, bool isMultiCurrency);
    
            /// <summary>
            /// Delete supplier data row keys
            /// </summary>
            /// <param name="requestBody"></param>
            /// <returns></returns>
            Task<bool> DeleteSupplierDataRowsKeysAsync(JObject requestBody);
    
            /// <summary>
            /// Delete buyer data row keys
            /// </summary>
            /// <param name="requestBody"></param>
            /// <returns></returns>
            Task<bool> DeleteBuyerDataRowsKeysAsync(JObject requestBody);
    
            /// <summary>
            /// Update buyer datarows by supplier
            /// </summary>
            /// <param name="datarows"></param>
            /// <param name="updateLinkedRows"></param>
            /// <returns></returns>
            Task<int> UpdateBuyerDataRowsBySupplier(List<JToken> datarows, bool updateLinkedRows = true);
    
            /// <summary>
            /// Dir update buyer datarows by supplier
            /// </summary>
            /// <param name="dataRows"></param>
            /// <param name="updateLinkedRows"></param>
            /// <returns></returns>
            Task<int> DirUpdateBuyerDataRowsBySupplierAsync(List<JToken> dataRows, bool updateLinkedRows = true);
    
            /// <summary>
            /// Get all buyer datarows for pricesheet
            /// </summary>
            /// <param name="priceSheetId"></param>
            /// <param name="startIndex"></param>
            /// <returns></returns>
            Task<IEnumerable<JToken>> GetAllBuyerDataRowsForPricesheetAsync(string priceSheetId, int startIndex);
    
            /// <summary>
            /// Get all response datarows
            /// </summary>
            /// <param name="priceSheet"></param>
            /// <param name="rowType"></param>
            /// <param name="startIndex"></param>
            /// <returns></returns>
            Task<IEnumerable<JToken>> GetAllResponseDataRowsAsync(JToken priceSheet, int rowType, int startIndex);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="pricesheetId"></param>
            /// <param name="rowType"></param>
            /// <returns></returns>
            Task<long> GetMaxSequenceNoByPricesheetAsync(string pricesheetId, int rowType);
    
            /// <summary>
            /// Create DataRows From Item Master
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="itemMsterData"></param>
            /// <returns></returns>
            Task<JArray> CreateDataRowFromItemMasterAsync(string documentId, JObject itemMsterData);
            /// <summary>
            /// Update Price Sheet Row Count
            /// </summary>
            /// <param name="priceSheet"></param>
            /// <returns></returns>
            Task<bool> UpdatePriceSheetRowCount(JObject priceSheet);
            #endregion
        }
    }
    `, 
    "2-05": `namespace Leo.RFxPricesheetV2.Core.Interface
    {
        using Newtonsoft.Json.Linq;
        using System;
        using System.Collections.Generic;
        using System.Text;
        using System.Threading.Tasks;
    
        /// <summary>
        /// Service to handle scenarios for Updating the link between PriceSheets
        /// </summary>
        public interface ILinkedPriceSheetService
        {
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <returns></returns>
            Task<List<JToken>> GetLinkedPriceSheets(string documentId);
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="linkedPriceSheetViewModels"></param>
            /// <returns></returns>
            Task<bool> UpdateLinkedPriceSheets(string documentId, List<JToken> linkedPriceSheetViewModels);
        }
    }
    `, 
    "2-06": `namespace Leo.RFxPricesheetV2.Core.Interface
    {
        using Newtonsoft.Json.Linq;
        using System;
        using System.Collections.Generic;
        using System.Text;
        using System.Threading.Tasks;
    
        /// <summary>
        /// 
        /// </summary>
        public interface IPricesheetEvaluationService
        {
            /// <summary>
            /// Get analyze view for a pricesheet
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <returns></returns>
            Task<JToken> PSVM_GetEvaluationViewAsync(string documentId, string priceSheetId);
        }
    }
    `, 
    "2-07": `namespace Leo.RFxPricesheetV2.Core.Interface
    {
        using Leo.RFxCommonV2.Entities;
        using Newtonsoft.Json.Linq;
        using System.Collections.Generic;
        using System.Threading.Tasks;
    
        /// <summary>
        /// Interface for Supplier Response Service
        /// </summary>
        public interface IPricesheetPublishService
        {
            /// <summary>
            /// Publish Price Sheets
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetIds"></param>
            /// <returns></returns>
            Task<List<Message>> ValidatePriceSheetsAsync(string documentId, JArray priceSheetIds);
    
            /// <summary>
            /// Publish Price Sheets
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="payload"></param>
            /// <returns></returns>
            Task<JObject> PublishPriceSheetsAsync(string documentId, JObject payload);
    
            /// <summary>
            /// Withdraw Price Sheets
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetIds"></param>
            /// <returns></returns>
            Task<JObject> WithdrawPriceSheetsAsync(string documentId, JArray priceSheetIds);
        }
    }`, 
    "2-08": `namespace Leo.RFxPricesheetV2.Core.Interface
    {
        using Newtonsoft.Json.Linq;
        using System;
        using System.Collections.Generic;
        using System.Text;
        using System.Threading.Tasks;
    
        /// <summary>
        /// Interface for PriceSheet Services
        /// </summary>
        public interface IPriceSheetService
        {
    
            #region Controller Logic
    
            /// <summary>
            /// Creates a view model for pricesheet depending on viewer (buyer / supplier)
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="pricesheets"></param>
            /// <returns></returns>
            Task<JObject> PSVM_GetByDocumentIdAsync(string documentId, JArray pricesheets);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheet"></param>
            /// <returns></returns>
            Task<JObject> PSVM_SaveAsync(string documentId, JObject priceSheet);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <param name="isFeedbackView"></param>
            /// <param name="isDirSheet"></param>
            /// <param name="pageNo"></param>
            /// <returns></returns>
            Task<JObject> GetAsync(string documentId, string priceSheetId,
                bool isFeedbackView, bool isDirSheet = false, int pageNo = 0);
    
            /// <summary>
            /// Controller logic for get analyze view of pricesheet
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <param name="isSupplierCurrencyView"></param>
            /// <returns></returns>
            Task<JToken> PSVM_GetAnalyzeViewAsync(string documentId, string priceSheetId, int isSupplierCurrencyView = 1);
    
            /// <summary>
            /// Controller logic for get pricesheet summary
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <returns></returns>
            Task<JObject> PSVM_GetPricesheetSummaryAsync(string documentId, string priceSheetId);
            #endregion
    
            #region Methods
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="priceSheetIds"></param>
            /// <param name="documentId"></param>
            /// <returns></returns>
            Task<bool> PricesheetImportFromRepositoryAsync(List<string> priceSheetIds, string documentId);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="projection"></param>
            /// <returns></returns>
            Task<IEnumerable<JToken>> GetPricehsheetColumnsLookupProjectionByDocumentId(string documentId, List<string> projection);
            
            /// <summary>
            /// Get pricesheet by id along with pricesheetDatarows datarows
            /// </summary>
            /// <param name="priceSheetId"></param>
            /// <returns></returns>
            Task<JToken> GetPriceSheetByIdAsync(string priceSheetId);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="priceSheet"></param>
            /// <param name="documentRules"></param>
            /// <param name="documentCurrency"></param>
            /// <returns></returns>
            double GetPriceSheetExhangeRate(JToken priceSheet, JToken documentRules, JToken documentCurrency);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <param name="supplierId"></param>
            /// <returns></returns>
            Task<double> UpdatePriceSheetCompletionStatusAsync(string documentId, string priceSheetId, long supplierId);
    
            /// <summary>
            /// Get All pricesheets by IDs
            /// </summary>
            /// <param name="priceSheetIds"></param>
            /// <returns></returns>
            Task<JArray> GetAllPriceSheetsByIdsAsync(List<string> priceSheetIds);
    
            /// <summary>
            /// Get all pricesheets related to one document
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="projection"></param>
            /// <returns></returns>
            Task<JArray> GetByDocumentIdAsync(string documentId, List<string> projection = null);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="pricesheets"></param>
            /// <returns></returns>
            Task<JArray> GetPricesheetsForSupplierAsync(string documentId, JArray pricesheets);
    
            /// <summary>
            /// Creates a pricesheet 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheet"></param>
            /// <returns></returns>
            Task<JObject> CreatePriceSheetAsync(string documentId, JObject priceSheet);
    
            /// <summary>
            /// Delete pricesheet by id
            /// </summary>
            /// <param name="priceSheetIds"></param>
            /// <returns></returns>
            Task<bool> DeletePricesheetByIdAsync(List<string> priceSheetIds);
            /// <summary>
            /// 
            /// </summary>
            /// <param name="priceSheet"></param>
            /// <returns></returns>
            Task<int> UpdatePriceSheetAsync(JObject priceSheet);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="priceSheet"></param>
            /// <returns></returns>
            Task<int> UpdatePriceSheetColumnsAsync(JToken priceSheet);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <returns></returns>
            Task<bool> ClearPricesheetDataOnEventWithdrawAsync(string documentId);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <param name="isDirSheet"></param>
            /// <param name="isFeedbackView"></param>
            /// <param name="pageNo"></param>
            /// <returns></returns>
            Task<JObject> GetPriceSheetAsync(string documentId, string priceSheetId, bool isDirSheet = false, 
                bool isFeedbackView = false, int pageNo = 0);
    
            /// <summary>
            /// 
            /// </summary>
            /// <param name="priceSheet"></param>
            /// <returns></returns>
            JObject FilterApplicationGenratedColumns(JObject priceSheet);
    
            /// <summary>
            /// Delete evaluator scores
            /// </summary>
            /// <param name="documentId"></param>
            /// <returns></returns>
            Task<bool> DeleteEvaluatorScoresAsync(string documentId);
    
            /// <summary>
            /// Get Pricesheet Section Actions
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="isAnalyzeView"></param>
            /// <returns></returns>
            Task<JObject> GetSectionActionMenuAsync(string documentId, bool isAnalyzeView = false);
    
            /// <summary>
            /// Get Pricesheet Page Actions
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="pricesheetId"></param>
            /// <param name="isAnalyzeView"></param>
            /// <param name="headerActions"></param>
            /// <returns></returns>
            Task<JObject> GetPageActionMenuAsync(string documentId, string pricesheetId, bool isAnalyzeView = false, bool headerActions = false);
            /// <summary>
            /// Get analyze view of pricesheet
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <param name="isSupplierCurrencyView"></param>
            /// <param name="isRevisedResponseView"></param>
            /// <returns></returns>
            Task<JToken> GetAnalyzeViewAsync(string documentId, string priceSheetId, bool isSupplierCurrencyView = false, bool isRevisedResponseView = false);
    
    
            #endregion
    
            /// <summary>
            /// Get all Pricesheet Template
            /// </summary>
            /// <returns></returns>
            Task<JArray> GetImportRepositoryList();
    
            /// <summary>
            /// ImportFromRepoPSAsync
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetIds"></param>
            /// <returns></returns>
            Task<bool> ImportFromRepoPSAsync(string documentId, List<string> priceSheetIds/*, DACResponseModel rFxDACResponseModel*/);
    
    
            /// <summary>
            /// PushToRepoPSAsync
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetIds"></param>
            /// <returns></returns>
            Task<bool> PushToRepoPSAsync(string documentId, List<string> priceSheetIds/*, DACResponseModel rFxDACResponseModel*/);
    
            /// <summary>
            /// BulkUpdatePSAsync
            /// </summary>
            /// <param name="priceSheets"></param>
            /// <returns></returns>
            Task<JObject> BulkUpdatePSAsync( List<JObject> priceSheets/*, DACResponseModel rFxDACResponseModel*/);
    
            /// <summary>
            /// Get pricesheet summary by pricesheet Id
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <returns></returns>
            Task<JToken> GetPriceSheetSummaryAsync(string documentId, string priceSheetId);
    
    
            /// <summary>
            /// BulkCopyPSAsync
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetIds"></param>
            /// <returns></returns>
            Task<bool> BulkCopyPSAsync(string documentId, List<string> priceSheetIds  /*,DACResponseModel rFxDACResponseModel*/);
    
            /// <summary>
            /// Clone Document Price Sheets
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetIds"></param>
            /// <returns></returns>
            Task<JObject> CopyAsync(string documentId, JArray priceSheetIds);
    
            /// <summary>
            /// Update Evaluator Mapping
            /// </summary>
            /// <param name="documentId"></param>
            /// <returns></returns>
            Task<JObject> UpdateEvaluatorMappingAsync(string documentId);
    
            /// <summary>
            /// Get evaluation summary for a priceSheet
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <param name="allowScoreEdit"></param>
            /// <returns></returns>
            Task<JToken> GetEvaluationSummaryAsync(string documentId, string priceSheetId, bool allowScoreEdit);
    
            /// <summary>
            /// Get Pricesheet evalution View
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <param name="allowScoreEdit"></param>
            /// <returns></returns>
            Task<JToken> GetEvaluationViewAsync(string documentId, string priceSheetId, bool allowScoreEdit);
        }
    }
    `, 
    "2-09": `namespace Leo.RFxPricesheetV2.Core.Interface
    {
        using Leo.RFxCommonV2.Entities;
        using Newtonsoft.Json.Linq;
        using System.Threading.Tasks;
    
        /// <summary>
        /// Interface for Supplier Response Service
        /// </summary>
        public interface ISupplierResponseService
        {
            /// <summary>
            /// Validate Price Sheets Response
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetIds"></param>
            /// <returns></returns>
            Task<Message> ValidatePriceSheetsResponseAsync(string documentId, JArray priceSheetIds);
    
            /// <summary>
            /// Submit Price Sheets Response
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="payload"></param>
            /// <returns></returns>
            Task<bool> SubmitPriceSheetsResponseAsync(string documentId, JObject payload);
    
            /// <summary>
            /// Withdraw Price Sheets Response
            /// </summary>
            /// <param name="documentId"></param>
            /// <returns></returns>
            Task<bool> WithdrawPriceSheetsResponseAsync(string documentId);
        }
    }`, 
    "2-10": `namespace Leo.RFxPricesheetV2.Core.Interface
    {
        using Newtonsoft.Json.Linq;
        using System;
        using System.Collections.Generic;
        using System.Text;
        using System.Threading.Tasks;
    
        /// <summary>
        /// 
        /// </summary>
        public interface IWorkbenchService
        {
            #region Controller Logic
    
            /// <summary>
            /// Controller Logic for charts summay
            /// </summary>
            /// <param name="documentId"></param>
            /// <returns></returns>
            Task<Dictionary<string, object>> SummaryForChartsAsync(string documentId);
    
            /// <summary>
            /// Controller logic for summary response
            /// </summary>
            /// <param name="documentId"></param>
            /// <returns></returns>
            Task<JObject> PSVM_GetSummaryResponseAsync(string documentId);
    
            /// <summary>
            /// get supplier datarows for selected suppliers
            /// </summary>
            /// <param name="documentId"></param>
            /// <returns></returns>
            Task<JObject> GetSupplierDataRowsForSupplierSelectAsync(string documentId);
    
            #endregion
    
            #region Methods
            /// <summary>
            /// get charts data for workbench
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="lstSuppliers"></param>
            /// <param name="currency"></param>
            /// <returns></returns>
            Task<IEnumerable<JToken>> GetChartsDataAsync(string documentId, IEnumerable<JToken> lstSuppliers, string currency);
    
            /// <summary>
            /// Get supplier attachment count
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="partnerCodes"></param>
            /// <returns></returns>
            Task<Dictionary<long, long>> GetSupplierAttachmentsCountAsync(string documentId, List<long> partnerCodes);
    
            /// <summary>
            /// Get Supplier Summary datarows
            /// </summary>
            /// <param name="documentId"></param>
            /// <returns></returns>
            Task<IEnumerable<JToken>> GetSupplierSummaryDataRowsAsync(string documentId);
    
            /// <summary>
            /// Get response summary for a pricesheet
            /// </summary>
            /// <param name="documentId"></param>
            /// <returns></returns>
            Task<JToken> GetResponseSummaryAsync(string documentId);
    
            /// <summary>
            /// Get Finalised/Default score card
            /// </summary>
            /// <param name="documentId"></param>
            /// <returns></returns>
            Task<JObject> GetFinalisedScoreCardAsync(string documentId);
    
            /// <summary>
            /// get summary details for workbench
            /// </summary>
            /// <param name="documentId"></param>
            /// <returns></returns>
            Task<JObject> GetSummaryDetailsExternalAsync(string documentId);
            #endregion
    
        }
    }
    
    
    `, 
    "3-01": `namespace Leo.RFxPricesheetV2.Core.Utilities
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
    }
    `, 
    "3-02": `namespace Leo.RFxPricesheetV2.Core.Utilities
    {
        using Leo.RFxCommonV2.Constants;
        using Leo.RFxCommonV2.Extensions;
        using Leo.RFxPricesheetV2.Core.Constants;
        using Newtonsoft.Json.Linq;
        using System;
        using System.Collections.Generic;
        using System.Diagnostics.CodeAnalysis;
        using System.Linq;
        using System.Threading.Tasks;
    
        /// <summary>
        /// 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class DatarowExtension
        {
            /// <summary>
            /// list of fixed fields names for datarows
            /// </summary>
            public readonly static string[] DataRowFixedFields = new string[] {
                    FieldNames.sourceId,
                    FieldConstants.s_name,
                    FieldConstants.currentStageLineNumber,
                    FieldConstants.previousStageLineNumber,
                    FieldConstants.linkedToLine,
                    FieldNames.rootId,
                    FieldNames.isDirty,
                    FieldConstants.rowHierarchy,
                    FieldConstants.linkedMasterRowId,
                    FieldConstants.s_currency,
                    FieldConstants.s_quotingCurrency,
                    FieldConstants.s_exchange,
                    FieldConstants.s_pstatus,
                    FieldConstants.rowSource,
                    DocumentConstants._id,
                    FieldNames.documentId,
                    FieldConstants.rowType,
                    FieldNames.priceSheetId,
                    FieldConstants.referenceRow,
                    FieldNames.isAutoSum,
                    FieldConstants.s_id,
                    FieldNames.sequence,
                    FieldConstants._schemaver,
                    FieldConstants.location,
                    FieldConstants.bpc,
                    FieldConstants.columnValues,
                    FieldConstants.formattingData,
                    FieldNames.createdOn,
                    FieldNames.modifiedOn,
                    FieldNames.createdBy,
                    FieldNames.modifiedBy,
                    FieldConstants.timeStamp,
                    FieldNames.auditFields,
                    FieldNames.root_id,
                    FieldNames.parent_id
                    };
    
            /// <summary>
            /// For every datarow, gathers fields other that datarowFixedFields inside columnValues
            /// </summary>
            /// <param name="datarows"></param>
            public static IEnumerable<JObject> NestOtherValuesInCollection(this IEnumerable<JToken> datarows)
            {
                var nestedDatarows = new List<JObject>();
                foreach (var datarow in datarows)
                {
                    var nestedDatarow = datarow.NestOtherValues(FieldConstants.columnValues, DataRowFixedFields) as JObject;
                    if (nestedDatarow == null) continue;
                    nestedDatarows.Add(nestedDatarow);
                }
    
                return nestedDatarows;
            }
    
            /// <summary>
            /// For every datarow, gathers fields other that datarowFixedFields inside columnValues
            /// </summary>
            /// <param name="datarows"></param>
            public static JArray NestOtherValuesInCollection(this JArray datarows)
            {
                var nestedDatarows = new JArray();
                foreach (var datarow in datarows)
                {
                    var nestedDatarow = datarow.NestOtherValues(FieldConstants.columnValues, DataRowFixedFields);
                    if (nestedDatarow == null) continue;
                    nestedDatarows.Add(nestedDatarow);
                }
    
                return nestedDatarows;
            }
    
    
    
            /// <summary>
            /// Extracts values from columnValues field and adds those values at root level in data
            /// </summary>
            /// <param name="datarows"></param>
            public static IEnumerable<JToken> FlattenValuesInCollection(this IEnumerable<JToken> datarows)
            {
                var flattenedDatarows = new List<JToken>();
                foreach (var datarow in datarows)
                {
                    var flatDatarow = datarow.FlattenValues(FieldConstants.columnValues);
                    if (flatDatarow == null) continue;
                    flattenedDatarows.Add(flatDatarow);
                }
    
                return flattenedDatarows;
            }
    
            /// <summary>
            /// Extracts values from columnValues field and adds those values at root level in data
            /// </summary>
            /// <param name="datarows"></param>
            public static JArray FlattenValuesInCollection(this JArray datarows)
            {
                var flattenedDatarows = new JArray();
                foreach (var datarow in datarows)
                {
                    var flatDatarow = datarow.FlattenValues(FieldConstants.columnValues);
                    if (flatDatarow == null) continue;
                    flattenedDatarows.Add(flatDatarow);
                }
    
                return flattenedDatarows;
            }
    
            /// <summary>
            /// nested column values under field columnValues
            /// </summary>
            /// <param name="data"></param>
            /// <returns></returns>
            public static JToken NestColumnValues(JToken data)
            {
                return data.NestOtherValues(FieldConstants.columnValues, DataRowFixedFields);
            }
    
            /// <summary>
            /// flattens column values
            /// </summary>
            /// <param name="data"></param>
            /// <returns></returns>
            public static JToken FlattenColumnValues(JToken data)
            {
                return data.FlattenValues(FieldConstants.columnValues);
            }
    
            /// <summary>
            /// Extracts values from nestedName field and adds those values at root level in data
            /// </summary>
            /// <param name="data"></param>
            /// <param name="nestedName"></param>
            public static JToken FlattenValues(this JToken data, string nestedName)
            {
                var json = data as JObject;
                if (json == null) return null;
    
                var flattened = new JObject();
                var props = json.Properties();
    
                foreach (var prop in props)
                {
                    if (prop == null) continue;
                    var name = prop.Name;
                    if (name == nestedName) continue;
                    flattened[name] = prop.Value;
                }
    
                var nestedProperty = json[nestedName] as JObject;
    
                if (nestedProperty != null && nestedProperty.HasValues)
                {
                    props = nestedProperty.Properties();
                    foreach (var prop in props)
                    {
                        if (prop == null) continue;
                        var name = prop.Name;
                        flattened[name] = prop.Value;
                    }
                }
    
                return flattened;
            }
        
            
        }
    }
    `, 
    "3-03": `namespace Leo.RFxPricesheetV2.Core.Utilities
    {
        using Leo.RFxCommonV2.Constants;
        using Leo.RFxCommonV2.Enumerators;
        using Leo.RFxPricesheetV2.Core.Constants;
        using Leo.Security.ClientTokenManager.Library;
        using Newtonsoft.Json.Linq;
        using System;
        using System.Diagnostics.CodeAnalysis;
    
        /// <summary>
        /// Default Data Rows
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class DefaultDataRows
        {
            /// <summary>
            /// Create Default Pricesheet Summary Data Row Instance
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="priceSheetId"></param>
            /// <param name="supplierName"></param>
            /// <param name="currency"></param>
            /// <param name="userExecutionContext"></param>
            /// <returns></returns>
            public static JObject GetPricesheetSummaryDataRow
            (
                string documentId,
                string priceSheetId,
                string supplierName,
                string currency,
                UserExecutionContext userExecutionContext
            )
            {
                return new JObject()
                {
                    { DocumentConstants.documentId, documentId },
                    { FieldNames.priceSheetId, priceSheetId },
                    { FieldConstants.rowType, (int)DataRowType.PriceSheetSummary },
                    { FieldConstants.s_id, userExecutionContext.SupplierPartnerCode },
                    { FieldNames.isDirty, false },
                    { FieldConstants.s_exchange, 0.0 },
                    { FieldConstants.rowSource, 1 },
                    { FieldNames.isAutoSum, false },
                    { FieldNames.createdOn, DateTime.UtcNow },
                    { FieldNames.modifiedOn, DateTime.UtcNow },
                    { FieldConstants.bpc, userExecutionContext.BuyerPartnerCode },
                    { FieldConstants._schemaver, "1" },
                    {
                        FieldConstants.columnValues,
                        new JObject
                        {
                            { "v3", supplierName },
                            { "v4", currency },
                            { "v15", userExecutionContext.SupplierPartnerCode }
                        }
                    }
                };
            }
    
            /// <summary>
            /// Create Default Response Summary Data Row Instance
            /// </summary>
            /// <param name="documentId"></param>
            /// <param name="supplierName"></param>
            /// <param name="currency"></param>
            /// <param name="userExecutionContext"></param>
            /// <returns></returns>
            public static JObject GetResponseSummaryDataRow
            (
                string documentId,
                string supplierName,
                string currency,
                UserExecutionContext userExecutionContext
            )
            {
                return new JObject
                {
                    { DocumentConstants.documentId, documentId },
                    { FieldConstants.rowType, (int)DataRowType.ResponseSummary },
                    { FieldConstants.s_id, userExecutionContext.SupplierPartnerCode },
                    { FieldNames.isAutoSum, false },
                    { FieldConstants.bpc, userExecutionContext.BuyerPartnerCode },
                    { FieldConstants._schemaver, "1" },
                    {
                        FieldConstants.columnValues,
                        new JObject
                        {
                            { "v1", supplierName },
                            { "v5", currency },
                            { "v13", userExecutionContext.SupplierPartnerCode }
                        }
                    }
                };
            }
        }
    }`, 
    "3-04": `namespace Leo.RFxPricesheetV2.Core.Utilities
    {
        using Leo.RFxCommonV2.Constants;
        using Leo.RFxCommonV2.Extensions;
        using Leo.RFxPricesheetV2.Core.Constants;
        using Newtonsoft.Json.Linq;
        using System;
        using System.Collections.Generic;
        using System.Text;
    
        /// <summary>
        /// This class create the default event response columns
        /// </summary>
        [System.Diagnostics.CodeAnalysis.ExcludeFromCodeCoverage]
        public static class DefaultEventColumns
        {
            /// <summary>
            /// Get colums for response columns schema 
            /// </summary>
            /// <returns></returns>
            public static List<JToken> GetEventResponseColumns(string currency, int decimalResolution, bool mandatoryBaselinePPU)
            {
                decimalResolution = decimalResolution == 0 ? 2 : decimalResolution;
    
                var columns = new List<JToken> {
                    GetSupplierName(),
                    GetEventCurrency(currency),
                    GetBaselineSpend(currency),
                    GetSupplierSpendCoverage(currency) ,
                    GetSupplierSpendCoveragePer(),
                    GetSupplierLineCoveragePer(),
                    GetSupplierPrice(decimalResolution),
                    GetSavings(decimalResolution,mandatoryBaselinePPU),
                    GetSavingsPer(decimalResolution),
                    GetSupplierId()
                };
    
                if (mandatoryBaselinePPU)
                {
                    columns.Add(GetSupplierPriceExcludingBaselineZeroColumn());
                }
    
                return columns;
            }
    
            /// <summary>
            /// Get supplier name column
            /// </summary>
            /// <returns></returns>
            public static JToken GetSupplierName()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        EventResponseColumnNames.SupplierName,
                        "v1"
                    );
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                column[FieldNames.settings] = columnSettings;
                return column;
            }
    
            /// <summary>
            /// Get EventScore
            /// </summary>
            /// <returns></returns>
            public static JToken GetEventScore()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        EventResponseColumnNames.EventScore,
                        "v2"
                    );
                column[FieldNames.type] = ColumnTypes.NUMERIC;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                column[FieldNames.settings] = columnSettings;
                return column;
            }
    
            /// <summary>
            /// Get OverallQuestionnaireScore
            /// </summary>
            /// <returns></returns>
            public static JToken GetOverallQuestionnaireScore()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        EventResponseColumnNames.OverallQuestionnaireScore,
                        "v3"
                    );
                column[FieldNames.type] = ColumnTypes.NUMERIC;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                column[FieldNames.settings] = columnSettings;
                return column;
            }
    
            /// <summary>
            /// Get OverallPriceSheetScore
            /// </summary>
            /// <returns></returns>
            public static JToken GetOverallPriceSheetScore()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        EventResponseColumnNames.OverallPriceSheetScore,
                        "v4"
                    );
                column[FieldNames.type] = ColumnTypes.NUMERIC;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                column[FieldNames.settings] = columnSettings;
                return column;
            }
    
            /// <summary>
            /// Get EventCurrency
            /// </summary>
            /// <returns></returns>
            public static JToken GetEventCurrency(string currency)
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        EventResponseColumnNames.EventCurrency,
                        "v5"
                    );
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.bindingCurrency] = currency;
                column[FieldNames.settings] = columnSettings;
                return column;
            }
    
            /// <summary>
            /// Get BaselineSpend
            /// </summary>
            /// <returns></returns>
            public static JToken GetBaselineSpend(string currency)
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        EventResponseColumnNames.BaselineSpend,
                        "v6"
                    );
                column[FieldNames.type] = ColumnTypes.CURRENCY;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.bindingCurrency] = currency;
                column[FieldNames.settings] = columnSettings;
                return column;
            }
    
            /// <summary>
            /// Get SupplierSpendCoverage
            /// </summary>
            /// <returns></returns>
            public static JToken GetSupplierSpendCoverage(string currency)
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        EventResponseColumnNames.SupplierSpendCoverage,
                        "v7"
                    );
                column[FieldNames.type] = ColumnTypes.CURRENCY;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                columnSettings[FieldNames.bindingCurrency] = currency;
                column[FieldNames.settings] = columnSettings;
                return column;
            }
    
            /// <summary>
            /// Get SupplierSpendCoveragePer
            /// </summary>
            /// <returns></returns>
            public static JToken GetSupplierSpendCoveragePer()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        EventResponseColumnNames.SupplierSpendCoveragePer,
                        "v8"
                    );
                column[FieldNames.type] = ColumnTypes.COMPUTED;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                columnSettings[FieldNames.formula] = "(Supplier Spend Coverage/Baseline Spend)*100";
                columnSettings[FieldNames.postfix] = "%";
                columnSettings.SetNestedValue(FieldNames.formulaBuffer, new List<string>
                        {
                            "(",
                            "v7",
                            "/",
                            "v6",
                            ")",
                            "*",
                            "100"
                        });
                column[FieldNames.settings] = columnSettings;
                return column;
            }
    
            /// <summary>
            /// Get SupplierLineCoveragePer
            /// </summary>
            /// <returns></returns>
            public static JToken GetSupplierLineCoveragePer()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        EventResponseColumnNames.SupplierLineCoveragePer,
                        "v9"
                    );
                column[FieldNames.type] = ColumnTypes.NUMERIC;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                columnSettings[FieldNames.postfix] = "%";
                column[FieldNames.settings] = columnSettings;
                return column;
            }
    
            /// <summary>
            /// Get SupplierPrice
            /// </summary>
            /// <returns></returns>
            public static JToken GetSupplierPrice(int decimalResolution)
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        EventResponseColumnNames.SupplierPrice,
                        "v10"
                    );
                column[FieldNames.type] = ColumnTypes.NUMERIC;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                columnSettings[FieldNames.decimalPoints] = decimalResolution;
                column[FieldNames.settings] = columnSettings;
                return column;
            }
    
            /// <summary>
            /// Get Savings
            /// </summary>
            /// <returns></returns>
            public static JToken GetSavings(int decimalResolution, bool MandatoryBaselinePPU)
            {
                string formula = "(Supplier Spend Coverage - Supplier Price)";
                List<string> formulaBuffer = new List<string>
                        {
                            "(",
                            "v7",
                            "-",
                            "v10",
                            ")"
                        };
    
                if (MandatoryBaselinePPU)
                {
                    formula = "(Supplier Spend Coverage - Supplier Price Excluding Baseline Zero)";
                    formulaBuffer = new List<string> { "(", "v7", "-", "supplierPriceExcludingBaselineZero", ")" };
                }
    
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        EventResponseColumnNames.Savings,
                        "v11"
                    );
                column[FieldNames.type] = ColumnTypes.COMPUTED;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                columnSettings[FieldNames.formula] = formula;
                columnSettings.SetNestedValue(FieldNames.formulaBuffer, formulaBuffer);
                columnSettings[FieldNames.decimalPoints] = decimalResolution;
                column[FieldNames.settings] = columnSettings;
                return column;
            }
    
            /// <summary>
            /// Get SavingsPer
            /// </summary>
            /// <returns></returns>
            public static JToken GetSavingsPer(int decimalResolution)
            {
                var formula = "(Savings/Supplier Spend Coverage)*100";
                var formulaBuffer = new List<string>
                        {
                            "(",
                            "v11",
                            "/",
                            "v7",
                            ")",
                            "*",
                            "100"
                        };
    
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        EventResponseColumnNames.SavingsPer,
                        "v12"
                    );
                column[FieldNames.type] = ColumnTypes.COMPUTED;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                columnSettings[FieldNames.postfix] = "%";
                columnSettings[FieldNames.formula] = formula;
                columnSettings.SetNestedValue(FieldNames.formulaBuffer, formulaBuffer);
                columnSettings[FieldNames.decimalPoints] = decimalResolution;
                column[FieldNames.settings] = columnSettings;
                return column;
            }
    
            /// <summary>
            /// Get SupplierId
            /// </summary>
            /// <returns></returns>
            public static JToken GetSupplierId()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        EventResponseColumnNames.SupplierId,
                        "v13"
                    );
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                column[FieldNames.settings] = columnSettings;
                return column;
            }
    
            /// <summary>
            /// Get SupplierPriceExcludingBaselineZeroColumn
            /// </summary>
            /// <returns></returns>
            public static JToken GetSupplierPriceExcludingBaselineZeroColumn()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        EventResponseColumnNames.SupplierPriceExcludingBaselineZero,
                        "supplierPriceExcludingBaselineZero"
                    );
                column[FieldNames.type] = ColumnTypes.NUMERIC;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                column[FieldNames.settings] = columnSettings;
                return column;
            }
    
            /// <summary>
            /// Get is shortlisted for commercial response
            /// </summary>
            /// <returns></returns>
            public static JToken GetIsShortlistedForCommercialResponse()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        EventResponseColumnNames.ShortlistedForCommercial,
                        "shortlistedForCommercial"
                    );
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                column[FieldNames.settings] = columnSettings;
                return column;
            }
    
            /// <summary>
            /// get supplier columns for contract creation
            /// </summary>
            /// <param name="currency"></param>
            /// <returns></returns>
            public static List<JToken> GetSupplierColumnsForContractCreation(string currency)
            {
                int decimalResolution = 2;
    
                var columns = new List<JToken> {
                    GetSupplierName(),
                    GetSupplierSupplierStatus(),
                    GetSupplierSpendCoverage(currency),
                    GetSupplierLineCoveragePer(),
                    GetSupplierPrice(decimalResolution),
                    GetSavingsPer(decimalResolution)
                };
    
                return columns;
            }
    
            /// <summary>
            /// Get supplier status column
            /// </summary>
            /// <returns></returns>
            private static JToken GetSupplierSupplierStatus()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        "Supplier Status",
                        "s_pstatus"
                    );
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                column[FieldNames.settings] = columnSettings;
                return column;
            }
    
            /// <summary>
            /// get my evaluation column
            /// </summary>
            /// <returns></returns>
            public static JToken GetAcceptablAndNonAcceptable()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        PriceSheetResponseColumnNames.MyEvaluation,
                        "myEvaluation"
                    );
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                column[FieldNames.settings] = columnSettings;
                return column;
            }
        }
    }
    `, 
    "3-05": `namespace Leo.RFxPricesheetV2.Core.Utilities
    {
        using Leo.RFxCommonV2.Constants;
        using Leo.RFxCommonV2.Extensions;
        using Leo.RFxPricesheetV2.Core.Constants;
        using Newtonsoft.Json.Linq;
        using System;
        using System.Collections.Generic;
        using System.Text;
    
        /// <summary>
        /// utility class for default response columns
        /// </summary>
        [System.Diagnostics.CodeAnalysis.ExcludeFromCodeCoverage]
        public static class DefaultResponseColumns
        {
            #region Response Columns
            /// <summary>
            /// get response columns
            /// </summary>
            /// <returns></returns>
            public static List<JToken> GetResponseColumns()
            {
                return new List<JToken> {
                    GetSupplierName(),
                    GetPriceSheetCurrency(),
                    GetBaselineSpend(),
                    GetSupplierSpendCoverage(),
                    GetSupplierSpendCoveragePer(),
                    GetTotalItemsByLines(),
                    GetItemByLineCoverage(),
                    GetItemByLineCoveragePer(),
                    GetSupplierPrice(),
                    GetSavings(),
                    GetSavingsPer(),
                    GetSupplierId()
                };
            }
    
            /// <summary>
            /// Get SupplierName
            /// </summary>
            /// <returns></returns>
            private static JToken GetSupplierName()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        PriceSheetColumnNames.SupplierName,
                        "v3"
                    );
                column[FieldConstants.localeKey] = PriceSheetLocaleKeys.SupplierName;
                column[FieldNames.isApplicationCreated] = true;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                column[FieldNames.settings] = columnSettings;
    
                return column;
            }
    
            /// <summary>
            /// Get PriceSheetCurrency
            /// </summary>
            /// <returns></returns>
            private static JToken GetPriceSheetCurrency()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        PriceSheetColumnNames.PriceSheetCurrency,
                        "v4"
                    );
                column[FieldConstants.localeKey] = PriceSheetLocaleKeys.PriceSheetCurrency;
                column[FieldNames.isApplicationCreated] = true;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                column[FieldNames.settings] = columnSettings;
    
                return column;
            }
    
            /// <summary>
            /// Get PriceSheetScore
            /// </summary>
            /// <returns></returns>
            public static JToken GetTotalPriceSheetScore()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        PriceSheetColumnNames.TotalPriceSheetScore,
                        "v5"
                    );
                column[FieldConstants.localeKey] = PriceSheetLocaleKeys.TotalPriceSheetScore;
                column[FieldNames.type] = ColumnTypes.NUMERIC;
                column[FieldNames.isApplicationCreated] = true;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                column[FieldNames.settings] = columnSettings;
    
                return column;
            }
    
            /// <summary>
            /// Get BaselineSpend
            /// </summary>
            /// <returns></returns>
            private static JToken GetBaselineSpend()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        PriceSheetColumnNames.BaselineSpend,
                        "v6"
                    );
                column[FieldConstants.localeKey] = PriceSheetLocaleKeys.BaseLineSpend;
                column[FieldNames.type] = ColumnTypes.CURRENCY;
                column[FieldNames.isApplicationCreated] = true;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                columnSettings[FieldNames.isAutoSum] = true;
    
                column[FieldNames.settings] = columnSettings;
    
                return column;
            }
    
            /// <summary>
            /// Get SupplierSpendCoverage
            /// </summary>
            /// <returns></returns>
            private static JToken GetSupplierSpendCoverage()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        PriceSheetColumnNames.SupplierSpendCoverage,
                        "v7"
                    );
                column[FieldConstants.localeKey] = PriceSheetLocaleKeys.SupplierSpendCoverage;
                column[FieldNames.type] = ColumnTypes.CURRENCY;
                column[FieldNames.isApplicationCreated] = true;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                column[FieldNames.settings] = columnSettings;
    
                return column;
            }
    
            /// <summary>
            /// Get SupplierSpendCoveragePer
            /// </summary>
            /// <returns></returns>
            private static JToken GetSupplierSpendCoveragePer()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        PriceSheetColumnNames.SupplierSpendCoveragePer,
                        "v8"
                    );
                column[FieldConstants.localeKey] = PriceSheetLocaleKeys.SupplierSpendCoveragePer;
                column[FieldNames.type] = ColumnTypes.COMPUTED;
                column[FieldNames.isApplicationCreated] = true;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                columnSettings[FieldNames.formula] = "(Supplier Spend Coverage/Baseline Spend)*100";
                columnSettings[FieldNames.postfix] = "%";
                columnSettings.SetNestedValue(FieldNames.formulaBuffer, new List<string>
                        {
                            "(",
                            "v7",
                            "/",
                            "v6",
                            ")",
                            "*",
                            "100"
                        });
                column[FieldNames.settings] = columnSettings;
    
                return column;
            }
    
            /// <summary>
            /// Get TotalItemsByLines
            /// </summary>
            /// <returns></returns>
            private static JToken GetTotalItemsByLines()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        PriceSheetColumnNames.TotalItemsByLines,
                        "v9"
                    );
                column[FieldConstants.localeKey] = PriceSheetLocaleKeys.TotalItems;
                column[FieldNames.type] = ColumnTypes.NUMERIC;
                column[FieldNames.isApplicationCreated] = true;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                column[FieldNames.settings] = columnSettings;
    
                return column;
            }
    
            /// <summary>
            /// Get ItemByLineCoverage
            /// </summary>
            /// <returns></returns>
            private static JToken GetItemByLineCoverage()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        PriceSheetColumnNames.ItemByLineCoverage,
                        "v10"
                    );
                column[FieldConstants.localeKey] = PriceSheetLocaleKeys.ItemCoverage;
                column[FieldNames.type] = ColumnTypes.NUMERIC;
                column[FieldNames.isApplicationCreated] = true;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                column[FieldNames.settings] = columnSettings;
    
                return column;
            }
    
            /// <summary>
            /// Get ItemByLineCoveragePer
            /// </summary>
            /// <returns></returns>
            private static JToken GetItemByLineCoveragePer()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        PriceSheetColumnNames.ItemByLineCoveragePer,
                        "v11"
                    );
                column[FieldConstants.localeKey] = PriceSheetLocaleKeys.ItemCoveragePer;
                column[FieldNames.type] = ColumnTypes.COMPUTED;
                column[FieldNames.isApplicationCreated] = true;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                columnSettings[FieldNames.formula] = "(Item Coverage/Total Items)*100";
                columnSettings[FieldNames.postfix] = "%";
                columnSettings.SetNestedValue(FieldNames.formulaBuffer, new List<string>
                        {
                            "(",
                            "v10",
                            "/",
                            "v9",
                            ")",
                            "*",
                            "100"
                        });
                column[FieldNames.settings] = columnSettings;
    
                return column;
            }
    
            /// <summary>
            /// Get SupplierPrice
            /// </summary>
            /// <returns></returns>
            private static JToken GetSupplierPrice()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        PriceSheetColumnNames.SupplierPrice,
                        "v12"
                    );
                column[FieldConstants.localeKey] = PriceSheetLocaleKeys.SupplierPrice;
                column[FieldNames.type] = ColumnTypes.CURRENCY;
                column[FieldNames.isApplicationCreated] = true;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                columnSettings[FieldNames.decimalPoints] = 2;
                column[FieldNames.settings] = columnSettings;
    
                return column;
            }
    
            /// <summary>
            /// Get Savings
            /// </summary>
            /// <returns></returns>
            private static JToken GetSavings()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        PriceSheetColumnNames.Savings,
                        "v13"
                    );
                column[FieldConstants.localeKey] = PriceSheetLocaleKeys.Savings;
                column[FieldNames.type] = ColumnTypes.COMPUTED;
                column[FieldNames.isApplicationCreated] = true;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                columnSettings[FieldNames.formula] = "(Supplier Spend Coverage - Supplier Price)";
                columnSettings[FieldNames.hasDecimal] = true;
                columnSettings[FieldNames.decimalPoints] = 2;
                columnSettings.SetNestedValue(FieldNames.formulaBuffer, new List<string>
                        {
                            "(",
                            "v7" ,
                            "-",
                            "v12",
                            ")"
                        });
                column[FieldNames.settings] = columnSettings;
    
                return column;
            }
    
            /// <summary>
            /// Get SavingsPer
            /// </summary>
            /// <returns></returns>
            private static JToken GetSavingsPer()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        PriceSheetColumnNames.SavingsPer,
                        "v14"
                    );
                column[FieldConstants.localeKey] = PriceSheetLocaleKeys.SavingsPer;
                column[FieldNames.type] = ColumnTypes.COMPUTED;
                column[FieldNames.isApplicationCreated] = true;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                columnSettings[FieldNames.formula] = "(Savings/Supplier Spend Coverage)*100";
                columnSettings[FieldNames.postfix] = "%";
                columnSettings[FieldNames.decimalPoints] = 2;
                columnSettings.SetNestedValue(FieldNames.formulaBuffer, new List<string>
                        {
                            "(",
                            "v13",
                            "/",
                            "v7",
                            ")",
                            "*",
                            "100"
                        });
                column[FieldNames.settings] = columnSettings;
    
                return column;
            }
    
            /// <summary>
            /// Get SupplierId
            /// </summary>
            /// <returns></returns>
            private static JToken GetSupplierId()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        PriceSheetColumnNames.SupplierId,
                        "v15"
                    );
                column[FieldConstants.localeKey] = PriceSheetLocaleKeys.SupId;
                column[FieldNames.type] = ColumnTypes.NUMERIC;
                column[FieldNames.isApplicationCreated] = true;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                column[FieldNames.settings] = columnSettings;
    
                return column;
            }
    
            /// <summary>
            /// Get OverallScore
            /// </summary>
            /// <returns></returns>
            private static JToken GetOverallScore()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        PriceSheetColumnNames.OverallScore,
                        "v16"
                    );
                column[FieldConstants.localeKey] = PriceSheetLocaleKeys.Overallscore;
                column[FieldNames.type] = ColumnTypes.NUMERIC;
                column[FieldNames.isApplicationCreated] = true;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                column[FieldNames.settings] = columnSettings;
    
                return column;
            }
    
            /// <summary>
            /// Get SupplierPriceExcludingBaselineZeroColumn
            /// </summary>
            /// <returns></returns>
            public static JToken GetSupplierPriceExcludingBaselineZeroColumn()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(
                        PriceSheetColumnNames.SupplierPriceExcludingBaselineZero, 
                        PriceSheetColumnNames.SupplierPriceExcludingBaselineZeroVirtualId
                    );
                column[FieldNames.type] = ColumnTypes.NUMERIC;
                column[FieldNames.isApplicationCreated] = true;
                column[FieldNames.isVisibleToSupplier] = false;
                column[FieldNames.allowSupplierInput] = false;
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                columnSettings[FieldNames.textAlignment] = TextAlignments.Right;
                column[FieldNames.settings] = columnSettings;
    
                return column;
            }
            #endregion
        }
    }
    `, 
    "3-06": `namespace Leo.RFxPricesheetV2.Core.Utilities
    {
        using Leo.RFxCommonV2.Constants;
        using Leo.RFxCommonV2.Enumerators;
        using Leo.RFxCommonV2.Extensions;
        using Leo.RFxPricesheetV2.Core.Constants;
        using Newtonsoft.Json.Linq;
        using System.Collections.Generic;
        using System.Diagnostics.CodeAnalysis;
        using System.Linq;
    
        /// <summary>
        /// Price Sheet Default Columns
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class PriceSheetDefaultColumns
        {
            /// <summary>
            /// Return a list of default columns for material pricesheet
            /// </summary>
            /// <returns></returns>
            public static List<JObject> GetDefaultMaterialPSColumns()
            {
                var itemNameColumn = GetItemNameColumn();
                var itemNumberColumn = GetItemNumberColumn();
    
                var columns = new List<JObject>()
                {
                    itemNameColumn,
                    itemNumberColumn
                };
                columns.AddRange(GetCommonColumns());
                return columns;
            }
    
            /// <summary>
            /// Get default columns for service pricesheet
            /// </summary>
            /// <returns></returns>
            public static List<JObject> GetDefaultServicePSColumns()
            {
                var roleColumn = GetRoleColumn();
                var descriptionColumn = GetDescriptionColumn();
    
                var columns = new List<JObject>
                {
                    roleColumn,
                    descriptionColumn
                };
                columns.AddRange(GetCommonColumns());
                return columns;
            }
    
            /// <summary>
            /// 
            /// </summary>
            /// <returns></returns>
            public static List<JObject> GetCommonColumns()
            {
                var volumnColumn = GetVolumnColumn();
                var unitColumn = GetUnitColumn();
                var bppuColumn = GetBPPUColumn();
                var totalBaselinePriceColumn = GetTotalBaselinePriceColumn();
                var ppuColumn = GetPPUColumn();
                var totalPriceColumn = GetTotalPriceColumn();
    
                var commonColumns = new List<JObject>() {
                    volumnColumn,
                    unitColumn,
                    bppuColumn,
                    totalBaselinePriceColumn,
                    ppuColumn,
                    totalPriceColumn
                };
    
                return commonColumns;
            }
    
            /// <summary>
            /// get default item status column
            /// </summary>
            /// <returns></returns>
            public static JObject GetItemStatusColumn()
            {
                return new JObject()
                {
                    { "name", PriceSheetColumnNames.ItemStatus },
                    { "type", /*ColumnTypes.ICON*/"Icon" },
                    { "virtualId", "P0V0" },
                    { "editable", false }
                };
            }
    
            #region Material Columns
    
            private static JObject GetItemNameColumn()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(StandardColumnNames.ItemName, "v1");
    
                column[FieldNames.isMandatoryEnabled] = true;
                column[FieldNames.isVisibleToSupplier] = true;
                column[FieldNames.isVisibleToSupplierEnabled] = true;
                column[FieldNames.sequence] = 1;
    
                return column;
            }
    
            private static JObject GetItemNumberColumn()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(StandardColumnNames.ItemNmber, "v2");
    
                column[FieldNames.isMandatoryEnabled] = true;
                column[FieldNames.isVisibleToSupplier] = true;
                column[FieldNames.isVisibleToSupplierEnabled] = true;
                column[FieldNames.sequence] = 2;
    
                return column;
            }
    
            #endregion
    
            #region Service Columns
    
            private static JObject GetRoleColumn()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(StandardColumnNames.Role, "v1");
    
                column[FieldNames.isMandatoryEnabled] = true;
                column[FieldNames.isVisibleToSupplier] = true;
                column[FieldNames.isVisibleToSupplierEnabled] = true;
                column[FieldNames.sequence] = 1;
    
                return column;
            }
    
            private static JObject GetDescriptionColumn()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(StandardColumnNames.Description, "v2");
    
                column[FieldNames.isMandatoryEnabled] = true;
                column[FieldNames.isVisibleToSupplier] = true;
                column[FieldNames.isVisibleToSupplierEnabled] = true;
                column[FieldNames.sequence] = 2;
    
                return column;
            }
    
            #endregion
    
            #region Common Columns
    
            private static JObject GetVolumnColumn()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(StandardColumnNames.Volumn, "v3");
    
                column[FieldNames.type] = ColumnTypes.NUMERIC;
                column[FieldNames.isMandatoryEnabled] = true;
                column[FieldNames.isVisibleToSupplier] = true;
                column[FieldNames.isVisibleToSupplierEnabled] = true;
                column[FieldNames.settings] = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                column[FieldNames.settings][FieldNames.decimalPoints] = 0;
                column[FieldNames.formatting] = PricesheetDefaultModels.CreateDefaultColumnFormattingModel();
                column[FieldNames.formatting][FieldNames.formatNo] = 1;
                column[FieldNames.sequence] = 3;
    
                return column;
            }
    
            private static JObject GetUnitColumn()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(StandardColumnNames.Unit, "v4");
    
                column[FieldNames.type] = ColumnTypes.DROPDOWN;
                column[FieldNames.isMandatoryEnabled] = true;
                column[FieldNames.isVisibleToSupplier] = true;
                column[FieldNames.isVisibleToSupplierEnabled] = true;
                column[FieldNames.settings] = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
                column.SetNestedValue($"{FieldNames.settings}.{FieldNames.dropdownData}", new List<object>());
                column.SetNestedValue($"{FieldNames.settings}.{FieldNames.dropDownValue}", string.Empty);
                column[FieldNames.formatting] = PricesheetDefaultModels.CreateDefaultColumnFormattingModel();
                column[FieldNames.sequence] = 4;
    
                return column;
            }
    
            private static JObject GetBPPUColumn()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(StandardColumnNames.BPPU, "v5");
    
                column[FieldNames.type] = ColumnTypes.CURRENCY;
                column[FieldNames.isMandatoryEnabled] = true;
                column[FieldNames.settings][FieldNames.decimalPoints] = 2;
                column[FieldNames.sequence] = 5;
    
                return column;
            }
    
            private static JObject GetTotalBaselinePriceColumn()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(StandardColumnNames.TotalBaselinePrice, "v6");
    
                column[FieldNames.type] = ColumnTypes.COMPUTED;
                column[FieldNames.isAllowSupplierInputEnabled] = false;
                var columnSettings = GetComputedColumnSettings(new List<string> { "(", "v3", "*", "v5", ")" }, "(Volume*Baseline price per unit)");
                column.SetNestedValue(FieldNames.settings, columnSettings);
                column[FieldNames.sequence] = 6;
    
                return column;
            }
    
            private static JObject GetPPUColumn()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(StandardColumnNames.PPU, "v7");
    
                column[FieldNames.type] = ColumnTypes.CURRENCY;
                column[FieldNames.isMandatoryEnabled] = true;
                column[FieldNames.allowSupplierInput] = true;
                column[FieldNames.isVisibleToSupplier] = true;
                column[FieldNames.isVisibleToSupplierEnabled] = true;
                column.SetNestedValue($"{FieldNames.settings}.{FieldNames.hasDecimal}", true);
                column.SetNestedValue($"{FieldNames.settings}.{FieldNames.isAutoSum}", false);
                column.SetNestedValue($"{FieldNames.settings}.{FieldNames.decimalPoints}", 2);
                column.SetNestedValue($"{FieldNames.settings}.{FieldNames.textAlignment}", "right");
                column.SetNestedValue($"{FieldNames.settings}.{FieldNames.bindingCurrency}", "USD");
                column[FieldNames.sequence] = 7;
    
                return column;
            }
    
            private static JObject GetTotalPriceColumn()
            {
                var column = PricesheetDefaultModels.CreateDefaultColumnModel(StandardColumnNames.TotalPrice, "v8");
    
                column[FieldNames.type] = ColumnTypes.COMPUTED;
                column[FieldNames.isMandatory] = false;
                column[FieldNames.isAllowSupplierInputEnabled] = false;
                column[FieldNames.isVisibleToSupplier] = true;
                column[FieldNames.isVisibleToSupplierEnabled] = true;
                var columnSettings = GetComputedColumnSettings(new List<string> { "(", "v3", "*", "v7", ")" }, "(Volume*Price per unit)");
                column.SetNestedValue(FieldNames.settings, columnSettings);
                column[FieldNames.sequence] = 8;
    
                return column;
            }
    
            #endregion
    
            /// <summary>
            /// Get column settings for computed type columns
            /// </summary>
            /// <param name="formulaBuffer"></param>
            /// <param name="formula"></param>
            /// <returns></returns>
            public static JObject GetComputedColumnSettings(List<string> formulaBuffer, string formula)
            {
                var columnSettings = PricesheetDefaultModels.CreateDeafultColumnSettingsModel();
    
                columnSettings.SetNestedValue(FieldNames.hasDecimal, true);
                columnSettings.SetNestedValue(FieldNames.isAutoSum, true);
                columnSettings.SetNestedValue(FieldNames.formulaBuffer, formulaBuffer);
                columnSettings.SetNestedValue(FieldNames.decimalPoints, 2);
                columnSettings.SetNestedValue(FieldNames.textAlignment, "right");
                columnSettings.SetNestedValue(FieldNames.formula, formula);
    
                return columnSettings;
            }
        }
    
        /// <summary>
        /// Price Sheet Default Post Publish Columns
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class PriceSheetDefaultPostPublishColumns
        {
            /// <summary>
            /// Supplier Columns
            /// </summary>
            /// <returns></returns>
            public static JArray SupplierColumns()
            {
                return new JArray()
                {
                   GetIntendToBid(),
                   GetSupplierId(),
                   GetSupplierName(),
                   GetSupplierExchange(),
                   GetSupplierCurrency()
                };
            }
    
            private static JObject GetIntendToBid()
            {
                return PricesheetDefaultModels.CreateColumnModel
                (
                    virtualId: PriceSheetColumnIds.IntentToBid,
                    name: PriceSheetColumnNames.IntentToBid,
                    type: ColumnTypes.DROPDOWN,
                    isApplicationCreated: true,
                    isVisibleToSupplier: true,
                    isVisibleToSupplierEnabled: true,
                    isMandatory: true,
                    allowSupplierInput: true,
                    isResponseColumn: true,
                    settings: PricesheetDefaultModels.CreateColumnSettings
                    (
                        dropDownValue: "Yes|No",
                        dropDownData: new List<string> { "Yes", "No" },
                        textAlignment: TextAlignments.Left,
                        dropDownType: DropDownTypes.CustomListText
                    )
                );
            }
    
            private static JObject GetSupplierId()
            {
                return PricesheetDefaultModels.CreateColumnModel
                (
                    virtualId: PriceSheetColumnIds.SupplierId,
                    name: PriceSheetColumnNames.SupplierId,
                    type: ColumnTypes.TEXT,
                    isApplicationCreated: true,
                    isResponseColumn: true
                );
            }
    
            private static JObject GetSupplierName()
            {
                return PricesheetDefaultModels.CreateColumnModel
                (
                    virtualId: PriceSheetColumnIds.SupplierName,
                    name: PriceSheetColumnNames.SupplierName,
                    type: ColumnTypes.TEXT,
                    isApplicationCreated: true,
                    visible: true,
                    isResponseColumn: true
                );
            }
    
            private static JObject GetSupplierExchange()
            {
                return PricesheetDefaultModels.CreateColumnModel
                (
                    virtualId: PriceSheetColumnIds.SupplierExchange,
                    name: PriceSheetColumnNames.SupplierExchange,
                    type: ColumnTypes.NUMERIC,
                    isApplicationCreated: true,
                    visible: true,
                    settings: PricesheetDefaultModels.CreateColumnSettings
                    (
                        textAlignment: TextAlignments.Right,
                        decimalPoints: 2
                    )
                );
            }
    
            private static JObject GetSupplierCurrency()
            {
                return PricesheetDefaultModels.CreateColumnModel
                (
                    virtualId: PriceSheetColumnIds.SupplierCurrency,
                    name: PriceSheetColumnNames.SupplierCurrency,
                    type: ColumnTypes.TEXT,
                    isApplicationCreated: true,
                    visible: true
                );
            }
    
            /// <summary>
            /// Analyze Columns
            /// </summary>
            /// <param name="columns"></param>
            /// <param name="isItemLevelMultiCurrency"></param>
            /// <returns></returns>
            public static JArray AnalyzeColumns(JArray columns, bool isItemLevelMultiCurrency = false)
            {
                var totalBaseLinePriceVirtualId = "";
                var totalPriceVirtualId = "";
                var totalPriceDecimalPrecision = 2;
    
                columns.ForEach(column =>
                {
                    switch (column.TextValue(FieldNames.mapTo))
                    {
                        case PriceSheetColumnNames.TotalBaseLinePrice:
                            totalBaseLinePriceVirtualId = column.TextValue(FieldNames.virtualId);
                            break;
                        case PriceSheetColumnNames.TotalPrice:
                            totalPriceVirtualId = column.TextValue(FieldNames.virtualId);
                            var decimalPoints = column.IntValue($"{FieldNames.settings}.{FieldNames.decimalPoints}");
                            totalPriceDecimalPrecision = decimalPoints == 0 ? 2 : decimalPoints;
                            break;
                    }
                });
    
                var savingsColumn = PricesheetDefaultModels.CreateColumnModel
                (
                    type: ColumnTypes.COMPUTED,
                    isApplicationCreated: true,
                    isMandatory: true,
                    isResponseColumn: true,
                    name: PriceSheetColumnNames.Savings,
                    mapTo: PriceSheetColumnNames.Savings,
                    virtualId: PriceSheetColumnIds.Savings,
                    settings: PricesheetDefaultModels.CreateColumnSettings
                    (
                        textAlignment: TextAlignments.Left,
                        decimalPoints: totalPriceDecimalPrecision,
                        formula: GetSavingsFormula(isItemLevelMultiCurrency),
                        formulaBuffer: GetSavingsFormulaBuffer(isItemLevelMultiCurrency, totalBaseLinePriceVirtualId, totalPriceVirtualId)
                    )
                );
    
                var savingsPercentageColumn = PricesheetDefaultModels.CreateColumnModel
                (
                    type: ColumnTypes.COMPUTED,
                    isApplicationCreated: true,
                    isMandatory: true,
                    isResponseColumn: true,
                    name: PriceSheetColumnNames.SavingsPer,
                    mapTo: PriceSheetColumnNames.SavingsPer,
                    virtualId: PriceSheetColumnIds.SavingsPer,
                    settings: PricesheetDefaultModels.CreateColumnSettings
                    (
                        textAlignment: TextAlignments.Left,
                        decimalPoints: totalPriceDecimalPrecision,
                        formula: $"({PriceSheetColumnNames.Savings}/{PriceSheetColumnNames.TotalBaseLinePrice})*100",
                        formulaBuffer: new List<string> { "(", PriceSheetColumnIds.Savings, "/", totalBaseLinePriceVirtualId, ")", "*", "100" }
                    )
                 );
    
                if (string.IsNullOrWhiteSpace(totalBaseLinePriceVirtualId) || string.IsNullOrWhiteSpace(totalPriceVirtualId))
                {
                    savingsColumn.SetNestedValue($"{FieldNames.settings}.{FieldNames.formulaBuffer}", new JArray());
                    savingsPercentageColumn.SetNestedValue($"{FieldNames.settings}.{FieldNames.formulaBuffer}", new JArray());
                }
    
                return new JArray { savingsColumn, savingsPercentageColumn };
            }
    
            private static string GetSavingsFormula(bool isItemLevelMultiCurrency) =>
            isItemLevelMultiCurrency
            ?
            $"({PriceSheetColumnNames.TotalBaseLinePrice}-({PriceSheetColumnNames.TotalPrice} / {PriceSheetColumnNames.SupplierExchange}))"
            :
            $"({PriceSheetColumnNames.TotalBaseLinePrice}-{PriceSheetColumnNames.TotalPrice})";
    
            private static List<string> GetSavingsFormulaBuffer
            (
                bool isItemLevelMultiCurrency,
                string virtualIdForTotalBaseLinePrice,
                string virtualIdForTotalPrice
            ) =>
            isItemLevelMultiCurrency
            ?
            new List<string> { "(", virtualIdForTotalBaseLinePrice, "-", "(", virtualIdForTotalPrice, "/", PriceSheetColumnIds.SupplierExchange, ")", ")" }
            :
            new List<string> { "(", virtualIdForTotalBaseLinePrice, "-", virtualIdForTotalPrice, ")" };
    
            /// <summary>
            /// Get Evaluation Columns
            /// </summary>
            /// <param name="stakeholders"></param>
            /// <param name="documentSettings"></param>
            /// <param name="domainSettings"></param>
            /// <returns></returns>
            public static JArray EvaluationColumns(JArray stakeholders, Dictionary<string, object> documentSettings, Dictionary<string, object> domainSettings)
            {
                var columns = new JArray();
    
                var evaluators = GetEvaluators(stakeholders);
                var enable2BidEnvelope = documentSettings.GetValueOrDefault<bool>(DocumentSettingConstants.TWO_ENVELOPE_BID_EVENT);
                var enableColumnVisibilityOnEvaluationType = domainSettings.GetValueOrDefault<bool>(DomainSettingConstants.ENABLE_COLUMN_VISIBILITY_ON_EVALUATION_TYPE);
    
                columns.Add(GetMyScore(evaluators, documentSettings));
    
                if (enable2BidEnvelope && enableColumnVisibilityOnEvaluationType)
                {
                    columns.Add(GetMyEvaluation(evaluators, "technicalEvaluatorStatus"));
                    columns.Add(GetMyEvaluation(evaluators, "commercialEvaluatorStatus"));
                }
    
                return columns;
            }
    
            private static JObject GetMyScore(IEnumerable<JToken> evaluators, Dictionary<string, object> documentSettings)
            {
                var minRange = documentSettings.GetValueOrDefault<int>(DocumentSettingConstants.MIN_SCORE_RANGE);
                var maxRange = documentSettings.GetValueOrDefault<int>(DocumentSettingConstants.MAX_SCORE_RANGE);
    
                return PricesheetDefaultModels.CreateColumnModel
                (
                    virtualId: "e0",
                    name: PriceSheetColumnNames.EvaluatorScore,
                    type: ColumnTypes.DROPDOWN,
                    editable: true,
                    isApplicationCreated: true,
                    visible: true,
                    isEvaluatorColumn: true,
                    isResponseColumn: true,
                    formatting: new JObject { { FieldNames.formatNo, 4 } },
                    evaluatorMapping: GetEvaluatorColumnMapping(evaluators, "e"),
                    settings: PricesheetDefaultModels.CreateColumnSettings
                    (
                        dropDownType: DropDownTypes.CustomListNumeric,
                        dropDownData: Enumerable.Range(minRange, maxRange - minRange + 1).Select(x => x.ToString()).ToList()
                    )
                );
            }
    
            private static JObject GetMyEvaluation(IEnumerable<JToken> evaluators, string virtualIdPrefix)
            {
                return PricesheetDefaultModels.CreateColumnModel
                (
                    virtualId: $"{virtualIdPrefix}0",
                    name: PriceSheetColumnNames.MyEvaluationStatus,
                    type: ColumnTypes.DROPDOWN,
                    editable: true,
                    isApplicationCreated: true,
                    visible: true,
                    isEvaluatorColumn: true,
                    isResponseColumn: true,
                    formatting: new JObject { { FieldNames.formatNo, 4 } },
                    evaluatorMapping: GetEvaluatorColumnMapping(evaluators, virtualIdPrefix),
                    settings: PricesheetDefaultModels.CreateColumnSettings
                    (
                        dropDownType: DropDownTypes.CustomListText,
                        dropDownData: new List<string> { MyEvaluationStatus.Accceptable, MyEvaluationStatus.NonAccceptable }
                    )
                );
            }
    
            private static List<JObject> GetEvaluatorColumnMapping(IEnumerable<JToken> evaluators, string perfix)
            {
                var counter = 1;
    
                var evaluatorMapping = new List<JObject>();
    
                evaluators.ForEach(evaluator =>
                {
                    evaluatorMapping.Add(new JObject
                    {
                        { FieldNames.contactCode, evaluator.LongValue(DocumentStakeholdersConstants.contactCode) },
                        { FieldNames.evaluatorId, $"{perfix}{counter++}" }
                    });
                });
    
                return evaluatorMapping;
            }
    
            private static IEnumerable<JToken> GetEvaluators(JArray stakeholders)
            {
                return stakeholders.Where(e => e.EnumValue<StakeholderAccessType>(DocumentStakeholdersConstants.evaluationAccess) != StakeholderAccessType.Neutral);
            }
    
            /// <summary>
            /// Get Supplier Item Quoting Column
            /// </summary>
            /// <param name="currencyCode"></param>
            /// <param name="documentSettings"></param>
            /// <returns></returns>
            public static JObject SupplierItemQuotingColumn(string currencyCode, Dictionary<string, object> documentSettings)
            {
                var currencyCodes = new List<string>();
                var currencyList = documentSettings.GetValueOrDefault<JArray>(DocumentSettingConstants.CURRENCY_LIST);
    
                if (currencyList.HasItems())
                {
                    currencyCodes = currencyList.Select(x => x.TextValue(FieldNames.currencyCode)).ToList();
                }
    
                if (string.IsNullOrWhiteSpace(currencyCode))
                {
                    currencyCodes.Add(currencyCode);
                }
    
                return PricesheetDefaultModels.CreateColumnModel
                (
                    virtualId: "s_quotingCurrency",
                    name: PriceSheetColumnNames.SupplierQuotingCurrency,
                    type: ColumnTypes.DROPDOWN,
                    isApplicationCreated: true,
                    isVisibleToSupplier: true,
                    isVisibleToSupplierEnabled: true,
                    isMandatory: true,
                    allowSupplierInput: true,
                    isResponseColumn: true,
                    settings: PricesheetDefaultModels.CreateColumnSettings
                    (
                        dropDownValue: string.Join('|', currencyCodes),
                        dropDownData: currencyCodes.ToList<string>(),
                        textAlignment: TextAlignments.Left,
                        dropDownType: DropDownTypes.CustomListText
                    )
                );
            }
        }
    }`, 
    "3-07": "PricesheetDefaultColumns.cs", 
    "3-08": "IPricesheetPublishService.cs", 
    "3-09": `namespace Leo.RFxPricesheetV2.Core.Utilities
    {
        using Leo.RFxCommonV2.Constants;
        using Leo.RFxPricesheetV2.Core.Constants;
        using Newtonsoft.Json.Linq;
        using System;
        using System.Collections.Generic;
        using System.Diagnostics.CodeAnalysis;
        using System.Text;
    
        /// <summary>
        /// 
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class PricesheetDefaultModels
        {
            /// <summary>
            /// Create default model for column
            /// </summary>
            /// <returns></returns>
            public static JObject CreateDefaultColumnModel(string name, string virtualId)
            {
                var defaultColumn = new JObject(){
                    new JProperty(FieldNames.name, name),
                    new JProperty(FieldNames.type, ColumnTypes.TEXT),
                    new JProperty(FieldConstants.location, string.Empty),
                    new JProperty(FieldConstants.bpc, 0),
                    new JProperty(FieldConstants._schemaver, string.Empty),
                    new JProperty(FieldNames.isNewColumn, false),
                    new JProperty(FieldNames.formatting, CreateDefaultColumnFormattingModel()),
                    new JProperty(FieldNames.evaluatorId, 0),
                    new JProperty(FieldConstants.evaluatorName, string.Empty),
                    new JProperty(FieldNames.isEvaluatorColumn, false),
                    new JProperty(FieldNames.visible, false),
                    new JProperty(FieldNames.editable, false),
                    new JProperty(FieldNames.isAllowSupplierInputEnabled, true),
                    new JProperty(FieldNames.isApplicationCreated, false),
                    new JProperty(FieldNames.settings, CreateDeafultColumnSettingsModel()),
                    new JProperty(FieldNames.sequence, 0),
                    new JProperty(FieldConstants.feedbackColumnType, string.Empty),
                    new JProperty(FieldConstants.isPostBidColumnEnabled, true),
                    new JProperty(FieldConstants.isPostBidColumn, false),
                    new JProperty(FieldNames.isAnalyzeColumn, false),
                    new JProperty(FieldNames.isResponseColumn, false),
                    new JProperty(FieldNames.virtualId, virtualId),
                    new JProperty(FieldNames.originalmapTo, string.Empty),
                    new JProperty(FieldNames.mapTo, name),
                    new JProperty(FieldConstants.evaluationType, "Commercial"),
                    new JProperty(FieldConstants.isEvaluationTypeEnabled, false),
                    new JProperty(FieldNames.allowSupplierInput, false),
                    new JProperty(FieldNames.isVisibleToSupplierEnabled, false),
                    new JProperty(FieldNames.isVisibleToSupplier, false),
                    new JProperty(FieldNames.isMandatory, true),
                    new JProperty(FieldNames.isMandatoryEnabled, false),
                    new JProperty(FieldConstants.feedbackSettings, new JObject()),
                    new JProperty(FieldConstants.evaluatorMapping, new List<JObject>()),
                    new JProperty(FieldNames.isPushToRepository, false),
                    new JProperty(FieldConstants.localeKey, string.Empty),
                    new JProperty(FieldConstants.multiRoundColId, string.Empty),
                    new JProperty(FieldConstants.columnSource, (int)ColumnSourceEnum.PRICESHEET_COLUMN),
                };
    
                return defaultColumn;
            }
    
            /// <summary>
            /// Create default model for column setging
            /// </summary>
            /// <returns></returns>
            public static JObject CreateDeafultColumnSettingsModel()
            {
                var defaultColumnSettings = new JObject()
                {
                    new JProperty(FieldNames.textAlignment, "left"),
                    new JProperty(FieldNames.formula, string.Empty),
                    new JProperty(FieldNames.formulaBuffer, new List<string>()),
                    new JProperty(FieldNames.postfix, string.Empty),
                    new JProperty(FieldNames.bindingCurrency, string.Empty),
                    new JProperty(FieldNames.dropDownValue, string.Empty),
                    new JProperty(FieldNames.dropDownData, new List<object>()),
                    new JProperty(FieldNames.dropDownType, string.Empty),
                    new JProperty(FieldNames.decimalPoints, 0),
                    new JProperty(FieldNames.hasDecimal, false),
                    new JProperty(FieldNames.isAutoSum, false),
                    new JProperty(FieldNames.dependentCrossPsCol, new List<string>()),
                    new JProperty(FieldNames.refrenceColumn, string.Empty),
                };
    
                return defaultColumnSettings;
            }
    
            /// <summary>
            /// Create default model for column formatting
            /// </summary>
            /// <returns></returns>
            public static JObject CreateDefaultColumnFormattingModel()
            {
                var formatting = new JObject()
                {
                    new JProperty(FieldNames.formatNo, 4),
                    new JProperty(FieldNames.fontColor, string.Empty),
                    new JProperty(FieldNames.backgroundColor, string.Empty)
                };
    
                return formatting;
            }
    
            /// <summary>
            /// Returns a JObject model for column
            /// </summary>
            /// <param name="name"></param>
            /// <param name="type"></param>
            /// <param name="isNewColumn"></param>
            /// <param name="formatting"></param>
            /// <param name="evaluatorId"></param>
            /// <param name="evaluatorName"></param>
            /// <param name="isEvaluatorColumn"></param>
            /// <param name="visible"></param>
            /// <param name="editable"></param>
            /// <param name="isAllowSupplierInputEnabled"></param>
            /// <param name="isApplicationCreated"></param>
            /// <param name="settings"></param>
            /// <param name="sequence"></param>
            /// <param name="feedbackColumnType"></param>
            /// <param name="isPostBidColumnEnabled"></param>
            /// <param name="isPostBidColumn"></param>
            /// <param name="isAnalyzeColumn"></param>
            /// <param name="isResponseColumn"></param>
            /// <param name="virtualId"></param>
            /// <param name="originalmapTo"></param>
            /// <param name="mapTo"></param>
            /// <param name="evaluationType"></param>
            /// <param name="isEvaluationTypeEnabled"></param>
            /// <param name="allowSupplierInput"></param>
            /// <param name="isVisibleToSupplierEnabled"></param>
            /// <param name="isVisibleToSupplier"></param>
            /// <param name="isMandatoryEnabled"></param>
            /// <param name="isMandatory"></param>
            /// <param name="feedbackSettings"></param>
            /// <param name="evaluatorMapping"></param>
            /// <param name="isPushToRepository"></param>
            /// <param name="localeKey"></param>
            /// <param name="multiRoundColId"></param>
            /// <param name="columnSource"></param>
            /// <returns></returns>
            public static JObject CreateColumnModel(
                string name = "", string type = ColumnTypes.TEXT, bool? isNewColumn = false,
                JObject formatting = null, decimal evaluatorId = 0, string evaluatorName = "",
                bool? isEvaluatorColumn = false, bool? visible = false, bool? editable = false,
                bool? isAllowSupplierInputEnabled = false, bool? isApplicationCreated = false,
                JObject settings = null, long? sequence = 0, string feedbackColumnType = "",
                bool? isPostBidColumnEnabled = false, bool? isPostBidColumn = false,
                bool? isAnalyzeColumn = false, bool? isResponseColumn = false,
                string virtualId = "", string originalmapTo = "", string mapTo = "",
                string evaluationType = "Commercial", bool isEvaluationTypeEnabled = false,
                bool? allowSupplierInput = false, bool? isVisibleToSupplierEnabled = false,
                bool? isVisibleToSupplier = false, bool? isMandatoryEnabled = false, bool? isMandatory = false,
                JObject feedbackSettings = null, List<JObject> evaluatorMapping = null,
                bool? isPushToRepository = false, string localeKey = "", string multiRoundColId = "",
                int columnSource = (int)ColumnSourceEnum.PRICESHEET_COLUMN)
            {
                return new JObject()
                {
                    new JProperty("name", name),
                    new JProperty("type", type),
                    new JProperty("isNewColumn", isNewColumn),
                    new JProperty("formatting", formatting ?? new JObject()),
                    new JProperty("evaluatorId", evaluatorId),
                    new JProperty("evaluatorName", evaluatorName),
                    new JProperty("isEvaluatorColumn", isEvaluatorColumn),
                    new JProperty("visible", visible),
                    new JProperty("editable", editable),
                    new JProperty("IsAllowSupplierInputEnabled", isAllowSupplierInputEnabled),
                    new JProperty("isApplicationCreated", isApplicationCreated),
                    new JProperty("settings", settings ?? new JObject()),
                    new JProperty("sequence", sequence),
                    new JProperty("feedbackColumnType", feedbackColumnType),
                    new JProperty("isPostBidColumnEnabled", isPostBidColumnEnabled),
                    new JProperty("isPostBidColumn", isPostBidColumn),
                    new JProperty("isAnalyzeColumn", isAnalyzeColumn),
                    new JProperty("isResponseColumn", isResponseColumn),
                    new JProperty("virtualId", virtualId),
                    new JProperty("originalmapTo", originalmapTo),
                    new JProperty("mapTo", mapTo),
                    new JProperty("evaluationType", evaluationType),
                    new JProperty("isEvaluationTypeEnabled", isEvaluationTypeEnabled),
                    new JProperty("allowSupplierInput", allowSupplierInput),
                    new JProperty("isVisibleToSupplierEnabled", isVisibleToSupplierEnabled),
                    new JProperty("isVisibleToSupplier", isVisibleToSupplier),
                    new JProperty("isMandatory", isMandatory),
                    new JProperty("isMandatoryEnabled", isMandatoryEnabled),
                    new JProperty("feedbackSettings", feedbackSettings ?? new JObject()),
                    new JProperty("evaluatorMapping", evaluatorMapping ?? new List<JObject>()),
                    new JProperty("isPushToRepository", isPushToRepository),
                    new JProperty("localeKey", localeKey),
                    new JProperty("multiRoundColId", multiRoundColId),
                    new JProperty("columnSource", columnSource),
                };
            }
    
            /// <summary>
            /// Returrns JObject model for column settings
            /// </summary>
            /// <param name="textAlignment"></param>
            /// <param name="formula"></param>
            /// <param name="formulaBuffer"></param>
            /// <param name="postfix"></param>
            /// <param name="bindingCurrency"></param>
            /// <param name="dropDownValue"></param>
            /// <param name="dropDownData"></param>
            /// <param name="dropDownType"></param>
            /// <param name="decimalPoints"></param>
            /// <param name="hasDecimal"></param>
            /// <param name="isAutoSum"></param>
            /// <param name="dependentCrossPsCol"></param>
            /// <param name="refrenceColumn"></param>
            /// <returns></returns>
            public static JObject CreateColumnSettings(
                string textAlignment = "left", string formula = "", List<string> formulaBuffer = null,
                string postfix = "", string bindingCurrency = "", string dropDownValue = "",
                List<string> dropDownData = null, string dropDownType = "", int decimalPoints = 0,
                bool hasDecimal = false, bool isAutoSum = false, List<string> dependentCrossPsCol = null,
                string refrenceColumn = ""
            )
            {
                return new JObject()
                {
                    new JProperty("textAlignment", textAlignment),
                    new JProperty("formula", formula),
                    new JProperty("formulaBuffer", formulaBuffer ?? new List<string>()),
                    new JProperty("postfix", postfix),
                    new JProperty("bindingCurrency", bindingCurrency),
                    new JProperty("dropDownValue", dropDownValue),
                    new JProperty("dropDownData", dropDownData ?? new List<string>()),
                    new JProperty("dropDownType", dropDownType),
                    new JProperty("decimalPoints", decimalPoints),
                    new JProperty("hasDecimal", hasDecimal),
                    new JProperty("isAutoSum", isAutoSum),
                    new JProperty("dependentCrossPsCol", dependentCrossPsCol ?? new List<string>()),
                    new JProperty("refrenceColumn", refrenceColumn),
                };
            }
    
            /// <summary>
            /// Returns JObject model for formatting
            /// </summary>
            /// <param name="FormatNo"></param>
            /// <param name="FontColor"></param>
            /// <param name="BackgroundColor"></param>
            /// <returns></returns>
            public static JObject CreateFormatting(int FormatNo = 4, string FontColor = "", string BackgroundColor = "")
            {
                return new JObject()
                {
                    new JProperty("formatNo", FormatNo),
                    new JProperty("fontColor", FontColor),
                    new JProperty("backgroundColor", BackgroundColor)
                };
            }
    
            /// <summary>
            /// Returns JObject model for 
            /// </summary>
            /// <returns></returns>
            public static JObject GetItemStatusColumn()
            {
                return new JObject()
                {
                    new JProperty("name", PriceSheetColumnNames.ItemStatus),
                    new JProperty("type", "Icon"/*ColumnTypes.ICON*/),
                    new JProperty("virtualId", "P0V0"),
                    new JProperty("editable", false)
                };
            }
        }
    }
    `, 
    "3-10": `namespace Leo.RFxPricesheetV2.Core.Utilities
    {
        using Leo.RFxCommonV2.Constants;
        using Leo.RFxPricesheetV2.Core.Constants;
        using Newtonsoft.Json.Linq;
        using System.Collections.Generic;
        using System.Diagnostics.CodeAnalysis;
    
        /// <summary>
        /// Response Summary Default Columns
        /// </summary>
        [ExcludeFromCodeCoverage]
        public static class ResponseSummaryDefaultColumns
        {
            /// <summary>
            /// Return List Of Response Summary Columns
            /// </summary>
            /// <param name="currency"></param>
            /// <returns></returns>
            public static JArray ResponseSummaryColumns(string currency)
            {
                return new JArray
                {
                    GetSupplierId(),
                    GetSupplierName(),
                    GetEventCurrency(currency),
                    GetBaselineSpend(currency),
                    GetSupplierSpendCoverage(currency),
                    GetSupplierSpendCoveragePercentage(),
                    GetSupplierLineCoveragePercentage(),
                    GetSupplierPrice(),
                    GetSavings(),
                    GetSavingsPercentage()
                };
            }
    
            private static JObject GetSupplierId()
            {
                return PricesheetDefaultModels.CreateColumnModel
                (
                    name: EventResponseColumnNames.SupplierId,
                    type: ColumnTypes.TEXT,
                    virtualId: "v13",
                    settings: PricesheetDefaultModels.CreateColumnSettings(textAlignment: TextAlignments.Right)
                );
            }
    
            private static JObject GetSupplierName()
            {
                return PricesheetDefaultModels.CreateColumnModel
                (
                    name: EventResponseColumnNames.SupplierName,
                    type: ColumnTypes.TEXT,
                    virtualId: "v1",
                    settings: PricesheetDefaultModels.CreateColumnSettings(textAlignment: TextAlignments.Left)
                );
            }
    
            private static JObject GetEventCurrency(string currency)
            {
                return PricesheetDefaultModels.CreateColumnModel
                (
                    name: EventResponseColumnNames.EventCurrency,
                    type: ColumnTypes.TEXT,
                    virtualId: "v5",
                    settings: PricesheetDefaultModels.CreateColumnSettings(textAlignment: TextAlignments.Left, bindingCurrency: currency)
                );
            }
    
            private static JObject GetBaselineSpend(string currency)
            {
                return PricesheetDefaultModels.CreateColumnModel
                (
                    name: EventResponseColumnNames.BaselineSpend,
                    type: ColumnTypes.CURRENCY,
                    virtualId: "v6",
                    settings: PricesheetDefaultModels.CreateColumnSettings(textAlignment: TextAlignments.Left, bindingCurrency: currency)
                );
            }
    
            private static JObject GetSupplierSpendCoverage(string currency)
            {
                return PricesheetDefaultModels.CreateColumnModel
                (
                    name: EventResponseColumnNames.SupplierSpendCoverage,
                    type: ColumnTypes.CURRENCY,
                    virtualId: "v7",
                    settings: PricesheetDefaultModels.CreateColumnSettings(textAlignment: TextAlignments.Right, bindingCurrency: currency)
                );
            }
    
            private static JObject GetSupplierSpendCoveragePercentage()
            {
                return PricesheetDefaultModels.CreateColumnModel
                (
                    name: EventResponseColumnNames.SupplierSpendCoveragePer,
                    type: ColumnTypes.COMPUTED,
                    virtualId: "v8",
                    settings: PricesheetDefaultModels.CreateColumnSettings
                    (
                        textAlignment: TextAlignments.Right,
                        formula: "(Supplier Spend Coverage/Baseline Spend)*100",
                        postfix: "%",
                        formulaBuffer: new List<string> { "(", "v7", "/", "v6", ")", "*", "100" }
                    )
                );
            }
    
            private static JObject GetSupplierLineCoveragePercentage()
            {
                return PricesheetDefaultModels.CreateColumnModel
                (
                    name: EventResponseColumnNames.SupplierLineCoveragePer,
                    type: ColumnTypes.NUMERIC,
                    virtualId: "v9",
                    settings: PricesheetDefaultModels.CreateColumnSettings(textAlignment: TextAlignments.Right, postfix: "%")
                );
            }
    
            private static JObject GetSupplierPrice()
            {
                return PricesheetDefaultModels.CreateColumnModel
                (
                    name: EventResponseColumnNames.SupplierPrice,
                    type: ColumnTypes.NUMERIC,
                    virtualId: "v10",
                    settings: PricesheetDefaultModels.CreateColumnSettings(textAlignment: TextAlignments.Right, decimalPoints: 2)
                );
            }
    
            private static JObject GetSavings()
            {
                return PricesheetDefaultModels.CreateColumnModel
                (
                    name: EventResponseColumnNames.Savings,
                    type: ColumnTypes.COMPUTED,
                    virtualId: "v11",
                    settings: PricesheetDefaultModels.CreateColumnSettings
                    (
                        textAlignment: TextAlignments.Right,
                        formula: "(Supplier Spend Coverage - Supplier Price)",
                        decimalPoints: 2,
                        formulaBuffer: new List<string> { "(", "v7", "-", "v10", ")" }
                    )
                );
            }
    
            private static JObject GetSavingsPercentage()
            {
                return PricesheetDefaultModels.CreateColumnModel
                (
                    name: EventResponseColumnNames.SavingsPer,
                    type: ColumnTypes.COMPUTED,
                    virtualId: "v12",
                    settings: PricesheetDefaultModels.CreateColumnSettings
                    (
                        textAlignment: TextAlignments.Right,
                        formula: "(Savings/Supplier Spend Coverage)*100",
                        postfix: "%",
                        decimalPoints: 2,
                        formulaBuffer: new List<string> { "(", "v11", "/", "v7", ")", "*", "100" }
                    )
                );
            }
        }
    }`

}