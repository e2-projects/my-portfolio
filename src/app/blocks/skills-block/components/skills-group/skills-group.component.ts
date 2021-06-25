import { Component, Input, OnInit } from '@angular/core';
import { SkillGroup } from '../../models/skills.data';

@Component({
  selector: 'app-skills-group',
  templateUrl: './skills-group.component.html',
  styleUrls: ['./skills-group.component.scss']
})
export class SkillsGroupComponent implements OnInit {

  @Input()
  skillGroup: SkillGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
