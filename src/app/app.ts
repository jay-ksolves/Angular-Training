import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Eventbinding } from './eventbinding/eventbinding';
import { Getsetinputfieldvalue } from './getsetinputfieldvalue/getsetinputfieldvalue';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Eventbinding,Getsetinputfieldvalue],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-training');
  name = "Angular Training"
}
