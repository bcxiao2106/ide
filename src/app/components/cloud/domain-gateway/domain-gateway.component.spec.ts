import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainGatewayComponent } from './domain-gateway.component';

describe('DomainGatewayComponent', () => {
  let component: DomainGatewayComponent;
  let fixture: ComponentFixture<DomainGatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainGatewayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
