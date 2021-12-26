import { Component, Injectable, Input, NgModule } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Collection } from '../constants/collections';

@Component({selector: 'app-about-text-container', template: ''})
class AboutTextContainerComponent {
    @Input() data: any;
    @Input() animationDelay: any;
}

@Component({selector: 'app-contact-form', template: ''})
class ContactFormComponent {}


@Component({selector: 'app-workplace-collapsible-content', template: ''})
class WorkplaceCollapsibleContentComponent {
    @Input() positions: any;
}

@Component({selector: 'app-workplace-collapsible', template: ''})
class WorkplaceCollapsibleComponent {
    @Input() visible: any;
    @Input() workplace: any;
    @Input() animationDelay: any;
}

@Component({selector: 'app-skills-group-content', template: ''})
class SkillsGroupContentComponent {
    @Input() skills: any;
}

@Component({selector: 'app-progress-animation', template: ''})
class ProgressAnimationComponent {
    @Input() progress: any;
}

@Component({selector: 'app-skills-group', template: ''})
class SkillsGroupComponent {
    @Input() skillGroup: any;
}

@Component({selector: 'app-curves-animation', template: ''})
class CurvesAnimationComponent { }

@Component({selector: 'app-navigation-block', template: ''})
class NavigationBlockComponent { }

@Component({selector: 'app-home-block', template: ''})
class HomeBlockComponent { }

@Component({selector: 'app-experience-block', template: ''})
class ExperienceBlockComponent { }

@Component({selector: 'app-about-block', template: ''})
class AboutBlockComponent { }

@Component({selector: 'app-contatcs-block', template: ''})
class ContactsBlockComponent { }

@Component({selector: 'app-navigation-buttons', template: ''})
class NavigationButtonsComponent { }

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
        NavigationBlockComponent,
        HomeBlockComponent,
        ExperienceBlockComponent,
        AboutBlockComponent,
        ContactsBlockComponent,
        NavigationButtonsComponent
    ],
    imports: [
    ],
    providers: [
        FirestoreService
    ],
    exports: [
        AboutTextContainerComponent,
        ContactFormComponent,
        WorkplaceCollapsibleContentComponent,
        WorkplaceCollapsibleComponent,
        SkillsGroupContentComponent,
        ProgressAnimationComponent,
        SkillsGroupComponent,
        CurvesAnimationComponent,
        NavigationBlockComponent,
        HomeBlockComponent,
        ExperienceBlockComponent,
        AboutBlockComponent,
        ContactsBlockComponent,
        NavigationButtonsComponent
    ],
    bootstrap: []
  })
export class MockModule {
    static firestoreService: FirestoreService = new FirestoreService();

    static routes = [
        { path: 'home', component: HomeBlockComponent },
        { path: 'about', component: AboutBlockComponent },
        { path: 'experience', component: ExperienceBlockComponent },
        { path: 'contacts', component: ContactsBlockComponent }
    ];
}
