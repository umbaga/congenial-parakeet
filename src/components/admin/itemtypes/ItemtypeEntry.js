import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemtypeActions from '../../../actions/admin/itemtypeActions';
import ItemtypeForm from './ItemtypeForm';
import util from '../../../util/util';


class ItemtypeEntry extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            itemtype: this.props.itemtype,
            isCreate: this.props.isCreate,
            saving: false
        };
        this.cancelItemtype = this.cancelItemtype.bind(this);
        this.deleteItemtype = this.deleteItemtype.bind(this);
        this.postAction = this.postAction.bind(this);
        this.saveItemtype = this.saveItemtype.bind(this);
        this.saveAndNewItemtype = this.saveAndNewItemtype.bind(this);
        this.saveAndBackItemtype = this.saveAndBackItemtype.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.itemtype.id != nextProps.itemtype.id) {
            this.setState({itemtype: nextProps.itemtype});
        }
        this.setState({saving: false});
    }

    cancelItemtype(event) {
        event.preventDefault();
        this.postAction();
    }

    deleteItemtype(event) {
        event.preventDefault();
        if (confirm('are you sure?')) {
            this.props.actions.deleteItemtype(this.state.itemtype);
            this.postAction();
        }
    }

    postAction() {
        this.props.closeModal();
    }

    saveItemtype(event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.upsertItemtype(this.state.itemtype);
    }

    saveAndNewItemtype(event) {
        this.saveItemtype(event);
        let newItemtype = Object.assign({}, util.objectModel.ITEMTYPE);
        this.setState({itemtype: newItemtype});
        this.refs.form.refs.name.setFocus();
        
    }

    saveAndBackItemtype(event) {
        this.saveItemtype(event);
        this.postAction();
    }

    updateFormState(event) {
        const field = event.target.name;
        const itemtype = this.state.itemtype;
        switch (event.target.type) {
            case 'text':
                itemtype[field] = event.target.value;
                break;
            case 'checkbox':
                itemtype[field] = !itemtype[field];
                break;
            default:
        }
        return this.setState({itemtype: itemtype});
    }

    render() {
        return (
            <div>
                <ItemtypeForm
                    ref="form"
                    itemtype={this.state.itemtype}
                    onSave={this.saveAndBackItemtype}
                    onSaveNew={this.saveAndNewItemtype}
                    onChange={this.updateFormState}
                    onCancel={this.cancelItemtype}
                    onDelete={this.deleteItemtype}
                    isCreate={this.state.isCreate}
                    saving={this.state.saving} />
            </div>
        );
    }
}

ItemtypeEntry.propTypes = {
    itemtype: PropTypes.object,
    actions: PropTypes.object,
    isCreate: PropTypes.bool,
    closeModal: PropTypes.func.isRequired
};

function getItemtypeById(itemtypes, id) {
    if (id != 0) {
        let itemtype = itemtypes.find(itemtype => itemtype.id == id);
        return Object.assign({}, itemtype);
    } else {
        return Object.assign({}, util.objectModel.ITEMTYPE);
    }
}

function mapStateToProps(state, ownProps) {
    let itemtype = Object.assign({}, util.objectModel.ITEMTYPE);
    const itemtypeId = ownProps.selectedId;
    let isCreate = true;
    if (ownProps.selecetdId != 0) {
        if (itemtypeId && state.itemtypes.length > 0) {
            itemtype = getItemtypeById(state.itemtypes, ownProps.selectedId);
            isCreate = false;
        }
    }
    return {itemtype: itemtype, isCreate: isCreate};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(itemtypeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemtypeEntry);