import { LocationsActions } from '../items.actions';
import { Location } from '../location';

const INITIAL_STATE: Location[] = [
  { id: 1, location: 'Rexburg-Idaho' },
];

export function LocationsReducer (
  state: Location[] = INITIAL_STATE, action: any
  ): any {

  switch (action.type) {
    case LocationsActions.LOCATION_ADD:
      return [...state, action.payload];

    case LocationsActions.LOCATION_DELETE:
      return state.filter(({ id }) => id !== action.payload);

    default:
      return [...state];
  }
}