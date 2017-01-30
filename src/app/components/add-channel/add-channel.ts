import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ModalDirective } from 'ng2-bootstrap';
import { ChannelService } from 'services';
import { Router } from '@angular/router';

@Component({
    selector: 'add-channel',
    templateUrl: 'add-channel.html'
})
export class AddChannelComponent {
    @ViewChild(ModalDirective) 
    modal:ModalDirective;
    @ViewChild(NgForm) 
    ngForm:NgForm;

    model =  {name: ''};
    
    constructor(
        private channelS : ChannelService,
        private router : Router
    ) {
    }

    save() {
        if (this.ngForm.valid) {
            return this.channelS.add(this.model.name).then((success) => {
                console.log("channel added");
                this.router.navigate(['/']);
            }).catch((failed) => {
                console.log("fail");
            });
        }
    }
}