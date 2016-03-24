import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'photo-header',
    template: `
      <a [routerLink]="['Users', { user: photo.user.username }]" class="uk-display-inline-block uk-margin-bottom uk-link-reset">
        <img src="{{ photo.user.avatar }}" class="uk-border-circle uk-margin-right" width="40" height="40">
        <strong>{{ photo.user.name }}</strong>
      </a>
    `,
    inputs: ['photo'],
    directives: [ROUTER_DIRECTIVES]
})
export class PhotoHeaderComponent {
}
