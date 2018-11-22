import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from '../Components/HomeComponent';
import { EmployeeComponent } from '../Components/EmployeeComponent';
import { PhotosComponent } from '../Components/PhotosComponent';
import { HelpComponent } from '../Components/HelpComponent';
import { MainRoutes } from '../Routing/MainRoutes';

@NgModule({
  declarations: [
    HomeComponent,
    EmployeeComponent,
    HelpComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }