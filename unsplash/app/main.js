System.register(['angular2/platform/browser', './components/app.component', 'angular2/http', 'angular2/router', './services/unsplash.service', './helpers/photo.helper', 'angular2-cookie/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, http_1, router_1, unsplash_service_1, photo_helper_1, core_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (unsplash_service_1_1) {
                unsplash_service_1 = unsplash_service_1_1;
            },
            function (photo_helper_1_1) {
                photo_helper_1 = photo_helper_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, unsplash_service_1.UnsplashService, photo_helper_1.PhotoHelper, core_1.CookieService]);
        }
    }
});
//# sourceMappingURL=main.js.map