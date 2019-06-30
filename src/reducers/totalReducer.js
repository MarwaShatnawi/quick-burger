import { globalState } from "../globalState";

export const TOTAL = 'bill:total';

export const totalReducer = (state = globalState, action) => {
    switch(action.type) {
        case TOTAL:
            return action.payload;
        default:
            return state;
    }
};

