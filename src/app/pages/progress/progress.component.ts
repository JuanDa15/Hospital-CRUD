import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {

  public progress1: number;
  public progress2: number;

  constructor() {
    this.progress1 = 0;
    this.progress2 = 0;
  }

  get getProgress1() {
    return `${ this.progress1 }%`;
  }

  get getProgress2() {
    return `${ this.progress2 }%`;
  }

}
