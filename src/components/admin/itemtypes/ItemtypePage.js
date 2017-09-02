import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemtypeActions from '../../../actions/admin/itemtypeActions';
import ItemtypeForm from './ItemtypeForm';
import {browserHistory} from 'react-router';
import util from '../../../util/util';

class ItemtypePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            itemtype: this.props.itemtype, 
            saving: false,
            isEditing: false
        };
        this.saveItemtype = this.saveItemtype.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.deleteItemtype = this.deleteItemtype.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.itemtype.id != nextProps.itemtype.id) {
            this.setState({itemtype: nextProps.itemtype});
        }

        this.setState({saving: false, isEditing: false});
    }

    toggleEdit() {
        this.setState({isEditing: true});
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

    saveItemtype(event) {
        event.preventDefault();
        this.setState({saving: true});
        if(this.state.isCreate) {
            this.props.actions.createItemtype(this.state.itemtype);
        } else {
            this.props.actions.updateItemtype(this.state.itemtype);
        }
    }

    deleteItemtype(event) {
        this.props.actions.deleteItemtype(this.state.itemtype);
    }

    redirect() {
        browserHistory.push('/admin/itemtypes');
    }

    render() {
        if (this.state.isEditing) {
            return (
                <div>
                    <h1>edit itemtype</h1>
                    <ItemtypeForm 
                        itemtype={this.state.itemtype} 
                        onSave={this.saveItemtype} 
                        onChange={this.updateFormState} 
                        saving={this.state.saving}/> 
                </div>
            );
        }
        return (
            <div className="col-md-8 col-md-offset-2">
                <h1>{this.state.itemtype.name}</h1>
                <p>is picklist: {this.state.itemtype.isPicklist}</p>
                <button onClick={this.toggleEdit} className="btn btn-default  ">edit</button>
                <button onClick={this.deleteItemtype} className="btn btn-default  ">delete</button>
            </div>
        );
    }
}


ItemtypePage.propTypes = {
    itemtype: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function getItemtypeById(itemtypes, id) {
    let itemtype = itemtypes.find(itemtype => itemtype.id == id);
    return Object.assign({}, itemtype);
}

function mapStateToProps(state, ownProps) {
    let itemtype = util.objectModel.ITEMTYPE;//{name: '', isPicklist: false};
    const itemtypeId = ownProps.params.id;
    if (itemtypeId && state.itemtypes.length > 0) {
        itemtype = getItemtypeById(state.itemtypes, ownProps.params.id);
    } 
    return {itemtype: itemtype};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(itemtypeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemtypePage);