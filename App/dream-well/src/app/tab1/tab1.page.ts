import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

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

    // Set default colors to chart to all white
    Chart.defaults.backgroundColor = 'rgb(255, 255, 255)';
    Chart.defaults.borderColor = 'rgb(255, 255, 255)';
    Chart.defaults.color = 'rgb(255, 255, 255)';

    this.createSleepScoreLineChart();
  }

  createSleepScoreLineChart() {
    let topTenScores = [87.63, 87.72, 88.09, 87.51 , 87.69, 87.7, 88.14];
    let dates_logged = ["S", "M", "T", "W", "T", "F", "S"];

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: dates_logged,
        datasets: [{
          label: 'Sleep Scores',
          data: topTenScores,
          fill: false,
          borderColor: 'rgb(255, 255, 255)',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ]
        }]
      }
    }); 

    
  }

}
