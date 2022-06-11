import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementComponent } from './increment/increment.component';
import { FormsModule } from '@angular/forms';
import { GraphComponent } from './graph/graph.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IncrementComponent,
    GraphComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
  exports: [
    IncrementComponent,
    GraphComponent
  ]
})
export class ComponentsModule { }
