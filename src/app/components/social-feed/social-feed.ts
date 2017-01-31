import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostSocketService, PostService } from 'services';
import { Post, PostContent } from 'models';

@Component({
  selector: 'social-feed', 
  templateUrl: 'social-feed.html'
})
export class SocialFeedComponent implements OnInit { 
    items: Post[] = [];
    channelId: string;

    constructor(
        private postService: PostService, 
        private postSocket: PostSocketService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params
            .subscribe((params) => {
                this.channelId = params['id'];
                this.postService
                    .getAll(this.channelId)
                    .then((items) => {
                        this.items = items
                    });
            });
        //Listening if post is created
        this.postSocket.onPost((post) => {
            if( post!= null){
                console.log("Un nouveau post a été crée ! ");
                this.items.push(post);
            }
        });
        //Listening if comment is created
        this.postSocket.onComment((comment) => {
            if( comment!= null){
                console.log("Un nouveau commentaire a été crée ! ");
                this.items.forEach(post => {
                    if(post.id === comment.post.id){
                        post.comments.push(comment);
                    }
                });
            }
        });
        // Listening if a like on Post is created
        this.postSocket.onLike((like) => {
            if(like != null) {
                this.items.forEach(post => {
                    if(post.id === like.post.id) {
                        post.liked = true;
                    }
                });
            }
        });

        //Listening if a like on Comment is created
        this.postSocket.onLike((like) => {
            if(like != null) {
                this.items.forEach(comment => {
                    if(comment.comments === like.post.comments) {
                        console.log("passed here");
                        comment.liked = true;
                    }
                });
            }
        });
    }   
}
