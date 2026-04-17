import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonCounter } from './button-counter/button-counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonCounter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-project');
}
