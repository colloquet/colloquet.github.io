System.register(['angular2/core', './photo.item.component', '../services/unsplash.service', '../helpers/photo.helper'], function(exports_1, context_1) {
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
    var core_1, photo_item_component_1, unsplash_service_1, photo_helper_1;
    var PhotoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (photo_item_component_1_1) {
                photo_item_component_1 = photo_item_component_1_1;
            },
            function (unsplash_service_1_1) {
                unsplash_service_1 = unsplash_service_1_1;
            },
            function (photo_helper_1_1) {
                photo_helper_1 = photo_helper_1_1;
            }],
        execute: function() {
            PhotoListComponent = (function () {
                function PhotoListComponent(_unsplashService, _photoHelper) {
                    this._unsplashService = _unsplashService;
                    this._photoHelper = _photoHelper;
                    this.photos = [];
                    this.page = 1;
                    this.order = 'latest';
                }
                PhotoListComponent.prototype.ngOnInit = function () {
                    this.getPhotos();
                };
                PhotoListComponent.prototype.onLoadMore = function () {
                    this.page++;
                    this.getPhotos();
                };
                PhotoListComponent.prototype.switchOrder = function (order) {
                    this.order = order;
                    this.page = 1;
                    this.photos = [];
                    this.getPhotos();
                };
                PhotoListComponent.prototype.getPhotos = function () {
                    var _this = this;
                    this.isLoading = true;
                    this._unsplashService.getPhotos(this.page, this.order).subscribe(function (data) {
                        data.forEach(function (photo) {
                            _this.photos.push(_this._photoHelper.preparePhotoObject(photo));
                        });
                        _this.isLoading = false;
                    }, function (error) { console.log(error); });
                };
                PhotoListComponent = __decorate([
                    core_1.Component({
                        selector: 'photo-list',
                        template: "\n      <div class=\"uk-text-center uk-margin-bottom\">\n        <div class=\"uk-button-group\">\n          <button class=\"uk-button\" (click)=\"switchOrder('latest')\" [ngClass]=\"{'uk-active': order == 'latest'}\">Latest</button>\n          <button class=\"uk-button\" (click)=\"switchOrder('popular')\" [ngClass]=\"{'uk-active': order == 'popular'}\">Popular</button>\n          <button class=\"uk-button\" (click)=\"switchOrder('oldest')\" [ngClass]=\"{'uk-active': order == 'oldest'}\">Oldest</button>\n        </div>\n      </div>\n      <h3 class=\"uk-text-center\" *ngIf=\"isLoading && photos.length == 0\">Loading...</h3>\n      <ul class=\"uk-grid uk-grid-width-1-1 uk-grid-width-medium-1-1\">\n        <photo-item *ngFor=\"#photo of photos\" [photo]=\"photo\"></photo-item>\n      </ul>\n      <p class=\"uk-text-center\"><button class=\"uk-button uk-button-primary\" (click)=\"onLoadMore()\" [disabled]=\"isLoading\">{{ isLoading? 'Loading...' : 'Load more' }}</button></p>\n    ",
                        directives: [photo_item_component_1.PhotoItemComponent]
                    }), 
                    __metadata('design:paramtypes', [unsplash_service_1.UnsplashService, photo_helper_1.PhotoHelper])
                ], PhotoListComponent);
                return PhotoListComponent;
            }());
            exports_1("PhotoListComponent", PhotoListComponent);
        }
    }
});
//# sourceMappingURL=photo.list.component.js.map