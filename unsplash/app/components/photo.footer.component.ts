import {Component} from 'angular2/core';

import {UnsplashService} from '../services/unsplash.service';
import {CookieService} from 'angular2-cookie/core';
import {Photo} from '../models/photo';

@Component({
    selector: 'photo-footer',
    template: `
      <div class="uk-flex uk-flex-space-between">
        <div class="uk-text-large uk-margin-top">
          <a class="uk-link-reset" (click)="likePhoto(photo)">
            <span [ngClass]="{'uk-icon-heart-o': !photo.liked, 'uk-icon-heart uk-text-danger': photo.liked}"></span> {{ photo.likes }}
          </a>
        </div>
        <div class="uk-text-large uk-margin-top">
          <a href="{{ photo.full }}" target="_blank" class="uk-button">Download</a>
        </div>
      </div>
    `,
    inputs: ['photo']
})
export class PhotoFooterComponent {
  constructor(private _unsplashService: UnsplashService, private _cookieService:CookieService) {
  }

  likePhoto(photo: Photo) {
    let accessToken = this._cookieService.get("accessToken");

    if (accessToken) {
      if (photo.liked) {
        photo.likes--;
      } else {
        photo.likes++;
      }
      photo.liked = !photo.liked;

      this._unsplashService.likePhoto(photo.id, accessToken).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);

          if (photo.liked) {
            photo.likes--;
          } else {
            photo.likes++;
          }
          photo.liked = !photo.liked;
        }
      );
    } else {
      console.log('you need to login first!');
    }

  }
}
