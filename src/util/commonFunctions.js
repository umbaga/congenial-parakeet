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

export const resetObject = {
    background: function() {
        let retVal = Object.assign({}, util.objectModel.BACKGROUND);
        retVal.assignedEquipment = [];
        retVal.charts = [];
        retVal.feature = {
            id: 0,
            name: '',
            description: ''
        };
        retVal.proficiencyGroups = [];
        return retVal;
    },
    chart: function(emptyChartType, chartsLength) {
        let retVal = Object.assign({}, util.objectModel.CHART);
        retVal.id = (chartsLength + 1) * -1;
        retVal.orderIndex = this.state.spell.charts.length;
        retVal.rows = [];
        retVal.columns = [];
        retVal.entries = [];
        retVal.dice = util.objectModel.DICE;
        retVal.type = emptyChartType;
        return retVal;
    },
    chartType: function() {
        let retVal = Object.assign({}, util.objectModel.CHART_TYPE);
        return retVal;
    },
    mechanic: function() {
        let retVal = Object.assign({}, util.objectModel.MECHANIC);
        retVal.assignmentType = {id: 1};
        retVal.dice = {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 0};
        retVal.target = {id: 0, name: ''};
        retVal.type = {id: 0, name: ''};
        retVal.valueObject = {id: 0, name: ''};
        return retVal;
    },
    proficiencyGroup: function() {
        const retVal = Object.assign({}, util.objectModel.PROFICIENCY_GROUP);
        retVal.category = {id: 0, name: '', parentId: 0};
        retVal.mechanic = {id: 0, name: ''};
        retVal.proficiencies = [];
        return retVal;
    },
    race: function() {
        const retVal = Object.assign({}, util.objectModel.RACE);
        retVal.components = [];
        retVal.supplementalDescriptions = [];
        retVal.damage = {
            dice: {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 1},
            type: {id: 0, name: ''},
            attackRollType: {id: 0, name: ''},
            condition: {id: 0, name: ''},
            improvement: {
                dice: {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 1},
                levelCount: 0,
                projectileCount: 0
            },
            supplemental: [],
            applyAbilityScoreModifier: false,
            abilityScore: {id: 0, name: ''},
            maximum: {dice: {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 1}},
            projectileCount: 0
        };
        retVal.savingThrow = {
            abilityScore: {id: 0, name: ''},
            effect: {id: 0, name: ''}
        };
        retVal.charts = [];
        retVal.mechanics = {base: [], advancement: []};
        return retVal;
    },
    spellSelections: function () {
        const retVal = Object.assign({}, util.objectModel.SPELL_SELECTION);
        
        return retVal;
    }
};

