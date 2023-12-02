import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoPullsComponent } from './repo-pulls.component';

describe('RepoPullsComponent', () => {
  let component: RepoPullsComponent;
  let fixture: ComponentFixture<RepoPullsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoPullsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoPullsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
