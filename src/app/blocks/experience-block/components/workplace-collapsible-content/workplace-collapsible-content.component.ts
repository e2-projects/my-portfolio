import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { WorkingPosition } from '../../experience-block.component';

@Component({
  selector: 'app-workplace-collapsible-content',
  templateUrl: './workplace-collapsible-content.component.html',
  styleUrls: [
    './workplace-collapsible-content.component.scss',
    './../../../../animations/neumorphism.scss'
  ]
})
export class WorkplaceCollapsibleContentComponent {

  @Input() positions: WorkingPosition[];

  constructor() { }

}
