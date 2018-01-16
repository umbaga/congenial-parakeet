import * as types from '../actionTypes';
import featApi from '../../api/admin/FeatsApi';

export function loadFeatsSuccess(feats) {
    return {type: types.LOAD_FEATS_SUCCESS, feats};
}

export function updateFeatSuccess(feat) {
    return {type: types.UPDATE_FEAT_SUCCESS, feat};
}

export function createFeatSuccess(feat) {
    return {type: types.CREATE_FEAT_SUCCESS, feat};
}

export function deleteFeatSuccess(feat) {
    return {type: types.DELETE_FEAT_SUCCESS, feat};
}

export function upsertFeatSuccess(feat) {
    return {type: types.UPSERT_FEAT_SUCCESS, feat};
}

export function loadFeats() {
    return function(dispatch) {
        return featApi.getAllFeats().then(feats => {
            dispatch(loadFeatsSuccess(feats));
        }).catch(error => {
            throw (error);
        });
    };
}

export function updateFeat(feat) {
    return function (dispatch) {
        return featApi.updateFeat(feat).then(responseFeat => {
            dispatch(updateFeatSuccess(responseFeat.feat));
        }).catch(error => {
            throw (error);
        });
    };
}

export function createFeat(feat) {
    return function (dispatch) {
        return featApi.createFeat(feat).then(responseFeat => {
            dispatch(createFeatSuccess(responseFeat.feat));
            return responseFeat;
        }).catch(error => {
            throw (error);
        });
    };
}

export function deleteFeat(feat) {
    return function(dispatch) {
        return featApi.deleteFeat(feat).then(() => {
            dispatch(deleteFeatSuccess(feat));
            return;
        }).catch(error => {
            throw (error);
        });
    };
}

export function upsertFeat(feat) {
    return function(dispatch) {
        if (feat.id && feat.id != 0) {
            return featApi.updateFeat(feat).then(responseFeat => {
                dispatch(updateFeatSuccess(responseFeat.feat));
            }).catch(error => {
                throw (error);
            });
        } else {
            return featApi.createFeat(feat).then(responseFeat => {
                dispatch(createFeatSuccess(responseFeat.feat));
                return responseFeat;
            }).catch(error => {
                throw (error);
            });
        }
    };
}