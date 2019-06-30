import { globalState } from "../globalState";

export const SELECT_MENU_ITEM = 'menu:select-item';

export const menuReducer = (state = globalState, action) => {
    switch(action.type) {
        case SELECT_MENU_ITEM:
            return action.payload;
        default:
            return state;
    }
};

