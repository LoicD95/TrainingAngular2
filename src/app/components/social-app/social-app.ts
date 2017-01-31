import { Component, OnInit, EventEmitter } from '@angular/core';
import { Channel } from 'models';
import { ChannelService } from 'services';
import { PostSocketService } from 'services'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'social-app',
    templateUrl: 'social-app.html'
})
export class SocialAppComponent implements OnInit {
    channels: Channel[] = [];
    public options = {
        position: ["bottom", "left"]
    }

    constructor(
        private channelService: ChannelService,
        private route: ActivatedRoute,
        private router: Router,
        private postSocketService: PostSocketService
    ) {
    }

    async ngOnInit() {
        this.channels = await this.channelService.getAll();
        // Redirect toward the first channel
        if (this.channels[0] != undefined) this.router.navigate(['channel/' + this.channels[0].id]);
        //Listening if channel is created
        this.postSocketService.onNewChannel((channel) => {
            if (channel != null) {
                console.log("Un nouveau channel a été crée ! ");
                this.channels.push(channel);
            }
        });
    }
}
