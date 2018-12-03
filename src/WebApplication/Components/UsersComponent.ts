import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../Models/UserModel';
import { CustomerModel } from '../Models/CustomerModel';

@Component({
    templateUrl: '../Views/UsersView.html',
    styleUrls: ['../Styles/UsersStyle.css']
})

export class UsersComponent {
    users;
    cols;
    user: UserModel;
    constructor(
        private http: HttpClient
    ) {
        this.user = new UserModel();
    }
    ngOnInit() {
        this.LoadData();
    }
    LoadData() {
        this.http.get('http://127.0.0.1:5000/users').subscribe((data: CustomerModel[]) => {
            this.users = data;
            console.log(typeof (this.users));
            console.log(this.users);
            this.cols = Object.keys(data[0]);
            console.log(this.cols);
        });
    }
    addUser(user) {
        let apiheaders = new HttpHeaders();
        apiheaders.append('Content-Type', 'application/json');
        this.http.post('http://127.0.0.1:5000/users', user, { headers: apiheaders }).subscribe(res => {
            console.log(res);
            this.users.push(res);
        });
        this.user = new UserModel();
        this.LoadData();
    }
}
