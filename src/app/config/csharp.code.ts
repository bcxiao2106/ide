export const CODE: any = {
    '1-01': `namespace Leo.DomainGateway.Invoice
        {
            using System;
            using Leo.Subtypes.Flows;
        
            public class InvoiceDomainGateway : FlowBase
            {
                public InvoiceDomainGateway(object[] args) : base(args)
                {
                    this.BeforeTrigger += InvoiceDomainGateway_BeforeTrigger;
                    this.AfterTrigger += InvoiceDomainGateway_AfterTrigger;
                    this.OnError += InvoiceDomainGateway_OnError;
                }
        
                private void InvoiceDomainGateway_OnError(object sender, Exception e)
                {
                    Console.WriteLine("On Error");
                }
        
                private void InvoiceDomainGateway_AfterTrigger(object sender, FlowEventArgument e)
                {
                    Console.WriteLine("After Delete");
                }
        
                private void InvoiceDomainGateway_BeforeTrigger(object sender, FlowEventArgument e)
                {
                    Console.WriteLine("Before Delete");
                }
        
                public override string FlowId => "InvoiceDomainGateway";
        
                public override FlowResult Trigger(TriggerParameter arg)
                {
                    return new FlowResult(this)
                    {
                        Status = true,
                        Result = new { x = 1 }
                    };
                }
            }
        }`,
    '1-02': ``,
    '2-01': `namespace Leo.DomainGateway.Order
        {
            using System;
            using Leo.Subtypes.Flows;
        
            public class OrderDomainGateway : FlowBase
            {
                public OrderDomainGateway(object[] args) : base(args)
                {
                    this.BeforeTrigger += OrderDomainGateway_BeforeTrigger;
                    this.AfterTrigger += OrderDomainGateway_AfterTrigger;
                    this.OnError += OrderDomainGateway_OnError;
                }
        
                private void OrderDomainGateway_OnError(object sender, Exception e)
                {
                    Console.WriteLine("On Error");
                }
        
                private void OrderDomainGateway_AfterTrigger(object sender, FlowEventArgument e)
                {
                    Console.WriteLine("After Delete");
                }
        
                private void OrderDomainGateway_BeforeTrigger(object sender, FlowEventArgument e)
                {
                    Console.WriteLine("Before Delete");
                }
        
                public override string FlowId => "OrderDomainGateway";
        
                public override FlowResult Trigger(TriggerParameter arg)
                {
                    return new FlowResult(this)
                    {
                        Status = true,
                        Result = new { x = 1 }
                    };
                }
            }
        }`,
    '3-01': `namespace Leo.DomainGateway.Contract
        {
            using System;
            using Leo.Subtypes.Flows;
        
            public class ContractDomainGateway : FlowBase
            {
                public ContractDomainGateway(object[] args) : base(args)
                {
                    this.BeforeTrigger += ContractDomainGateway_BeforeTrigger;
                    this.AfterTrigger += ContractDomainGateway_AfterTrigger;
                    this.OnError += ContractDomainGateway_OnError;
                }
        
                private void ContractDomainGateway_OnError(object sender, Exception e)
                {
                    Console.WriteLine("On Error");
                }
        
                private void ContractDomainGateway_AfterTrigger(object sender, FlowEventArgument e)
                {
                    Console.WriteLine("After Delete");
                }
        
                private void ContractDomainGateway_BeforeTrigger(object sender, FlowEventArgument e)
                {
                    Console.WriteLine("Before Delete");
                }
        
                public override string FlowId => "ContractDomainGateway";
        
                public override FlowResult Trigger(TriggerParameter arg)
                {
                    return new FlowResult(this)
                    {
                        Status = true,
                        Result = new { x = 1 }
                    };
                }
            }
        }`
}