import * as types from '../actionTypes';
import armorApi from '../../api/admin/ArmorsApi';

export function loadArmorsSuccess(armors) {
    return {type: types.LOAD_ARMORS_SUCCESS, armors};
}

export function updateArmorSuccess(armor) {
    return {type: types.UPDATE_ARMOR_SUCCESS, armor};
}

export function createArmorSuccess(armor) {
    return {type: types.CREATE_ARMOR_SUCCESS, armor};
}

export function deleteArmorSuccess(armor) {
    return {type: types.DELETE_ARMOR_SUCCESS, armor};
}

export function upsertArmorSuccess(armor) {
    return {type: types.UPSERT_ARMOR_SUCCESS, armor};
}

export function loadArmors() {
    return function(dispatch) {
        return armorApi.getAllArmors().then(armors => {
            dispatch(loadArmorsSuccess(armors));
        }).catch(error => {
            throw(error);
        });
    };
}

export function updateArmor(armor) {
    return function (dispatch) {
        return armorApi.updateArmor(armor).then(responseArmor => {
            dispatch(updateArmorSuccess(responseArmor.armor));
        }).catch(error => {
            throw(error);
        });
    };
}

export function createArmor(armor) {
    return function (dispatch) {
        return armorApi.createArmor(armor).then(responseArmor => {
            dispatch(createArmorSuccess(responseArmor.armor));
            return responseArmor;
        }).catch(error => {
            throw(error);
        });
    };
}

export function deleteArmor(armor) {
    return function(dispatch) {
        return armorApi.deleteArmor(armor).then(() => {
            dispatch(deleteArmorSuccess(armor));
            return;
        }).catch(error => {
            throw(error);
        });
    };
}

export function upsertArmor(armor) {
    return function(dispatch) {
        if(armor.id && armor.id != 0) {
            return armorApi.updateArmor(armor).then(responseArmor => {
                dispatch(updateArmorSuccess(responseArmor.armor));
            }).catch(error => {
                throw(error);
            });
        } else {
            return armorApi.createArmor(armor).then(responseArmor => {
                dispatch(createArmorSuccess(responseArmor.armor));
                return responseArmor;
            }).catch(error => {
                throw(error);
            });
        }
    };
}





