import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyDocumentsDveComponent } from './verify-documents-dve.component';

describe('VerifyDocumentsDveComponent', () => {
  let component: VerifyDocumentsDveComponent;
  let fixture: ComponentFixture<VerifyDocumentsDveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyDocumentsDveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyDocumentsDveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
