import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './components/app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {UnsplashService} from './services/unsplash.service';
import {PhotoHelper} from './helpers/photo.helper';
import {CookieService} from 'angular2-cookie/core';
import 'rxjs/add/operator/map';

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, UnsplashService, PhotoHelper, CookieService]);
