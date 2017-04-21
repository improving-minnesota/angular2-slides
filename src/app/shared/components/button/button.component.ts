import { Component, Input } from '@angular/core';

@Component({
  selector: 'opi-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  type: string = 'button';

  constructor() { }
}
