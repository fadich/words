import { Injectable } from 'angular2/core';

@Injectable()

export class GeneralLoaderService {
    public status:boolean = true;
    public selector = "<general-loader></general-loader>";

    public start() {
        this.status = true;
    }

    public stop() {
        this.status = false;
    }
}
