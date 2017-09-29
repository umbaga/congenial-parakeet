import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as picklistActions from '../../../actions/admin/picklistActions';
import PicklistForm from './PicklistForm';
import util from '../../../util/util';
import DndModal from '../../common/DndModal';


class PicklistEntry extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            picklist: this.props.picklist,
            picklistItem: Object.assign({}, {id: 0, name: '', picklistId: this.props.picklist.id}),
            isCreate: this.props.isCreate,
            canEdit: this.props.canEdit,
            saving: false
        };
        this.addPicklistItem = this.addPicklistItem.bind(this);
        this.removePicklistItem = this.removePicklistItem.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.picklist.id != nextProps.picklist.id) {
            this.setState({picklist: nextProps.picklist});
        }
        this.setState({saving: false});
    }

    addPicklistItem() {
        this.setState({picklistItem: {picklistId: this.props.picklist.id}});
        this.props.actions.addPicklistItem(this.props.picklist, this.state.picklistItem);
        this.refs.form.setFocus();
        //const newItem = Object.assign({}, {id: 0, name: '', picklistId: this.props.picklist.id});
        this.refs.form.refs.newPicklistItem.value = '';
        //this.setState({picklistItem: newItem});
    }

    removePicklistItem(picklistItem) {
        event.preventDefault();
        this.props.actions.removePicklistItem(this.props.picklist, picklistItem);
    }

    updateFormState(event) {
        const picklistItem = this.state.picklistItem;
        picklistItem.name = event.target.value;
        return this.setState({picklistItem: picklistItem});
    }

    render() {
        return (
            <DndModal
                headingCaption="Picklist"
                closeModal={this.props.closeModal}
                isCreate={this.props.isCreate}
                canEdit={this.props.canEdit}
                openModal={this.props.openModal}
                showModal={this.props.showModal}
                onCancel={this.cancelPicklist}
                onDelete={this.deletePicklist}
                onSave={this.saveAndBackPicklist}
                onSaveNew={this.saveAndNewPicklist}>
                <PicklistForm
                    ref="form"
                    picklist={this.state.picklist}
                    picklistItem={this.state.picklistItem}
                    onChange={this.updateFormState}
                    addPicklistItem={this.addPicklistItem}
                    removePicklistItem={this.removePicklistItem}
                    />
            </DndModal>
        );
    }
}

PicklistEntry.propTypes = {
    picklist: PropTypes.object,
    actions: PropTypes.object,
    canEdit: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    isCreate: PropTypes.bool
};

function getPicklistById(picklists, id) {
    if (id != 0) {
        let picklist = picklists.find(picklist => picklist.id == id);
        return Object.assign({}, picklist);
    } else {
        return Object.assign({}, util.objectModel.PICKLIST);
    }
}

function mapStateToProps(state, ownProps) {
    let picklist = Object.assign({}, util.objectModel.PICKLIST);
    let picklistItem = Object.assign({}, util.objectModel.PICKLISTITEM);
    picklistItem.picklistId = picklist.id;
    const picklistId = ownProps.selectedId;
    let isCreate = true;
    if (ownProps.selecetdId != 0) {
        if (picklistId && state.picklists.length > 0) {
            picklist = getPicklistById(state.picklists, ownProps.selectedId);
            isCreate = false;
        }
    }
    return {picklist: picklist, isCreate: isCreate, picklistItem: picklistItem};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(picklistActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PicklistEntry);