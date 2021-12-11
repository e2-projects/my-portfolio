import { Component, Input, NgModule } from '@angular/core';

@Component({selector: 'app-about-text-container'})
class AboutTextContainerComponent {
    @Input() data: any;
    @Input() animationDelay: any;
}

@Component({selector: 'app-contact-form'})
class ContactFormComponent {}



@NgModule({
    declarations: [
        AboutTextContainerComponent,
        ContactFormComponent
    ],
    imports: [],
    providers: [],
    exports: [
        AboutTextContainerComponent,
        ContactFormComponent
    ],
    bootstrap: []
  })
export class MockModule {

}
