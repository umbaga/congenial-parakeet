import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../../actions/admin/itemtypeActions';
import ItemtypeForm from './ItemtypeForm';
import util from '../../../util/util';

class NewItemtypePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemtype: util.objectModel.ITEMTYPE,//{name: '', isPicklist: false},
            saving: false
        };
        this.saveItemtype = this.saveItemtype.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
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
        this.props.actions.createItemtype(this.state.itemtype);
    }

    render() {
        return (
            <div>
                <h1>new itemtype</h1>
                <ItemtypeForm 
                    itemtype={this.state.itemtype} 
                    onSave={this.saveItemtype}
                    onChange={this.updateFormState} />
            </div>
        );
    }
}

NewItemtypePage.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewItemtypePage);