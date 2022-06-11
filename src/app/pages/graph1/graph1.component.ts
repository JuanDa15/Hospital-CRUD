import { Component } from '@angular/core';
import { ChartData, ChartDataset, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'grafic1',
  templateUrl: './graph1.component.html',
  styles: [
  ]
})
export class Graph1Component {
  public doughnutChartLabels1: string[] = [ 'Carros', 'Motos', 'Aviones' ];

  public doughnutChartData1: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels1,
    datasets: [
      { data: [ 350, 450, 100 ] },
      { data: [ 50, 150, 120 ] },
      { data: [ 250, 130, 70 ] }
    ]
  };


  public doughnutChartLabels2: string[] = [ 'Amarillo', 'Negro', 'Blanco' ];
  public doughnutChartData2: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels2,
    datasets: [
      { data: [ 350, 450, 100 ] },
      { data: [ 50, 150, 120 ] },
      { data: [ 250, 130, 70 ] }
    ]
  };
}
