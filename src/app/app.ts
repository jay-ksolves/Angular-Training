import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Eventbinding } from './eventbinding/eventbinding';
import { Getsetinputfieldvalue } from './getsetinputfieldvalue/getsetinputfieldvalue';
import { Styleinangular } from './styleinangular/styleinangular';
import { Ifelse } from './ifelse/ifelse';
import { Switch } from './switch/switch';
import { Forloop } from './forloop/forloop';
import { Signals } from './signals/signals';
import { Computedsignals } from './computedsignals/computedsignals';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Eventbinding, Getsetinputfieldvalue, Styleinangular, Ifelse, Switch, Forloop, Signals, Computedsignals ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-training');
  name = "Angular Training"
}
