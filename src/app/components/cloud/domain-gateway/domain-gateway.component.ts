import { Component } from '@angular/core';
import { IContext } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-domain-gateway',
  templateUrl: './domain-gateway.component.html',
  styleUrls: ['./domain-gateway.component.scss']
})
export class DomainGatewayComponent {
  context!: IContext;
  constructor(){}

  onClick() {
    this.context && this.context.actionManager.execute([
      {service: 'view', method: 'load', params: { components: [{target: 'popup', component: 'PopupComponent'}]}}
    ]);
  }
}
