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
            editChart: Object.assign({}, util.objectModel.CHART)
        };
        this.cancelSpell = this.cancelSpell.bind(this);
        this.deleteSpell = this.deleteSpell.bind(this);
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
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.spell.id != nextProps.spell.id) {
            this.setState({spell: nextProps.spell});
        }
        this.setState({saving: false});
    }

    cancelSpell(event) {
        event.preventDefault();
        this.postAction();
    }

    deleteSpell(event) {
        event.preventDefault();
        if (confirm('are you sure?')) {
            this.props.actions.deleteSpell(this.state.spell);
            this.postAction();
        }
    }

    postAction() {
        this.props.closeModal();
    }

    saveAndNewSpell(event) {
        this.saveSpell(event);
        this.refs.form.refs.name.setFocus();
    }

    saveAndBackSpell(event) {
        this.saveSpell(event);
        this.postAction();
    }

    saveSpell(event) {
        event.preventDefault();
        let newSpell = {};
        newSpell = Object.assign({}, util.objectModel.SPELL);
        newSpell.components = [];
        this.setState({saving: true, spell: newSpell});
        this.props.actions.upsertSpell(this.state.spell);
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
    }
    
    onChangeChartOrder() {
        
    }
    
    onCreateChart() {
        
    }
    
    onAddChart() {
        const spell = this.state.spell;
        const chart = this.state.editChart;
        chart.orderIndex = spell.charts.length;
        spell.charts.push(chart);
        this.setState({spell: spell});
        this.onResetChart();
    }
    
    onRemoveChart(chart) {
        const spell = Object.assign({}, this.state.spell);
        let removeIndex = util.picklists.getIndexById(spell.charts, chart.id);
        if (removeIndex != -1) {
            spell.charts.splice(removeIndex, 1);
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