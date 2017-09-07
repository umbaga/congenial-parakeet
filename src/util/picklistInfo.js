export const ARMOR_PROFICIENCY = 84;
export const DAMAGE_TYPE = 81;
export const EQUIPMENT_CATEGORY = 87;
export const WEAPON_CATEGORY = 83;
export const WEAPON_PROFICIENCY = 82;
export const WEAPON_PROPERTY = 86;

export const MELEE_WEAPON_CATEGORY = 65;
export const RANGED_WEAPON_CATEGORY = 66;
export const SIMPLE_WEAPON_PROFICIENCY = 67;
export const MARTIAL_WEAPON_PROFICIENCY = 68;

export function getPicklistItems (picklistArray, picklistId) {
    let retVal = [];
    let tmp = picklistArray.filter((picklist) => picklist.id == picklistId);
    if(tmp && tmp.length != 0) {
        retVal = tmp[0].items;
    }
    
    return retVal;
}