import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {

  public users: any[];

  constructor() {
    this.users = [];
  }

  ngOnInit(): void {
    this.getUsuarios().then( users => console.log(users));
  }

  private getUsuarios(): Promise<any> {
    return new Promise( (resolve, reject) => {
      fetch('https://reqres.in/api/users')
        .then( (res: Response) => res.json())
        .then( body => resolve(body?.data))
        .catch( err => reject(err));
    });
  }

}
