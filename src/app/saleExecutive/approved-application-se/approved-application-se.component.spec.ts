import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedApplicationSeComponent } from './approved-application-se.component';

describe('ApprovedApplicationSeComponent', () => {
  let component: ApprovedApplicationSeComponent;
  let fixture: ComponentFixture<ApprovedApplicationSeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedApplicationSeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedApplicationSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
