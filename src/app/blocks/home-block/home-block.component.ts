import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection } from 'src/app/constants/collections';
import { Company } from 'src/app/models/data/company.model';
import { FirestoreService } from 'src/app/services/firestore.service';
import { HomePageData } from './models/home-page.data';

@Component({
  selector: 'app-home-block',
  templateUrl: './home-block.component.html',
  styleUrls: ['./home-block.component.scss']
})
export class HomeBlockComponent implements OnInit {

  title: string;
  name: string;
  info: string;
  company: Company;
  description: string;
  loading = true;

  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.firestore.getCollectionItem<HomePageData>(Collection.HOME_TAB_DATA)
                  .subscribe(data => this.setupData(data));
  }

  private setupData(data: HomePageData): void {
    console.log(data);
    this.title = `Hello. I'm `;
    this.name = data.fullName;
    this.info = `I'm a ${data.position.toLowerCase()} living in ${data.address}. Currently I'm working in `;
    this.company = data.company;
    this.description = data.description;
    this.loading = false;
  }

}
