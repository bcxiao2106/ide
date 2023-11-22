import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesTreeComponent } from './changes-tree.component';

describe('ChangesTreeComponent', () => {
  let component: ChangesTreeComponent;
  let fixture: ComponentFixture<ChangesTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangesTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangesTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
