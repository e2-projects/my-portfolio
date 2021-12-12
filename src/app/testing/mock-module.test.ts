import { Component, Injectable, Input, NgModule } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Collection } from '../constants/collections';

@Component({selector: 'app-about-text-container'})
class AboutTextContainerComponent {
    @Input() data: any;
    @Input() animationDelay: any;
}

@Component({selector: 'app-contact-form'})
class ContactFormComponent {}


@Component({selector: 'app-workplace-collapsible-content'})
class WorkplaceCollapsibleContentComponent {
    @Input() positions: any;
}

@Component({selector: 'app-workplace-collapsible'})
class WorkplaceCollapsibleComponent {
    @Input() visible: any;
    @Input() workplace: any;
    @Input() animationDelay: any;
}


@Injectable({providedIn: 'root'})
class FirestoreService {
    getCollectionItem<T>(collection: string | Collection): Observable<any> {
        return of('');
    }
    
    getCollectionItems<T>(collection: string | Collection): Observable<any[]> {
        return of([]);
    }
}


@NgModule({
    declarations: [
        AboutTextContainerComponent,
        ContactFormComponent,
        WorkplaceCollapsibleContentComponent,
        WorkplaceCollapsibleComponent
    ],
    imports: [],
    providers: [
        FirestoreService
    ],
    exports: [
        AboutTextContainerComponent,
        ContactFormComponent,
        WorkplaceCollapsibleContentComponent,
        WorkplaceCollapsibleComponent,
        FirestoreService
    ],
    bootstrap: []
  })
export class MockModule {
    static firestoreService: FirestoreService = new FirestoreService();
}
