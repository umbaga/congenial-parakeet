import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function featReducer(state = initialState.feats, action) {
    switch (action.type) {
        case types.LOAD_FEATS_SUCCESS:
            return action.feats;
        case types.CREATE_FEAT_SUCCESS:
            return [
                ...state.filter(feat => feat.id !== action.feat.id),
                Object.assign({}, action.feat)
            ].sort(function(a, b) {
                if (a.name < b.name) {
                    return -1;
                } else if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
        case types.UPDATE_FEAT_SUCCESS:
            return [
                Object.assign({}, action.feat),
                ...state.filter(feat => feat.id !== action.feat.id)
            ].sort(function(a, b) {
                if (a.name < b.name) {
                    return -1;
                } else if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
        case types.DELETE_FEAT_SUCCESS: {
            const newState = Object.assign([], state);
            const indexOfFeatToDelete = state.findIndex(feat => {
                return feat.id == action.feat.id;
            });
            newState.splice(indexOfFeatToDelete, 1);
            return newState;
        }
        default:
            return state;
    }
}
