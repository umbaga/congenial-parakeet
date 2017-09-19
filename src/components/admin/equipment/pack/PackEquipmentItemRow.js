import React from 'react';
import PropTypes from 'prop-types';
import DndButton from '../../../common/DndButton';

class PackEquipmentItemRow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._onRemove = this._onRemove.bind(this);
        this._onChange = this._onChange.bind(this);
    }
    
    _onRemove(event) {
        event.preventDefault();
        this.props.removePackEquipmentItem(this.props.equipmentItem);
    }
    
    _onChange(event) {
        this.props.changeEquipmentCount(event, this.props.equipmentItem);
    }
    
    render() {
        return (
            <tr>
                <td>{this.props.equipmentItem.name}</td>
                <td>
                    <input
                        className="form-control"
                        width="50"
                        type="number"
                        value={this.props.equipmentItem.assignedCount * this.props.equipmentItem.count}
                        min={this.props.equipmentItem.count}
                        step={this.props.equipmentItem.count}
                        onChange={this._onChange}
                        />
                </td>
                <td>
                    {this.props.equipmentItem.unit}
                </td>
                <td>
                    <DndButton
                        buttonType="removeitem"
                        onClick={this._onRemove}
                        />
                </td>
            </tr>
        );
    }
}

PackEquipmentItemRow.propTypes = {
    equipmentItem: PropTypes.object.isRequired,
    changeEquipmentCount: PropTypes.func.isRequired,
    removePackEquipmentItem: PropTypes.func.isRequired
};

export default PackEquipmentItemRow;