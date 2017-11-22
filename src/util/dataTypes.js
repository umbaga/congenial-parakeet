export const array = {
    ASSIGNED_EQUIPMENT: 'DATA_ARRAY_ASSIGNED_EQUIPMENT',
    PROFICIENCIES: 'DATA_ARRAY_PROFICIENCIES',
    WEAPON_PROPERTIES: 'DATA_ARRAY_WEAPON_PROPERTIES'
};

export const bool = {
    BOOL: 'DATA_BOOL_STANDARD',
    HAS_DISADVANTAGE: 'DATA_BOOL_HAS_DISADVANTAGE',
    YES_NO: 'DATA_BOOL_YES_NO'
};

export const number = {
    COIN: 'DATA_NUMBER_COIN',
    DEC: 'DATA_NUMBER_DECIMAL',
    INT: 'DATA_NUMBER_INTEGER',
    SPELL_LEVEL: 'DATA_NUMBER_SPELL_LEVEL',
    WEIGHT: 'DATA_NUMBER_WEIGHT',
    getDecimalPlaces: function (val) {
        let retVal = 0;
        if (Math.floor(val) == val) {
            retVal = 0;
        } else if (Math.floor(val * 10) == val * 10) {
            retVal = 1;
        } else if (Math.floor(val * 100) == val * 100) {
            retVal = 2;
        }
        return retVal;
    },
    getStepIncrement: function (val) {
        return 1 / (Math.pow(10, this.getDecimalPlaces(val)));
    }
};

export const obj = {
    EQUIPMENT: 'DATA_OBJ_EQUIPMENT'
};

export const picklist = {
    ABILITY_SCORE: 'DATA_PICKLIST_ABILITY_SCORE',
    AMMUNITION_TYPE: 'DATA_PICKLIST_AMMUNITION_TYPE',
    ARMOR_PROFICIENCY: 'DATA_PICKLIST_ARMOR_PROFICIENCY',
    DAMAGE_TYPE: 'DATA_PICKLIST_DAMAGE_TYPE',
    EQUIPMENT_CATEGORY: 'DATA_PICKLIST_EQUIPMENT_CATEGORY',
    GENERAL: 'DATA_PICKLIST_GENERAL',
    LANGUAGE_RARITY: 'DATA_PICKLIST_LANGUAGE_RARITY',
    LANGUAGE_SCRIPT: 'DATA_PICKLIST_LANGUAGE_SCRIPT',
    MECHANIC_TARGET: 'DATA_PICKLIST_MECHANIC_TARGET',
    MECHANIC_TYPE: 'DATA_PICKLIST_MECHANIC_TYPE',
    PROFICIENCY_CATEGORY: 'DATA_PICKLIST_PROFICIENCY_CATEGORY',
    PROFICIENCY_SELECTION_MECHANIC: 'DATA_PICKLIST_PROFICIENCY_SELECTION_MECHANIC',
    RESOURCE: 'DATA_PICKLIST_RESOURCE',
    SCHOOL_OF_MAGIC: 'DATA_PICKLIST_SCHOOL_OF_MAGIC',
    SPELL_CASTING_TIME: 'DATA_PICKLIST_SPELL_CASTING_TIME',
    SPELL_COMPONENT: 'DATA_PICKLIST_SPELL_COMPONENT',
    SPELL_DURATION: 'DATA_PICKLIST_SPELL_DURATION',
    SPELL_RANGE: 'DATA_PICKLIST_SPELL_RANGE',
    WEAPON_CATEGORY: 'DATA_PICKLIST_WEAPON_CATEGORY',
    WEAPON_PROFICIENCY: 'DATA_PICKLIST_WEAPON_PROFICIENCY'
};

export const special = {
    CHART: 'DATA_SPECIAL_CHART',
    CHART_ENTRY: 'DATA_SPECIAL_CHART_ENTRY',
    DIE_CHART: 'DATA_SPECIAL_DIE_CHART',
    DIE_CHART_ENTRY: 'DATA_SPECIAL_DIE_CHART_ENTRY',
    CHART_ENTRY_DIE_ROLL_RANGE: 'DATA_SPECIAL_CHART_ENTRY_DIE_ROLL_RANGE',
    CHART_ENTRY_DESCRIPTION: 'DATA_SPECIAL_CHART_ENTRY_DESCRIPTION',
    DICE_ROLL: 'DATA_SPECIAL_DICE_ROLL',
    WEAPON_RANGE: 'DATA_SPECIAL_WEAPON_RANGE'
};

export const string = {
    STRING: 'DATA_STRING_STANDARD',
    LONG_STRING: 'DATA_STRING_LONG',
    DESCRIPTION: 'DATA_STRING_DESCRIPTION'
};

export function compareDataType (val, dataType, disallowValues) {
    let retVal = true;
    let tmpDieType = 0;
    let tmpArr = [];
    switch (dataType) {
        case special.DICE_ROLL:
            tmpArr = val.toLowerCase().split('d');
            if (tmpArr.length == 2) {
                if (Number.isInteger(parseInt(tmpArr[0]))) {
                    if (Number.isInteger(parseInt(tmpArr[1]))) {
                        tmpDieType = parseInt(tmpArr[1]);
                        if (tmpDieType == 0 || tmpDieType == 1 || tmpDieType == 2 ||
                           tmpDieType == 3 || tmpDieType == 4 || tmpDieType == 6 ||
                           tmpDieType == 8 || tmpDieType == 10 || tmpDieType == 12 ||
                           tmpDieType == 20 || tmpDieType == 100) {
                            if (disallowValues && disallowValues.length) {
                                for (let z = 0; z < disallowValues.length; z++) {
                                    if (disallowValues[z] == tmpDieType) {
                                        retVal = false;
                                    }
                                }
                            } else {
                                retVal = true;
                            }
                        } else {
                            retVal = false;
                        }
                    } else {
                        retVal = false;
                    }
                } else {
                    retVal = false;
                }
            } else {
                retVal = false;
            }
            break;
        default:
    }
    return retVal;
}