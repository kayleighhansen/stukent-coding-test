export interface IAppState {
    // locations: ILocations[];
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    // locations: [],
    lastUpdate: null
}

export function rootReducer(state, action) {
    return state;
}