import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCounter } from './button-counter';

describe('ButtonCounter', () => {
  let component: ButtonCounter;
  let fixture: ComponentFixture<ButtonCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCounter],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
