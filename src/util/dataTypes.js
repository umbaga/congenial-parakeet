export const array = {
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
    WEIGHT: 'DATA_NUMBER_WEIGHT'
};

export const picklist = {
    ARMOR_PROFICIENCY: 'DATA_PICKLIST_ARMOR_PROFICIENCY',
    DAMAGE_TYPE: 'DATA_PICKLIST_DAMAGE_TYPE',
    EQUIPMENT_CATEGORY: 'DATA_PICKLIST_EQUIPMENT_CATEGORY',
    WEAPON_CATEGORY: 'DATA_PICKLIST_WEAPON_CATEGORY',
    WEAPON_PROFICIENCY: 'DATA_PICKLIST_WEAPON_PROFICIENCY'
};

export const special = {
    DICE_ROLL: 'DATA_SPECIAL_DICE_ROLL',
    WEAPON_RANGE: 'DATA_SPECIAL_WEAPON_RANGE'
};

export const string = {
    STRING: 'DATA_STRING_STANDARD',
    LONG_STRING: 'DATA_STRING_LONG'
};

export function compareDataType (val, dataType) {
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
                            retVal = true;
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