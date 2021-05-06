import { Component, Input, OnInit } from '@angular/core';
import { WorkExperience } from '../../models/work-experience.data';

@Component({
  selector: 'app-workplace-collapsible',
  templateUrl: './workplace-collapsible.component.html',
  styleUrls: ['./workplace-collapsible.component.scss']
})
export class WorkplaceCollapsibleComponent implements OnInit {

  visible: boolean;
  @Input() data: WorkExperience;

  constructor() { }

  ngOnInit(): void {
    this.visible = false;
  }

  toggle(): void {
    this.visible = !this.visible;
  }

}
