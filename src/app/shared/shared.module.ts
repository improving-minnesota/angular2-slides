import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanitizeHtml } from './pipes/sanitize-html.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SanitizeHtml
  ],
  exports: [
    SanitizeHtml
  ]
})
export class SharedModule { }
