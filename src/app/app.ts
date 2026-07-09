import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Eventbinding } from './eventbinding/eventbinding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Eventbinding],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-training');
  name = "Angular Training"
}
