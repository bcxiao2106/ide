import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigratePluginComponent } from './migrate-plugin.component';

describe('MigratePluginComponent', () => {
  let component: MigratePluginComponent;
  let fixture: ComponentFixture<MigratePluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigratePluginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MigratePluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
