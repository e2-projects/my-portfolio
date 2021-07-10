import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { WorkExperience } from '../../models/work-experience.data';

@Component({
  selector: 'app-workplace-collapsible',
  templateUrl: './workplace-collapsible.component.html',
  styleUrls: ['./workplace-collapsible.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms {{animationDelay}}ms', style({ opacity: 1 })),
      ], { params: { animationDelay: 0 } })
    ])
  ]
})
export class WorkplaceCollapsibleComponent implements OnInit {

  visible: boolean;
  @Input() data: WorkExperience;
  @Input() animationDelay: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.visible = false;
  }

  toggle(): void {
    this.visible = !this.visible;
  }

}
