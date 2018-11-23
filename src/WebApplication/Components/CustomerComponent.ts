import { Component } from '@angular/core';
import { CustomerModel } from '../Models/CustomerModel';

@Component({
    templateUrl: '../Views/CustomerView.html',
    styleUrls: ['../Styles/CustomerStyle.css']
})

export class CustomerComponent {
    cust: CustomerModel = null;
    customers: CustomerModel[] = new Array<CustomerModel>();
    title:string = "Customers"
    constructor() {

    }
    ngOnInit() {
        this.cust = new CustomerModel();
        this.customers = [
            {Id: 101, Name: "Aravind",Address: "HYD"}
        ];
    }
    addCustomer() {
        this.customers.push(this.cust);
        this.cust = new CustomerModel();
    }
    modifyCustomer(e) {
        this.cust = Object.assign({}, e);
    }
    updateCustomer(e) {
        for(var i=0;i<this.customers.length;i++)
        {
            if(this.customers[i].Id==e.Id)
            {
                this.customers[i].Name=e.Name;
                this.customers[i].Address=e.Address;
                alert("Record Updated");
            }
        }
        this.cust = new CustomerModel();
    }
    deleteCustomer(e) {
        if (confirm("Do you Want to Delete?")) {
            this.customers.splice(this.customers.indexOf(e), 1);
        }
    }
}