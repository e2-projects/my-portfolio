import { Component, OnInit } from '@angular/core';
import { MOCKED_SKILLS_DATA, SkillGroup, SkillsData } from './models/skills.data';

@Component({
  selector: 'app-skills-block',
  templateUrl: './skills-block.component.html',
  styleUrls: ['./skills-block.component.scss']
})
export class SkillsBlockComponent implements OnInit {

  skills: SkillGroup[];

  constructor() { }

  ngOnInit(): void {
    this.skills = MOCKED_SKILLS_DATA.skillGroups;
    console.log(this.skills);
  }

}
