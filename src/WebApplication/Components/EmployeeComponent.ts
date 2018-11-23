import { Component } from '@angular/core';
import { EmployeeModel } from '../Models/EmployeeModel';

@Component({
    templateUrl: '../Views/EmployeeView.html',
    styleUrls: ['../Styles/EmployeeStyle.css']
})

export class EmployeeComponent {
    Emp: EmployeeModel = new EmployeeModel();
    Employees: EmployeeModel[] = new Array<EmployeeModel>();
    ShowBtn: boolean = true;
    index: number;
    title: string = "Employees";
    constructor() {
        this.Emp = new EmployeeModel();
        this.Employees =[
            {Id: 101,Name:"Aravind",Salary:5000}
        ];
    }
    ngOnInit() {
    }
    addEmp() {
        this.Employees.push(this.Emp);
        this.Emp = new EmployeeModel();
    }
    deleteEmp(e) {
        if (confirm("Do you Want to Delete?")) {
            this.Employees.splice(this.Employees.indexOf(e), 1);
        }
    }
    modifyEmp(e) {
        this.Emp = Object.assign({}, e);
        this.index = this.Employees.indexOf(e);
        this.ShowBtn = false;
    }
    updateEmp(e) {
        this.Employees[this.index] = e;
        this.Emp = new EmployeeModel();
        this.ShowBtn = true;
    }
    resetEmp() {
        this.Emp = new EmployeeModel();
        this.ShowBtn = true;
    }
}