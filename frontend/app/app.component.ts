import {Component} from 'angular2/core';

import {GeneralLoaderService} from './loader/general-loader.service'
import {MainMenuComponent} from './menu/main-menu.component'

@Component({
    selector: 'app-words',
    templateUrl: 'app/templates/app-words.html',
    providers: [
        GeneralLoaderService,
    ],
    directives: [
        MainMenuComponent
    ],
})

export class AppComponent {
    constructor (public loader: GeneralLoaderService) {
    }
}
