import util from './util';

export const ABILITY_SCORE = 96;
export const AMMUNITION_TYPE = 106;
export const ARMOR_PROFICIENCY = 84;
export const DAMAGE_TYPE = 81;
export const EQUIPMENT = 90;
export const EQUIPMENT_CATEGORY = 87;
export const LANGUAGE_RARITY = 111;
export const LANGUAGE_SCRIPT = 103;
export const PROFICIENCY_CATEGORY = 101;
export const PROFICIENCY_SELECTION_MECHANIC = 114;
export const RESOURCE = 89;
export const WEAPON_CATEGORY = 83;
export const WEAPON_PROFICIENCY = 82;
export const WEAPON_PROPERTY = 86;

export const ARMOR_PROFICIENCY_HEAVY = 58;
export const ARMOR_PROFICIENCY_LIGHT = 43;
export const ARMOR_PROFICIENCY_MEDIUM = 57;
export const ARMOR_PROFICIENCY_SHIELD = 59;
export const WEAPON_CATEGORY_MELEE = 65;
export const WEAPON_CATEGORY_RANGED = 66;
export const WEAPON_PROFICIENCY_SIMPLE = 67;
export const WEAPON_PROFICIENCY_MARTIAL = 68;

export const PROFICIENCY_CATEGORY_ARMOR = 235;
export const PROFICIENCY_CATEGORY_ARTISAN_TOOL = 241;
export const PROFICIENCY_CATEGORY_GAMING_SET = 242;
export const PROFICIENCY_CATEGORY_LANGUAGE = 239;
export const PROFICIENCY_CATEGORY_MUSICAL_INSTRUMENT = 243;
export const PROFICIENCY_CATEGORY_SAVING_THROW = 240;
export const PROFICIENCY_CATEGORY_SKILL = 237;
export const PROFICIENCY_CATEGORY_TOOL = 238;
export const PROFICIENCY_CATEGORY_VEHICLE = 541;
export const PROFICIENCY_CATEGORY_WEAPON = 236;
export const PROFICIENCY_CATEGORY_WEAPON_SPECIFIC = 544;

export const PROFCIENCY_CATEGORY_ALL_TOOL = [
    PROFICIENCY_CATEGORY_ARTISAN_TOOL, PROFICIENCY_CATEGORY_GAMING_SET, PROFICIENCY_CATEGORY_MUSICAL_INSTRUMENT, PROFICIENCY_CATEGORY_TOOL, PROFICIENCY_CATEGORY_VEHICLE
];
export const PROFICIENCY_CATEGORY_ALL_WEAPON = [
    PROFICIENCY_CATEGORY_WEAPON, PROFICIENCY_CATEGORY_WEAPON_SPECIFIC
];


export const PROFICIENCY_SELECTION_MECHANIC_ASSIGNMENT = 554;
export const PROFICIENCY_SELECTION_MECHANIC_SELECT_FROM_CATEGORY = 555;
export const PROFICIENCY_SELECTION_MECHANIC_SELECT_FROM_LIST = 556;

export const EQUIPMENT_CATEGORY_GENERAL = 170;
export const EQUIPMENT_CATEGORY_AMMUNITION = 171;
export const EQUIPMENT_CATEGORY_ARCANE_FOCUS = 172;
export const EQUIPMENT_CATEGORY_DRUIDIC_FOCUS = 173;
export const EQUIPMENT_CATEGORY_HOLY_SYMBOL = 174;
export const EQUIPMENT_CATEGORY_TOOL = 176;
export const EQUIPMENT_CATEGORY_ARTISANS_TOOL = 290;
export const EQUIPMENT_CATEGORY_MUSICAL_INSTRUMENT = 291;
export const EQUIPMENT_CATEGORY_GAMING_SET = 292;
export const EQUIPMENT_CATEGORY_MINOR_ITEM = 635;

export function getPicklistItems (picklistArray, picklistId) {
    let retVal = [];
    let tmp = picklistArray.filter((picklist) => picklist.id == picklistId);
    if (tmp && tmp.length != 0) {
        retVal = tmp[0].items;
    }
    return retVal;
}

export function filterPicklistByAssigned (picklist, assigned) {
    return picklist.filter((picklistItem) => {
        for (let d = 0; d < assigned.length; d++) {
            if (assigned[d].id == picklistItem.id) {
                return false;
            }
        }
        return true;
    });
}

export function getPicklistItem(allPicklists, picklistItemId) {
    for (let y = 0; y < allPicklists.length; y++) {
        for (let z = 0; z < allPicklists[y].items.length; z++) {
            if (allPicklists[y].items[z]) {
                if (allPicklists[y].items[z].id == picklistItemId) {
                    return allPicklists[y].items[z];
                }
            }
        }
    }
    return null;
}

export function getPicklistItemFromSinglePicklist(picklist, picklistItemId) {
    for (let a = 0; a < picklist.length; a++) {
        if (picklist[a].id == picklistItemId) {
            return picklist[a];
        }
    }
    return null;
}

export function getDefaultSelectedItem (picklist) {
    for (let i = 0; i < picklist.length; i++) {
        if (picklist[i].defaultSelected) {
            return picklist[i];
        }
    }
    return Object.assign({}, util.objectModel.PICKLISTITEM);
}

export function getIndexById(arr, id) {
    let retVal = -1;
    for (let d = 0; d < arr.length; d++) {
        if (arr[d].id == id) {
            retVal = d;
            break;
        }
    }
    return retVal;
}