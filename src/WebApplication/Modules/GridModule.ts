import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent } from '../Components/GridComponent';

@NgModule({
  declarations: [
    GridComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridComponent
  ]
})
export class GridModule { }
