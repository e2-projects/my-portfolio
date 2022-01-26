import { Component, Input } from '@angular/core';
import { FadeInAnimation } from 'src/app/animations/custom-animations';
import { Workplace } from 'src/app/models/data/workplace.model';

@Component({
  selector: 'app-workplace-collapsible',
  templateUrl: './workplace-collapsible.component.html',
  styleUrls: ['./workplace-collapsible.component.scss'],
  animations: [FadeInAnimation]
})
export class WorkplaceCollapsibleComponent {

  @Input() visible ?= false;
  @Input() workplace: Workplace;
  @Input() animationDelay = 0;

  toggle(): void {
    this.visible = !this.visible;
  }

}
