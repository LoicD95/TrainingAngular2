import { Component, Input, Pipe } from '@angular/core';
import { PostContent, HttpPostContent } from 'models';
@Component({
    templateUrl: 'http-post-content.html',
    selector: 'http-post-content'
})
export class HttpFeedContentComponent {
    @Input() postContent: HttpPostContent = new HttpPostContent("");
}
