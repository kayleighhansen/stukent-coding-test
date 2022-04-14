import { Injectable } from '@angular/core';
import { IAppState } from './store/index';
import { NgRedux } from '@angular-redux/store';
import { Location } from './location';

@Injectable()
export class LocationsActions {
  static LOCATION_ADD = 'LOCATION_ADD';
  static LOCATION_DELETE = 'LOCATION_DELETE';

  constructor(
    private ngRedux: NgRedux<IAppState>,
  ) { }

  add(name: string): void {
    console.log(name)

    this.ngRedux.dispatch({
      type: LocationsActions.LOCATION_ADD,
      payload: {
        id: new Date().valueOf(),
        name
      }
    });
  }
  
  delete(id): void {
    this.ngRedux.dispatch({
      type: LocationsActions.LOCATION_DELETE,
      payload: id
    });
  }

}
