import { globalState } from "../globalState";

export const BILL_ADD_ITEM = 'bill:add-item';

export const billReducer = (state = globalState, action) => {
    switch(action.type) {
        case BILL_ADD_ITEM:
            return action.payload;
        default:
            return state;
    }
};