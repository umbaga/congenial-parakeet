import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';


export default function itemtypeReducer(state = initialState.itemtypes, action) {
    switch(action.type) {
        case types.LOAD_ITEMTYPES_SUCCESS:
            return action.itemtypes;
        case types.CREATE_ITEMTYPE_SUCCESS:
            return [
                ...state.filter(itemtype => itemtype.id !== action.itemtype.id),
                Object.assign({}, action.itemtype)
            ];
        case types.UPDATE_ITEMTYPE_SUCCESS:
            return [
                Object.assign({}, action.itemtype),
                ...state.filter(itemtype => itemtype.id !== action.itemtype.id)
            ];
        case types.DELETE_ITEMTYPE_SUCCESS: {
            const newState = Object.assign([], state);
            const indexOfItemtypeToDelete = state.findIndex(itemtype => {return itemtype.id == action.itemtype.id;});
            newState.splice(indexOfItemtypeToDelete, 1);
            return newState;
        }
        default: 
            return state;
    }
}
