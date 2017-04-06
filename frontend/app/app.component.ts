import {Component} from 'angular2/core';

import {HeaderComponent} from './header/header.component'
import {MainComponent} from './main-page/main.component'
import {GeneralLoaderService} from './loader/general-loader.service'
import {GeneralLoaderComponent} from './loader/general-loader.component'

@Component({
    selector: 'app-words',
    templateUrl: 'app/templates/app-words.html',
    providers: [
        GeneralLoaderService,
    ],
    directives: [
        HeaderComponent,
        MainComponent,
        GeneralLoaderComponent,
    ],
})

export class AppComponent {
    constructor (public gLoader:GeneralLoaderService) {
    }
}
