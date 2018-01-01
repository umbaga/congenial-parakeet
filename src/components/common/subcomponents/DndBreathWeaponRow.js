import React from 'react';
import PropTypes from 'prop-types';
import DndButton from '../buttons/DndButton';
import util from '../../../util/util';

class DndBreathWeaponRow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._onRemove = this._onRemove.bind(this);
    }
    
    _onRemove(event) {
        event.preventDefault();
        this.props.onRemoveBreathWeapon(event, this.props.breathWeapon);
    }
    
    render() {
        const displayText = util.format.forDisplay.obj.breathWeapon(this.props.breathWeapon);
        return (
            <tr>
                <td>{displayText}</td>
                <td>
                    <DndButton
                        buttonType="removeitem"
                        onClick={this._onRemove}
                        name={this.props.deleteButtonName}
                        dataType={this.props.deleteButtonAction}
                        />
                </td>
            </tr>
        );
    }
}

DndBreathWeaponRow.propTypes = {
    breathWeapon: PropTypes.object.isRequired,
    onRemoveBreathWeapon: PropTypes.func.isRequired,
    deleteButtonName: PropTypes.string,
    deleteButtonAction: PropTypes.string
};

export default DndBreathWeaponRow;