import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link, browserHistory} from 'react-router';
import util from '../../../util/util';
import DndListItemButtonBar from '../../common/DndListItemButtonBar';
import * as itemtypeActions from '../../../actions/admin/itemtypeActions';

class ItemtypeListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedId: this.props.selectedId
        };
        this.editItemtype = this.editItemtype.bind(this);
        this.deleteItemType = this.deleteItemType.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        
    }
    editItemtype(itemtype) {
        event.preventDefault();
        this.props.openModal();
        this.props.changeSelectedId(this.props.itemtype.id);
        this.setState({selectedId: this.props.itemtype.id});
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
                <td className="text-center">{util.format.forDisplay.bool.asCheckX(this.props.itemtype.isPicklist)}</td>
                <td>
                    <DndListItemButtonBar 
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
    actions: PropTypes.object,
    openModal: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired,
    changeSelectedId: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(itemtypeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemtypeListItem);