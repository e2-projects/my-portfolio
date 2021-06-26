import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomePageData, MOCKED_HOME_PAGE_DATA } from './models/home-page.data';

@Component({
  selector: 'app-home-block',
  templateUrl: './home-block.component.html',
  styleUrls: ['./home-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeBlockComponent implements OnInit {

  data: HomePageData;

  titleChars: string[];
  infoChars: string[];
  descriptionChars: string[];

  constructor() { }

  ngOnInit(): void {
    this.data = MOCKED_HOME_PAGE_DATA;
    this.titleChars = `Hello. I'm `.split('');
    this.infoChars = `I'm a software developer living in ${this.data?.city}, ${this.data?.country}. Currently I'm working in `.split('')
    this.descriptionChars = this.data?.description.split('');
  }

}
