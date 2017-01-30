import { Component, Input } from '@angular/core';
import { PostService } from '../../services/index';
import { Comment } from 'models';
import { Post } from '../../models';

@Component({
    templateUrl: 'post-comment.html',
    selector: 'post-comment'
})
export class PostCommentComponent{
    @Input() comment: Post;
}