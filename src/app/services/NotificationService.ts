import { Injectable } from '@angular/core';
import { PostSocketService } from './PostSocketService';


@Injectable()
export class NotificationService {
    private postSocket: PostSocketService;
    private notifications: string[] = [];

    constructor(postSocketService : PostSocketService)
    {
        this.postSocket = postSocketService;
        //We listen
        this.notification();
    }

    notification(){
        //If data in localStorage with 'notifications' key exist, retrieve the data
        if (localStorage.getItem("notifications") !== null) {
            this.notifications = JSON.parse(localStorage["notifications"]);
        }  

         //Listening if post is created
        this.postSocket.onPost((post) => {
            if( post!= null){
                let date:string = new Date(post.creationTime).toLocaleString();
                let notification :string = `Un post a été crée par ${post.user.username} le ${date} `

                this.notifications.unshift(notification);
                //SAVE array in localstorage
                localStorage["notifications"] = JSON.stringify(this.notifications);
            }
        });
        //Listening if comment is created
        this.postSocket.onComment((comment) => {
            if( comment!= null){
                let notification :string = `${comment.user.username} a commenté le poste de ${comment.post.user.username}`
                this.notifications.unshift(notification);

                localStorage["notifications"] = JSON.stringify(this.notifications);
            }
        });
        // Listening if a like on Post is created
        this.postSocket.onLike((like) => {
            if(like != null) {
                let notification :string = `${like.user.username} a liker le poste de ${like.post.user.username}`

                this.notifications.unshift(notification);
                localStorage["notifications"] = JSON.stringify(this.notifications);
            }
        });
        // Listening if a channel is created
        this.postSocket.onNewChannel((channel) => {
            if(channel != null) {
                let notification :string = `Le channel : ${channel.name} a été créé.`
                this.notifications.unshift(notification);

                localStorage["notifications"] = JSON.stringify(this.notifications);
            }
        });
        // Listening if a user is connecting
        this.postSocket.onUserConnect((user) => {
            if(user != null) {
                let notification :string = `L'utilisateur ${user.username} s'est connecté.`
                this.notifications.unshift(notification);

                localStorage["notifications"] = JSON.stringify(this.notifications);         
            }
        });
    }

    getNotifications(){
        return this.notifications;
    }

}