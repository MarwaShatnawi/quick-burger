import { TOTAL } from "../reducers/totalReducer";

export const total = (state) => {
    return{
        type: TOTAL,
        payload: state
    }
}