import { Component, Input, OnInit } from '@angular/core';
import { FadeInAnimation } from 'src/app/animations/custom-animations';
import { Workplace } from '../../experience-block.component';

@Component({
  selector: 'app-workplace-collapsible',
  templateUrl: './workplace-collapsible.component.html',
  styleUrls: ['./workplace-collapsible.component.scss'],
  animations: [FadeInAnimation]
})
export class WorkplaceCollapsibleComponent implements OnInit {

  visible: boolean;
  @Input() workplace: Workplace;
  @Input() animationDelay = 0;

  constructor() { }

  ngOnInit(): void {
    this.visible = false;
  }

  toggle(): void {
    this.visible = !this.visible;
  }

}
