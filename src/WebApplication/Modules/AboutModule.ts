import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import  { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AboutComponent } from '../Components/AboutComponent';
import { AboutRoutes } from '../Routing/AboutRoutes';

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(AboutRoutes),
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AboutComponent]
})
export class AboutModule { }