export const formState = {
    arrayProperty: function(event, obj, refObj) {
        let retVal = obj;
        let dataType = formState.setDataTypeFromTarget(event);
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
    assignedEquipment: function(event, obj, refObj) {
        let retVal = obj;
        
        return retVal;
    },
    chartType: function(event, obj, picklists) {
        let chartType = obj;
        let dataType = formState.setDataTypeFromTarget(event);
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
        let field = formState.setFieldFromTargetName(event);
        let dataType = formState.setDataTypeFromTarget(event);
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
        let emptyEntry = Object.assign({}, util.objectModel.CHART_ENTRY);
        if (event.target.type !== undefined) {
            //this controls standard form elements
            switch (dataType) {
                case util.dataTypes.string.STRING:
                    chart[field] = event.target.value;
                    break;
                case util.dataTypes.special.DICE_ROLL:
                    util.common.setObjectValue(chart, field, formState.dice(event));
                    console.log(chart[field].rendered);
                    if (util.dataTypes.compareDataType(chart[field].rendered, util.dataTypes.special.DICE_ROLL)) {
                        if (chart.entries.length == 0) {
                            emptyEntry.minimum = chart[field].dieCount;
                            emptyEntry.maximum = (chart[field].dieCount * chart[field].dieType);
                            chart.entries.push(emptyEntry);
                        }
                    }
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
            let dataType = formState.setDataTypeFromTarget(event);
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
    descriptions: function(event, obj, refObj) {
        let retVal = obj;
        
        return retVal;
    },
    dice: function(event) {
        let retVal = {};
        let newRenderedValue = '';
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
                    retVal.modifier = parseInt(event.target.value.split('+')[1]);
                } else {
                    retVal.modifier = -1 * parseInt(event.target.value.split('-')[1]);
                }
                retVal.multiplier = 1;
                retVal.divisor = 1;
            } else if (event.target.value.indexOf('x') != -1 || event.target.value.indexOf('*') != -1) {
                if (event.target.value.indexOf('x') != -1) {
                    retVal.multiplier = parseInt(event.target.value.toLowerCase().split('x')[1]);
                } else {
                    retVal.multiplier = parseInt(event.target.value.split('*')[1]);
                }
                retVal.modifier = 0;
                retVal.divisor = 1;
            } else if (event.target.value.indexOf('/') != -1) {
                retVal.divisor = parseInt(event.target.value.split('/')[1]);
                retVal.modifier = 0;
                retVal.multiplier = 1;
            } else {
                retVal.modifier = 0;
                retVal.multiplier = 1;
                retVal.divisor = 1;
            }
            retVal.dieCount = parseInt(event.target.value.toLowerCase().split('d')[0]);
            retVal.dieType = parseInt(event.target.value.toLowerCase().split('d')[1]);
        } else {
            retVal.id = 0;
            if (event.target.value.length != 0) {
                retVal.dieCount = parseInt(event.target.value.toLowerCase().split('d')[0]);
            } else {
                retVal.dieCount = 0;
            }
            retVal.dieType = 1;
            retVal.modifier = 0;
            retVal.multiplier = 1;
            retVal.divisor = 1;
        }
        retVal.rendered = newRenderedValue;
        return retVal;
    },
    mechanic: function(event, obj, refObj, picklists, removeThisMechanic) {
        const retVal = obj;
        let field = formState.setFieldFromTargetName(event);
        let dataType = formState.setDataTypeFromTarget(event);
        let newSelectedValue = {};
        let removeThisIndex = -1;
        let whichMechanicTypeToRemoveFrom = '';
        delete retVal.resetMechanic;
        if (retVal[field] != undefined || (removeThisMechanic && removeThisMechanic.assignmentType)) {
            switch (dataType) {
                case util.dataTypes.number.INT:
                    util.common.setObjectValue(retVal, field, event.target.value);
                    break;
                case util.dataTypes.picklist.GENERAL:
                case util.dataTypes.picklist.MECHANIC_TARGET:
                case util.dataTypes.picklist.MECHANIC_TYPE:
                    newSelectedValue.id = parseInt(event.target.options[event.target.selectedIndex].value);
                    newSelectedValue.name = event.target.options[event.target.selectedIndex].text;
                    util.common.setObjectValue(retVal, field, newSelectedValue);
                    break;
                case util.dataTypes.action.MECHANIC.ADD:
                    if (refObj.assignmentType.id == util.itemTypes.MECHANIC_ASSIGNMENT.BASE || refObj.assignmentType.id == util.itemTypes.MECHANIC_ASSIGNMENT.BOTH) {
                        retVal[field].base.push(refObj);
                    }
                    if (refObj.assignmentType.id == util.itemTypes.MECHANIC_ASSIGNMENT.ADVANCEMENT || refObj.assignmentType.id == util.itemTypes.MECHANIC_ASSIGNMENT.BOTH) {
                        retVal[field].advancement.push(refObj);
                    }
                    retVal.resetMechanic = true;
                    break;
                case util.dataTypes.action.MECHANIC.REMOVE:
                    whichMechanicTypeToRemoveFrom = field.split('.')[1];
                    field = field.split('.')[0];
                    if (retVal[field]) {
                        if (removeThisMechanic) {
                            for (let e = 0; e < retVal[field][whichMechanicTypeToRemoveFrom].length; e++) {
                                if (retVal[field][whichMechanicTypeToRemoveFrom][e].id == removeThisMechanic.id) {
                                    removeThisIndex = e;
                                }
                            }
                        }
                        if (removeThisIndex != -1) {
                            retVal[field][whichMechanicTypeToRemoveFrom].splice(removeThisIndex, 1);
                        }
                    }
                    break;
                case util.dataTypes.action.MECHANIC.RESET:
                    retVal.resetMechanic = true;
                    break;
                case util.dataTypes.action.MECHANIC.SELECT:
                    break;
                case util.dataTypes.special.DICE_ROLL:
                    util.common.setObjectValue(retVal, field, formState.dice(event));
                    break;
                default:
            }
        }
        return retVal;
    },
    proficiencyGroup: function(event, obj, refObj, picklists, proficiencies, removeThisGroup) {
        let retVal = obj;
        let field = formState.setFieldFromTargetName(event);
        let isAssign = false;
        if (field.split('Unassigned').length > 1) {
            field = field.replace('Unassigned', '');
            isAssign = true;
        }
        let dataType = formState.setDataTypeFromTarget(event);
        let newSelectedValue = {};
        let removeThisId = event.target.value;
        let removeThisIndex = -1;
        let referencePicklistItem = util.common.picklists.getPicklistItem(picklists, removeThisId);
        if (retVal) {
            delete retVal.resetProficiencyGroup;
        }
        if (retVal[field] != undefined) {
            switch (dataType) {
                case util.dataTypes.array.PROFICIENCIES:
                    referencePicklistItem = util.common.picklists.getPicklistItemFromSinglePicklist(proficiencies, event.target.value);
                    if (isAssign) {
                        util.common.setObjectValue(retVal, field, referencePicklistItem, 'add');
                    } else {
                        for (let b = 0; b < retVal[field].length; b++) {
                            if (dataType == util.dataTypes.array.PROFICIENCIES) {
                                if (retVal[field][b].id == referencePicklistItem.id) {
                                    removeThisIndex = b;
                                    break;
                                }
                            }
                        }
                        util.common.setObjectValue(retVal, field, removeThisIndex, 'remove');
                    }
                    break;
                case util.dataTypes.picklist.PROFICIENCY_SELECTION_MECHANIC:
                case util.dataTypes.picklist.PROFICIENCY_CATEGORY:
                    newSelectedValue.id = parseInt(event.target.options[event.target.selectedIndex].value);
                    newSelectedValue.name = event.target.options[event.target.selectedIndex].text;
                    util.common.setObjectValue(retVal, field, newSelectedValue);
                    break;
                case util.dataTypes.action.PROFICIENCY_GROUP.ADD:
                    retVal[field].push(refObj);
                    retVal.resetProficiencyGroup = true;
                    break;
                case util.dataTypes.action.PROFICIENCY_GROUP.REMOVE:
                    if (removeThisGroup) {
                        for (let e = 0; e < retVal[field].length; e++) {
                            if (retVal[field][e].id == removeThisGroup.id) {
                                removeThisIndex = e;
                            }
                        }
                    }
                    if (removeThisIndex != -1) {
                        retVal[field].splice(removeThisIndex, 1);
                    }
                    break;
                case util.dataTypes.action.PROFICIENCY_GROUP.RESET:
                    retVal.resetProficiencyGroup = true;
                    break;
                case util.dataTypes.action.PROFICIENCY_GROUP.SELECT:
                    break;
                default:
                    util.common.setObjectValue(retVal, field, event.target.value);
            }
        }
        return retVal;
    },
    spellSelection: function(event, obj, refObj) {
        let retVal = obj;
        let field = formState.setFieldFromTargetName(event);
        let dataType = formState.setDataTypeFromTarget(event);
        let newSelectedValue = {};
        let removeThisIndex = -1;
        delete retVal.resetSpellSelection;
        if (retVal[field] != undefined) {
            switch (dataType) {
                case util.dataTypes.number.SPELL_LEVEL:
                    util.common.setObjectValue(retVal, field, event.target.value);
                    break;
                case util.dataTypes.picklist.GENERIC:
                case util.dataTypes.picklist.SPELL_SELECTION:
                    newSelectedValue.id = parseInt(event.target.options[event.target.selectedIndex].value);
                    newSelectedValue.name = event.target.options[event.target.selectedIndex].text;
                    util.common.setObjectValue(retVal, field, newSelectedValue);
                    break;
                default:
            }
        }
        
        return retVal;
    },
    standard: function(event, obj, picklists) {
        let retVal = obj;
        let field = formState.setFieldFromTargetName(event);
        let dataType = formState.setDataTypeFromTarget(event);
        let newSelectedValue = {};
        let isAssign = (field !== undefined) ? field.split('Unassigned').length == 2 ? true : false : null;
        let removeThisId = event.target.value;
        let removeThisIndex = -1;
        let referencePicklistItem = util.common.picklists.getPicklistItem(picklists, removeThisId);
        let newComponentsArray = [];
        let inputType = event.target.type;
        let subfield = '';
        let tmpText = '';
        let refArray = [];
        let newIntValue = 0;
        let itemIndex = -1;
        let itemArrayId = 0;
        let newObject = {};
        let textboxArrayField = '';
        switch (dataType) {
            case util.dataTypes.array.ADVANCED_SENSE:
            case util.dataTypes.array.MOVEMENT:
                if (dataType == util.dataTypes.array.ADVANCED_SENSE) {
                    refArray = util.common.picklists.getPicklistItems(picklists, util.itemTypes.TYPES.ADVANCED_SENSE);
                    textboxArrayField = 'range';
                } else if (dataType == util.dataTypes.array.MOVEMENT) {
                    refArray = util.common.picklists.getPicklistItems(picklists, util.itemTypes.TYPES.MOVEMENT_TYPE);
                    textboxArrayField = 'speed';
                }
                if (refArray && refArray.length != 0) {
                    itemArrayId = parseInt(field.split('_')[1]);
                    field = field.split('_')[0];
                    newIntValue = event.target.value.length == 0 ? 0 : parseInt(event.target.value);
                    for (let q = 0; q < retVal[field].length; q++) {
                        if (retVal[field][q].id == itemArrayId) {
                            itemIndex = q;
                            break;
                        }
                    }
                    for (let q = 0; q < refArray.length; q++) {
                        if (refArray[q].id == itemArrayId) {
                            newObject.id = refArray[q].id;
                            newObject.name = refArray[q].name;
                            newObject[textboxArrayField] = newIntValue;
                            break;
                        }
                    }
                    if (newIntValue == 0) {
                        //remove item from array
                        if (itemIndex != -1) {
                            retVal[field].splice(itemIndex, 1);
                        }
                    } else {
                        if (itemIndex != -1) {
                            //edit item array
                            retVal[field][itemIndex][textboxArrayField] = newIntValue;
                        } else {
                            //add item to array
                            retVal[field].push(newObject);
                        }
                    }
                }
                break;
            case util.dataTypes.string.DESCRIPTION:
                tmpText = event.target.innerHTML;
                util.common.setObjectValue(retVal, field, tmpText.trim());
                break;
            case util.dataTypes.string.STRING:
            case util.dataTypes.string.LONG_STRING:
            case util.dataTypes.number.INT:
            case util.dataTypes.number.LENGTH:
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
            case util.dataTypes.picklist.MONSTER_TYPE:
            case util.dataTypes.picklist.PROFICIENCY_CATEGORY:
            case util.dataTypes.picklist.PROFICIENCY_SELECTION_MECHANIC:
            case util.dataTypes.picklist.RESOURCE:
            case util.dataTypes.picklist.SAVE_EFFECT:
            case util.dataTypes.picklist.SCHOOL_OF_MAGIC:
            case util.dataTypes.picklist.SIZE:
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
                util.common.setObjectValue(retVal, field, formState.dice(event));
                break;
            case util.dataTypes.array.ASSIGNED_SPELLS:
            case util.dataTypes.array.MONSTER_TAGS:
            case util.dataTypes.array.PROFICIENCIES:
            case util.dataTypes.array.WEAPON_PROPERTIES:
                if (isAssign) {
                    field = field.replace('Unassigned', '');
                    util.common.setObjectValue(retVal, field, referencePicklistItem, 'add');
                } else {
                    for (let b = 0; b < retVal[field].length; b++) {
                        if (dataType == util.dataTypes.array.PROFICIENCIES) {
                            if (retVal.proficiencies[b].id == referencePicklistItem.id) {
                                removeThisIndex = b;
                                break;
                            }
                        } else if (dataType == util.dataTypes.array.WEAPON_PROPERTIES) {
                            if (retVal[field][b].requireDamage) {
                                retVal.damage.versatile.dice = Object.assign({}, {rendered: ''});
                            }
                            if (retVal[field][b].requireDescription) {
                                retVal.specialDescription = null;
                            }
                            if (retVal[field][b].requireRange) {
                                retVal.ramge = {};
                            }
                            if (retVal[field][b].requireAmmunition) {
                                retVal.ammunition = {};
                            }
                            removeThisIndex = b;
                            break;
                        } else if (dataType == util.dataTypes.array.ASSIGNED_SPELLS) {
                            if (retVal.spells[b].id == referencePicklistItem.id) {
                                removeThisIndex = b;
                                break;
                            }
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
    },
    setFieldFromTargetName: function(event) {
        if (event.target.getAttribute('name')) {
            return event.target.getAttribute('name');
        } else {
            let testObject = event.target.parentElement;
            let assigned = false;
            while (!assigned) {
                if (testObject && testObject.getAttribute('name')) {
                    assigned = true;
                    return testObject.getAttribute('name');
                } else {
                    testObject = testObject.parentElement;
                }
            }
        }
    },
    setDataTypeFromTarget: function(event) {
        if (event.target.getAttribute('dataType')) {
            return event.target.getAttribute('dataType');
        } else {
            let testObject = event.target.parentElement;
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
    }
};