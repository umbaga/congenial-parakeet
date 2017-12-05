import util from './util';
import * as picklistInfo from './picklistInfo';

export const picklists = picklistInfo;

export function expandChart(chart) {
    let retVal = chart;
    chart.entries = [];
    for (let e = chart.dice.dieCount; e <= chart.dice.dieCount * chart.dice.dieType; e++) {
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

export const formState = {
    setFieldFromTargetName: function(event) {
        if (event.target) {
            if (event.target.id) {
                return event.target.id;
            } else {
                if (event.target.name !== undefined) {
                    return event.target.name;
                } else if (event.target.parentElement.name) {
                    return event.target.parentElement.name;
                } else if (event.target.parentElement.parentElement.name) {
                    return event.target.parentElement.parentElement.name;
                } else {
                    return undefined;
                }
            }
        } else {
            return undefined;
        }
    },
    setDataTypeFromTarget: function(target) {
        if (target.getAttribute('dataType')) {
            return target.getAttribute('dataType');
        } else {
            let testObject = target.parentElement;
            let assigned = false;
            while (!assigned) {
                if (testObject && testObject.getAttribute('dataType')) {
                    assigned = true;
                    return testObject.getAttribute('dataType');
                } else {
                    testObject = testObject.parentElement;
                }
            }
        }
    },
    chartType: function(event, obj, picklists) {
        let chartType = obj;
        let dataType = event.target.getAttribute('dataType');
        switch (dataType) {
            case util.dataTypes.picklist.CHART_TYPE:
                chartType = util.common.picklists.getPicklistItem(picklists, event.target.value);
                return chartType;
            default:
        }
        return chartType;
    },
    chart: function(event, obj, refObj, picklists) {
        let chart = util.common.formState.standard(event, obj, picklists);
        let field = event.target.name;
        let dataType = event.target.getAttribute('dataType');
        let newRenderedValue = '';
        let newDiceRollValue = {};
        let changedEntryId = null;
        let changedEntryIndex = -1;
        let higherIndexedEntryExists = false;
        let removeEntryCount = 0;
        let removeEntryIndex = -1;
        let finalEntryIndex = -1;
        let referenceEntry = {};
        let chartMaximumValue = 0;
        let newColumn = Object.assign({}, util.objectModel.CHART_COLUMN);
        let newRow = Object.assign({}, util.objectModel.CHART_ROW);
        let newEntry = Object.assign({}, util.objectModel.CHART_ENTRY);
        let newEntryId = 0;
        let entry = refObj;
        if (event.target.type !== undefined) {
            //this controls standard form elements
            switch (dataType) {
                case util.dataTypes.string.STRING:
                    chart[field] = event.target.value;
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
                    if (util.dataTypes.compareDataType(newRenderedValue, util.dataTypes.special.DICE_ROLL, [0, 1])) {
                        newDiceRollValue.dieCount = parseInt(event.target.value.toLowerCase().split('d')[0]);
                        newDiceRollValue.dieType = parseInt(event.target.value.toLowerCase().split('d')[1]);
                        chart[field] = newDiceRollValue;
                        if (chart.entries.length == 0) {
                            newEntry = Object.assign({}, util.objectModel.DIE_CHART_ENTRY);
                            newEntry.id = 0;
                            newEntry.minimum = newDiceRollValue.dieCount;
                            newEntry.maximum = newDiceRollValue.dieCount * newDiceRollValue.dieType;
                            chart.entries.push(newEntry);
                        } else if (chart.entries.length != 0 && chart.entries[0].maximum == 0) {
                            chart.entries[0].minimum = newDiceRollValue.dieCount;
                            chart.entries[0].maximum = newDiceRollValue.dieCount * newDiceRollValue.dieType;
                        }
                    }
                    chart[field].rendered = newRenderedValue;
                    break;
                case util.dataTypes.special.CHART_ENTRY_DIE_ROLL_RANGE:
                    changedEntryId = parseInt(field.split('_')[0]);
                    //get index of changed entry
                    chartMaximumValue = chart.dice.dieCount * chart.dice.dieType;
                    for (let x = 0; x < chart.entries.length; x++) {
                        if (chart.entries[x].id == changedEntryId) {
                            changedEntryIndex = x;
                            break;
                        }
                    }
                    //change maximum value of changedEntry
                    chart.entries[changedEntryIndex].maximum = parseInt(event.target.options[event.target.selectedIndex].value);
                    //check for existence of higher valued entry
                    if (changedEntryIndex < chart.entries.length - 1) {
                        higherIndexedEntryExists = true;
                    }
                    if (higherIndexedEntryExists) {
                        //if exists, change minimum value of next record
                        chart.entries[changedEntryIndex + 1].minimum = parseInt(event.target.options[event.target.selectedIndex].value) + 1;
                        if (chart.entries[changedEntryIndex + 1].maximum < chart.entries[changedEntryIndex + 1].minimum) {
                            chart.entries[changedEntryIndex + 1].maximum = chart.entries[changedEntryIndex + 1].minimum;
                        }
                        //remove entries with a minimum and maximum < current maximum
                        for (let p = changedEntryIndex + 1; p < chart.entries.length; p++) {
                            if (chart.entries[p].minimum <= parseInt(event.target.options[event.target.selectedIndex].value) && chart.entries[p].maximum <= parseInt(event.target.options[event.target.selectedIndex].value)) {
                                if (removeEntryIndex == -1) {
                                    removeEntryIndex = p;
                                }
                                removeEntryCount++;
                            }
                            if (finalEntryIndex == -1 && chart.entries[p].maximum == chartMaximumValue) {
                                finalEntryIndex = p;
                            }
                        }
                        chart.entries.splice(removeEntryIndex, removeEntryCount);
                        chart.entries.splice(finalEntryIndex + 1, chart.entries.length - 1);
                        //final check on chart entry
                        for (let h = 0; h < chart.entries.length; h++) {
                            if (referenceEntry.minimum) {
                                if (chart.entries[h].maximum >= referenceEntry.maximum) {
                                    chart.entries[h].minimum = referenceEntry.maximum + 1;
                                    chart.entries[h].maximum = referenceEntry.maximum + 1;
                                    if (h == chart.entries.length - 1) {
                                        chart.entries[h].maximum = chartMaximumValue;
                                    }
                                }
                            }
                            referenceEntry.minimum = chart.entries[h].minimum;
                            referenceEntry.maximum = chart.entries[h].maximum;
                        }
                    } else {
                        //if not exists, create new entry
                        newEntry = Object.assign({}, util.objectModel.DIE_CHART_ENTRY);
                        newEntry.id = -1 * chart.entries.length;
                        newEntry.minimum = parseInt(event.target.options[event.target.selectedIndex].value) + 1;
                        newEntry.maximum = chartMaximumValue;
                        chart.entries.push(newEntry);
                    }
                    break;
                case util.dataTypes.special.CHART_ENTRY_DESCRIPTION:
                    changedEntryId = parseInt(field.split('_')[0]);
                    for (let x = 0; x < chart.entries.length; x++) {
                        if (chart.entries[x].id == changedEntryId) {
                            changedEntryIndex = x;
                            break;
                        }
                    }
                    chart.entries[changedEntryIndex].description = event.target.value;
                    break;
                case util.dataTypes.special.CHART_COLUMN_COUNT:
                case util.dataTypes.special.CHART_ROW_COUNT:
                    chart[field] = event.target.value;
                    if (dataType == util.dataTypes.special.CHART_COLUMN_COUNT) {
                        for (let c = 0; c < event.target.value; c++) {
                            if (c > chart.columns.length - 1) {
                                newColumn = Object.assign({}, util.objectModel.CHART_COLUMN);
                                newColumn.id = (c + 1) * -1;
                                newColumn.columnIndex = c;
                                chart.columns.push(newColumn);
                            }
                        }
                        if (chart.columns.length > event.target.value) {
                            chart.columns.splice(event.target.value);
                        }
                    }
                    if (dataType == util.dataTypes.special.CHART_ROW_COUNT) {
                        for (let r = 0; r < event.target.value; r++) {
                            if (r > chart.rows.length - 1) {
                                newRow = Object.assign({}, util.objectModel.CHART_ROW);
                                newRow.id = (r + 1) * -1;
                                newRow.rowIndex = r;
                                chart.rows.push(newRow);
                            }
                        }
                        if (chart.rows.length > event.target.value) {
                            chart.rows.splice(event.target.value);
                        }
                    }
                    //add new chart.entries
                    for (let c = 0; c < chart.columnCount; c++) {
                        for (let r = 0; r < chart.rowCount; r++) {
                            //newEntryId = -1 * ((c * (chart.rowCount)) + r + 1);
                            newEntryId = -1 * (chart.entries.length + 1);
                            let entryExists = false;
                            for (let e = 0; e < chart.entries.length; e++) {
                                if (chart.entries[e].columnIndex == c && chart.entries[e].rowIndex == r) {
                                    entryExists = true;
                                }
                            }
                            if (!entryExists) {
                                newEntry = Object.assign({}, util.objectModel.CHART_ENTRY);
                                newEntry.id = newEntryId;
                                newEntry.columnIndex = c;
                                newEntry.rowIndex = r;
                                chart.entries.push(newEntry);
                            }
                        }
                    }
                    //remove unneeded entries
                    for (let e = 0; e < chart.entries.length; e++) {
                        if (chart.columnCount <= chart.entries[e].columnIndex || chart.rowCount <= chart.entries[e].rowIndex) {
                            chart.entries.splice(e, 1);
                            e--;
                        }
                    }
                    break;
                default:
            }
        } else {
            //this controls button clicks and div.innerHTML stuff
            let dataType = formState.setDataTypeFromTarget(event.target);
            let recordType = event.target.id.split('_')[1];
            let recordId = parseInt(event.target.id.split('_')[0]);
            let recordField = event.target.id.split('_')[2];
            let recordValue = event.target.innerHTML;
            let removeIndex = -1;
            let refMin = null;
            let refId = 0;
            if (entry) {
                refMin = entry.minimum;
                refId = entry.id;
            }
            let isFirst = removeIndex == 0;
            let isLast = removeIndex == chart.entries.length - 1;
            switch (dataType) {
                case util.dataTypes.action.CHART.ADD:
                case util.dataTypes.action.CHART.CHANGE_ENTRY_INDEX.UP:
                case util.dataTypes.action.CHART.CHANGE_ENTRY_INDEX.DOWN:
                    //DO NOTHING
                    break;
                case util.dataTypes.action.CHART.REMOVE:
                case util.dataTypes.action.CHART.SELECT:
                    chart = refObj;
                    break;
                case util.dataTypes.action.CHART.EXPAND_DIE:
                    chart = expandChart(chart);
                    break;
                case util.dataTypes.action.CHART.REMOVE_ENTRY:
                    for (let r = 0; r < chart.entries.length; r++) {
                        if (entry.id == chart.entries[r].id) {
                            removeIndex = r;
                            refMin = chart.entries[r].minimum;
                        }
                    }
                    if (removeIndex != -1) {
                        chart.entries.splice(removeIndex, 1);
                        if (isFirst) {
                            chart.entries[0].minimum = chart.dice.dieCount;
                            chart.entries[0].id = refId;
                        } else if (isLast) {
                            chart.entries[chart.entries.length - 1].maximum = chart.dice.dieCount * chart.dice.dieType;
                            chart.entries[chart.entries.length - 1].id = refId;
                        } else {
                            chart.entries[removeIndex].minimum = refMin;
                            chart.entries[removeIndex].id = refId;
                        }
                    }
                    break;
                case util.dataTypes.action.CHART.RESET:
                    chart = Object.assign({}, util.objectModel.CHART);
                    chart.entries = [];
                    chart.dice = {dieCount: 0, dieType: 0, rendered: ''};
                    break;
                case util.dataTypes.string.DESCRIPTION:
                    chart[field] = event.target.innerHTML;
                    break;
                case util.dataTypes.special.CHART_ENTRY_DESCRIPTION:
                case util.dataTypes.special.CHART_ROW_TITLE:
                case util.dataTypes.special.CHART_COLUMN_TITLE:
                    for (let q = 0; q < chart[recordType].length; q++) {
                        if (recordId == chart[recordType][q].id) {
                            chart[recordType][q][recordField] = recordValue;
                        }
                    }
                    break;
                default:
            }
        }
        return chart;
    },
    arrayProperty: function(event, obj, refObj) {
        let retVal = obj;
        let dataType = formState.setDataTypeFromTarget(event.target);
        let removeIndex = -1;
        let changedIndex = -1;
        let otherChangedIndex = -1;
        let referenceOrderIndex = -1;
        let referenceOtherOrderIndex = -1;
        let isUp = false;
        switch (dataType) {
            case util.dataTypes.action.CHART.ADD:
                if (retVal.charts.filter(function(c) {
                    return c.id == refObj.id;
                }).length == 0) {
                    retVal.charts.push(refObj);
                } else {
                    retVal.charts[util.common.picklists.getIndexById(retVal.charts, refObj.id)] = refObj;
                }
                break;
            case util.dataTypes.action.CHART.CHANGE_ENTRY_INDEX.UP:
            case util.dataTypes.action.CHART.CHANGE_ENTRY_INDEX.DOWN:
                isUp = (dataType == util.dataTypes.action.CHART.CHANGE_ENTRY_INDEX.UP);
                if ((isUp && refObj.orderIndex != 0) || (!isUp && refObj.orderIndex != retVal.charts.length - 1)) {
                    for (let r = 0; r < retVal.charts.length; r++) {
                        if (retVal.charts[r].id == refObj.id) {
                            changedIndex = r;
                            otherChangedIndex = isUp ? r - 1 : r + 1;
                            referenceOrderIndex = retVal.charts[r].orderIndex;
                            referenceOtherOrderIndex = isUp ? referenceOrderIndex - 1 : referenceOrderIndex + 1;
                            break;
                        }
                    }
                    if (changedIndex != -1 && otherChangedIndex != -1) {
                        retVal.charts[changedIndex].orderIndex = referenceOtherOrderIndex;
                        retVal.charts[otherChangedIndex].orderIndex = referenceOrderIndex;
                    }
                    retVal.charts = retVal.charts.sort(function(a, b) {
                        return a.orderIndex - b.orderIndex;
                    });
                }
                break;
            case util.dataTypes.action.CHART.REMOVE:
                removeIndex = util.common.picklists.getIndexById(retVal.charts, refObj.id);
                if (removeIndex != -1) {
                    retVal.charts.splice(removeIndex, 1);
                }
                break;
            case util.dataTypes.action.CHART.SELECT:
                break;
            default:
        }
        return retVal;
    },
    standard: function(event, obj, picklists) {
        let retVal = obj;
        let field = formState.setFieldFromTargetName(event);
        let dataType = event.target.getAttribute('dataType') !== null ? event.target.getAttribute('dataType') : event.target.parentElement.getAttribute('dataType');
        let newSelectedValue = {};
        let newRenderedValue = '';
        let newDiceRollValue = {};
        let isAssign = (field !== undefined) ? field.split('Unassigned').length == 2 ? true : false : null;
        let removeThisId = event.target.value;
        let removeThisIndex = -1;
        let referencePicklistItem = util.common.picklists.getPicklistItem(picklists, removeThisId);
        let newComponentsArray = [];
        let inputType = event.target.type;
        let subfield = '';
        let tmpText = '';
        switch (dataType) {
            case util.dataTypes.string.DESCRIPTION:
                tmpText = event.target.innerHTML.trim().replace('W ', 'W').replace('becom e', 'become').replace('W isdom', 'Wisdom').replace('m m', 'mm')
                .replace('nonmagical', 'non-magical').replace('becom es', 'becomes').replace('summ ons', 'summons').replace('consum ed', 'consumed')
                .replace('1dlO ', '1d10 ').replace('Som e', 'Some').replace('som e', 'some').replace('com m on', 'common').replace('consum e', 'consume')
                .replace('com ing', 'coming').replace('sm oke', 'smoke').replace('w eapon', 'weapon').replace('m essage', 'message')
                    .replace('circum stance', 'circumstance').replace('m em or', 'memor').replace('mem or', 'memor').replace('m emor', 'memor')
                .replace('dism iss', 'dismiss').replace('outcom es', 'outcomes').replace('sum m oned', 'summoned').replace('summ oned', 'summoned');
                util.common.setObjectValue(retVal, field, tmpText.trim());
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
            case util.dataTypes.picklist.ATTACK_ROLL_TYPE:
            case util.dataTypes.picklist.CONDITION:
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
            case util.dataTypes.picklist.SAVE_EFFECT:
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
                           event.target.value.charAt(y) == 'd' || event.target.value.charAt(y) == 'D' ||
                           event.target.value.charAt(y) == '+' || event.target.value.charAt(y) == '-' ||
                           event.target.value.charAt(y) == 'x' || event.target.value.charAt(y) == 'X' ||
                            event.target.value.charAt(y) == '*' || event.target.value.charAt(y) == '/') {
                            newRenderedValue += event.target.value.charAt(y);
                        }
                    }
                }
                if (util.dataTypes.compareDataType(newRenderedValue, util.dataTypes.special.DICE_ROLL)) {
                    if (event.target.value.indexOf('+') != -1 || event.target.value.indexOf('-') != -1) {
                        if (event.target.value.indexOf('+') != -1) {
                            newDiceRollValue.modifier = parseInt(event.target.value.split('+')[1]);
                        } else {
                            newDiceRollValue.modifier = -1 * parseInt(event.target.value.split('-')[1]);
                        }
                        newDiceRollValue.multiplier = 1;
                        newDiceRollValue.divisor = 1;
                    } else if (event.target.value.indexOf('x') != -1 || event.target.value.indexOf('*') != -1) {
                        if (event.target.value.indexOf('x') != -1) {
                            newDiceRollValue.multiplier = parseInt(event.target.value.toLowerCase().split('x')[1]);
                        } else {
                            newDiceRollValue.multiplier = parseInt(event.target.value.split('*')[1]);
                        }
                        newDiceRollValue.modifier = 0;
                        newDiceRollValue.divisor = 1;
                    } else if (event.target.value.indexOf('/') != -1) {
                        newDiceRollValue.divisor = parseInt(event.target.value.split('/')[1]);
                        newDiceRollValue.modifier = 0;
                        newDiceRollValue.multiplier = 1;
                    } else {
                        newDiceRollValue.modifier = 0;
                        newDiceRollValue.multiplier = 1;
                        newDiceRollValue.divisor = 1;
                    }
                    newDiceRollValue.dieCount = parseInt(event.target.value.toLowerCase().split('d')[0]);
                    newDiceRollValue.dieType = parseInt(event.target.value.toLowerCase().split('d')[1]);
                } else {
                    newDiceRollValue.id = 0;
                    if (event.target.value.length != 0) {
                        newDiceRollValue.dieCount = parseInt(event.target.value.toLowerCase().split('d')[0]);
                    } else {
                        newDiceRollValue.dieCount = 0;
                    }
                    newDiceRollValue.dieType = 1;
                    newDiceRollValue.modifier = 0;
                    newDiceRollValue.multiplier = 1;
                    newDiceRollValue.divisor = 1;
                }
                util.common.setObjectValue(retVal, field, newDiceRollValue);
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
                        tmpText = event.target.value;
                        if (tmpText.indexOf('(') != -1) {
                            tmpText = tmpText.replace('(', '').trim();
                        }
                        if (tmpText.indexOf(')') != -1) {
                            tmpText = tmpText.replace(')', '').trim();
                        }
                        if (changedId == newComponentsArray[e].id) {
                            retVal[field][e][subfield] = tmpText;
                        }
                    }
                } else {
                    if (event.target.checked) {
                        newComponentsArray.push({
                            id: event.target.value,
                            name: util.common.picklists.getPicklistItem(picklists, event.target.value).name
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
};