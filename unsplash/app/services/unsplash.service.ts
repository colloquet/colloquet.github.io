import {Injectable} from 'angular2/core';
import {Http, URLSearchParams, Headers} from 'angular2/http';

@Injectable()

export class UnsplashService {
  constructor(private http: Http) {
  }

  getPhotos(page: number, orderBy: string = "latest") {
    let params: URLSearchParams = new URLSearchParams();
    params.set('client_id', "8560f3274856a42259232fa219050bc7edc3d7025514987a4b3b0becc17ba029");
    params.set('per_page', "30");
    params.set('order_by', orderBy);
    params.set('page', page.toString());

    return this.http.get('https://api.unsplash.com/photos/', {
            search: params
        })
      .map(res => res.json());
  }

  getUser(username: string) {
    return this.http.get('https://api.unsplash.com/users/' + username + '?client_id=8560f3274856a42259232fa219050bc7edc3d7025514987a4b3b0becc17ba029')
      .map(res => res.json());
  }

  getCurrentUser(accessToken: string) {
    return this.http.get('https://api.unsplash.com/me/?client_id=8560f3274856a42259232fa219050bc7edc3d7025514987a4b3b0becc17ba029&access_token=' + accessToken)
      .map(res => res.json());
  }

  getPhotosByUser(link: string) {
    return this.http.get(link + '?client_id=8560f3274856a42259232fa219050bc7edc3d7025514987a4b3b0becc17ba029')
      .map(res => res.json());
  }

  getLikesByUser(link: string) {
    return this.http.get(link + '?client_id=8560f3274856a42259232fa219050bc7edc3d7025514987a4b3b0becc17ba029')
      .map(res => res.json());
  }

  likePhoto(id: string, accessToken: string) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + accessToken);

    let body = "client_id=8560f3274856a42259232fa219050bc7edc3d7025514987a4b3b0becc17ba029";

    return this.http.post("https://api.unsplash.com/photos/" + id + "/like/", body, {headers: headers})
      .map(res => res.json());
  }

  oauth(code: string) {
    let params = {
      'client_id': "8560f3274856a42259232fa219050bc7edc3d7025514987a4b3b0becc17ba029",
      'client_secret': "4674868e0865fcf7a2b63e1570d98f6e7470d8cd2cad3c4d7f8573c82702436d",
      'redirect_uri': "http://localhost:3000/oauth",
      'code': code,
      'grant_type': "authorization_code"
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let body = "client_id=" + params.client_id + "&client_secret=" + params.client_secret + "&redirect_uri=" + params.redirect_uri + "&code=" + code + "&grant_type=" + params.grant_type;

    return this.http.post('https://unsplash.com/oauth/token', body, {headers: headers})
      .map(res => res.json());
  }
}
