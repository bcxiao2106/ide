import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorMarkersComponent } from './editor-markers.component';

describe('EditorMarkersComponent', () => {
  let component: EditorMarkersComponent;
  let fixture: ComponentFixture<EditorMarkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorMarkersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorMarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
