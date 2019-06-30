import { BILL_ADD_ITEM } from "../reducers/billReducer";

export const billAddItem = (state) => {
    return{
        type: BILL_ADD_ITEM,
        payload: state
    }
}