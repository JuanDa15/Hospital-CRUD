import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent {

  @Input() progress!: number;
  @Input() btnClass!: string;
  @Output() changeProgress: EventEmitter<number> = new EventEmitter();

  constructor() { }


  public changeValue( value: number ): any{
    if ( this.progress >= 100 && value >= 0){
      this.changeProgress.emit(100);
      return this.progress = 100;
    }
    if ( this.progress <= 0 && value < 0 ) {
      this.changeProgress.emit(0)
      return this.progress = 0;
    }
    this.progress = this.progress + value;
    this.changeProgress.emit(this.progress);
  }

  inputValidator( event: number): void {
    if (event >= 100) {
      this.progress = 100;
    } else if (event <= 0) {
      this.progress = 0;
    } else {
      this.progress = event;
    }
    this.changeProgress.emit(this.progress);
  }
}
