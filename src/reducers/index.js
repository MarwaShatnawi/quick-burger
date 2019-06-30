import { combineReducers } from 'redux';
import { billReducer } from './billReducer';
import { menuReducer } from './menuReducer';
import { totalReducer } from './totalReducer';

export default combineReducers({
    menu: menuReducer,
    bill: billReducer,
    total: totalReducer
})