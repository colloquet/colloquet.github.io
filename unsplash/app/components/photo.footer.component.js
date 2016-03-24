System.register(['angular2/core', '../services/unsplash.service', 'angular2-cookie/core'], function(exports_1, context_1) {
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
    var core_1, unsplash_service_1, core_2;
    var PhotoFooterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (unsplash_service_1_1) {
                unsplash_service_1 = unsplash_service_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            PhotoFooterComponent = (function () {
                function PhotoFooterComponent(_unsplashService, _cookieService) {
                    this._unsplashService = _unsplashService;
                    this._cookieService = _cookieService;
                }
                PhotoFooterComponent.prototype.likePhoto = function (photo) {
                    var accessToken = this._cookieService.get("accessToken");
                    if (accessToken) {
                        if (photo.liked) {
                            photo.likes--;
                        }
                        else {
                            photo.likes++;
                        }
                        photo.liked = !photo.liked;
                        this._unsplashService.likePhoto(photo.id, accessToken).subscribe(function (data) {
                            console.log(data);
                        }, function (error) {
                            console.log(error);
                            if (photo.liked) {
                                photo.likes--;
                            }
                            else {
                                photo.likes++;
                            }
                            photo.liked = !photo.liked;
                        });
                    }
                    else {
                        console.log('you need to login first!');
                    }
                };
                PhotoFooterComponent = __decorate([
                    core_1.Component({
                        selector: 'photo-footer',
                        template: "\n      <div class=\"uk-flex uk-flex-space-between\">\n        <div class=\"uk-text-large uk-margin-top\">\n          <a class=\"uk-link-reset\" (click)=\"likePhoto(photo)\">\n            <span [ngClass]=\"{'uk-icon-heart-o': !photo.liked, 'uk-icon-heart uk-text-danger': photo.liked}\"></span> {{ photo.likes }}\n          </a>\n        </div>\n        <div class=\"uk-text-large uk-margin-top\">\n          <a href=\"{{ photo.full }}\" target=\"_blank\" class=\"uk-button\">Download</a>\n        </div>\n      </div>\n    ",
                        inputs: ['photo']
                    }), 
                    __metadata('design:paramtypes', [unsplash_service_1.UnsplashService, core_2.CookieService])
                ], PhotoFooterComponent);
                return PhotoFooterComponent;
            }());
            exports_1("PhotoFooterComponent", PhotoFooterComponent);
        }
    }
});
//# sourceMappingURL=photo.footer.component.js.map