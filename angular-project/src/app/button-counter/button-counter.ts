import { Component, Input } from '@angular/core';
import { CustomText } from '../custom-text/custom-text';
import { CustomButton } from '../custom-button/custom-button';

@Component({
  selector: 'app-button-counter',
  imports: [CustomText, CustomButton],
  templateUrl: './button-counter.html',
  styleUrl: './button-counter.css',
})
export class ButtonCounter {
  @Input() name: string = '';
  count: number = 0;

  ngOnInit() {}

  getCountText(): string {
    return `Button ${this.name} count: ${this.count}`;
  }

  getButtonName(): string {
    return `Button ${this.name}`;
  }

  increaseCount = () => {
    this.count += 1;
  };
}
