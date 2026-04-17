import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomText } from './custom-text';

describe('CustomText', () => {
  let component: CustomText;
  let fixture: ComponentFixture<CustomText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomText],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
