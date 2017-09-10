import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function weaponReducer(state = initialState.weapons, action) {
    switch (action.type) {
        case types.LOAD_WEAPONS_SUCCESS:
            return action.weapons;
        case types.CREATE_WEAPON_SUCCESS:
            return [
                ...state.filter(weapon => weapon.id !== action.weapon.id),
                Object.assign({}, action.weapon)
            ];
        case types.UPDATE_WEAPON_SUCCESS:
            return [
                Object.assign({}, action.weapon),
                ...state.filter(weapon => weapon.id !== action.weapon.id)
            ];
        case types.DELETE_WEAPON_SUCCESS: {
            const newState = Object.assign([], state);
            const indexOfWeaponToDelete = state.findIndex(weapon => {
                return weapon.id == action.weapon.id;
            });
            newState.splice(indexOfWeaponToDelete, 1);
            return newState;
        }
        default:
            return state;
    }
}
