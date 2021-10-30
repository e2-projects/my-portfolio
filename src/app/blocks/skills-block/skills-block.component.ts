import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/constants/collections';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SkillGroup } from './models/skills.data';

@Component({
  selector: 'app-skills-block',
  templateUrl: './skills-block.component.html',
  styleUrls: ['./skills-block.component.scss']
})
export class SkillsBlockComponent implements OnInit {

  skills: SkillGroup[];

  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.firestore.getCollectionItems<SkillGroup>(Collection.SKILLS_TAB_DATA)
                  .subscribe((groups: SkillGroup[]) => {
                    this.skills = groups.sort((a, b) => a.position < b.position ? -1 : 1);
                  });
  }

}
