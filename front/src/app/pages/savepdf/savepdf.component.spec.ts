import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavepdfComponent } from './savepdf.component';

describe('SavepdfComponent', () => {
  let component: SavepdfComponent;
  let fixture: ComponentFixture<SavepdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavepdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavepdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
