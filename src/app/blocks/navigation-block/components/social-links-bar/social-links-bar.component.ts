import { Component, Input } from '@angular/core';
import { SocialLinks } from 'src/app/models/data/social-links.model';

@Component({
  selector: 'app-social-links-bar',
  templateUrl: './social-links-bar.component.html',
  styleUrls: ['./social-links-bar.component.scss']
})
export class SocialLinksBarComponent {

  @Input() data: SocialLinks;

}
