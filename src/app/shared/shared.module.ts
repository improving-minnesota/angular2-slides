import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ButtonComponent,
  DisplayDateComponent,
  ObservableComponent,
  UpperLowerComponent
} from './components/';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DisplayDateComponent,
    ObservableComponent,
    UpperLowerComponent,
    ButtonComponent
  ],
  exports: [
    DisplayDateComponent,
    ObservableComponent,
    UpperLowerComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
