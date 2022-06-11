import { AfterViewInit, Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'graph',
  templateUrl: './graph.component.html',
  styles: []
})
export class GraphComponent {

  @Input() chartData!: ChartData;
  @Input() title!: string;

  public doughnutChartType: ChartType = 'doughnut';
  constructor() {}

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
