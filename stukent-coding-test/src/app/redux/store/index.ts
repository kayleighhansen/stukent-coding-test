import { combineReducers } from 'redux';
import { LocationsReducer } from './locations.reducer';
import { Location } from '../location';

export class IAppState {
  locations: Location[];
//   config;
};

export const rootReducer = combineReducers<IAppState>({
  locations: LocationsReducer
});