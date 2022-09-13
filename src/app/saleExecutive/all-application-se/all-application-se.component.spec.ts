import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllApplicationSeComponent } from './all-application-se.component';

describe('AllApplicationSeComponent', () => {
  let component: AllApplicationSeComponent;
  let fixture: ComponentFixture<AllApplicationSeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllApplicationSeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllApplicationSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
