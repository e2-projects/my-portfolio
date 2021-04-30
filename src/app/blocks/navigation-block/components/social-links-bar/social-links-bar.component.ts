import { Component, OnInit } from '@angular/core';
import { MOCKED_SOCIAL_DATA, SocialData } from '../../models/social.data';

@Component({
  selector: 'app-social-links-bar',
  templateUrl: './social-links-bar.component.html',
  styleUrls: ['./social-links-bar.component.scss']
})
export class SocialLinksBarComponent implements OnInit {

  socialData: SocialData = MOCKED_SOCIAL_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
