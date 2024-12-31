import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InsuranceAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'company',
    'policy',
    'issuedOn',
    'expiringOn',
    'status',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService,
    private _coreService: CoreService
  ) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(InsuranceAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }

  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        if (res.length === 0) {
          // Add default insurance policies if the list is empty
          const defaultPolicies = [
            {
              id: 1,
              company: 'Britam Insurance Company',
              policy: 'Health Insurance',
              issuedOn: '2024-12-02T21:00:00.000Z',
              expiringOn: '2024-12-11T21:00:00.000Z',
              status: 'active'
            },
            {
              id: 2,
              company: 'AIG Insurance Company',
              policy: 'Life Insurance',
              issuedOn: '2024-12-04T21:00:00.000Z',
              expiringOn: '2024-12-06T21:00:00.000Z',
              status: 'renew'
            },
            {
              id: 3,
              company: 'Jubilee Insurance Company',
              policy: 'Health Insurance',
              issuedOn: '2024-12-06T21:00:00.000Z',
              expiringOn: '2024-12-08T21:00:00.000Z',
              status: 'renew'
            },
            {
              id: 4,
              company: 'APA Insurance Company',
              policy: 'Homeowners Insurance',
              issuedOn: '2024-12-08T21:00:00.000Z',
              expiringOn: '2024-12-10T21:00:00.000Z',
              status: 'renew'
            },
            {
              id: 5,
              company: 'APA Insurance Company',
              policy: 'Automobile Insurance',
              issuedOn: '2024-12-12T21:00:00.000Z',
              expiringOn: '2024-12-14T21:00:00.000Z',
              status: 'renew'
            },
            {
              id: 6,
              company: 'Britam Insurance Company',
              policy: 'Term Assurance',
              issuedOn: '2024-12-14T21:00:00.000Z',
              expiringOn: '2024-12-16T21:00:00.000Z',
              status: 'active'
            }
          ];
          this.dataSource = new MatTableDataSource(defaultPolicies);
        } else {
          this.dataSource = new MatTableDataSource(res);
        }
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id: number) {
    this._empService.deleteEmployee(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Insurance Policy deleted!', 'done');
        this.getEmployeeList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(InsuranceAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }
}