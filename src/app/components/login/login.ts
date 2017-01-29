import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'models';

import { AuthenticationService } from '../../services/index';

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})
export class LoginComponent  {
    model = new UserLogin();
    constructor(
            private authService: AuthenticationService,
            private router : Router
    ) { }

    login() {
        alert("Connexion demandée");
        console.log(this.authService.authenticate(this.model) instanceof Promise);
        return this.authService.authenticate(this.model).then(function(onfulfilled){
            alert("Sucess :" + onfulfilled);
        }).catch(function(onrejected){
            alert("Rejet : " + onrejected);
        });
    }
}
