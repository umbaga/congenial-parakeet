import React from 'react';
import PropTypes from 'prop-types';
import DndButton from '../buttons/DndButton';
import util from '../../../util/util';

class DndMechanicRow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._onRemove = this._onRemove.bind(this);
    }
    
    _onRemove(event) {
        event.preventDefault();
        this.props.onRemoveMechanic(this.props.mechanic);
    }
    
    render() {
        const displayText = util.format.forDisplay.obj.mechanic(this.props.mechanic);
        return (
            <tr>
                <td>{displayText}</td>
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

DndMechanicRow.propTypes = {
    mechanic: PropTypes.object.isRequired,
    onRemoveMechanic: PropTypes.func.isRequired
};

export default DndMechanicRow;