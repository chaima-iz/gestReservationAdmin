import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  ngOnInit(){

    new Chart("myChart", {
      type: 'bar',
      data: {
          labels:["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"],
          datasets: [{
              label: 'ReservationS',
              data: [20, 30, 40, 50, 60, 30,20, 40, 20, 80, 50, 75],
              borderWidth: 1,
              backgroundColor: '#00162A'
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          },
  
  
      }
  });
  }

}
