import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CookieService} from 'angular2-cookie/core';

import {UnsplashService} from '../services/unsplash.service';

import {PhotoListComponent} from './photo.list.component';
import {UserComponent} from './user.component';
import {OauthComponent} from './oauth.component';

import {User} from '../models/user';


@Component({
    selector: 'my-app',
    template: `
      <div class="navbar">
        <a class="uk-button" (click)="doLogin()" *ngIf="!currentUser">Login</a>
        <a class="uk-button" (click)="doLogout()" *ngIf="currentUser">Logout</a>
        <a [routerLink]="['Users', { user: currentUser.username }]" class="uk-display-inline-block uk-margin-bottom uk-link-reset uk-float-right" *ngIf="currentUser">
          <img src="{{ currentUser.avatar }}" class="uk-border-circle uk-margin-right" width="40" height="40">
          <strong>{{ currentUser.name }}</strong>
        </a>
      </div>
      <div class="uk-container uk-container-center uk-margin uk-margin-large-top">
        <h2 class="uk-text-center uk-margin-large-bottom">
          <a [routerLink]="['Home']">
            <img src="/public/images/unsplash-logo.svg" width="40">
          </a>
        </h2>
        <router-outlet></router-outlet>
      </div>
    `,
    directives: [PhotoListComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/', name: 'Home', component: PhotoListComponent},
  {path:'/users/:user', name: 'Users', component: UserComponent},
  {path:'/oauth', name: 'Oauth', component: OauthComponent}
])

export class AppComponent {
  public isLoggedIn: boolean;
  public currentUser: User;

  constructor(private _cookieService:CookieService, private _unsplashService: UnsplashService) {
    let accessToken = this._cookieService.get("accessToken");
    if (accessToken) {
      this.isLoggedIn = true;
      this._unsplashService.getCurrentUser(accessToken).subscribe(
        data => {
          this.currentUser = {
            name: data.first_name + " " + data.last_name,
            username: data.username,
            avatar: data.profile_image.medium,
            portfolio_url: data.portfolio_url
          }
        }
      );
    } else {
      console.log('not logged in!');
    }
  }

  doLogin() {
    window.location.href = "https://unsplash.com/oauth/authorize?client_id=8560f3274856a42259232fa219050bc7edc3d7025514987a4b3b0becc17ba029&redirect_uri=http://localhost:3000/oauth&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes"
  }

  doLogout() {
    this.currentUser = null;
    this._cookieService.remove("accessToken");
  }
}
