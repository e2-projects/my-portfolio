import { Component, Input, NgModule } from '@angular/core';

@Component({selector: 'app-about-text-container'})
class AboutTextContainerComponent {
    @Input() data: any;
    @Input() animationDelay: any;
}

@NgModule({
    declarations: [
        AboutTextContainerComponent
    ],
    imports: [],
    providers: [],
    exports: [
        AboutTextContainerComponent
    ],
    bootstrap: []
  })
export class MockModule {

}
