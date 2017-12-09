import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as spelllistActions from '../../../actions/admin/spelllistActions';
import * as picklistActions from '../../../actions/admin/picklistActions';

import SpellListForm from './SpellListForm';
import SpellListDetails from './SpellListDetails';
import util from '../../../util/util';
import DndModal from '../../common/DndModal';

class SpellListEntry extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            spelllist: this.props.spelllist,
            spells: this.props.spells,
            selectedSpellLevel: Object.assign({}, {id: -1})
        };
        this.cancelSpellList = this.cancelSpellList.bind(this);
        this.deleteSpellList = this.deleteSpellList.bind(this);
        this.resetSpellList = this.resetSpellList.bind(this);
        this.postAction = this.postAction.bind(this);
        this.saveAndBackSpellList = this.saveAndBackSpellList.bind(this);
        this.saveAndNewSpellList = this.saveAndNewSpellList.bind(this);
        this.saveSpellList = this.saveSpellList.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
        this.onChangeSelectedSpellLevel = this.onChangeSelectedSpellLevel.bind(this);
        this.onAddSpell = this.onAddSpell.bind(this);
        this.onRemoveSpell = this.onRemoveSpell.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.spelllist.id != nextProps.spelllist.id) {
            this.setState({spelllist: nextProps.spelllist});
        }
        this.setState({saving: false});
    }

    cancelSpellList(event) {
        event.preventDefault();
        this.resetSpellList();
        this.postAction();
    }

    deleteSpellList(event) {
        event.preventDefault();
        if (confirm('are you sure?')) {
            this.props.actions.deleteSpellList(this.state.spelllist);
            this.postAction();
        }
    }

    resetSpellList() {
        const blankSpellList = Object.assign({}, util.objectModel.SPELL_LIST);
        blankSpellList.spells = [];
        this.setState({spelllist: blankSpellList});
    }
    
    postAction() {
        this.props.closeModal();
    }

    saveAndNewSpellList(event) {
        this.saveSpellList(event);
        this.resetSpellList();
        this.refs.form.refs.name.setFocus();
    }

    saveAndBackSpellList(event) {
        this.saveSpellList(event);
        this.postAction();
    }

    saveSpellList(event) {
        event.preventDefault();
        this.props.actions.upsertSpellList(this.state.spelllist);
        this.resetSpellList();
    }
    
    updateFormState(event) {
        const spelllist = util.common.formState.standard(event, this.state.spelllist, this.props.picklists);
        return this.setState({spelllist: spelllist});
    }
    
    onChangeSelectedSpellLevel(event) {
        const newSpellLevel = Object.assign({}, {id: event.target.value});
        return this.setState({selectedSpellLevel: newSpellLevel});
    }
    
    onAddSpell(event) {
        const spelllist = this.state.spelllist;
        let selectedSpell = this.props.spells.filter(function(spell) {
            return spell.id == event.target.value;
        })[0];
        const finalSpell = {
            id: selectedSpell.id,
            name: selectedSpell.name,
            level: selectedSpell.level
        };
        spelllist.spells.push(finalSpell);
        this.setState({spelllist: spelllist});
    }
    
    onRemoveSpell(event) {
        const spelllist = this.state.spelllist;
        let removeThisIndex = -1;
        for (let q = 0; q < spelllist.spells.length; q++) {
            if (spelllist.spells[q].id == event.target.value) {
                removeThisIndex = q;
                break;
            }
        }
        if (removeThisIndex != -1) {
            spelllist.spells.splice(removeThisIndex, 1);
        }
        this.setState({spelllist: spelllist});
    }
    
    render() {
        const spelllist = this.state.spelllist;
        const spellLevels = util.hardCoded.picklist.spellLevels;
        const spells = this.props.spells;
        const contents = this.props.canEdit ? (
            <SpellListForm
                ref="form"
                spelllist={spelllist}
                spells={spells}
                isCreate={this.props.isCreate}
                picklists={this.props.picklists}
                saving={this.state.saving}
                onChange={this.updateFormState}
                spellLevels={spellLevels}
                selectedSpellLevel={this.state.selectedSpellLevel}
                onChangeSelectedSpellLevel={this.onChangeSelectedSpellLevel}
                onAddSpell={this.onAddSpell}
                onRemoveSpell={this.onRemoveSpell}
                />
        ) : (
            <SpellListDetails
                spelllist={spelllist}
                picklists={this.props.picklists}
                spellLevels={spellLevels}
                />
        );
        return (
            <DndModal
                headingCaption="SpellList"
                closeModal={this.props.closeModal}
                isCreate={this.props.isCreate}
                canEdit={this.props.canEdit}
                openModal={this.props.openModal}
                showModal={this.props.showModal}
                onCancel={this.cancelSpellList}
                onDelete={this.deleteSpellList}
                onSave={this.saveAndBackSpellList}
                onSaveNew={this.saveAndNewSpellList}>
                {contents}
            </DndModal>
        );
    }
}

SpellListEntry.propTypes = {
    spelllist: PropTypes.object,
    spells: PropTypes.array,
    actions: PropTypes.object,
    canEdit: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    isCreate: PropTypes.bool,
    picklists: PropTypes.array
};

function getSpellListById(spelllists, id) {
    if (id != 0) {
        let spelllist = spelllists.find(spelllist => spelllist.id == id);
        return Object.assign({}, spelllist);
    } else {
        return Object.assign({}, util.objectModel.SPELL_LIST);
    }
}

function mapStateToProps(state, ownProps) {
    let spelllist = Object.assign({}, util.objectModel.SPELL_LIST);
    const spelllistId = ownProps.selectedId;
    let isCreate = true;
    if (ownProps.selecetdId != 0) {
        if (spelllistId && state.spelllists.length > 0) {
            spelllist = getSpellListById(state.spelllists, ownProps.selectedId);
            isCreate = false;
        }
    }
    return {spelllist: spelllist, isCreate: isCreate};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, spelllistActions, picklistActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpellListEntry);