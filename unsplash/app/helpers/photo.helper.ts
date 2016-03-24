export class PhotoHelper {
  preparePhotoObject(photo) {
    return {
      id: photo.id,
      color: photo.color,
      likes: photo.likes,
      liked: photo.liked_by_user,
      user: {
        name: photo.user.name,
        username: photo.user.username,
        avatar: photo.user.profile_image.medium,
        portfolio_url: photo.profile_url? photo.profile_url : ""
      },
      thumbnail: photo.urls.thumb,
      regular: photo.urls.regular,
      full: photo.urls.full,
      height: photo.height,
      width: photo.width
    }
  }

  prepareUserObject(user) {
    return {
      name: user.first_name + " " + user.last_name,
      username: user.username,
      avatar: user.profile_image.large,
      portfolio_url: user.portfolio_url
    }
  }
}
