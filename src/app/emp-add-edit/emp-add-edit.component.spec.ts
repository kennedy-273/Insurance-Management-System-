import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAddEditComponent } from './emp-add-edit.component';

describe('InsuranceAddEditComponent', () => {
  let component: InsuranceAddEditComponent;
  let fixture: ComponentFixture<InsuranceAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsuranceAddEditComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InsuranceAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
