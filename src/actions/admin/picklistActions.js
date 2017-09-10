import * as types from '../actionTypes';
import picklistApi from '../../api/admin/PicklistsApi';

export function loadPicklistsSuccess(picklists) {
    return {type: types.LOAD_PICKLISTS_SUCCESS, picklists};
}

export function addPicklistItemSuccess(picklist, picklistItem) {
    return {type: types.ADD_PICKLISTITEM_SUCCESS, picklist, picklistItem};
}

export function removePicklistItemSuccess(picklist, picklistItemId) {
    return {type: types.REMOVE_PICKLISTITEM_SUCCESS, picklist, picklistItemId};
}

export function loadPicklists() {
    return function(dispatch) {
        return picklistApi.getAllPicklists().then(picklists => {
            dispatch(loadPicklistsSuccess(picklists));
        }).catch(error => {
            throw (error);
        });
    };
}

export function addPicklistItem(picklist, picklistItem) {
    return function(dispatch) {
        return picklistApi.addPicklistItem(picklist, picklistItem).then(responsePicklistItem => {
            dispatch(addPicklistItemSuccess(picklist, responsePicklistItem.picklistItem));
            return responsePicklistItem;
        }).catch(error => {
            throw (error);
        });
    };
}

export function removePicklistItem(picklist, picklistItem) {
    return function(dispatch) {
        return picklistApi.removePicklistItem(picklist, picklistItem).then(responsePicklistItem => {
            dispatch(removePicklistItemSuccess(picklist, responsePicklistItem));
        }).catch(error => {
            throw (error);
        });
    };
}