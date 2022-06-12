import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
    `
    li{
      a{ cursor: pointer }
    }
    `
  ]
})
export class AccountSettingsComponent implements AfterViewInit {



  constructor(private _settingsService: SettingService) {}

  ngAfterViewInit(): void {
    this._settingsService.checkCurrentTheme();
  }

  public changeTheme( theme: string ): void {
    this._settingsService.changeTheme(theme);
  }

}
