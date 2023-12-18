import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirualTreeComponent } from './virual-tree.component';

describe('VirualTreeComponent', () => {
  let component: VirualTreeComponent;
  let fixture: ComponentFixture<VirualTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirualTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirualTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
