import {Component} from 'angular2/core';

import {NavHeaderComponent} from './nav-header.component';

@Component({
    selector: 'header',
    templateUrl: 'app/templates/header/header.html',
    directives: [
        NavHeaderComponent
    ],
})

export class HeaderComponent {
}