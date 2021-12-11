import { Component, Input, NgModule } from '@angular/core';

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


@NgModule({
    declarations: [
        AboutTextContainerComponent,
        ContactFormComponent,
        WorkplaceCollapsibleContentComponent,
        WorkplaceCollapsibleComponent
    ],
    imports: [],
    providers: [],
    exports: [
        AboutTextContainerComponent,
        ContactFormComponent,
        WorkplaceCollapsibleContentComponent,
        WorkplaceCollapsibleComponent
    ],
    bootstrap: []
  })
export class MockModule {

}
