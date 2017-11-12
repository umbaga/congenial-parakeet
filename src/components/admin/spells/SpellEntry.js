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
            newMechanic: Object.assign({}, util.objectModel.MECHANIC)
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
        let newSpell = Object.assign({}, util.objectModel.SPELL);
        this.setState({spell: newSpell});
        this.refs.form.refs.name.setFocus();
    }

    saveAndBackSpell(event) {
        this.saveSpell(event);
        this.postAction();
    }

    saveSpell(event) {
        event.preventDefault();
        this.setState({saving: true});
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