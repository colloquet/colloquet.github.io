System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var UnsplashService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            UnsplashService = (function () {
                function UnsplashService(http) {
                    this.http = http;
                }
                UnsplashService.prototype.getPhotos = function (page, orderBy) {
                    if (orderBy === void 0) { orderBy = "latest"; }
                    var params = new http_1.URLSearchParams();
                    params.set('client_id', "8560f3274856a42259232fa219050bc7edc3d7025514987a4b3b0becc17ba029");
                    params.set('per_page', "30");
                    params.set('order_by', orderBy);
                    params.set('page', page.toString());
                    return this.http.get('https://api.unsplash.com/photos/', {
                        search: params
                    })
                        .map(function (res) { return res.json(); });
                };
                UnsplashService.prototype.getUser = function (username) {
                    return this.http.get('https://api.unsplash.com/users/' + username + '?client_id=8560f3274856a42259232fa219050bc7edc3d7025514987a4b3b0becc17ba029')
                        .map(function (res) { return res.json(); });
                };
                UnsplashService.prototype.getCurrentUser = function (accessToken) {
                    return this.http.get('https://api.unsplash.com/me/?client_id=8560f3274856a42259232fa219050bc7edc3d7025514987a4b3b0becc17ba029&access_token=' + accessToken)
                        .map(function (res) { return res.json(); });
                };
                UnsplashService.prototype.getPhotosByUser = function (link) {
                    return this.http.get(link + '?client_id=8560f3274856a42259232fa219050bc7edc3d7025514987a4b3b0becc17ba029')
                        .map(function (res) { return res.json(); });
                };
                UnsplashService.prototype.getLikesByUser = function (link) {
                    return this.http.get(link + '?client_id=8560f3274856a42259232fa219050bc7edc3d7025514987a4b3b0becc17ba029')
                        .map(function (res) { return res.json(); });
                };
                UnsplashService.prototype.likePhoto = function (id, accessToken) {
                    var headers = new http_1.Headers();
                    headers.append('Authorization', 'Bearer ' + accessToken);
                    var body = "client_id=8560f3274856a42259232fa219050bc7edc3d7025514987a4b3b0becc17ba029";
                    return this.http.post("https://api.unsplash.com/photos/" + id + "/like/", body, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                UnsplashService.prototype.oauth = function (code) {
                    var params = {
                        'client_id': "8560f3274856a42259232fa219050bc7edc3d7025514987a4b3b0becc17ba029",
                        'client_secret': "4674868e0865fcf7a2b63e1570d98f6e7470d8cd2cad3c4d7f8573c82702436d",
                        'redirect_uri': "http://localhost:3000/oauth",
                        'code': code,
                        'grant_type': "authorization_code"
                    };
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    var body = "client_id=" + params.client_id + "&client_secret=" + params.client_secret + "&redirect_uri=" + params.redirect_uri + "&code=" + code + "&grant_type=" + params.grant_type;
                    return this.http.post('https://unsplash.com/oauth/token', body, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                UnsplashService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UnsplashService);
                return UnsplashService;
            }());
            exports_1("UnsplashService", UnsplashService);
        }
    }
});
//# sourceMappingURL=unsplash.service.js.map