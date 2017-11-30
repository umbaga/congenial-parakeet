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
            selectedChartType: Object.assign({}, util.objectModel.CHART_TYPE)
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
        this.onChangeDieRollRange = this.onChangeDieRollRange.bind(this);
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
        const chart = util.common.updateChartFormState(event, this.state.editChart, this.props.picklists);
        this.setState({editChart: chart});
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
    
    onChangeChartType(event) {
        let newChartType = Object.assign({}, util.objectModel.CHART_TYPE);
        if (parseInt(event.target.value) != 0) {
            newChartType = util.common.picklists.getPicklistItem(this.props.picklists, parseInt(event.target.value));
        }
        this.setState({selectedChartType: newChartType});
    }
    
    onCreateChart() {
        
    }
    
    onAddChart() {
        const spell = this.state.spell;
        let chart = this.state.editChart;
        chart = this.state.editDieChart;
        chart.orderIndex = spell.charts.die.length;
        spell.charts.push(chart);
        this.setState({spell: spell});
        this.onResetChart();
    }
    
    onRemoveChart(chart) {
        const spell = Object.assign({}, this.state.spell);
        let removeIndex = null;
        removeIndex = util.common.picklists.getIndexById(spell.charts, chart.id);
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
        let removeIndex = util.common.picklists.getIndexById(editChart.columns, column.id);
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
        let removeIndex = util.common.picklists.getIndexById(editChart.rows, row.id);
        if (removeIndex != -1) {
            editChart.rows.splice(removeIndex, 1);
        }
        this.setState({editChart: editChart});
    }
    
    onResetChart() {
        const newChart = Object.assign({}, util.objectModel.CHART);
        const newChartType = util.objectModel.CHART_TYPE;
        newChart.columns = [];
        newChart.rows = [];
        newChart.entries = [];
        newChart.dieRoll = {};
        newChart.type = {id: 0};
        this.setState({editChart: newChart, selectedChartType: newChartType});
    }
    
    onDieChartExpand() {
        const chart = util.common.expandChart(this.state.dieChart);
        this.setState({editChart: chart});
    }
    
    /*onDieChartRemoveEntry(entry) {
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
    }*/
    
    onChangeDieRollRange() {
        
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
        let removeIndex = util.common.picklists.getIndexById(spell.supplementalDescriptions, descriptionId);
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
                description={this.state.editDescription}
                onChangeDescriptions={this.onChangeDescriptions}
                onChangeDescriptionOrder={this.onChangeDescriptionOrder}
                onAddDescription={this.onAddDescription}
                onCreateDescription={this.onCreateDescription}
                onRemoveDescription={this.onRemoveDescription}
                onSelectDescription={this.onSelectDescription}
                onResetDescription={this.onResetDescription}
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