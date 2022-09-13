import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedApplicationSeComponent } from './rejected-application-se.component';

describe('RejectedApplicationSeComponent', () => {
  let component: RejectedApplicationSeComponent;
  let fixture: ComponentFixture<RejectedApplicationSeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedApplicationSeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedApplicationSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
