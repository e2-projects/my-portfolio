import { Injectable } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { ListResult } from "@angular/fire/compat/storage/interfaces";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { FileData } from "../models/data/file-data.model";

@Injectable({
    providedIn: 'root'
})
export class FirestorageService {

    constructor(private storage: AngularFireStorage) { }

    getAllInPath(path: string): Observable<ListResult> {
        return this.storage.ref(path).listAll();
    }

    getFileDownloadUrl(path: string): Observable<FileData> {
        return this.storage.ref(path).listAll().pipe(
            switchMap(list => {
                const firstFileName = list.items[0].name.split('/')[0];
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
                return this.storage.ref(`${path}/${firstFileName}`).getDownloadURL().pipe(
                    map(url => {
                        return { name: firstFileName, downloadUrl: url as string } as FileData;
                    })
                ) as Observable<FileData>;
            })
        );
    }

    getProfilePictureUrl(): Observable<unknown> {
        return this.storage.ref('/profile-pic/profile.png').getDownloadURL();
    }

}
