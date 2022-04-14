import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from '../weather.service';
import { combineReducers } from 'redux';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';
import { Location } from '../redux/location';
import { LocationsActions } from '../redux/items.actions';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']
})
export class HomeComponent implements OnInit {

  dataList: string[];
  example = "Rexburg-Idaho";

  // @select('locations') public locations$: Observable<Location>;
  warning: string;
  name: string = '';
  newLocation: string;

  constructor(public weatherService: WeatherService, public actions: LocationsActions) { }

  ngOnInit(): void {
    this.dataList = ["Rexburg-Idaho", "Bristow-VA", "New York City", "Nashville-TN"];


    // console.log(this.locations$);
    // this.someObservable.subscribe((someArray: any[]) => {
    //   console.log(someArray);
    // });
  }

  addLocation() {
    this.dataList.forEach((data) => {
      if(data == this.newLocation) {
        this.warning = "Already in list";
      }
    })

    if(!this.warning) {
      this.weatherService.getWeatherByLocation(this.newLocation).subscribe(
        (res) => {
          this.dataList.push(this.newLocation);
      },
      (error) => {
        this.warning = error;
  
      });
    }
  }

  // addLocation(labelInput: HTMLInputElement) {
  //   this.actions.add(labelInput.value);
  //   labelInput.value = '';
  // }

  // ngOnDestroy(): void {
  //   this.weatherService.getWeatherByLocation.unsubscribe();
  // }

}
