import * as types from '../actionTypes';
import spelllistApi from '../../api/admin/SpellListsApi';

export function loadSpellListsSuccess(spelllists) {
    return {type: types.LOAD_SPELLLISTS_SUCCESS, spelllists};
}

export function updateSpellListSuccess(spelllist) {
    return {type: types.UPDATE_SPELLLIST_SUCCESS, spelllist};
}

export function createSpellListSuccess(spelllist) {
    return {type: types.CREATE_SPELLLIST_SUCCESS, spelllist};
}

export function deleteSpellListSuccess(spelllist) {
    return {type: types.DELETE_SPELLLIST_SUCCESS, spelllist};
}

export function upsertSpellListSuccess(spelllist) {
    return {type: types.UPSERT_SPELLLIST_SUCCESS, spelllist};
}

export function loadSpellLists() {
    return function(dispatch) {
        return spelllistApi.getAllSpellLists().then(spelllists => {
            dispatch(loadSpellListsSuccess(spelllists));
        }).catch(error => {
            throw (error);
        });
    };
}

export function updateSpellList(spelllist) {
    return function (dispatch) {
        return spelllistApi.updateSpellList(spelllist).then(responseSpellList => {
            dispatch(updateSpellListSuccess(responseSpellList.spelllist));
        }).catch(error => {
            throw (error);
        });
    };
}

export function createSpellList(spelllist) {
    return function (dispatch) {
        return spelllistApi.createSpellList(spelllist).then(responseSpellList => {
            dispatch(createSpellListSuccess(responseSpellList.spelllist));
            return responseSpellList;
        }).catch(error => {
            throw (error);
        });
    };
}

export function deleteSpellList(spelllist) {
    return function(dispatch) {
        return spelllistApi.deleteSpellList(spelllist).then(() => {
            dispatch(deleteSpellListSuccess(spelllist));
            return;
        }).catch(error => {
            throw (error);
        });
    };
}

export function upsertSpellList(spelllist) {
    return function(dispatch) {
        if (spelllist.id && spelllist.id != 0) {
            return spelllistApi.updateSpellList(spelllist).then(responseSpellList => {
                dispatch(updateSpellListSuccess(responseSpellList.spelllist));
            }).catch(error => {
                throw (error);
            });
        } else {
            return spelllistApi.createSpellList(spelllist).then(responseSpellList => {
                dispatch(createSpellListSuccess(responseSpellList.spelllist));
                return responseSpellList;
            }).catch(error => {
                throw (error);
            });
        }
    };
}