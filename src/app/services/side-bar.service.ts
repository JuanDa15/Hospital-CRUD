import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Main',
          url: '/dashboard/main'
        },
        {
          title: 'Progress Bar',
          url: '/dashboard/progress'
        },
        {
          title: 'Graph',
          url: '/dashboard/graph1'
        },
        {
          title: 'Promises',
          url: '/dashboard/promises'
        },
        {
          title: 'RXJS',
          url: '/dashboard/rxjs'
        }
      ]
    }
  ]

  constructor() { }
}
