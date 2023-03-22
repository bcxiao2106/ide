import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudSiderComponent } from './cloud-sider.component';

describe('CloudSiderComponent', () => {
  let component: CloudSiderComponent;
  let fixture: ComponentFixture<CloudSiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudSiderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudSiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
