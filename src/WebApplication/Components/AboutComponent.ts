import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component ({
    templateUrl: '../Views/AboutView.html',
    styleUrls: ['../Styles/AboutStyle.css']
})

export class AboutComponent {
    data;
    constructor(private lahari: HttpClient) {

    }
    ngOnInit() {
      this.lahari.get("http://localhost:3000/customers").subscribe(data => {
        this.data = data;
    });
    }
}