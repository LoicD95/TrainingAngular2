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
        return this.authService.authenticate(this.model).then((onfulfilled) => {
            console.log("Success :" + onfulfilled);
            this.router.navigate(['/']);
        }).catch((onrejected) => {
            console.log("Rejet : " + onrejected);
        });
    }
}
