import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegapplicantComponent } from './regapplicant.component';

describe('RegapplicantComponent', () => {
  let component: RegapplicantComponent;
  let fixture: ComponentFixture<RegapplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegapplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegapplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
