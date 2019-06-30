import { SELECT_MENU_ITEM } from "../reducers/menuReducer";

export const selectMenuItem = (state) => {
    return{
        type: SELECT_MENU_ITEM,
        payload: state
    }
}