import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function spellReducer(state = initialState.spells, action) {
    switch (action.type) {
        case types.LOAD_SPELLS_SUCCESS:
            return action.spells;
        case types.CREATE_SPELL_SUCCESS:
            return [
                ...state.filter(spell => spell.id !== action.spell.id),
                Object.assign({}, action.spell)
            ];
        case types.UPDATE_SPELL_SUCCESS:
            return [
                Object.assign({}, action.spell),
                ...state.filter(spell => spell.id !== action.spell.id)
            ];
        case types.DELETE_SPELL_SUCCESS: {
            const newState = Object.assign([], state);
            const indexOfSpellToDelete = state.findIndex(spell => {
                return spell.id == action.spell.id;
            });
            newState.splice(indexOfSpellToDelete, 1);
            return newState;
        }
        default:
            return state;
    }
}
