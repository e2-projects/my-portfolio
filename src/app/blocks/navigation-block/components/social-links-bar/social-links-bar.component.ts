import { Component, OnInit } from '@angular/core';
import { MOCKED_SOCIAL_DATA, SocialData } from '../../models/social-data.interface';

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

  openLinkedin(): void {
    window.open(this.socialData.linkedinUrl, '_blank');
  }

  openFacebook(): void {
    window.open(this.socialData.facebookUrl, '_blank');
  }

  openInstagram(): void {
    window.open(this.socialData.instagramUrl, '_blank');
  }

  openGithub(): void {
    window.open(this.socialData.githubUrl, '_blank');
  }

}
