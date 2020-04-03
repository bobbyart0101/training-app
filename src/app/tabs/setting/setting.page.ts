import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: 'setting.page.html',
  styleUrls: ['setting.page.scss']
})
export class SettingPage {

  constructor(public router: Router) {}

}
