import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewApplicationSeComponent } from './new-application-se.component';

describe('NewApplicationSeComponent', () => {
  let component: NewApplicationSeComponent;
  let fixture: ComponentFixture<NewApplicationSeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewApplicationSeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewApplicationSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
