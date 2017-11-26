import util from './util';

export function expandChart(chart) {
    let retVal = chart;
    chart.entries = [];
    for (let e = chart.dieRoll.dieCount; e <= chart.dieRoll.dieCount * chart.dieRoll.dieType; e++) {
        let newEntry = {};
        newEntry.id = -1 * e;
        newEntry.description = '';
        newEntry.minimum = e;
        newEntry.maximum = e;
        chart.entries.push(newEntry);
    }
    return retVal;
}

export function setObjectValue(obj, prop, val, action) {
    if (typeof prop === 'string') {
        return setObjectValue(obj, prop.split('.'), val, action);
    } else if (prop.length == 1 && val !== undefined) {
        if (action == undefined) {
            return obj[prop[0]] = val;
        } else {
            switch (action.toLowerCase()) {
                case 'add':
                    return obj[prop[0]].push(val);
                case 'remove':
                    return obj[prop[0]].splice(val, 1);
                default:
            }
        }
    } else if (prop.length == 0) {
        return obj;
    } else {
        return setObjectValue(obj[prop[0]], prop.slice(1), val, action);
    }
}

export function updateFormState(event, obj, picklists) {
    let retVal = obj;
    let field = event.target.name !== undefined ? event.target.name : event.target.parentElement.name;
    if (event.target.id) {
        field = event.target.id;
    }
    let dataType = event.target.getAttribute('dataType') !== null ? event.target.getAttribute('dataType') : event.target.parentElement.getAttribute('dataType');
    let newSelectedValue = {};
    let newRenderedValue = '';
    let newDiceRollValue = {};
    let isAssign = (field !== undefined) ? field.split('Unassigned').length == 2 ? true : false : null;
    let removeThisId = event.target.value;
    let removeThisIndex = -1;
    let referencePicklistItem = util.picklists.getPicklistItem(picklists, removeThisId);
    let newComponentsArray = [];
    let inputType = event.target.type;
    let subfield = '';
    switch (dataType) {
        case util.dataTypes.string.DESCRIPTION:
            util.common.setObjectValue(retVal, field, event.target.innerHTML);
            break;
        case util.dataTypes.string.STRING:
        case util.dataTypes.string.LONG_STRING:
        case util.dataTypes.number.INT:
        case util.dataTypes.number.DEC:
        case util.dataTypes.number.COIN:
        case util.dataTypes.number.SPELL_LEVEL:
        case util.dataTypes.number.WEIGHT:
            util.common.setObjectValue(retVal, field, event.target.value);
            break;
        case util.dataTypes.bool.BOOL:
        case util.dataTypes.HAS_DISADVANTAGE:
        case util.dataTypes.bool.YES_NO:
            util.common.setObjectValue(retVal, field, !util.common.setObjectValue(retVal, field));
            break;
        case util.dataTypes.picklist.ABILITY_SCORE:
        case util.dataTypes.picklist.AMMUNITION_TYPE:
        case util.dataTypes.picklist.ARMOR_PROFICIENCY:
        case util.dataTypes.picklist.DAMAGE_TYPE:
        case util.dataTypes.picklist.EQUIPMENT_CATEGORY:
        case util.dataTypes.picklist.GENERAL:
        case util.dataTypes.picklist.LANGUAGE_RARITY:
        case util.dataTypes.picklist.LANGUAGE_SCRIPT:
        case util.dataTypes.picklist.MECHANIC_TARGET:
        case util.dataTypes.picklist.MECHANIC_TYPE:
        case util.dataTypes.picklist.PROFICIENCY_CATEGORY:
        case util.dataTypes.picklist.PROFICIENCY_SELECTION_MECHANIC:
        case util.dataTypes.picklist.RESOURCE:
        case util.dataTypes.picklist.SCHOOL_OF_MAGIC:
        case util.dataTypes.picklist.SPELL_CASTING_TIME:
        case util.dataTypes.picklist.SPELL_DURATION:
        case util.dataTypes.picklist.SPELL_RANGE:
        case util.dataTypes.picklist.WEAPON_CATEGORY:
        case util.dataTypes.picklist.WEAPON_PROFICIENCY:
            if (inputType == 'text') {
                newSelectedValue.id = 0;
                newSelectedValue.name = event.target.value;
            } else {
                newSelectedValue.id = parseInt(event.target.options[event.target.selectedIndex].value);
                newSelectedValue.name = event.target.options[event.target.selectedIndex].text;
            }
            util.common.setObjectValue(retVal, field, newSelectedValue);
            break;
        case util.dataTypes.special.DICE_ROLL:
            newRenderedValue = '';
            if (event.target.value && event.target.value.length != 0) {
                for (let y = 0; y < event.target.value.length; y++) {
                    if (event.target.value.charAt(y) == '1' || event.target.value.charAt(y) == '2' ||
                       event.target.value.charAt(y) == '3' || event.target.value.charAt(y) == '4' ||
                       event.target.value.charAt(y) == '5' || event.target.value.charAt(y) == '6' ||
                       event.target.value.charAt(y) == '7' || event.target.value.charAt(y) == '8' ||
                       event.target.value.charAt(y) == '9' || event.target.value.charAt(y) == '0' ||
                       event.target.value.charAt(y) == 'd' || event.target.value.charAt(y) == 'D') {
                        newRenderedValue += event.target.value.charAt(y);
                    }
                }
            }
            if (util.dataTypes.compareDataType(newRenderedValue, util.dataTypes.special.DICE_ROLL)) {
                newDiceRollValue.dieCount = parseInt(event.target.value.toLowerCase().split('d')[0]);
                newDiceRollValue.dieType = parseInt(event.target.value.toLowerCase().split('d')[1]);
                util.common.setObjectValue(retVal, field, newDiceRollValue);
            }
            util.common.setObjectValue(retVal, field + '.rendered', newRenderedValue);
            break;
        case util.dataTypes.array.PROFICIENCIES:
        case util.dataTypes.array.WEAPON_PROPERTIES:
            if (isAssign) {
                field = field.replace('Unassigned', '');
                util.common.setObjectValue(retVal, field, referencePicklistItem, 'add');
            } else {
                for (let b = 0; b < retVal.weaponProperties.length; b++) {
                    if (dataType == util.dataTypes.array.PROFICIENCIES) {
                        if (retVal.proficiencies[b].id == referencePicklistItem.id) {
                            removeThisIndex = b;
                            break;
                        }
                    } else if (dataType == util.dataTypes.array.WEAPON_PROPERTIES) {
                        if (retVal.weaponProperties[b].requireDamage) {
                            retVal.damage.versatile.dice = Object.assign({}, {rendered: ''});
                        }
                        if (retVal.weaponProperties[b].requireDescription) {
                            retVal.specialDescription = null;
                        }
                        if (retVal.weaponProperties[b].requireRange) {
                            retVal.ramge = {};
                        }
                        if (retVal.weaponProperties[b].requireAmmunition) {
                            retVal.ammunition = {};
                        }
                        removeThisIndex = b;
                        break;
                    }
                }
                util.common.setObjectValue(retVal, field, removeThisIndex, 'remove');
            }
            break;
        case util.dataTypes.special.WEAPON_RANGE:
            util.common.setObjectValue(retVal, field, parseInt(event.target.value));
            break;
        case util.dataTypes.picklist.SPELL_COMPONENT:
            newComponentsArray = retVal[field.split('_')[0]];
            if (inputType == 'text') {
                let tmp = field.split('_');
                field = tmp[0];
                subfield = tmp[1];
                let changedId = tmp[2];
                for (let e = 0; e < newComponentsArray.length; e++) {
                    if (changedId == newComponentsArray[e].id) {
                        retVal[field][e][subfield] = event.target.value;
                    }
                }
            } else {
                if (event.target.checked) {
                    newComponentsArray.push({
                        id: event.target.value,
                        name: util.picklists.getPicklistItem(picklists, event.target.value).name
                    });
                } else {
                    let removeIndex = -1;
                    for (let e = 0; e < newComponentsArray.length; e++) {
                        if (newComponentsArray[e].id == event.target.value) {
                            removeIndex = e;
                        }
                    }
                    newComponentsArray.splice(removeIndex, 1);
                }
            }
            retVal[field] = newComponentsArray;
            break;
        default:
    }
    return retVal;
}