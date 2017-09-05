import * as types from '../actionTypes';
import dierollApi from '../../api/admin/DierollsApi';

export function loadDierollsSuccess(dierolls) {
    return {type: types.LOAD_DIEROLLS_SUCCESS, dierolls};
}

export function createDierollSuccess(dieroll) {
    return {type: types.CREATE_DIEROLL_SUCCESS, dieroll};
}

export function loadDierolls() {
    return function(dispatch) {
        return dierollApi.getAllDierolls().then(dierolls => {
            dispatch(loadDierollsSuccess(dierolls));
        }).catch(error => {
            throw(error);
        });
    };
}

export function createDieroll(dieroll) {
    return function (dispatch) {
        return dierollApi.createDieroll(dieroll).then(responseDieroll => {
            dispatch(createDierollSuccess(responseDieroll.dieroll));
            return responseDieroll;
        }).catch(error => {
            throw(error);
        });
    };
}