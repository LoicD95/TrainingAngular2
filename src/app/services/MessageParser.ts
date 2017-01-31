import { 
    Post,
    PostContent,
    YoutubePostContent,
    PicturePostContent,
    VideoPostContent,
    HttpPostContent
}
from '../models';

const youtubeRegex =  /(http[s]?:\/\/)?www\.(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\/?\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/gmi;
const pictureRegex = /http[s]?:\/\/.+\.(jpeg|png|jpg|gif)/gmi;
const videoRegex = /http[s]?:\/\/.+\.(mp4|ogg|webm)/gmi;
const httpRegex = /\(?\b(?:(http|https|ftp):\/\/)?((?:www.)?[a-zA-Z0-9\-\.]+[\.][a-zA-Z]{2,4}|localhost(?=\/)|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d*))?([\/]?[^\s\?]*[\/]{1})*(?:\/?([^\s\n\?\[\]\{\}\#]*(?:(?=\.)){1}|[^\s\n\?\[\]\{\}\.\#]*)?([\.]{1}[^\s\?\#]*)?)?(?:\?{1}([^\s\n\#\[\]\(\)]*))?([\#][^\s\n]*)?\)?/gmi;

const youtube = "https://youtu.be/";

export class MessageParser {

    parse(post: Post): PostContent<any> {
        const youtubeMatche = youtubeRegex.exec(post.message);
        const pictureMatche = pictureRegex.exec(post.message);
        const videoMatche = videoRegex.exec(post.message);
        const httpMatche = httpRegex.exec(post.message);
        console.log(httpMatche);

        if(pictureMatche) {
           return new PicturePostContent(pictureMatche.input);
        }

        else if (youtubeMatche) {
            return new YoutubePostContent(youtubeMatche[2]);
        }

        else if (videoMatche) {
            return new VideoPostContent(videoMatche.input);
        }

        else if (httpMatche) {
            return new HttpPostContent(httpMatche.input);
        }
        return null;
    }
}
