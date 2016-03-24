import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {CookieService} from 'angular2-cookie/core';

import {UnsplashService} from '../services/unsplash.service';

@Component({
    selector: 'oauth',
    template: `
      getting access token...
    `,
})

export class OauthComponent {
  constructor(private router: Router, private _routeParams:RouteParams, private _unsplashService: UnsplashService, private _cookieService:CookieService) {
    let code = _routeParams.get('code');

    this._unsplashService.oauth(code).subscribe(
      data => {
        this._cookieService.put("accessToken", data.access_token);
        // this.router.navigate(['Home']);
        window.location.href = "/";
      },
      error => {
        console.log(error);
      }
    );
  }
}
