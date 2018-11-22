import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import  { FormsModule } from '@angular/forms';

import { CustomerComponent } from '../Components/CustomerComponent';
import { CustomerRoutes } from '../Routing/CustomerRoutes';

@NgModule({
  declarations: [
    CustomerComponent,
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(CustomerRoutes),
    CommonModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
