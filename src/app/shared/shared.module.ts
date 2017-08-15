import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ButtonComponent,
  DisplayDateComponent,
  DogListComponent,
  ObservableComponent,
  SubjectComponent,
  UpperLowerComponent
} from './components/';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    DisplayDateComponent,
    DogListComponent,
    ObservableComponent,
    SubjectComponent,
    UpperLowerComponent
  ],
  exports: [
    ButtonComponent,
    DisplayDateComponent,
    DogListComponent,
    ObservableComponent,
    SubjectComponent,
    UpperLowerComponent
  ]
})
export class SharedModule {}
