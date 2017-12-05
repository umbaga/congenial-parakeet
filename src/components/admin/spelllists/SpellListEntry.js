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
            spelllist: this.props.spelllist
        };
        this.cancelSpellList = this.cancelSpellList.bind(this);
        this.deleteSpellList = this.deleteSpellList.bind(this);
        this.resetSpellList = this.resetSpellList.bind(this);
        this.postAction = this.postAction.bind(this);
        this.saveAndBackSpellList = this.saveAndBackSpellList.bind(this);
        this.saveAndNewSpellList = this.saveAndNewSpellList.bind(this);
        this.saveSpellList = this.saveSpellList.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
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
    
    render() {
        const spelllist = this.state.spelllist;
        const contents = this.props.canEdit ? (
            <SpellListForm
                ref="form"
                spelllist={spelllist}
                isCreate={this.props.isCreate}
                picklists={this.props.picklists}
                saving={this.state.saving}
                onChange={this.updateFormState}
                />
        ) : (
            <SpellListDetails
                spelllist={spelllist}
                picklists={this.props.picklists}
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