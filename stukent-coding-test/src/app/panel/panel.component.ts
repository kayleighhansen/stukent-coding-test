import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['../app.component.css']
})
export class PanelComponent implements OnInit {

  panelOpenState = false;

  dataChangeSub: Subscription;
  name: any;
  last_updated: any;
  month: any;
  day: any;
  year: any;
  time: any;
  temperature_f: any;
  temperature_c: any;
  condition: any;
  condition_icon: any;
  wind_speed_kph: any;
  wind_speed_mph: any;
  humidity: any;
  precipitation_in: any;
  precipitation_mm: any;
  state: any;

  @Input() dataItem: '';

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void { 

    console.log(this.dataItem);

    this.weatherService.getWeatherByLocation(location).subscribe(res => {
      console.log(Object.values(res));

      const location = Object.values(res)[0];
      const current = Object.values(res)[1];

      this.name = location.name;
      this.state = location.region;
      this.last_updated = current.last_updated;

      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      this.month = months[parseInt(this.last_updated.substring(5,7)) - 1];
      this.day = this.last_updated.substring(8,10);
      this.year = this.last_updated.substring(0,4);
      this.time = this.last_updated.substring(11,18);

      this.temperature_f = current.temp_f;
      this.temperature_c = current.temp_c;

      this.condition = current.condition.text;
      this.condition_icon = current.condition.icon;

      this.wind_speed_kph = current.wind_kph;
      this.wind_speed_mph = current.wind_mph;

      this.humidity = current.humidity;
      this.precipitation_in = current.precip_in;
      this.precipitation_mm = current.precip_mm;
    });

  }

}
