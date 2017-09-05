import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';


export default function dierollReducer(state = initialState.dierolls, action) {
    switch(action.type) {
        case types.LOAD_DIEROLLS_SUCCESS:
            return action.dierolls;
        case types.CREATE_DIEROLL_SUCCESS:
            /*return [
                ...state.filter(dieroll => dieroll.id !== action.dieroll.id),
                Object.assign({}, action.dieroll)
            ];*/
            return state;
        default: 
            return state;
    }
}
