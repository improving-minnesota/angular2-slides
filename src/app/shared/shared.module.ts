import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayDateComponent } from './components/';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DisplayDateComponent
  ],
  exports: [
    DisplayDateComponent
  ]
})
export class SharedModule { }
