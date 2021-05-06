import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { WorkExperience } from '../../models/work-experience.data';

@Component({
  selector: 'app-workplace-collapsible-content',
  templateUrl: './workplace-collapsible-content.component.html',
  styleUrls: ['./workplace-collapsible-content.component.scss']
})
export class WorkplaceCollapsibleContentComponent {

  @Input() data: WorkExperience;

  constructor() { }

}
