import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as spellActions from '../../../actions/admin/spellActions';
import * as picklistActions from '../../../actions/admin/picklistActions';

import SpellForm from './SpellForm';
import SpellDetails from './SpellDetails';
import util from '../../../util/util';
import DndModal from '../../common/DndModal';

class SpellEntry extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            spell: this.props.spell,
            isCreate: this.props.isCreate,
            canEdit: this.props.canEdit,
            selectedChartId: 0,
            saving: false,
            newMechanic: Object.assign({}, util.objectModel.MECHANIC),
            editChart: Object.assign({}, util.objectModel.CHART),
            editDescription: Object.assign({}, util.objectModel.SUPPLEMENTAL_DESCRIPTION),
            selectedChartTypeId: 0,
            editDieChart: Object.assign({}, util.objectModel.DIE_CHART)
        };
        this.cancelSpell = this.cancelSpell.bind(this);
        this.deleteSpell = this.deleteSpell.bind(this);
        this.resetSpell = this.resetSpell.bind(this);
        this.postAction = this.postAction.bind(this);
        this.saveAndBackSpell = this.saveAndBackSpell.bind(this);
        this.saveAndNewSpell = this.saveAndNewSpell.bind(this);
        this.saveSpell = this.saveSpell.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
        this.saveNewCastingTime = this.saveNewCastingTime.bind(this);
        this.saveNewDuration = this.saveNewDuration.bind(this);
        this.saveNewRange = this.saveNewRange.bind(this);
        this.onChangeMechanic = this.onChangeMechanic.bind(this);
        this.onRemoveMechanic = this.onRemoveMechanic.bind(this);
        this.onResetMechanic = this.onResetMechanic.bind(this);
        this.onAddMechanic = this.onAddMechanic.bind(this);
        this.onChangeChart = this.onChangeChart.bind(this);
        this.onChangeChartOrder = this.onChangeChartOrder.bind(this);
        this.onCreateChart = this.onCreateChart.bind(this);
        this.onAddChart = this.onAddChart.bind(this);
        this.onRemoveChart = this.onRemoveChart.bind(this);
        this.onSelectChart = this.onSelectChart.bind(this);
        this.onAddChartColumn = this.onAddChartColumn.bind(this);
        this.onRemoveChartColumn = this.onRemoveChartColumn.bind(this);
        this.onAddChartRow = this.onAddChartRow.bind(this);
        this.onRemoveChartRow = this.onRemoveChartRow.bind(this);
        this.onResetChart = this.onResetChart.bind(this);
        this.onAddDescription = this.onAddDescription.bind(this);
        this.onRemoveDescription = this.onRemoveDescription.bind(this);
        this.onSelectDescription = this.onSelectDescription.bind(this);
        this.onResetDescription = this.onResetDescription.bind(this);
        this.onCreateDescription = this.onCreateDescription.bind(this);
        this.onChangeDescriptions = this.onChangeDescriptions.bind(this);
        this.onChangeDescriptionOrder = this.onChangeDescriptionOrder.bind(this);
        this.onChangeChartType = this.onChangeChartType.bind(this);
        this.onDieChartExpand = this.onDieChartExpand.bind(this);
        this.onDieChartRemoveEntry = this.onDieChartRemoveEntry.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.spell.id != nextProps.spell.id) {
            this.setState({spell: nextProps.spell});
        }
        this.setState({saving: false});
    }

    cancelSpell(event) {
        event.preventDefault();
        this.resetSpell();
        this.postAction();
    }

    deleteSpell(event) {
        event.preventDefault();
        if (confirm('are you sure?')) {
            this.props.actions.deleteSpell(this.state.spell);
            this.postAction();
        }
    }

    resetSpell() {
        const blankSpell = Object.assign({}, util.objectModel.SPELL);
        blankSpell.components = [];
        blankSpell.supplementalDescriptions = [];
        blankSpell.damage = {
            dice: {id: 0, dieCount: 0, dieType: 0, rendered: ''},
            type: {id: 0, name: ''},
            improvement: {
                dice: {id: 0, dieCount: 0, dieType: 0, rendered: ''}
            }
        };
        blankSpell.savingThrow = {
            abilityScore: {id: 0, name: ''}
        };
        blankSpell.charts = {die: [], standard: []};
        this.setState({spell: blankSpell});
    }
    
    postAction() {
        this.props.closeModal();
    }

    saveAndNewSpell(event) {
        this.saveSpell(event);
        this.resetSpell();
        this.refs.form.refs.name.setFocus();
    }

    saveAndBackSpell(event) {
        this.saveSpell(event);
        this.postAction();
    }

    saveSpell(event) {
        event.preventDefault();
        this.props.actions.upsertSpell(this.state.spell);
        this.resetSpell();
    }
    
    saveNewCastingTime() {
        const self = this;
        const picklistItem = {
            name: this.state.spell.castingTime.name
        };
        const picklist = {
            id: util.itemTypes.TYPES.SPELL_CASTING_TIME
        };
        this.props.actions.addPicklistItem(picklist, picklistItem).then(function(response) {
            const spell = self.state.spell;
            spell.castingTime = response.picklistItem;
            self.props.actions.loadPicklists().then(function() {
                self.setState({spell: spell});
            });
        });
    }
    
    saveNewDuration() {
        const self = this;
        const picklistItem = {
            name: this.state.spell.duration.name
        };
        const picklist = {
            id: util.itemTypes.TYPES.SPELL_DURATION
        };
        this.props.actions.addPicklistItem(picklist, picklistItem).then(function(response) {
            const spell = self.state.spell;
            spell.duration = response.picklistItem;
            self.props.actions.loadPicklists().then(function() {
                self.setState({spell: spell});
            });
        });
    }
    
    saveNewRange() {
        const self = this;
        const picklistItem = {
            name: this.state.spell.range.name
        };
        const picklist = {
            id: util.itemTypes.TYPES.SPELL_RANGE
        };
        this.props.actions.addPicklistItem(picklist, picklistItem).then(function(response) {
            const spell = self.state.spell;
            spell.range = response.picklistItem;
            self.props.actions.loadPicklists().then(function() {
                self.setState({spell: spell});
            });
        });
    }
    
    updateFormState(event) {
        const spell = util.common.updateFormState(event, this.state.spell, this.props.picklists);
        return this.setState({spell: spell});
    }
    
    onChangeMechanic(event) {
        const mechanic = util.common.updateFormState(event, this.state.newMechanic, this.props.picklists);
        return this.setState({newMechanic: mechanic});
    }
    
    onAddMechanic() {
        const spell = this.state.spell;
        const mechanic = this.state.newMechanic;
        const newMechanic = Object.assign({}, util.objectModel.MECHANIC);
        mechanic.id = (spell.mechanics.base.length + spell.mechanics.advancement.length) * -1;
        if (this.state.newMechanic.assignmentType.id == util.itemTypes.MECHANIC_ASSIGNMENT.BASE || this.state.newMechanic.assignmentType.id == util.itemTypes.MECHANIC_ASSIGNMENT.BOTH) {
            spell.mechanics.base.push(mechanic);
        }
        if (this.state.newMechanic.assignmentType.id == util.itemTypes.MECHANIC_ASSIGNMENT.ADVANCEMENT || this.state.newMechanic.assignmentType.id == util.itemTypes.MECHANIC_ASSIGNMENT.BOTH) {
            spell.mechanics.advancement.push(mechanic);
        }
        return this.setState({spell: spell, newMechanic: newMechanic});
    }
    
    onRemoveMechanic(mechanic) {
        const spell = this.state.spell;
        let removeIndex = -1;
        let removeFromBase = false;
        let removeFromAdvancement = false;
        for (let e = 0; e < spell.mechanics.advancement.length; e++) {
            if (mechanic.id == spell.mechanics.advancement[e].id) {
                removeIndex = e;
                removeFromAdvancement = true;
            }
        }
        for (let e = 0; e < spell.mechanics.base.length; e++) {
            if (mechanic.id == spell.mechanics.base[e].id) {
                removeIndex = e;
                removeFromBase = true;
            }
        }
        if (removeIndex != -1) {
            if (removeFromAdvancement) {
                spell.mechanics.advancement.splice(removeIndex, 1);
            }
            if (removeFromBase) {
                spell.mechanics.base.splice(removeIndex, 1);
            }
            return this.setState({spell: spell});
        }
    }
    
    onResetMechanic() {
        const newMechanic = Object.assign({}, util.objectModel.MECHANIC);
        this.setState({newMechanic: newMechanic});
    }
    
    onChangeChart(event) {
        let chart = null;
        if (this.state.selectedChartTypeId == util.itemTypes.CHARTS.STANDARD) {
            if (event.target.type !== undefined) {
                chart = util.common.updateFormState(event, this.state.editChart, this.props.picklists);
                let newColumn = Object.assign({}, util.objectModel.CHART_COLUMN);
                let newRow = Object.assign({}, util.objectModel.CHART_ROW);
                switch (event.target.name) {
                    case 'columnCount':
                        for (let c = 0; c < event.target.value; c++) {
                            if (c > chart.columns.length - 1) {
                                newColumn = Object.assign({}, util.objectModel.CHART_COLUMN);
                                newColumn.id = (c + 1) * -1;
                                newColumn.columnIndex = c + 1;
                                chart.columns.push(newColumn);
                            }
                        }
                        if (chart.columns.length > event.target.value) {
                            chart.columns.splice(event.target.value);
                        }
                        break;
                    case 'rowCount':
                        for (let r = 0; r < event.target.value; r++) {
                            if (r > chart.rows.length - 1) {
                                newRow = Object.assign({}, util.objectModel.CHART_ROW);
                                newRow.id = (r + 1) * -1;
                                newRow.rowIndex = r + 1;
                                chart.rows.push(newRow);
                            }
                        }
                        if (chart.rows.length > event.target.value) {
                            chart.rows.splice(event.target.value);
                        }
                        break;
                    default:
                }
                //add new chart.entries
                let newEntry = Object.assign({}, util.objectModel.CHART_ENTRY);
                let newEntryId = 0;
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
            } else {
                chart = this.state.editChart;
                let recordType = event.target.id.split('_')[1];
                let recordId = parseInt(event.target.id.split('_')[0]);
                let recordField = event.target.id.split('_')[2];
                let recordValue = event.target.innerHTML;
                for (let q = 0; q < chart[recordType].length; q++) {
                    if (recordId == chart[recordType][q].id) {
                        chart[recordType][q][recordField] = recordValue;
                    }
                }
            }
            this.setState({editChart: chart});
        } else if (this.state.selectedChartTypeId == util.itemTypes.CHARTS.DIE_ROLL) {
            const chart = this.state.editDieChart;
            let field = event.target.name;
            let dataType = event.target.getAttribute('dataType');
            let newRenderedValue = '';
            let newDiceRollValue = {};
            let newEntry = null;
            let changedEntryId = null;
            let changedEntryIndex = -1;
            let higherIndexedEntryExists = false;
            let removeEntryCount = 0;
            let removeEntryIndex = -1;
            let finalEntryIndex = -1;
            let referenceEntry = {};
            let chartMaximumValue = 0;
            switch (dataType) {
                case util.dataTypes.string.STRING:
                case util.dataTypes.string.DESCRIPTION:
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
                case util.dataTypes.special.DIE_CHART_ENTRY_DIE_ROLL_RANGE:
                    changedEntryId = parseInt(field.split('_')[0]);
                    //get index of changed entry
                    chartMaximumValue = chart.dieRoll.dieCount * chart.dieRoll.dieType;
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
                        newEntry.maximum = chartMaximumValue;//chart.dieRoll.dieCount * chart.dieRoll.dieType;
                        chart.entries.push(newEntry);
                    }
                    break;
                case util.dataTypes.special.DIE_CHART_ENTRY_DESCRIPTION:
                    changedEntryId = parseInt(field.split('_')[0]);
                    for (let x = 0; x < chart.entries.length; x++) {
                        if (chart.entries[x].id == changedEntryId) {
                            changedEntryIndex = x;
                            break;
                        }
                    }
                    chart.entries[changedEntryIndex].description = event.target.value;
                    break;
                default:
            }
            this.setState({editDieChart: chart});
        }
    }
    
    onChangeChartOrder(chart, isUp) {
        const spell = this.state.spell;
        const charts = spell.charts.sort(function(a, b) {
            return a.orderIndex - b.orderIndex;
        });
        if ((isUp && chart.orderIndex != 0) || (!isUp && chart.orderIndex != charts.length - 1)) {
            let changedIndex = -1;
            let otherChangedIndex = -1;
            let referenceOrderIndex = -1;
            let referenceOtherOrderIndex = -1;
            for (let r = 0; r < charts.length; r++) {
                if (charts[r].id == chart.id) {
                    changedIndex = r;
                    otherChangedIndex = isUp ? r - 1 : r + 1;
                    referenceOrderIndex = charts[r].orderIndex;
                    referenceOtherOrderIndex = isUp ? referenceOrderIndex - 1 : referenceOrderIndex + 1;
                    break;
                }
            }
            if (changedIndex != -1 && otherChangedIndex != -1) {
                charts[changedIndex].orderIndex = referenceOtherOrderIndex;
                charts[otherChangedIndex].orderIndex = referenceOrderIndex;
            }
            spell.charts = charts.sort(function(a, b) {
                return a.orderIndex - b.orderIndex;
            });
            this.setState({spell: spell});
        }
    }
    
    onCreateChart() {
        
    }
    
    onAddChart() {
        const spell = this.state.spell;
        let chart = this.state.editChart;
        switch (this.state.selectedChartTypeId) {
            case util.itemTypes.CHARTS.DIE_ROLL:
                chart = this.state.editDieChart;
                chart.orderIndex = spell.charts.die.length;
                spell.charts.die.push(chart);
                break;
            case util.itemTypes.CHARTS.STANDARD:
                chart = this.state.editChart;
                chart.orderIndex = spell.charts.standard.length;
                spell.charts.standard.push(chart);
                break;
            default:
        }
        this.setState({spell: spell});
        this.onResetChart();
    }
    
    onRemoveChart(chart) {
        const spell = Object.assign({}, this.state.spell);
        let removeIndex = null;
        
        switch (this.state.selectedChartTypeId) {
            case util.itemTypes.CHARTS.DIE_ROLL:
                removeIndex = util.picklists.getIndexById(spell.charts.die, chart.id);
                if (removeIndex != -1) {
                    spell.charts.die.splice(removeIndex, 1);
                }
                break;
            case util.itemTypes.CHARTS.STANDARD:
                removeIndex = util.picklists.getIndexById(spell.charts.standard, chart.id);
                if (removeIndex != -1) {
                    spell.charts.standard.splice(removeIndex, 1);
                }
                break;
            default:
        }
        this.setState({spell: spell});
    }
    
    onSelectChart(chart) {
        this.setState({selectedChartId: chart.id});
    }
    
    onAddChartColumn() {
        const newColumn = Object.assign({}, util.objectModel.CHART_COLUMN);
        const editChart = Object.assign({}, this.state.editChart);
        editChart.columns.push(newColumn);
        this.setState({editChart: editChart});
    }
    
    onRemoveChartColumn(column) {
        const editChart = this.state.editChart;
        let removeIndex = util.picklists.getIndexById(editChart.columns, column.id);
        if (removeIndex != -1) {
            editChart.columns.splice(removeIndex, 1);
        }
        this.setState({editChart: editChart});
    }
    
    onAddChartRow() {
        const newRow = Object.assign({}, util.objectModel.CHART_ROW);
        const editChart = Object.assign({}, this.state.editChart);
        editChart.rows.push(newRow);
        this.setState({editChart: editChart});
    }
    
    onRemoveChartRow(row) {
        const editChart = this.state.editChart;
        let removeIndex = util.picklists.getIndexById(editChart.rows, row.id);
        if (removeIndex != -1) {
            editChart.rows.splice(removeIndex, 1);
        }
        this.setState({editChart: editChart});
    }
    
    onResetChart() {
        const newChart = Object.assign({}, util.objectModel.CHART);
        newChart.columns = [];
        newChart.rows = [];
        newChart.entries = [];
        this.setState({editChart: newChart});
    }
    
    onAddDescription() {
        const spell = this.state.spell;
        const newDescription = this.state.editDescription;
        newDescription.orderIndex = spell.supplementalDescriptions.length;
        spell.supplementalDescriptions.push(newDescription);
        const emptyDescription = Object.assign({}, util.objectModel.SUPPLEMENTAL_DESCRIPTION);
        emptyDescription.id = spell.supplementalDescriptions.length;
        this.setState({spell: spell, editDescription: emptyDescription});
    }
    
    onRemoveDescription(descriptionId) {
        const spell = Object.assign({}, this.state.spell);
        let removeIndex = util.picklists.getIndexById(spell.supplementalDescriptions, descriptionId);
        if (removeIndex != -1) {
            spell.supplementalDescriptions.splice(removeIndex, 1);
        }
        this.setState({spell: spell});
    }
    
    onSelectDescription() {
        
    }
    
    onResetDescription() {
        const newDescription = Object.assign({}, util.objectModel.SUPPLEMENTAL_DESCRIPTION);
        this.setState({editDescription: newDescription});
    }
    
    onCreateDescription() {
        
    }
    
    onChangeDescriptions(event) {
        const description = util.common.updateFormState(event, this.state.editDescription, this.props.picklists);
        this.setState({editDescription: description});
    }
    
    onChangeDescriptionOrder(description, isUp) {
        const spell = this.state.spell;
        const descriptions = spell.supplementalDescriptions.sort(function(a, b) {
            return a.orderIndex - b.orderIndex;
        });
        if ((isUp && description.orderIndex != 0) || (!isUp && description.orderIndex != descriptions.length - 1)) {
            let changedIndex = -1;
            let otherChangedIndex = -1;
            let referenceOrderIndex = -1;
            let referenceOtherOrderIndex = -1;
            for (let r = 0; r < descriptions.length; r++) {
                if (descriptions[r].id == description.id) {
                    changedIndex = r;
                    otherChangedIndex = isUp ? r - 1 : r + 1;
                    referenceOrderIndex = descriptions[r].orderIndex;
                    referenceOtherOrderIndex = isUp ? referenceOrderIndex - 1 : referenceOrderIndex + 1;
                    break;
                }
            }
            if (changedIndex != -1 && otherChangedIndex != -1) {
                descriptions[changedIndex].orderIndex = referenceOtherOrderIndex;
                descriptions[otherChangedIndex].orderIndex = referenceOrderIndex;
            }
            spell.supplementalDescriptions = descriptions.sort(function(a, b) {
                return a.orderIndex - b.orderIndex;
            });
            this.setState({spell: spell});
        }
    }
    
    onChangeChartType(event) {
        this.setState({selectedChartTypeId: parseInt(event.target.value)});
        
    }
    onDieChartExpand() {
        const chart = util.common.expandChart(this.state.dieChart);
        this.setState({editDieChart: chart});
    }
    onDieChartRemoveEntry(entry) {
        const chart = this.state.dieChart;
        let removeIndex = -1;
        let refMin = entry.minimum;
        let refId = entry.id;
        for (let r = 0; r < chart.entries.length; r++) {
            if (entry.id == chart.entries[r].id) {
                removeIndex = r;
                refMin = chart.entries[r].minimum;
            }
        }
        let isFirst = removeIndex == 0;
        let isLast = removeIndex == chart.entries.length - 1;
        if (removeIndex != -1) {
            chart.entries.splice(removeIndex, 1);
            if (isFirst) {
                chart.entries[0].minimum = chart.dieRoll.dieCount;
                chart.entries[0].id = refId;
            } else if (isLast) {
                chart.entries[chart.entries.length - 1].maximum = chart.dieRoll.dieCount * chart.dieRoll.dieType;
                chart.entries[chart.entries.length - 1].id = refId;
            } else {
                chart.entries[removeIndex].minimum = refMin;
                chart.entries[removeIndex].id = refId;
            }
        }
        this.setState({editDieChart: chart});
    }
    render() {
        const spell = this.state.spell;
        const contents = this.props.canEdit ? (
            <SpellForm
                ref="form"
                spell={spell}
                isCreate={this.props.isCreate}
                picklists={this.props.picklists}
                saving={this.state.saving}
                onChange={this.updateFormState}
                saveNewCastingTime={this.saveNewCastingTime}
                saveNewDuration={this.saveNewDuration}
                saveNewRange={this.saveNewRange}
                onChangeMechanic={this.onChangeMechanic}
                onAddMechanic={this.onAddMechanic}
                onRemoveMechanic={this.onRemoveMechanic}
                onResetMechanic={this.onResetMechanic}
                newMechanic={this.state.newMechanic}
                chart={this.state.editChart}
                onChangeChart={this.onChangeChart}
                onChangeChartOrder={this.onChangeChartOrder}
                onAddChart={this.onAddChart}
                onAddChartColumn={this.onAddChartColumn}
                onAddChartRow={this.onAddChartRow}
                onCreateChart={this.onCreateChart}
                onRemoveChart={this.onRemoveChart}
                onRemoveChartColumn={this.onRemoveChartColumn}
                onRemoveChartRow={this.onRemoveChartRow}
                onSelectChart={this.onSelectChart}
                onResetChart={this.onResetChart}
                description={this.state.editDescription}
                onChangeDescriptions={this.onChangeDescriptions}
                onChangeDescriptionOrder={this.onChangeDescriptionOrder}
                onAddDescription={this.onAddDescription}
                onCreateDescription={this.onCreateDescription}
                onRemoveDescription={this.onRemoveDescription}
                onSelectDescription={this.onSelectDescription}
                onResetDescription={this.onResetDescription}
                onChangeChartType={this.onChangeChartType}
                selectedChartTypeId={this.state.selectedChartTypeId}
                dieChart={this.state.editDieChart}
                onDieChartExpand={this.onDieChartExpand}
                onDieChartRemoveEntry={this.onDieChartRemoveEntry}
                />
        ) : (
            <SpellDetails
                spell={spell}
                picklists={this.props.picklists}
                />
        );
        return (
            <DndModal
                headingCaption="Spell"
                closeModal={this.props.closeModal}
                isCreate={this.props.isCreate}
                canEdit={this.props.canEdit}
                openModal={this.props.openModal}
                showModal={this.props.showModal}
                onCancel={this.cancelSpell}
                onDelete={this.deleteSpell}
                onSave={this.saveAndBackSpell}
                onSaveNew={this.saveAndNewSpell}>
                {contents}
            </DndModal>
        );
    }
}

SpellEntry.propTypes = {
    spell: PropTypes.object,
    equipments: PropTypes.array,
    actions: PropTypes.object,
    canEdit: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    isCreate: PropTypes.bool,
    picklists: PropTypes.array
};

function getSpellById(spells, id) {
    if (id != 0) {
        let spell = spells.find(spell => spell.id == id);
        return Object.assign({}, spell);
    } else {
        return Object.assign({}, util.objectModel.SPELL);
    }
}

function mapStateToProps(state, ownProps) {
    let spell = Object.assign({}, util.objectModel.SPELL);
    const spellId = ownProps.selectedId;
    let isCreate = true;
    if (ownProps.selecetdId != 0) {
        if (spellId && state.spells.length > 0) {
            spell = getSpellById(state.spells, ownProps.selectedId);
            isCreate = false;
        }
    }
    return {spell: spell, isCreate: isCreate};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, spellActions, picklistActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpellEntry);