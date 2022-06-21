import { Component, OnDestroy } from '@angular/core';
import { combineLatest, filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnDestroy{

  private _intervalObservable: Subscription;

  constructor() {
    // this.customObservable().pipe(
    //   retry(2)
    // ).subscribe({
    //   next: value => console.log('subs', value),
    //   error: ( err ) => console.warn(err),
    //   complete: () => console.log('I end')
    // });
    this._intervalObservable = this.customIntervalObservable()
      .subscribe({
      next: (val) => console.log(val)
    })
  }
  ngOnDestroy(): void {
    this._intervalObservable.unsubscribe();
  }

  public customObservable(): Observable<number> {
    let i = 0;
    const observable$: Observable<number> = new Observable( observer => {
      const interval = setInterval( () => {
        observer.next(i++);

        if ( i === 9){
          clearInterval( interval );
          observer.complete();
        }

        if ( i  % 2 === 0) {
          observer.error(new Error('Im the error'));
        }
      }, 1000)
    });

    return observable$;
  }


  public customIntervalObservable(): Observable<number> {
    const interval$: Observable<number> =  interval(500)
      .pipe(
        map( value => value+=1),
        filter(val => val % 2 === 0)
      );

    return interval$;
  }

}
