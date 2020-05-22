import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mytab4Component } from './mytab4.component';

describe('Mytab4Component', () => {
  let component: Mytab4Component;
  let fixture: ComponentFixture<Mytab4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mytab4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mytab4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
