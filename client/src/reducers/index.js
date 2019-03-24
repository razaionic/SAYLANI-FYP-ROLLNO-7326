import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import menuReducer from './menuReducer';
import listReducer from './listReducer';
export default combineReducers({
    item: itemReducer,
    menuitem: menuReducer,
    listitem:listReducer
});

