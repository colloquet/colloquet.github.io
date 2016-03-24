import {Component} from 'angular2/core';

import {PhotoHeaderComponent} from './photo.header.component';
import {PhotoFooterComponent} from './photo.footer.component';
import {Photo} from '../models/photo';

@Component({
    selector: 'photo-item',
    template: `
      <li class="uk-margin-large-bottom">
        <photo-header [photo]="photo"></photo-header>
        <img src="{{ photo.regular }}" alt="" height="{{ photo.height }}" width="{{ photo.width }}" style="background: {{ photo.color }}" (dblclick)="footer.likePhoto(photo)">
        <photo-footer #footer [photo]="photo"></photo-footer>
        <hr>
      </li>
    `,
    inputs: ['photo'],
    directives: [PhotoHeaderComponent, PhotoFooterComponent]
})
export class PhotoItemComponent {
}
