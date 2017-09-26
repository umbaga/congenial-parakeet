import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function proficiencyReducer(state = initialState.proficiencies, action) {
    switch (action.type) {
        case types.LOAD_PROFICIENCIES_SUCCESS:
            return action.proficiencies;
        case types.CREATE_PROFICIENCY_SUCCESS:
            return [
                ...state.filter(proficiency => proficiency.id !== action.proficiency.id),
                Object.assign({}, action.proficiency)
            ];
        case types.UPDATE_PROFICIENCY_SUCCESS:
            return [
                Object.assign({}, action.proficiency),
                ...state.filter(proficiency => proficiency.id !== action.proficiency.id)
            ];
        case types.DELETE_PROFICIENCY_SUCCESS: {
            const newState = Object.assign([], state);
            const indexOfProficiencyToDelete = state.findIndex(proficiency => {
                return proficiency.id == action.proficiency.id;
            });
            newState.splice(indexOfProficiencyToDelete, 1);
            return newState;
        }
        default:
            return state;
    }
}
