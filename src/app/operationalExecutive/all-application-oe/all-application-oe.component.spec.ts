import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllApplicationOeComponent } from './all-application-oe.component';

describe('AllApplicationOeComponent', () => {
  let component: AllApplicationOeComponent;
  let fixture: ComponentFixture<AllApplicationOeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllApplicationOeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllApplicationOeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
