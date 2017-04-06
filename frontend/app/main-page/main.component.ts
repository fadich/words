import {Component} from 'angular2/core';

import {MainMenuComponent} from './menu/main-menu.component';

@Component({
    selector: 'main',
    templateUrl: 'app/templates/main-page/main.html',
    directives: [
        MainMenuComponent,
    ],
})

export class MainComponent {
}
