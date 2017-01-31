import { Component, Input, Pipe } from '@angular/core';
import { PostContent, YoutubePostContent } from 'models';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
    templateUrl: 'youtube-post-content.html',
    selector: 'youtube-post-content'
})
export class YoutubeFeedContentComponent {
    @Input() postContent: YoutubePostContent ;
    constructor(
        private sanitizer: DomSanitizer
    ){}

    get url() {
        //console.log("this.postContent.value " + this.postContent.value.videoId );
        return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.postContent.value.videoId);
    }
}
