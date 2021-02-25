import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from '../http';
import { environment } from '@ui/environments/environment';

export type ImageFormat = 'png' | 'webp';

@Injectable({
    providedIn: 'root'
})
export class FileService extends ApiService {
    constructor(http: HttpClient) {
        super(http);
    }

    // CAUTION: This RegExp match assumes that there is only one '.' in the filename
    // and that it denotes the file extension.
    public getImageUri(relativeUri: string = '', format: ImageFormat): string {
        const noExt = relativeUri.match(/[^.]*/)[0];

        console.log('YO');

        return `${environment.API_URL}/file?uri=${noExt}.${format}`;
    }
}