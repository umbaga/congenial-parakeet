import * as types from '../actionTypes';
import weaponApi from '../../api/admin/WeaponsApi';

export function loadWeaponsSuccess(weapons) {
    return {type: types.LOAD_WEAPONS_SUCCESS, weapons};
}

export function updateWeaponSuccess(weapon) {
    return {type: types.UPDATE_WEAPON_SUCCESS, weapon};
}

export function createWeaponSuccess(weapon) {
    return {type: types.CREATE_WEAPON_SUCCESS, weapon};
}

export function deleteWeaponSuccess(weapon) {
    return {type: types.DELETE_WEAPON_SUCCESS, weapon};
}

export function upsertWeaponSuccess(weapon) {
    return {type: types.UPSERT_WEAPON_SUCCESS, weapon};
}

export function loadWeapons() {
    return function(dispatch) {
        return weaponApi.getAllWeapons().then(weapons => {
            dispatch(loadWeaponsSuccess(weapons));
        }).catch(error => {
            throw (error);
        });
    };
}

export function updateWeapon(weapon) {
    return function (dispatch) {
        return weaponApi.updateWeapon(weapon).then(responseWeapon => {
            dispatch(updateWeaponSuccess(responseWeapon.weapon));
        }).catch(error => {
            throw (error);
        });
    };
}

export function createWeapon(weapon) {
    return function (dispatch) {
        return weaponApi.createWeapon(weapon).then(responseWeapon => {
            dispatch(createWeaponSuccess(responseWeapon.weapon));
            return responseWeapon;
        }).catch(error => {
            throw (error);
        });
    };
}

export function deleteWeapon(weapon) {
    return function(dispatch) {
        return weaponApi.deleteWeapon(weapon).then(() => {
            dispatch(deleteWeaponSuccess(weapon));
            return;
        }).catch(error => {
            throw (error);
        });
    };
}

export function upsertWeapon(weapon) {
    return function(dispatch) {
        if (weapon.id && weapon.id != 0) {
            return weaponApi.updateWeapon(weapon).then(responseWeapon => {
                dispatch(updateWeaponSuccess(responseWeapon.weapon));
            }).catch(error => {
                throw (error);
            });
        } else {
            return weaponApi.createWeapon(weapon).then(responseWeapon => {
                dispatch(createWeaponSuccess(responseWeapon.weapon));
                return responseWeapon;
            }).catch(error => {
                throw (error);
            });
        }
    };
}