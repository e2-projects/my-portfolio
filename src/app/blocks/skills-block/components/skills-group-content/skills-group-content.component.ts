import { Component, Input } from '@angular/core';
import { Skill } from '../../models/skills.data';

@Component({
  selector: 'app-skills-group-content',
  templateUrl: './skills-group-content.component.html',
  styleUrls: ['./skills-group-content.component.scss']
})
export class SkillsGroupContentComponent {

  @Input() skills: Skill[];

}
