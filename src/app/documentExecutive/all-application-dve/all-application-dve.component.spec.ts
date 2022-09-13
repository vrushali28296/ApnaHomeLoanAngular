import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllApplicationDveComponent } from './all-application-dve.component';

describe('AllApplicationDveComponent', () => {
  let component: AllApplicationDveComponent;
  let fixture: ComponentFixture<AllApplicationDveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllApplicationDveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllApplicationDveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
