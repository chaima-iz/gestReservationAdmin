import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { DashboardService } from 'src/app/services/DashBoardService/dashboard.service';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  data: {
    gamesCount: number;
    adminsCount: number;
    reservationsCount: number;
    games: any;
  } | undefined;

  constructor(private dashboardService:DashboardService){}

  ngOnInit(){

    this.dashboardService.getData().subscribe(
      res=>{
        this.data = res.data;
        console.log(this.data)
      }
    );

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
