import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']
})
export class HomeComponent implements OnInit {

  // private dataChangeSub: Subscription;
  dataList: string[];

  constructor(public weatherService: WeatherService ) { }

  ngOnInit(): void {

    this.dataList = ["Rexburg-Idaho", "Bristow-VA", "NewYork-NewYork", "Nashville-TN"];

  }
}
