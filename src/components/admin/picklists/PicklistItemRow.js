import React from 'react';
import PropTypes from 'prop-types';
import DndButton from '../../common/buttons/DndButton';


class PicklistItemRow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._onRemove = this._onRemove.bind(this);
    }
    _onRemove() {
        this.props.removePicklistItem(this.props.picklistItem);
    }
    render() {
        return (
            <tr>
                <td>{this.props.picklistItem.name}</td>
                <td>
                    <DndButton
                        buttonType="removeitem"
                        onClick={this._onRemove} />
                </td>
            </tr>
        );
    }
}
PicklistItemRow.propTypes = {
    picklistItem: PropTypes.object.isRequired,
    removePicklistItem: PropTypes.func.isRequired
};

export default PicklistItemRow;