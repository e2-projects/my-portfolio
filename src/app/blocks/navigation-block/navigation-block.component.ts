import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection } from 'src/app/constants/collections';
import { Profile } from 'src/app/models/data/profile.model';
import { SocialLinks } from 'src/app/models/data/social-links.model';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-navigation-block',
  templateUrl: './navigation-block.component.html',
  styleUrls: ['./navigation-block.component.scss']
})
export class NavigationBlockComponent implements OnInit {

  profile: Profile;
  socialLinks$: Observable<SocialLinks>;
  loading = true;
  
  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.firestore.getCollectionItem<Profile>(Collection.PROFILE).subscribe(profile => { 
      this.profile = profile;
      this.loading = false;
    });
    this.socialLinks$ = this.firestore.getCollectionItem<SocialLinks>(Collection.SOCIAL);
  }

}
