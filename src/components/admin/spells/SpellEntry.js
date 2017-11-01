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
            saving: false
        };
        this.cancelSpell = this.cancelSpell.bind(this);
        this.deleteSpell = this.deleteSpell.bind(this);
        this.postAction = this.postAction.bind(this);
        this.saveAndBackSpell = this.saveAndBackSpell.bind(this);
        this.saveAndNewSpell = this.saveAndNewSpell.bind(this);
        this.saveSpell = this.saveSpell.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
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
    
    updateFormState(event) {
        let field = event.target.name !== undefined ? event.target.name : event.target.parentElement.name;
        const spell = this.state.spell;
        const dataType = event.target.getAttribute('dataType') !== null ? event.target.getAttribute('dataType') : event.target.parentElement.getAttribute('dataType');
        let newSelectedValue = {};
        let field2 = null;
        if (field.split('.').length > 1) {
            field2 = field.split('.')[1];
            field = field.split('.')[0];
        }
        switch (dataType) {
            case util.dataTypes.string.STRING:
            case util.dataTypes.string.DESCRIPTION:
            case util.dataTypes.number.COIN:
                if (field2) {
                    spell[field][field2] = event.target.value;
                } else {
                    spell[field] = event.target.value;
                }
                break;
            case util.dataTypes.picklist.RESOURCE:
                newSelectedValue.id = parseInt(event.target.options[event.target.selectedIndex].value);
                newSelectedValue.name = event.target.options[event.target.selectedIndex].text;
                spell[field] = newSelectedValue;
                break;
            case util.dataTypes.obj.EQUIPMENT:
                if (event.target.value != 0) {
                    return this.setState({selectedEquipment: this.props.equipments.filter((equipment) => equipment.id == event.target.value)[0]});
                }
                break;
            default:
        }
        return this.setState({spell: spell});
    }
    
    render() {
        const spell = this.state.spell;
        console.log(spell);
        const contents = this.props.canEdit ? (
            <SpellForm
                ref="form"
                spell={spell}
                isCreate={this.props.isCreate}
                picklists={this.props.picklists}
                saving={this.state.saving}
                onChange={this.updateFormState}
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