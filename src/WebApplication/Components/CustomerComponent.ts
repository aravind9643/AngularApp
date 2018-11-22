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
            { CustomerId: 101, CustomerName: 'Aravind', CustomerAddress: 'HYD' },
            { CustomerId: 102, CustomerName: 'Ravi', CustomerAddress: 'MYP' },
            { CustomerId: 103, CustomerName: 'Kiran', CustomerAddress: 'MUM' }
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
            if(this.customers[i].CustomerId==e.CustomerId)
            {
                this.customers[i].CustomerName=e.CustomerName;
                this.customers[i].CustomerAddress=e.CustomerAddress;
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