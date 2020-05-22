import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mytab3Component } from './mytab3.component';

describe('Mytab3Component', () => {
  let component: Mytab3Component;
  let fixture: ComponentFixture<Mytab3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mytab3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mytab3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
