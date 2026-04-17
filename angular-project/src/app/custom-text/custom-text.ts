import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-text',
  imports: [],
  templateUrl: './custom-text.html',
  styleUrl: './custom-text.css',
})
export class CustomText {
  @Input() text: string = '';
}
