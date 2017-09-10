import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link, browserHistory} from 'react-router';
import util from '../../../util/util';
import DndListItemButtonBar from '../../common/DndListItemButtonBar';
import * as equipmentActions from '../../../actions/admin/equipmentActions';

class EquipmentListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedId: this.props.selectedId
        };
        this.editEquipment = this.editEquipment.bind(this);
        this.deleteItemType = this.deleteItemType.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        
    }
    editEquipment(equipment) {
        event.preventDefault();
        this.props.openModal();
        this.props.changeSelectedId(this.props.equipment.id);
        this.setState({selectedId: this.props.equipment.id});
    }
    deleteItemType(equipment) {
        event.preventDefault();
        if(confirm('are you sure?')) {
            this.props.actions.deleteEquipment(this.props.equipment);
        }
    }
    render() {
        return (
            <tr key={this.props.equipment.id}>
                <td>{util.format.forDisplay.obj.equipmentName(this.props.equipment)}</td>
                <td className="text-center">{util.format.forDisplay.number.coin(this.props.equipment.cost)}</td>
                <td className="text-center">{util.format.forDisplay.number.weight(this.props.equipment.weight)}</td>
                <td>
                    <DndListItemButtonBar 
                        listItem={this.props.equipment}
                        onEdit={this.editEquipment} 
                        onDelete={this.deleteItemType} />
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {equipment: ownProps.equipment};
}

EquipmentListItem.propTypes = {
    equipment: PropTypes.object.isRequired,
    actions: PropTypes.object,
    openModal: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired,
    changeSelectedId: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(equipmentActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentListItem);