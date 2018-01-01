import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';
import DndInput from '../inputs/DndInput';
import DndDataEntryButtonBar from '../buttons/DndDataEntryButtonBar';
import DndBreathWeaponRow from '../subcomponents/DndBreathWeaponRow';

class DndManageBreathWeapons extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.renderList = this.renderList.bind(this);
    }
    
    renderList(breathWeapons) {
        if (breathWeapons && breathWeapons.length != 0) {
            return (
                <table>
                    <tbody>
                        {breathWeapons.map(function(breathWeapon, idx) {
                            return (
                                <DndBreathWeaponRow
                                    key={idx}
                                    breathWeapon={breathWeapon}
                                    onRemoveBreathWeapon={this.props.onChange}
                                    />
                            );
                        }.bind(this))}
                    </tbody>
                </table>
            );
        }
        return null;
    }
    
    render() {
        return (
            <div>
                BREATH WEAPONS
                {this.renderList(this.props.breathWeapons)}
            </div>
        );
    }
}

DndManageBreathWeapons.propTypes = {
    onChange: PropTypes.func.isRequired,
    picklists: PropTypes.array.isRequired,
    breathWeapons: PropTypes.array.isRequired,
    editBreathWeapon: PropTypes.object.isRequired,
    showAdvancement: PropTypes.bool
};

export default DndManageBreathWeapons;