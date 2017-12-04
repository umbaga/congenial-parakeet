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
            editDescription: Object.assign({}, util.objectModel.SUPPLEMENTAL_DESCRIPTION),
            selectedChartType: Object.assign({}, util.objectModel.CHART_TYPE),
            editChart: Object.assign({}, util.objectModel.CHART),
            editDamageGroupinf: Object.assign({}, util.objectModel.DAMAGE)
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
        this.onAddDescription = this.onAddDescription.bind(this);
        this.onRemoveDescription = this.onRemoveDescription.bind(this);
        this.onSelectDescription = this.onSelectDescription.bind(this);
        this.onResetDescription = this.onResetDescription.bind(this);
        this.onCreateDescription = this.onCreateDescription.bind(this);
        this.onChangeDescriptions = this.onChangeDescriptions.bind(this);
        this.onChangeDescriptionOrder = this.onChangeDescriptionOrder.bind(this);
        this.onChangeChart = this.onChangeChart.bind(this);
        this.onResetChart = this.onResetChart.bind(this);
        this.onSelectEditedChart = this.onSelectEditedChart.bind(this);
        this.onAddDamageGrouping = this.onAddDamageGrouping.bind(this);
        this.onRemoveDamageGrouping = this.onRemoveDamageGrouping.bind(this);
        this.onResetDamageGrouping = this.onResetDamageGrouping.bind(this);
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
            dice: {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 1},
            type: {id: 0, name: ''},
            attackRollType: {id: 0, name: ''},
            condition: {id: 0, name: ''},
            improvement: {
                dice: {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 1}
            },
            supplemental: [],
            applyAbilityScoreModifier: false,
            abilityScore: {id: 0, name: ''},
            maximum: {dice: {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 1}}
        };
        blankSpell.savingThrow = {
            abilityScore: {id: 0, name: ''},
            effect: {id: 0, name: ''}
        };
        blankSpell.charts = [];
        blankSpell.mechanics = {base: [], advancement: []};
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
        const spell = util.common.formState.standard(event, this.state.spell, this.props.picklists);
        return this.setState({spell: spell});
    }
    
    onChangeMechanic(event) {
        const mechanic = util.common.formState.standard(event, this.state.newMechanic, this.props.picklists);
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
        const description = util.common.formState.standard(event, this.state.editDescription, this.props.picklists);
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
    
    onChangeChart(event, refObj, isOrderChange) {
        const newChartType = util.common.formState.chartType(event, this.state.selectedChartType, this.props.picklists);
        const newChart = util.common.formState.chart(event, this.state.editChart, refObj, this.props.picklists);
        newChart.type = newChartType;
        newChart.orderIndex = this.state.spell.charts.length;
        newChart.id = (this.state.spell.charts.length + 1) * -1;
        let newSpell = null;
        if (isOrderChange) {
            newSpell = util.common.formState.arrayProperty(event, this.state.spell, refObj);
        } else {
            newSpell = util.common.formState.arrayProperty(event, this.state.spell, newChart);
        }
        newSpell.charts = util.common.picklists.refactorUnsavedItemIds(newSpell.charts);
        this.setState({spell: newSpell, editChart: newChart, selectedChartType: newChartType});
    }
    
    onResetChart() {
        const emptyChartType = util.objectModel.CHART_TYPE;
        const emptyChart = Object.assign({}, util.objectModel.CHART);
        emptyChart.id = (this.state.spell.charts.length + 1) * -1;
        emptyChart.orderIndex = this.state.spell.charts.length;
        emptyChart.rows = [];
        emptyChart.columns = [];
        emptyChart.entries = [];
        emptyChart.dice = util.objectModel.DICE;
        emptyChart.type = emptyChartType;
        this.setState({editChart: emptyChart, selectedChartType: emptyChartType});
    }
    
    onSelectEditedChart() {
        
    }
    
    onAddDamageGrouping() {
        const spell = this.state.spell;
        const newDamageGrouping = {
            dice: spell.damage.dice,
            type: spell.damage.type
        };
        spell.damage.dice = Object.assign({}, util.objectModel.DICE);
        spell.damage.type = Object.assign({}, util.objectModel.TYPE);
        spell.damage.supplemental.push(newDamageGrouping);
        this.setState({spell: spell});
        this.onResetDamageGrouping();
    }
    
    onRemoveDamageGrouping(event) {
        let removeIndex = util.common.formState.setFieldFromTargetName(event).split('_')[0];
        const spell = this.state.spell;
        spell.damage.supplemental.splice(removeIndex, 1);
        this.setState({spell: spell});
    }
    
    onResetDamageGrouping() {
        const newDamageGroup = Object.assign({}, util.objectModel.DAMAGE);
        newDamageGroup.dice = Object.assign({}, util.objectModel.DICE);
        newDamageGroup.type = Object.assign({}, util.objectModel.TYPE);
        this.setState({editDamageGrouping: newDamageGroup});
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
                chart={this.state.editChart}
                selectedChartType={this.state.selectedChartType}
                onChangeChart={this.onChangeChart}
                onResetChart={this.onResetChart}
                onSelectEditedChart={this.onChangeChart}
                onAddDamageGrouping={this.onAddDamageGrouping}
                onRemoveDamageGrouping={this.onRemoveDamageGrouping}
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