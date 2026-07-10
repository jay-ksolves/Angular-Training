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
import { Effectsinangualr } from './effectsinangualr/effectsinangualr';
import { Pipes } from './pipes/pipes';
import { Custompipe } from './custompipe/custompipe';
import { Ngmodelbinding } from './ngmodelbinding/ngmodelbinding';
import { Livesearch } from './livesearch/livesearch';
import { TodoApp } from './todo-app/todo-app';
import { Templetedrivenfromandsignal } from './templetedrivenfromandsignal/templetedrivenfromandsignal';
import { Usecommoncomponent } from './usecommoncomponent/usecommoncomponent';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Login,
    Eventbinding,
    Getsetinputfieldvalue,
    Styleinangular,
    Ifelse,
    Switch,
    Forloop,
    Signals,
    Computedsignals,
    Effectsinangualr,
    Pipes,
    Custompipe,
    Ngmodelbinding,
    Livesearch,
    TodoApp,
    Templetedrivenfromandsignal,
    Usecommoncomponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-training');
  name = "Angular Training"
}
