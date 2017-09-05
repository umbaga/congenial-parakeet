import React from 'react';
import PropTypes from 'prop-types';
import DndDataEntryButtonBar from '../../common/DndDataEntryButtonBar';
import DndButton from '../../common/DndButton';
import util from '../../../util/util';


class PicklistItemRow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._onRemove = this._onRemove.bind(this);
    }
    _onRemove(event) {
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
    picklistItem: React.PropTypes.object.isRequired,
    removePicklistItem: React.PropTypes.func.isRequired
};

export default PicklistItemRow;