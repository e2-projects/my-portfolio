import { Component, OnInit } from '@angular/core';

export interface Workplace {
  companyName: string;
  endDate?: string;
  positions: WorkingPosition[];
}

export interface WorkingPosition {
  name: string;
  projects: string[];
  stack: string;
  startDate: string;
  endDate?: string;
}

@Component({
  selector: 'app-experience-block',
  templateUrl: './experience-block.component.html',
  styleUrls: ['./experience-block.component.scss']
})
export class ExperienceBlockComponent implements OnInit {

  workplaces: Workplace[];

  constructor() { }

  ngOnInit(): void {
    this.workplaces = [
      {
        companyName: 'Google',
        positions: [
          {
            name: 'Business Analyst',
            projects: [
              'Facebook search panel.',
              'Facebook for business.',
              'Facebook icons.'
            ],
            stack: 'Photoshop, Google Search, Android SDK, Facebook SDK',
            startDate: '2015/11/15',
            endDate: '2016/02/10'
          }
        ]
      },
      {
        companyName: 'Awesome Bank',
        positions: [
          {
            name: 'Software engineer',
            projects: [
              'Bank main frame application'
            ],
            stack: 'COBOL, MS Servers',
            startDate: '2012/11/15',
            endDate: '2013/02/10'
          }
        ]
      },
      {
        companyName: 'Facebook',
        positions: [
          {
            name: 'Business Analyst',
            projects: [
              'Facebook search panel.',
              'Facebook for business.',
              'Facebook icons.'
            ],
            stack: 'Photoshop, Google Search, Android SDK, Facebook SDK',
            startDate: '2017/01/10',
            endDate: '2018/06/23'
          },
          {
            name: 'Solution Developer',
            projects: [
              'Sushi restaurant mobile app. Mobile app is used by user who wants to pre-order food'
            ],
            stack: 'Java, Kotlin, Android SDK, C++',
            startDate: '2019/05/15'
          }
        ]
      }
    ];
  }

}
