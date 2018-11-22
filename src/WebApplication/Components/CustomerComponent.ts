import { Component } from '@angular/core';
import { CustomerModel } from '../Models/CustomerModel';

@Component({
    templateUrl: '../Views/CustomerView.html',
    styleUrls: ['../Styles/CustomerStyle.css']
})

export class CustomerComponent {
    cust: CustomerModel = null;
    customers: CustomerModel[] = new Array<CustomerModel>();

    constructor() {

    }
    ngOnInit() {
        this.cust = new CustomerModel();
    }
    addCustomer() {
        console.log(this.cust);
        this.customers.push(this.cust);
        this.cust = new CustomerModel();
    }
}