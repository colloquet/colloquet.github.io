System.register(['angular2/core', 'angular2/router', '../services/unsplash.service', './photo.item.component', '../helpers/photo.helper'], function(exports_1, context_1) {
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
    var core_1, router_1, unsplash_service_1, photo_item_component_1, photo_helper_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (unsplash_service_1_1) {
                unsplash_service_1 = unsplash_service_1_1;
            },
            function (photo_item_component_1_1) {
                photo_item_component_1 = photo_item_component_1_1;
            },
            function (photo_helper_1_1) {
                photo_helper_1 = photo_helper_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent(_router, _routeParams, _unsplashService, _photoHelper) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._unsplashService = _unsplashService;
                    this._photoHelper = _photoHelper;
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
                UserComponent.prototype.ngOnInit = function () {
                    var username = this._routeParams.get('user');
                    this.username = username;
                    this.getUser(username);
                };
                UserComponent.prototype.switchTab = function (tab) {
                    this.viewTab = tab;
                };
                UserComponent.prototype.getUser = function (username) {
                    var _this = this;
                    this.isLoading = true;
                    this._unsplashService.getUser(username).subscribe(function (data) {
                        _this.user = _this._photoHelper.prepareUserObject(data);
                        _this.getPhotosByUser(data.links.photos);
                        _this.getLikesByUser(data.links.likes);
                    });
                };
                UserComponent.prototype.getPhotosByUser = function (link) {
                    var _this = this;
                    this.isLoading = true;
                    this._unsplashService.getPhotosByUser(link).subscribe(function (data) {
                        data.forEach(function (photo) {
                            _this.photos.push(_this._photoHelper.preparePhotoObject(photo));
                        });
                        _this.isLoading = false;
                    }, function (error) { console.log(error); });
                };
                UserComponent.prototype.getLikesByUser = function (link) {
                    var _this = this;
                    this.isLoading = true;
                    this._unsplashService.getLikesByUser(link).subscribe(function (data) {
                        data.forEach(function (photo) {
                            _this.likes.push(_this._photoHelper.preparePhotoObject(photo));
                        });
                        _this.isLoading = false;
                    }, function (error) { console.log(error); });
                };
                UserComponent = __decorate([
                    core_1.Component({
                        selector: 'user',
                        template: "\n      <div class=\"uk-text-center uk-margin-large-bottom\">\n        <img src=\"{{ user.avatar }}\" class=\"uk-border-circle\" width=\"100\" height=\"100\">\n        <h2><strong>{{ user.name }}</strong></h2>\n        <a href=\"{{ user.portfolio_url }}\">{{ user.portfolio_url }}</a>\n      </div>\n      <div class=\"uk-text-center uk-margin-bottom\">\n        <div class=\"uk-button-group\">\n          <a class=\"uk-button\" (click)=\"switchTab('photos')\" [ngClass]=\"{'uk-active': viewTab == 'photos'}\">Photos</a>\n          <a class=\"uk-button\" (click)=\"switchTab('likes')\" [ngClass]=\"{'uk-active': viewTab == 'likes'}\">Likes</a>\n        </div>\n      </div>\n      <div *ngIf=\"viewTab == 'photos'\">\n        <h3 class=\"uk-text-center\" *ngIf=\"isLoading\">Loading...</h3>\n        <ul class=\"uk-grid uk-grid-width-1-1 uk-grid-width-medium-1-1\">\n          <photo-item *ngFor=\"#photo of photos\" [photo]=\"photo\"></photo-item>\n        </ul>\n        <h3 *ngIf=\"!isLoading && photos.length == 0\">No photos.</h3>\n      </div>\n      <div *ngIf=\"viewTab == 'likes'\">\n        <h3 class=\"uk-text-center\" *ngIf=\"isLoading\">Loading...</h3>\n        <ul class=\"uk-grid uk-grid-width-1-1 uk-grid-width-medium-1-1\">\n          <photo-item *ngFor=\"#photo of likes\" [photo]=\"photo\"></photo-item>\n        </ul>\n        <h3 *ngIf=\"!isLoading && likes.length == 0\">No photos.</h3>\n      </div>\n    ",
                        directives: [photo_item_component_1.PhotoItemComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, unsplash_service_1.UnsplashService, photo_helper_1.PhotoHelper])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map