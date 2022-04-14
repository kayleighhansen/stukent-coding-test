import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  dataListChanged = new Subject();
  data: Observable<Object>;

  constructor(private http: HttpClient) { }

  getWeatherByLocation(location) {
    this.data = this.http.get("http://api.weatherapi.com/v1/current.json?key=b36a28f69d6044c08c681338221204&q=" + location + "&aqi=no");
    return this.data;
  }

}
