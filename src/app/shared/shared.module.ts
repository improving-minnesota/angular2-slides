import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayDateComponent, ObservableComponent } from './components/';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DisplayDateComponent,
    ObservableComponent
  ],
  exports: [
    DisplayDateComponent,
    ObservableComponent
  ]
})
export class SharedModule { }
