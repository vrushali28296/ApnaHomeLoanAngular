import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmiCalculationAhComponent } from './all-emi-calculation-ah.component';

describe('AllEmiCalculationAhComponent', () => {
  let component: AllEmiCalculationAhComponent;
  let fixture: ComponentFixture<AllEmiCalculationAhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmiCalculationAhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllEmiCalculationAhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
