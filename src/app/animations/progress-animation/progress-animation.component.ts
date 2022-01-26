import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-animation',
  templateUrl: './progress-animation.component.html',
  styleUrls: ['./progress-animation.component.scss']
})
export class ProgressAnimationComponent implements OnInit, OnChanges {

  @Input() progress?: string | number;
  progressClass: string;

  ngOnInit(): void {
    this.changeProgressClass();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.progress) {
      this.progress = changes.progress.currentValue as string | number;
      this.changeProgressClass();
    }
  }

  private changeProgressClass(): void {
    this.progressClass =  `timelapse-${this.progress}`;
  }

}
