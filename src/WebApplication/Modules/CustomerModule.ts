import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import  { FormsModule } from '@angular/forms';

import { CustomerComponent } from '../Components/CustomerComponent';
import { CustomerRoutes } from '../Routing/CustomerRoutes';
import { GridModule } from '../Modules/GridModule';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(CustomerRoutes),
    CommonModule,
    GridModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
