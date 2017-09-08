import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';


export default function armorReducer(state = initialState.armors, action) {
    switch(action.type) {
        case types.LOAD_ARMORS_SUCCESS:
            return action.armors;
        case types.CREATE_ARMOR_SUCCESS:
            return [
                ...state.filter(armor => armor.id !== action.armor.id),
                Object.assign({}, action.armor)
            ];
        case types.UPDATE_ARMOR_SUCCESS:
            return [
                Object.assign({}, action.armor),
                ...state.filter(armor => armor.id !== action.armor.id)
            ];
        case types.DELETE_ARMOR_SUCCESS: {
            const newState = Object.assign([], state);
            const indexOfArmorToDelete = state.findIndex(armor => {return armor.id == action.armor.id;});
            newState.splice(indexOfArmorToDelete, 1);
            return newState;
        }
        default: 
            return state;
    }
}
