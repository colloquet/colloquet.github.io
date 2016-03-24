System.register(['angular2/core', 'angular2/router', 'angular2-cookie/core', '../services/unsplash.service', './photo.list.component', './user.component', './oauth.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, core_2, unsplash_service_1, photo_list_component_1, user_component_1, oauth_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (unsplash_service_1_1) {
                unsplash_service_1 = unsplash_service_1_1;
            },
            function (photo_list_component_1_1) {
                photo_list_component_1 = photo_list_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (oauth_component_1_1) {
                oauth_component_1 = oauth_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_cookieService, _unsplashService) {
                    var _this = this;
                    this._cookieService = _cookieService;
                    this._unsplashService = _unsplashService;
                    var accessToken = this._cookieService.get("accessToken");
                    if (accessToken) {
                        this.isLoggedIn = true;
                        this._unsplashService.getCurrentUser(accessToken).subscribe(function (data) {
                            _this.currentUser = {
                                name: data.first_name + " " + data.last_name,
                                username: data.username,
                                avatar: data.profile_image.medium,
                                portfolio_url: data.portfolio_url
                            };
                        });
                    }
                    else {
                        console.log('not logged in!');
                    }
                }
                AppComponent.prototype.doLogin = function () {
                    window.location.href = "https://unsplash.com/oauth/authorize?client_id=8560f3274856a42259232fa219050bc7edc3d7025514987a4b3b0becc17ba029&redirect_uri=http://localhost:3000/oauth&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes";
                };
                AppComponent.prototype.doLogout = function () {
                    this.currentUser = null;
                    this._cookieService.remove("accessToken");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <div class=\"navbar\">\n        <a class=\"uk-button\" (click)=\"doLogin()\" *ngIf=\"!currentUser\">Login</a>\n        <a class=\"uk-button\" (click)=\"doLogout()\" *ngIf=\"currentUser\">Logout</a>\n        <a [routerLink]=\"['Users', { user: currentUser.username }]\" class=\"uk-display-inline-block uk-margin-bottom uk-link-reset uk-float-right\" *ngIf=\"currentUser\">\n          <img src=\"{{ currentUser.avatar }}\" class=\"uk-border-circle uk-margin-right\" width=\"40\" height=\"40\">\n          <strong>{{ currentUser.name }}</strong>\n        </a>\n      </div>\n      <div class=\"uk-container uk-container-center uk-margin uk-margin-large-top\">\n        <h2 class=\"uk-text-center uk-margin-large-bottom\">\n          <a [routerLink]=\"['Home']\">\n            <img src=\"/public/images/unsplash-logo.svg\" width=\"40\">\n          </a>\n        </h2>\n        <router-outlet></router-outlet>\n      </div>\n    ",
                        directives: [photo_list_component_1.PhotoListComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: photo_list_component_1.PhotoListComponent },
                        { path: '/users/:user', name: 'Users', component: user_component_1.UserComponent },
                        { path: '/oauth', name: 'Oauth', component: oauth_component_1.OauthComponent }
                    ]), 
                    __metadata('design:paramtypes', [core_2.CookieService, unsplash_service_1.UnsplashService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map