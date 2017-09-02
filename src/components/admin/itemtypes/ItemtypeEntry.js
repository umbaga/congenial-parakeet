import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as itemtypeActions from '../../../actions/admin/itemtypeActions';
import ItemtypeForm from './ItemtypeForm';
import util from '../../../util/util';
import TextInput from '../../common/TextInput';
import CheckBox from '../../common/CheckBox';


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
        this.redirect = this.redirect.bind(this);
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
        this.redirect();
    }

    deleteItemtype(event) {
        event.preventDefault();
        if(confirm('are you sure?')) {
            this.props.actions.deleteItemtype(this.state.itemtype);
            this.redirect();
        }
    }

    redirect() {
        browserHistory.push('/admin/itemtypes');
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
    }

    saveAndBackItemtype(event) {
        this.saveItemtype(event);
        this.redirect();
    }

    updateFormState(event) {
        const field = event.target.name;
        const itemtype = this.state.itemtype;
        switch(event.target.type) {
            case "text":
                itemtype[field] = event.target.value;
                break;
            case "checkbox":
                itemtype[field] = !itemtype[field];
                break;
            default:
        }
        return this.setState({itemtype: itemtype});
    }

    render() {
        return (
            <div>
                <h3>{this.state.isCreate ? 'Create New' : 'Edit Existing'} Itemtype</h3>
                <ItemtypeForm 
                    itemtype={this.state.itemtype} 
                    onSave={this.saveAndBackItemtype} 
                    onSaveNew={this.saveAndNewItemtype}
                    onChange={this.updateFormState} 
                    onCancel={this.cancelItemtype}
                    onDelete={this.deleteItemtype}
                    isCreate={this.state.isCreate}
                    redirect={this.redirect}
                    saving={this.state.saving} /> 
            </div>
        );
    }
}

ItemtypeEntry.propTypes = {
    itemtype: PropTypes.object,
    actions: PropTypes.object,
    isCreate: PropTypes.bool
};

function getItemtypeById(itemtypes, id) {
    if(id != 0) {
        let itemtype = itemtypes.find(itemtype => itemtype.id == id);
        return Object.assign({}, itemtype);
    } else {
        return Object.assign({}, util.objectModel.ITEMTYPE);
    }
}

function mapStateToProps(state, ownProps) {
    let itemtype = Object.assign({}, util.objectModel.ITEMTYPE);//{name: '', isPicklist: false};
    const itemtypeId = ownProps.params.id;
    let isCreate = true;
    if(ownProps.params.id != 0) {
        if (itemtypeId && state.itemtypes.length > 0) {
            itemtype = getItemtypeById(state.itemtypes, ownProps.params.id);
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