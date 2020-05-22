import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mytab1Component } from './mytab1.component';

describe('Mytab1Component', () => {
  let component: Mytab1Component;
  let fixture: ComponentFixture<Mytab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mytab1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mytab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
