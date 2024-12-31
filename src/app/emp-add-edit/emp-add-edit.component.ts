import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
})
export class InsuranceAddEditComponent implements OnInit {
  empForm: FormGroup;
  isEditMode: boolean;


  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: MatDialogRef<InsuranceAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.isEditMode = !!data;
    this.empForm = this._fb.group({
      id: [data?.id || '', Validators.required],
      company: [data?.company || '', Validators.required],
      policy: [data?.policy || '', Validators.required],
      issuedOn: [data?.issuedOn || '', Validators.required],
      expiringOn: [data?.expiringOn || '', Validators.required],
      status: [data?.status || '', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.isEditMode){
      this.empForm.get('id')?.disable();
      this.empForm.patchValue(this.data);

    }
    
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Insurance Policy detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Insurance Policy added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
