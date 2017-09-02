import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link, browserHistory} from 'react-router';
import ItemtypePage from './ItemtypePage';
import util from '../../../util/util';
import ListItemButtonBar from '../../common/ListItemButtonBar';
import * as itemtypeActions from '../../../actions/admin/itemtypeActions';

class ItemtypeListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.editItemtype = this.editItemtype.bind(this);
        this.deleteItemType = this.deleteItemType.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        
    }
    editItemtype(itemtype) {
        event.preventDefault();
        browserHistory.push('/admin/Itemtype/' + this.props.itemtype.id);
    }
    deleteItemType(itemtype) {
        event.preventDefault();
        if(confirm('are you sure?')) {
            this.props.actions.deleteItemtype(this.props.itemtype);
        }
    }
    render() {
        return (
            <tr key={this.props.itemtype.id}>
                <td>{this.props.itemtype.name}</td>
                <td>{util.format.forDisplay.bool.asCheckX(this.props.itemtype.isPicklist)}</td>
                <td>
                    <ListItemButtonBar 
                        listItem={this.props.itemtype}
                        onEdit={this.editItemtype} 
                        onDelete={this.deleteItemType} />
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {itemtype: ownProps.itemtype};
}

ItemtypeListItem.propTypes = {
itemtype: PropTypes.object.isRequired,
actions: PropTypes.object
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(itemtypeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemtypeListItem);