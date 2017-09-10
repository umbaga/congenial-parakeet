import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function picklistReducer(state = initialState.picklists, action) {
    switch (action.type) {
        case types.LOAD_PICKLISTS_SUCCESS:
            return action.picklists;
        case types.ADD_PICKLISTITEM_SUCCESS: {
            const newState = Object.assign([], state);
            for (let x = 0; x < newState.length; x++) {
                if (action.picklist.id === newState[x].id) {
                    newState[x].items.push(action.picklistItem);
                }
            }
            return newState;
        }
        case types.REMOVE_PICKLISTITEM_SUCCESS: {
            const newState = Object.assign([], state);
            let removeThisIndex = -1;
            for (let x = 0; x < newState.length; x++) {
                if (action.picklist.id == newState[x].id) {
                    for (let y = 0; y < newState[x].items.length; y++) {
                        if (newState[x].items[y].id == action.picklistItemId[0]) {
                            removeThisIndex = y;
                        }
                    }
                    newState[x].items.splice(removeThisIndex, 1);
                }
            }
            return newState;
        }
        default:
            return state;
    }
}
