import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Button } from '../button/button';
import { Card } from '../card/card';
import { Auth } from '../auth';

@Component({
  selector: 'app-signpage',
  imports: [RouterLink, Button,Card],
  templateUrl: './signpage.html',
  styleUrl: './signpage.css',
})
export class Signpage {

  constructor(private auth:Auth, private router:Router){
  }

    signin(){
      this.auth.onLogin();
      this.router.navigate(['/successful-signin']);
    }
    singout(){
      this.auth.onLogout();
      this.router.navigate(['/']);
    }
    isLoggedIn(){
      return this.auth.isLoggedin;
    }
}
