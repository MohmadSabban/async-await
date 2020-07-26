import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingForComponent } from './using-for.component';

describe('UsingForComponent', () => {
  let component: UsingForComponent;
  let fixture: ComponentFixture<UsingForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
