import { Injectable } from 'angular2/core';

@Injectable()

export class GeneralLoaderService {
    public status:string = 'hidden';

    public start() {
        this.status = '';
    }

    public stop() {
        this.status = 'hidden';
    }
}
