import { Service } from '@angular/core';

@Service()
export class Auth {
    isLoggedin: boolean=false;

    onLogin(){
        this.isLoggedin=true;
    }

    onLogout(){
        this.isLoggedin=false;
    }
}
