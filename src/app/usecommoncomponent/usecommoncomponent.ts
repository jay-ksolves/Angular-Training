import { Component } from '@angular/core';
import { Card } from '../card/card';
import { Button } from "../button/button";

@Component({
  selector: 'app-usecommoncomponent',
  imports: [Card, Button],
  templateUrl: './usecommoncomponent.html',
  styleUrl: './usecommoncomponent.css',
})
export class Usecommoncomponent {
  saveData(){
    alert('Button clicked')
  };
}
