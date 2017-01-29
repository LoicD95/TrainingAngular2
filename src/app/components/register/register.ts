import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/index';
import { UserRegistration } from 'models';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'register',
    templateUrl: 'register.html'
})
export class RegisterComponent {
    @ViewChild(NgForm)
    ngForm: NgForm;

    model = new UserRegistration();

    userExist: boolean = false;

    constructor(
        private registrationService: RegistrationService,
        private router : Router
    ) { }

    register() {
        if (this.ngForm.form.invalid) {
            return;
        }else{
            this.registrationService.usernameExists(this.model.userName).then((onfulfilled) => {
                alert("Success : " + onfulfilled);
                if(onfulfilled){
                    //message : user already exist
                   this.userExist = true;                
                }else{
                    //Register user
                    this.registrationService.register(this.model);
                    this.router.navigate(['login']);
                }
            }).catch(function(onrejected){
                alert("Rejet : " + onrejected);
            });
        }
    }
}
