import util from './util';

export const ABILITY_SCORE = 24;
export const AMMUNITION_TYPE = 67;
export const ARMOR_PROFICIENCY = 20;
export const DAMAGE_TYPE = 6;
export const EQUIPMENT = 49;
export const EQUIPMENT_CATEGORY = 50;
export const LANGUAGE_RARITY = 68;
export const LANGUAGE_SCRIPT = 69;
export const PROFICIENCY_CATEGORY = 65;
export const PROFICIENCY_SELECTION_MECHANIC = 66;
export const RESOURCE = 1;
export const SCHOOL_OF_MAGIC = 70;
export const SPELL_CASTING_TIME = 71;
export const SPELL_COMPONENT = 72;
export const SPELL_DURATION = 73;
export const SPELL_RANGE = 74;
export const WEAPON_CATEGORY = 22;
export const WEAPON_PROFICIENCY = 21;
export const WEAPON_PROPERTY = 23;

export const ARMOR_PROFICIENCY_HEAVY = 33;
export const ARMOR_PROFICIENCY_LIGHT = 31;
export const ARMOR_PROFICIENCY_MEDIUM = 32;
export const ARMOR_PROFICIENCY_SHIELD = 34;
export const PROFICIENCY_CATEGORY_ARMOR = 92;
export const PROFICIENCY_CATEGORY_ARTISAN_TOOL = 93;
export const PROFICIENCY_CATEGORY_GAMING_SET = 94;
export const PROFICIENCY_CATEGORY_LANGUAGE = 95;
export const PROFICIENCY_CATEGORY_MUSICAL_INSTRUMENT = 96;
export const PROFICIENCY_CATEGORY_SAVING_THROW = 97;
export const PROFICIENCY_CATEGORY_SKILL = 98;
export const PROFICIENCY_CATEGORY_TOOL = 99;
export const PROFICIENCY_CATEGORY_VEHICLE = 100;
export const PROFICIENCY_CATEGORY_WEAPON = 101;
export const PROFICIENCY_CATEGORY_WEAPON_SPECIFIC = 102;
export const SPELL_COMPONENT_MATERIAL = 103;
export const SPELL_COMPONENT_SOMATIC = 105;
export const SPELL_COMPONENT_VERBAL = 104;
export const WEAPON_CATEGORY_MELEE = 35;
export const WEAPON_CATEGORY_RANGED = 36;
export const WEAPON_PROFICIENCY_SIMPLE = 38;
export const WEAPON_PROFICIENCY_MARTIAL = 37;

export const PROFCIENCY_CATEGORY_ALL_TOOL = [
    PROFICIENCY_CATEGORY_ARTISAN_TOOL, PROFICIENCY_CATEGORY_GAMING_SET, PROFICIENCY_CATEGORY_MUSICAL_INSTRUMENT, PROFICIENCY_CATEGORY_TOOL, PROFICIENCY_CATEGORY_VEHICLE
];
export const PROFICIENCY_CATEGORY_ALL_WEAPON = [
    PROFICIENCY_CATEGORY_WEAPON, PROFICIENCY_CATEGORY_WEAPON_SPECIFIC
];


export const PROFICIENCY_SELECTION_MECHANIC_ASSIGNMENT = 554;
export const PROFICIENCY_SELECTION_MECHANIC_SELECT_FROM_CATEGORY = 555;
export const PROFICIENCY_SELECTION_MECHANIC_SELECT_FROM_LIST = 556;

export const EQUIPMENT_CATEGORY_AMMUNITION = 57;
export const EQUIPMENT_CATEGORY_ARTISANS_TOOL = 62;
export const EQUIPMENT_CATEGORY_ARCANE_FOCUS = 58;
export const EQUIPMENT_CATEGORY_DRUIDIC_FOCUS = 59;
export const EQUIPMENT_CATEGORY_GAMING_SET = 63;
export const EQUIPMENT_CATEGORY_GENERAL = 56;
export const EQUIPMENT_CATEGORY_HOLY_SYMBOL = 60;
export const EQUIPMENT_CATEGORY_MINOR_ITEM = 114;
export const EQUIPMENT_CATEGORY_MUSICAL_INSTRUMENT = 64;
export const EQUIPMENT_CATEGORY_TOOL = 61;

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