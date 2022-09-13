import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllApprovedDoComponent } from './all-approved-do.component';

describe('AllApprovedDoComponent', () => {
  let component: AllApprovedDoComponent;
  let fixture: ComponentFixture<AllApprovedDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllApprovedDoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllApprovedDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
