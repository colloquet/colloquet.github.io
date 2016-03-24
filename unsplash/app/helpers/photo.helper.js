System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PhotoHelper;
    return {
        setters:[],
        execute: function() {
            PhotoHelper = (function () {
                function PhotoHelper() {
                }
                PhotoHelper.prototype.preparePhotoObject = function (photo) {
                    return {
                        id: photo.id,
                        color: photo.color,
                        likes: photo.likes,
                        liked: photo.liked_by_user,
                        user: {
                            name: photo.user.name,
                            username: photo.user.username,
                            avatar: photo.user.profile_image.medium,
                            portfolio_url: photo.profile_url ? photo.profile_url : ""
                        },
                        thumbnail: photo.urls.thumb,
                        regular: photo.urls.regular,
                        full: photo.urls.full,
                        height: photo.height,
                        width: photo.width
                    };
                };
                PhotoHelper.prototype.prepareUserObject = function (user) {
                    return {
                        name: user.first_name + " " + user.last_name,
                        username: user.username,
                        avatar: user.profile_image.large,
                        portfolio_url: user.portfolio_url
                    };
                };
                return PhotoHelper;
            }());
            exports_1("PhotoHelper", PhotoHelper);
        }
    }
});
//# sourceMappingURL=photo.helper.js.map