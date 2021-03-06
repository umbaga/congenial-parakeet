import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function backgroundReducer(state = initialState.backgrounds, action) {
    switch (action.type) {
        case types.LOAD_BACKGROUNDS_SUCCESS:
            return action.backgrounds;
        case types.CREATE_BACKGROUND_SUCCESS:
            return [
                ...state.filter(background => background.id !== action.background.id),
                Object.assign({}, action.background)
            ];
        case types.UPDATE_BACKGROUND_SUCCESS:
            return [
                Object.assign({}, action.background),
                ...state.filter(background => background.id !== action.background.id)
            ];
        case types.DELETE_BACKGROUND_SUCCESS: {
            const newState = Object.assign([], state);
            const indexOfBackgroundToDelete = state.findIndex(background => {
                return background.id == action.background.id;
            });
            newState.splice(indexOfBackgroundToDelete, 1);
            return newState;
        }
        default:
            return state;
    }
}
