import { Component, OnInit } from '@angular/core';
import { HomePageData, MOCKED_HOME_PAGE_DATA } from './models/home-page.data';

@Component({
  selector: 'app-home-block',
  templateUrl: './home-block.component.html',
  styleUrls: ['./home-block.component.scss']
})
export class HomeBlockComponent implements OnInit {

  data: HomePageData;

  constructor() { }

  ngOnInit(): void {
    this.data = MOCKED_HOME_PAGE_DATA;
  }

}
