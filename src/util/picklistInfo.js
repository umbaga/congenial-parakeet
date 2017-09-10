import util from './util';

export const ARMOR_PROFICIENCY = 84;
export const DAMAGE_TYPE = 81;
export const EQUIPMENT_CATEGORY = 87;
export const WEAPON_CATEGORY = 83;
export const WEAPON_PROFICIENCY = 82;
export const WEAPON_PROPERTY = 86;

export const HEAVY_ARMOR_PROFICIENCY = 58;
export const LIGHT_ARMOR_PROFICIENCY = 43;
export const MEDIUM_ARMOR_PROFICIENCY = 57;
export const SHIELD_ARMOR_PROFICIENCY = 59;
export const MELEE_WEAPON_CATEGORY = 65;
export const RANGED_WEAPON_CATEGORY = 66;
export const SIMPLE_WEAPON_PROFICIENCY = 67;
export const MARTIAL_WEAPON_PROFICIENCY = 68;

export const GENERAL_EQUIPMENT_CATEGORY = 170;

export function getPicklistItems (picklistArray, picklistId) {
    let retVal = [];
    let tmp = picklistArray.filter((picklist) => picklist.id == picklistId);
    if(tmp && tmp.length != 0) {
        retVal = tmp[0].items;
    }
    
    return retVal;
}

export function filterPicklistByAssigned (picklist, assigned) {
    return picklist.filter((picklistItem) => {
        for(let d = 0; d < assigned.length; d++) {
            if(assigned[d].id == picklistItem.id) {
                return false;
            }
        }
        return true;
    });
}

export function getPicklistItem(allPicklists, picklistItemId) {
    for(let y = 0; y < allPicklists.length; y++) {
        for(let z = 0; z < allPicklists[y].items.length; z++) {
            if(allPicklists[y].items[z]) {
                if(allPicklists[y].items[z].id == picklistItemId) {
                    return allPicklists[y].items[z];
                }
            }
        }
    }
    return null;
}

export function getDefaultSelectedItem (picklist) {
    for(let i = 0; i < picklist.length; i++) {
        if(picklist[i].defaultSelected) {
            return picklist[i];
        }
    }
    return Object.assign({}, util.objectModel.PICKLISTITEM);
}