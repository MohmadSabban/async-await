import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnOBComponent } from './learn-ob.component';

describe('LearnOBComponent', () => {
  let component: LearnOBComponent;
  let fixture: ComponentFixture<LearnOBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnOBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnOBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
