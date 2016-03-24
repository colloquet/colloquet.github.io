import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {UnsplashService} from '../services/unsplash.service';
import {PhotoItemComponent} from './photo.item.component';
import {Photo} from '../models/photo';
import {User} from '../models/user';
import {PhotoHelper} from '../helpers/photo.helper';

@Component({
    selector: 'user',
    template: `
      <div class="uk-text-center uk-margin-large-bottom">
        <img src="{{ user.avatar }}" class="uk-border-circle" width="100" height="100">
        <h2><strong>{{ user.name }}</strong></h2>
        <a href="{{ user.portfolio_url }}">{{ user.portfolio_url }}</a>
      </div>
      <div class="uk-text-center uk-margin-bottom">
        <div class="uk-button-group">
          <a class="uk-button" (click)="switchTab('photos')" [ngClass]="{'uk-active': viewTab == 'photos'}">Photos</a>
          <a class="uk-button" (click)="switchTab('likes')" [ngClass]="{'uk-active': viewTab == 'likes'}">Likes</a>
        </div>
      </div>
      <div *ngIf="viewTab == 'photos'">
        <h3 class="uk-text-center" *ngIf="isLoading">Loading...</h3>
        <ul class="uk-grid uk-grid-width-1-1 uk-grid-width-medium-1-1">
          <photo-item *ngFor="#photo of photos" [photo]="photo"></photo-item>
        </ul>
        <h3 *ngIf="!isLoading && photos.length == 0">No photos.</h3>
      </div>
      <div *ngIf="viewTab == 'likes'">
        <h3 class="uk-text-center" *ngIf="isLoading">Loading...</h3>
        <ul class="uk-grid uk-grid-width-1-1 uk-grid-width-medium-1-1">
          <photo-item *ngFor="#photo of likes" [photo]="photo"></photo-item>
        </ul>
        <h3 *ngIf="!isLoading && likes.length == 0">No photos.</h3>
      </div>
    `,
    directives: [PhotoItemComponent]
})

export class UserComponent {
  public username: string;
  public isLoading: boolean;
  public user: User;
  public photos: Photo[];
  public likes: Photo[];
  public viewTab: string;

  constructor(private _router:Router, private _routeParams:RouteParams, private _unsplashService: UnsplashService, private _photoHelper: PhotoHelper) {
    this.user = {
      name: "",
      username: "",
      avatar: "",
      portfolio_url: ""
    };
    this.photos = [];
    this.likes = [];
    this.viewTab = "photos";
  }

  ngOnInit() {
    let username = this._routeParams.get('user');
    this.username = username;

    this.getUser(username);
  }

  switchTab(tab: string) {
    this.viewTab = tab;
  }

  getUser(username: string) {
    this.isLoading = true;

    this._unsplashService.getUser(username).subscribe(
      data => {
        this.user = this._photoHelper.prepareUserObject(data)

        this.getPhotosByUser(data.links.photos);
        this.getLikesByUser(data.links.likes);
      }
    );
  }

  getPhotosByUser(link: string) {
    this.isLoading = true;

    this._unsplashService.getPhotosByUser(link).subscribe(
      data => {
        data.forEach(photo => {
          this.photos.push(this._photoHelper.preparePhotoObject(photo));
        });

        this.isLoading = false;
      },
      error => { console.log(error) }
    );
  }

  getLikesByUser(link: string) {
    this.isLoading = true;

    this._unsplashService.getLikesByUser(link).subscribe(
      data => {
        data.forEach(photo => {
          this.likes.push(this._photoHelper.preparePhotoObject(photo));
        });

        this.isLoading = false;
      },
      error => { console.log(error) }
    );
  }
}
