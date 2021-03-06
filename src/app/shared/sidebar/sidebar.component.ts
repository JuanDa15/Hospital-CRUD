import { Component, OnInit } from '@angular/core';
import { SideBarService } from 'src/app/services/side-bar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public menu: any[];
  constructor(private sidebarService: SideBarService) {
    this.menu = [];
  }

  ngOnInit(): void {
    this.menu = this.sidebarService.menu;
  }

}
