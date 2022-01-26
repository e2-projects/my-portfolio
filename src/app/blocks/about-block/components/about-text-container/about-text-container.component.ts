import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FadeInAnimation } from 'src/app/animations/custom-animations';
import { AboutDescription } from 'src/app/models/data/about.model';

@Component({
  selector: 'app-about-text-container',
  templateUrl: './about-text-container.component.html',
  styleUrls: ['./about-text-container.component.scss'],
  animations: [FadeInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutTextContainerComponent {

  @Input() animationDelay = 0;
  @Input() data?: AboutDescription;

}
