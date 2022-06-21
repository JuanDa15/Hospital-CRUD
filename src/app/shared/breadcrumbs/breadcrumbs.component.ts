import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public title!: string;
  private urlSubscription!: Subscription;

  constructor(private _router: Router,
              private _ar: ActivatedRoute) {
    this._getURLData();
  }

  ngOnDestroy(): void {
    this.urlSubscription.unsubscribe();
  }

  private _getURLData(): void {
    this.urlSubscription = this._router.events.pipe(
      filter( (event: any) => event instanceof ActivationEnd),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
      map( ({snapshot: {data}}) =>  data)
    ).subscribe( ({title}) => {
      this.title = title
      document.title = `Hospital CRUD - ${title}`;
    })
  }

}
