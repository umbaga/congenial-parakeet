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
            editMechanic: Object.assign({}, util.objectModel.MECHANIC),
            editDescription: Object.assign({}, util.objectModel.SUPPLEMENTAL_DESCRIPTION),
            selectedChartType: Object.assign({}, util.objectModel.CHART_TYPE),
            editChart: Object.assign({}, util.objectModel.CHART),
            editDamageGrouping: Object.assign({}, util.objectModel.DAMAGE)
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
        this.updateChartFormState = this.updateChartFormState.bind(this);
        this.onResetChart = this.onResetChart.bind(this);
        this.onSelectEditedChart = this.onSelectEditedChart.bind(this);
        this.updateMechanicFormState = this.updateMechanicFormState.bind(this);
        this.onResetMechanic = this.onResetMechanic.bind(this);
        
        
        this.updateDescriptionFormState = this.updateDescriptionFormState.bind(this);
        this.onSelectDescription = this.onSelectDescription.bind(this);
        this.onResetDescription = this.onResetDescription.bind(this);
        
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
        blankSpell.savingThrow = {
            abilityScore: {id: 0, name: ''},
            effect: {id: 0, name: ''}
        };
        blankSpell.charts = [];
        //blankSpell.mechanics = {base: [], advancement: []};
        blankSpell.mechanics = [];
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
            id: util.itemtypes.TYPES.SPELL_CASTING_TIME
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
            id: util.itemtypes.TYPES.SPELL_DURATION
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
            id: util.itemtypes.TYPES.SPELL_RANGE
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
    
    updateChartFormState(event, refObj, isOrderChange) {
        const newChartType = util.common.formState.chartType(event, this.state.selectedChartType, this.props.picklists);
        const editChart = util.common.formState.chart(event, this.state.editChart, refObj, this.props.picklists);
        editChart.type = newChartType;
        editChart.orderIndex = this.state.spell.charts.length;
        editChart.id = (this.state.spell.charts.length + 1) * -1;
        let arrayPropertyRefObj = (isOrderChange) ? refObj : editChart;
        let spell = util.common.formState.arrayProperty(event, this.state.spell, arrayPropertyRefObj);
        spell.charts = util.common.picklists.refactorUnsavedItemIds(spell.charts);
        this.setState({spell: spell, editChart: editChart, selectedChartType: newChartType});
    }
    
    onResetChart() {
        const emptyChartType = util.common.resetObject.chartType();
        const emptyChart = util.common.resetObject.chart(emptyChartType);
        this.setState({editChart: emptyChart, selectedChartType: emptyChartType});
    }
    
    onSelectEditedChart() {
        
    }
    
    updateMechanicFormState(event, refObj) {
        let editMechanic = util.common.formState.mechanic(event, this.state.editMechanic, this.state.spell, this.props.picklists, refObj);
        let spell = util.common.formState.mechanic(event, this.state.spell, this.state.editMechanic, this.props.picklists, refObj);
        if (spell.resetMechanic){
            editMechanic = util.common.resetObject.mechanic();
        }
        spell.mechanics.base = util.common.picklists.refactorUnsavedItemIds(spell.mechanics.base);
        return this.setState({spell: spell, editMechanic: editMechanic});
    }
    
    onResetMechanic() {
        const editMechanic = util.common.resetObject.mechanic();
        this.setState({editMechanic: editMechanic});
    }
    
    updateDescriptionFormState(event, refObj, isOrderChange) {
        let editDescription = util.common.formState.description(event, this.state.editDescription, this.state.spell);
        editDescription.orderIndex = this.state.spell.supplementalDescriptions.length;
        editDescription.id = (this.state.spell.supplementalDescriptions.length + 1) * -1;
        let arrayPropertyRefObj = (isOrderChange) ? refObj : editDescription;
        let spell = util.common.formState.arrayProperty(event, this.state.spell, arrayPropertyRefObj);
        spell.supplementalDescriptions = util.common.picklists.refactorUnsavedItemIds(spell.supplementalDescriptions);
        if (spell.resetDescription){
            editDescription = util.common.resetObject.description();
        }
        this.setState({spell: spell, editDescription: editDescription});
    }
    
    onResetDescription() {
        this.setState({editDescription: util.common.resetObject.description()});
    }
    
    onSelectDescription() {
        
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
                
                editChart={this.state.editChart}
                selectedChartType={this.state.selectedChartType}
                onChangeChart={this.updateChartFormState}
                onResetChart={this.onResetChart}
                onSelectEditedChart={this.updateChartFormState}
                
                onChangeMechanic={this.updateMechanicFormState}
                onResetMechanic={this.onResetMechanic}
                editMechanic={this.state.editMechanic}
                
                editDescription={this.state.editDescription}
                onChangeDescriptions={this.updateDescriptionFormState}
                onSelectDescription={this.onSelectDescription}
                onResetDescription={this.onResetDescription}
                
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
    let spell = Object.assign({}, util.objectModel.examples.SPELL);
    //let spell = Object.assign({}, util.objectModel.SPELL);
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