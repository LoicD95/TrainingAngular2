import { Component, Input } from '@angular/core';
import { PostService } from '../../services/index';
import { Comment } from 'models';
import { Post } from '../../models';

@Component({
    templateUrl: 'comment-inputs.html',
    selector: 'comment-inputs'
})
export class CommentInputsComponent{
    @Input() post: Post;
    commentMessage:string;

    constructor(
        private postService: PostService
    ) {}

    sendComment() {
        console.log('Création d\'un commentaire');
         return this.postService.comment(this.post, this.commentMessage).then((onfulfilled) => {
            console.log("Success :" + onfulfilled);
            this.commentMessage = '';
        }).catch((onrejected) => {
            console.log("Rejet : " + onrejected);
        });
    }
}