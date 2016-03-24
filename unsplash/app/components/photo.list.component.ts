import {Component, OnInit} from 'angular2/core';

import {PhotoItemComponent} from './photo.item.component';
import {UnsplashService} from '../services/unsplash.service';

import {Photo} from '../models/photo';
import {PhotoHelper} from '../helpers/photo.helper';

@Component({
    selector: 'photo-list',
    template: `
      <div class="uk-text-center uk-margin-bottom">
        <div class="uk-button-group">
          <button class="uk-button" (click)="switchOrder('latest')" [ngClass]="{'uk-active': order == 'latest'}">Latest</button>
          <button class="uk-button" (click)="switchOrder('popular')" [ngClass]="{'uk-active': order == 'popular'}">Popular</button>
          <button class="uk-button" (click)="switchOrder('oldest')" [ngClass]="{'uk-active': order == 'oldest'}">Oldest</button>
        </div>
      </div>
      <h3 class="uk-text-center" *ngIf="isLoading && photos.length == 0">Loading...</h3>
      <ul class="uk-grid uk-grid-width-1-1 uk-grid-width-medium-1-1">
        <photo-item *ngFor="#photo of photos" [photo]="photo"></photo-item>
      </ul>
      <p class="uk-text-center"><button class="uk-button uk-button-primary" (click)="onLoadMore()" [disabled]="isLoading">{{ isLoading? 'Loading...' : 'Load more' }}</button></p>
    `,
    directives: [PhotoItemComponent]
})
export class PhotoListComponent {
  public photos: Photo[];
  public isLoading: boolean;
  public page: number;
  public order: string;

  ngOnInit() {
    this.getPhotos();
  }

  constructor(private _unsplashService: UnsplashService, private _photoHelper: PhotoHelper) {
    this.photos = [];
    this.page = 1;
    this.order = 'latest';
  }

  onLoadMore() {
    this.page++;
    this.getPhotos();
  }

  switchOrder(order: string) {
    this.order = order;
    this.page = 1;
    this.photos = [];
    this.getPhotos();
  }

  getPhotos() {
    this.isLoading = true;

    this._unsplashService.getPhotos(this.page, this.order).subscribe(
      data => {
        data.forEach(photo => {
          this.photos.push(this._photoHelper.preparePhotoObject(photo));
        });

        this.isLoading = false;
      },
      error => { console.log(error) }
    )
  }
}
