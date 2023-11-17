import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoPullRequestsComponent } from './repo-pull-requests.component';

describe('RepoPullRequestsComponent', () => {
  let component: RepoPullRequestsComponent;
  let fixture: ComponentFixture<RepoPullRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoPullRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoPullRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
