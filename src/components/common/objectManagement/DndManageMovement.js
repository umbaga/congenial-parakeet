import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';
import DndInputWrapper from '../inputs/DndInputWrapper';
import DndInput from '../inputs/DndInput';

class DndManageMovement extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        const movementTypes = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.MOVEMENT_TYPE);
        return (
            <DndInputWrapper
                label="Movement"
                dataType={util.dataTypes.array.MOVEMENTS}
                inputCols={9}
                labelCols={3}
                >
                <div>
                    {movementTypes.map(function(movementType, idx) {
                        let movement = this.props.movementArray.filter(function(mvmt) {
                            return mvmt.id == movementType.id;
                        });
                        let speed = (movement.length != 0) ? movement[0].speed : 0;
                        return (
                            <DndInput
                                key={idx.toString()}
                                name={movementType.id.toString()}
                                label={movementType.name}
                                value={speed.toString()}
                                dataType={util.dataTypes.number.INT}
                                onChange={this.props.onChange}
                                numberStepVal={5}
                                />
                        );
                    }.bind(this))}
                </div>
            </DndInputWrapper>
        );
    }
}

DndManageMovement.propTypes = {
    onChange: PropTypes.func.isRequired,
    picklists: PropTypes.array.isRequired,
    movementArray: PropTypes.array.isRequired
};

export default DndManageMovement;