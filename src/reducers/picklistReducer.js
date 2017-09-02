import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';


export default function picklistReducer(state = initialState.picklists, action) {
    switch(action.type) {
        case types.LOAD_PICKLISTS_SUCCESS:
            return action.picklists;
        case types.CREATE_PICKLIST_SUCCESS:
            return [
                ...state.filter(picklist => picklist.id !== action.picklist.id),
                Object.assign({}, action.picklist)
            ];
        case types.UPDATE_PICKLIST_SUCCESS:
            return [
                Object.assign({}, action.picklist),
                ...state.filter(picklist => picklist.id !== action.picklist.id)
            ];
        case types.DELETE_PICKLIST_SUCCESS: {
            const newState = Object.assign([], state);
            const indexOfpicklistToDelete = state.findIndex(picklist => {return picklist.id == action.picklist.id;});
            newState.splice(indexOfpicklistToDelete, 1);
            return newState;
        }
        default: 
            return state;
    }
}
