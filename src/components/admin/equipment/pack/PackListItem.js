import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import util from '../../../../util/util';
import DndListItemButtonBar from '../../../common/buttons/DndListItemButtonBar';
import * as packActions from '../../../../actions/admin/packActions';

class PackListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedId: this.props.selectedId
        };
        this.editPack = this.editPack.bind(this);
        this.deletePack = this.deletePack.bind(this);
    }
    editPack() {
        event.preventDefault();
        this.props.openModal();
        this.props.changeSelectedId(this.props.pack.id);
        this.props.onEdit();
        this.setState({selectedId: this.props.pack.id});
    }
    deletePack() {
        event.preventDefault();
        if (confirm('are you sure?')) {
            this.props.actions.deletePack(this.props.pack);
        }
    }
    render() {
        return (
            <tr key={this.props.pack.id}>
                <td>{this.props.pack.name}</td>
                <td className="text-center">{util.format.forDisplay.number.coin(this.props.pack.cost)}</td>
                <td className="text-center">{util.format.forDisplay.number.weight(this.props.pack.weight)}</td>
                <td>{util.format.forDisplay.array.equipmentPackItems(this.props.pack.assignedEquipment)}</td>
                <td>
                    <DndListItemButtonBar
                        listItem={this.props.pack}
                        onEdit={this.editPack}
                        onDelete={this.deletePack} />
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {pack: ownProps.pack};
}

PackListItem.propTypes = {
    pack: PropTypes.object.isRequired,
    actions: PropTypes.object,
    openModal: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    onEdit: PropTypes.func
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(packActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PackListItem);