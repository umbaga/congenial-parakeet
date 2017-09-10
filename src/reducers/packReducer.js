import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function packReducer(state = initialState.packs, action) {
    switch (action.type) {
        case types.LOAD_PACKS_SUCCESS:
            return action.packs;
        case types.CREATE_PACK_SUCCESS:
            return [
                ...state.filter(pack => pack.id !== action.pack.id),
                Object.assign({}, action.pack)
            ];
        case types.UPDATE_PACK_SUCCESS:
            return [
                Object.assign({}, action.pack),
                ...state.filter(pack => pack.id !== action.pack.id)
            ];
        case types.DELETE_PACK_SUCCESS: {
            const newState = Object.assign([], state);
            const indexOfPackToDelete = state.findIndex(pack => {
                return pack.id == action.pack.id;
            });
            newState.splice(indexOfPackToDelete, 1);
            return newState;
        }
        default:
            return state;
    }
}
