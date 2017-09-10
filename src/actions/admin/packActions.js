import * as types from '../actionTypes';
import packApi from '../../api/admin/PacksApi';

export function loadPacksSuccess(packs) {
    return {type: types.LOAD_PACKS_SUCCESS, packs};
}

export function updatePackSuccess(pack) {
    return {type: types.UPDATE_PACK_SUCCESS, pack};
}

export function createPackSuccess(pack) {
    return {type: types.CREATE_PACK_SUCCESS, pack};
}

export function deletePackSuccess(pack) {
    return {type: types.DELETE_PACK_SUCCESS, pack};
}

export function upsertPackSuccess(pack) {
    return {type: types.UPSERT_PACK_SUCCESS, pack};
}

export function loadPacks() {
    return function(dispatch) {
        return packApi.getAllPacks().then(packs => {
            dispatch(loadPacksSuccess(packs));
        }).catch(error => {
            throw (error);
        });
    };
}

export function updatePack(pack) {
    return function (dispatch) {
        return packApi.updatePack(pack).then(responsePack => {
            dispatch(updatePackSuccess(responsePack.pack));
        }).catch(error => {
            throw (error);
        });
    };
}

export function createPack(pack) {
    return function (dispatch) {
        return packApi.createPack(pack).then(responsePack => {
            dispatch(createPackSuccess(responsePack.pack));
            return responsePack;
        }).catch(error => {
            throw (error);
        });
    };
}

export function deletePack(pack) {
    return function(dispatch) {
        return packApi.deletePack(pack).then(() => {
            dispatch(deletePackSuccess(pack));
            return;
        }).catch(error => {
            throw (error);
        });
    };
}

export function upsertPack(pack) {
    return function(dispatch) {
        if (pack.id && pack.id != 0) {
            return packApi.updatePack(pack).then(responsePack => {
                dispatch(updatePackSuccess(responsePack.pack));
            }).catch(error => {
                throw (error);
            });
        } else {
            return packApi.createPack(pack).then(responsePack => {
                dispatch(createPackSuccess(responsePack.pack));
                return responsePack;
            }).catch(error => {
                throw (error);
            });
        }
    };
}