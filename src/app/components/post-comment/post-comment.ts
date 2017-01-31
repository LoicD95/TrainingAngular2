import { Component, Input } from '@angular/core';
import { Post } from '../../models';
import { MessageParser } from 'services';

@Component({
    templateUrl: 'post-comment.html',
    selector: 'post-comment'
})
export class PostCommentComponent{
    @Input() comment: Post;

    constructor(
        private parser: MessageParser
    ) {}

    ngOnInit() {
        //Parse comment
        this.comment.content = this.parser.parse(this.comment);
    }
}