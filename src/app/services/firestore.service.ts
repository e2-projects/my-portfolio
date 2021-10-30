import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Collection } from '../constants/collections';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  getCollectionItem<T>(collection: string | Collection): Observable<T> {
    return this.firestore
      .collection<T>(collection.toString().toLowerCase())
      .valueChanges()
      .pipe(map((items: T[]) => items.length > 0 ? items[0] : {} as T));
  }

  getCollectionItems<T>(collection: string | Collection): Observable<T[]> {
    return this.firestore
      .collection<T>(collection.toString().toLowerCase())
      .valueChanges();
  }

}
