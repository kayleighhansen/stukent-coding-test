import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  dataListChanged = new Subject();

  constructor(private http: HttpClient) { }

  getWeatherByLocation(location) {
    return this.http.get("http://api.weatherapi.com/v1/current.json?key=b36a28f69d6044c08c681338221204&q="
    + location + "&aqi=no")
  }
}
