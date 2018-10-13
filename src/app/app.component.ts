import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ 'HELLO' | translate:{firstName: 'Eluzive'} }}</h1>
  `,
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

}
