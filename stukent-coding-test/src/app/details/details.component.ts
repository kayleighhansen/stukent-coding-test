import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['../app.component.css']
})
export class DetailsComponent implements OnInit {

  location: string;
  condition: any;
  condition_icon: any;
  month: string;
  day: any;
  year: any;
  time: any;
  last_updated: any;
  temperature_f: any;
  temperature_c: any;
  feelslike_f: any;
  feelslike_c: any;
  wind_mph: any;
  wind_kph: any;
  wind_dir: any;
  pressure_in: any;
  pressure_mb: any;
  humidity: any;
  vis_miles: any;
  vis_km: any;
  name: any;
  state: any;

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
    this.location = window.location.pathname.replace('/home/','');

    this.weatherService.getWeatherByLocation(this.location).subscribe(res => {
      console.log(Object.values(res));
      
      const current = Object.values(res)[1];
      const location = Object.values(res)[0];

      this.name = location.name;
      this.state = location.region;

      this.condition = current.condition.text;
      this.condition_icon = current.condition.icon;

      this.last_updated = current.last_updated;

      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      this.month = months[parseInt(this.last_updated.substring(5,7)) - 1];
      this.day = this.last_updated.substring(8,10);
      this.year = this.last_updated.substring(0,4);
      this.time = this.last_updated.substring(11,18);

      this.temperature_f = current.temp_f;
      this.temperature_c = current.temp_c;

      this.feelslike_f = current.feelslike_f;
      this.feelslike_c = current.feelslike_c;

      this.wind_mph = current.wind_mph;
      this.wind_kph = current.wind_kph;

      this.wind_dir = current.wind_dir;
      this.pressure_in = current.pressure_in;
      this.pressure_mb = current.pressure_mb;

      this.humidity = current.humidity;
      this.vis_miles = current.vis_miles;
      this.vis_km = current.vis_km;
    });

  }

}
