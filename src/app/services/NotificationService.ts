import { Injectable } from '@angular/core';
import { PostSocketService } from './PostSocketService';
import { NotificationsService, PushNotificationsService } from 'angular2-notifications';

@Injectable()
export class NotificationService {
    private postSocket: PostSocketService;
    private notificationsService: NotificationsService;
    private pushNotificationsService: PushNotificationsService;
    private notifications: string[] = [];

    constructor(postSocketService: PostSocketService, notificationsService: NotificationsService, pushNotificationsService: PushNotificationsService) {
        this.postSocket = postSocketService;
        this.notificationsService = notificationsService;
        this.pushNotificationsService = pushNotificationsService;
        //We listen
        this.notification();
    }

    notification() {
        //If data in localStorage with 'notifications' key exist, retrieve the data
        if (localStorage.getItem("notifications") !== null) {
            this.notifications = JSON.parse(localStorage["notifications"]);
        }

        //Ask permission from user to display notification
        this.pushNotificationsService.requestPermission();

        //Listening if post is created
        this.postSocket.onPost((post) => {
            if (post != null) {
                let date: string = new Date(post.creationTime).toLocaleString();
                let notification: string = `Un post a été crée par ${post.user.username} le ${date} `

                this.notifications.unshift(notification);
                //SAVE array in localstorage
                localStorage["notifications"] = JSON.stringify(this.notifications);
                this.notificationPopup('Post', notification);
                this.notificationPush('Post', notification);
            }
        });
        //Listening if comment is created
        this.postSocket.onComment((comment) => {
            if (comment != null) {
                let notification: string = `${comment.user.username} a commenté le poste de ${comment.post.user.username}`
                this.notifications.unshift(notification);

                localStorage["notifications"] = JSON.stringify(this.notifications);
                this.notificationPopup('Commentaire', notification);
                this.notificationPush('Commentaire', notification);
            }
        });
        // Listening if a like on Post is created
        this.postSocket.onLike((like) => {
            if (like != null) {
                let notification: string = `${like.user.username} a liker le poste de ${like.post.user.username}`

                this.notifications.unshift(notification);
                localStorage["notifications"] = JSON.stringify(this.notifications);
                this.notificationPopup('Likeuh', notification);
                this.notificationPush('Likeuh', notification);
            }
        });
        // Listening if a channel is created
        this.postSocket.onNewChannel((channel) => {
            if (channel != null) {
                let notification: string = `Le channel : ${channel.name} a été créé.`
                this.notifications.unshift(notification);

                localStorage["notifications"] = JSON.stringify(this.notifications);
                this.notificationPopup('Channel', notification);
                this.notificationPush('Channel', notification);
            }
        });
        // Listening if a user is connecting
        this.postSocket.onUserConnect((user) => {
            if (user != null) {
                let notification: string = `L'utilisateur ${user.username} s'est connecté.`
                this.notifications.unshift(notification);

                localStorage["notifications"] = JSON.stringify(this.notifications);
                this.notificationPopup('Connection', notification);
                this.notificationPush('Connection', notification);
            }
        });
    }

    getNotifications() {
        return this.notifications;
    }

    notificationPopup(title: string, message: string) {
        this.notificationsService.info(
            title,
            message,
            {
                timeOut: 3000,
                showProgressBar: false,
                pauseOnHover: false,
                clickToClose: true,
                maxLength: 100
            }
        )
    }

    notificationPush(title: string, message: string) {
        this.pushNotificationsService.create(title, { body: message }).subscribe(
            res => console.log(res),
            err => console.log(err)
        )
    }

}