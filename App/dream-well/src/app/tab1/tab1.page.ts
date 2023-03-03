import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit{

  constructor() {}

  @ViewChild('lineCanvas') private lineCanvas!: ElementRef;

  lineChart: any;

  ngAfterViewInit() {
    // initialize data here to be read for graphing

    this.createSleepScoreLineChart();
  }

  createSleepScoreLineChart() {
    let lastFiveLogs = [0,0,0,0,0];
    let sleepiness_values = [1,2,3,4,5];
    let dates_logged = [0,0,0,0,0];

    // Put data into arrays
    //for (let i=0; i < lastFiveLogs.length;i++) {
    //  sleepiness_values.push(lastFiveLogs[i].getLoggedValue());
    //  dates_logged.push(lastFiveLogs[i].getDateStringForGraph());
    //}

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: dates_logged,
        datasets: [{
          label: 'Sleepiness Rating',
          data: sleepiness_values,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    });
  }

}
