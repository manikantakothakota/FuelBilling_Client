import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mytab2Component } from './mytab2.component';

describe('Mytab2Component', () => {
  let component: Mytab2Component;
  let fixture: ComponentFixture<Mytab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mytab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mytab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
