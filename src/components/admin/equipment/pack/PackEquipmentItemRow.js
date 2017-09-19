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
                        value={this.props.equipmentItem.itemCount * this.props.equipmentItem.count}
                        min={this.props.equipmentItem.itemCount}
                        step={this.props.equipmentItem.itemCount}
                        onChange={this._onChange}
                        />
                </td>
                <td>
                    {this.props.equipmentItem.unitName}
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