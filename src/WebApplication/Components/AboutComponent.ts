import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: '../Views/AboutView.html',
    styleUrls: ['../Styles/AboutStyle.css']
})

export class AboutComponent {

    constructor(
        private http: HttpClient
    ) { }
    ngOnInit() {
        // this.http.get('http://127.0.0.1:5000/user/Aravind').subscribe(data => {
        //     console.log(data)
        // });
        this.http.put('http://127.0.0.1:5000/user/Ramana', {
            "age": "35",
            "occupation": "Python Developer"
        }).subscribe(data => {
            console.log(data);
        });
    }
}
