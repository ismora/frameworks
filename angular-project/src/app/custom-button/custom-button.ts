import { Component, Input } from '@angular/core';
import { CustomText } from '../custom-text/custom-text';

@Component({
  selector: 'app-custom-button',
  imports: [CustomText],
  templateUrl: './custom-button.html',
  styleUrl: './custom-button.css',
})
export class CustomButton {
  @Input() text: string = '';
  @Input() onclick: Function = () => {};
}
