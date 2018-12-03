import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    templateUrl: '../Views/PhotosView.html',
    styleUrls: ['../Styles/PhotosStyle.css']
})

export class PhotosComponent {
    dataarr;
    page: number = 1;
    constructor(private http: HttpClient) {

    }
    ngOnInit() {
        let params = new HttpParams().set('_page', this.page.toString()).set('_limit', "12");
        // console.log(params);
        // const params = new HttpParams({fromString: '_page=1&_limit=1'});
        this.http.get('https://jsonplaceholder.typicode.com/photos', { params }).subscribe(data => {
            this.dataarr = data;
        });
    }
    next() {
        this.page++;
        console.log(this.page);
        this.ngOnInit();
    }
    prev() {
        this.page--;
        console.log(this.page);
        this.ngOnInit();
    }
}