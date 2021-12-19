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

@Component({selector: 'app-skills-group-content'})
class SkillsGroupContentComponent {
    @Input() skills: any;
}

@Component({selector: 'app-progress-animation'})
class ProgressAnimationComponent {
    @Input() progress: any;
}

@Component({selector: 'app-skills-group'})
class SkillsGroupComponent {
    @Input() skillGroup: any;
}

@Component({selector: 'app-curves-animation'})
class CurvesAnimationComponent { }

@Component({selector: 'app-navigation-block'})
class NavigationBlockComponent { }

@Component({selector: 'app-home-block'})
export class MockedHomeBlockComponent { }

@Component({selector: 'app-experience-block'})
export class MockedExperienceBlockComponent { }

@Component({selector: 'app-about-block'})
export class MockedAboutBlockComponent { }

@Component({selector: 'app-contatcs-block'})
export class MockedContactsBlockComponent { }

@Component({selector: 'app-navigation-buttons'})
export class MockedNavigationButtonsComponent { }

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
        WorkplaceCollapsibleComponent,
        SkillsGroupContentComponent,
        ProgressAnimationComponent,
        SkillsGroupComponent,
        CurvesAnimationComponent,
        NavigationBlockComponent
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
        FirestoreService,
        SkillsGroupContentComponent,
        ProgressAnimationComponent,
        SkillsGroupComponent,
        CurvesAnimationComponent,
        NavigationBlockComponent
    ],
    bootstrap: []
  })
export class MockModule {
    static firestoreService: FirestoreService = new FirestoreService();
}
