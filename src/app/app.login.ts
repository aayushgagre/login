import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector:'login',
    templateUrl:'login.html'
})

export class LoginComponent{
    constructor(private router:Router){}

    username:string;
    password:string;

    authenticateUser(){
        if((this.username=="admin") && (this.password=="admin123"))
        {
            this.router.navigate(['home']);
        }
    }

} 