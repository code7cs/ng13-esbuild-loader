import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import _ from 'lodash';
import 'angular-ui-grid/ui-grid';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private board: any;

  ngOnInit(): void {
    console.log(am4core);
    console.log(am4charts);
    this.board = _.toLower('Hello');
    moment.now();
  }
  title = 'ng13-esbuild-loader';
}
