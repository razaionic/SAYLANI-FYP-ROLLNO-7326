import {GET_MENU,EDIT_MENUITEM,ADD_MENU} from '../actions/types';

const initialState = {
    menuitems:[],
    loading: false
}

export default function(state=initialState, action) {
    switch(action.type) {
        case GET_MENU:
        return {
            ...state,
            menuitems: action.payload,
        }
        case EDIT_MENUITEM:
        return {
            ...state,
            items: state.items.filter(items => items._id !==action.payload)
        }
        case ADD_MENU:
        return {
            ...state,
            menuitems: [action.payload, ...state.menuitems]
        }
        default:
        return state;
    }
}