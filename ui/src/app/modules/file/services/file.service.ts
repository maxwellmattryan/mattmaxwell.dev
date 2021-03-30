import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '@ui/environments/environment';
import { ApiService } from '@ui/core/http';

import { FileData } from '../components/file-upload-modal/file-upload-modal.component';
import { Observable } from 'rxjs';

export type ImageFormat = 'png' | 'webp';

@Injectable({
    providedIn: 'root'
})
export class FileService extends ApiService {
    private assetsBucketPrefix: string = 'https://storage.googleapis.com/mattmaxwell-assets';

    constructor(http: HttpClient) {
        super(http);
    }

    // CAUTION: This RegExp match assumes that there is only one '.' in the filename
    // and that it denotes the file extension.
    public getImageUri(relativeUri: string = '', format: ImageFormat): string {
        const noExt = relativeUri.match(/[^.]*/)[0];

        return `${this.assetsBucketPrefix}/${noExt}.${format}`;
    }

    public uploadFile(formData: FormData, fileData: FileData): Observable<void> {
        const headers = this.contentTypeHeader('multipart/form-data');

        let params = new HttpParams();
        params = params.set('folder', fileData.folder);

        return this.http.post<void>(
            `${environment.API_URL}/files/upload`,
            formData,
            { headers: headers, params: params }
        );
    }

    public deleteFile(uri: string): Observable<void> {
        let params = new HttpParams();
        params = params.set('uri', uri);

        return this.http.delete<void>(
            `${environment.API_URL}/files/delete`,
            { params: params }
        );
    }
}
