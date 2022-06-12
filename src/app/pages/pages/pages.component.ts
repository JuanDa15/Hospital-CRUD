import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/services/setting.service';

declare function customInitFunctions(): any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit{

  constructor(private _settingService: SettingService) { }

  ngOnInit(): void {
    customInitFunctions();
  }



}
