import { Component, OnInit } from '@angular/core';
import { MOCKED_WORK_EXPERIENCES, WorkExperience } from './models/work-experience.data';

@Component({
  selector: 'app-experience-block',
  templateUrl: './experience-block.component.html',
  styleUrls: ['./experience-block.component.scss']
})
export class ExperienceBlockComponent implements OnInit {

  experiences: WorkExperience[];

  constructor() { }

  ngOnInit(): void {
    this.experiences = MOCKED_WORK_EXPERIENCES;
  }

}
