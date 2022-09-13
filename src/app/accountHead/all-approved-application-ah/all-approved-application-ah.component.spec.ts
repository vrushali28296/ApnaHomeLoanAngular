import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllApprovedApplicationAhComponent } from './all-approved-application-ah.component';

describe('AllApprovedApplicationAhComponent', () => {
  let component: AllApprovedApplicationAhComponent;
  let fixture: ComponentFixture<AllApprovedApplicationAhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllApprovedApplicationAhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllApprovedApplicationAhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
