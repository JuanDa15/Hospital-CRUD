import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private  _linkCurrentTheme: string = "";
  private _linkTheme: HTMLElement | null = document.getElementById('theme');;
  private _cssBaseLink: string;

  constructor() {
    this._linkCurrentTheme = localStorage.getItem('theme') || "./assets/css/colors/default-dark.css";
    document.getElementById('theme')?.setAttribute('href', this._linkCurrentTheme);
    this._cssBaseLink = './assets/css/colors/'
   }

  public changeTheme( theme: string ): void {
    const themeURL: string = `${this._cssBaseLink}${theme}.css`;
    this._linkTheme?.setAttribute('href',themeURL);
    localStorage.setItem('theme',themeURL);
    this.checkCurrentTheme();
  }

  public checkCurrentTheme( ): void {
    const themeLinks: NodeListOf<Element> = document.querySelectorAll('.selector');
    themeLinks.forEach( (element: Element) => {
      element.classList.remove('working');
      const btnTheme: string | null = element.getAttribute('data-theme');
      const btnThemeUrl: string = `${this._cssBaseLink}${btnTheme}.css`;
      const currentTheme: string | null | undefined = this._linkTheme?.getAttribute('href');

      if (currentTheme === btnThemeUrl) {
        element.classList.add('working');
      };
    });
  }
}
