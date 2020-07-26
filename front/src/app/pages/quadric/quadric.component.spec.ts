import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadricComponent } from './quadric.component';

describe('QuadricComponent', () => {
  let component: QuadricComponent;
  let fixture: ComponentFixture<QuadricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
