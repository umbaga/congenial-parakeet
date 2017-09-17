import React from 'react';
import PropTypes from 'prop-types';
import DndDataEntryButtonBar from '../../../common/DndDataEntryButtonBar';
import DndButton from '../../../common/DndButton';
import DndInput from '../../../common/DndInput';
import DndInputWrapper from '../../../common/DndInputWrapper';
import DndToggleBoxes from '../../../common/DndToggleBoxes';
import util from '../../../../util/util';

class PackForm extends React.Component {
    constructor(props) {
        super(props);
        this.searchEquipmentList = this.searchEquipmentList.bind(this);
        this.addEquipmentItem = this.addEquipmentItem.bind(this);
    }

    searchEquipmentList () {
        console.log('search');
    }
    addEquipmentItem () {
        console.log('add item');
    }
    render() {
        return (
            <div>
                <form>
                    <div className="col-md-12">
                        <DndInput
                            name="name"
                            label="Name"
                            dataType={util.dataTypes.string.STRING}
                            value={this.props.pack.name}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="cost"
                            label="Cost"
                            dataType={util.dataTypes.number.COIN}
                            value={this.props.pack.cost}
                            onChange={this.props.onChange}
                            numberStepVal={util.dataTypes.number.getStepIncrement(this.props.pack.cost)}
                             />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="weight"
                            label="Weight"
                            dataType={util.dataTypes.number.WEIGHT}
                            value={this.props.pack.weight}
                            onChange={this.props.onChange}
                             />
                    </div>
                    <div className="col-md-12">
                        <DndInputWrapper
                            dataType={util.dataTypes.array.ASSIGNED_EQUIPMENT}
                            label="Assigned Equipment">
                            <div>
                                THIS WILL BE EQUIPMENT ASSIGNMENT
                            </div>
                        </DndInputWrapper>
                    </div>
                    <DndDataEntryButtonBar
                        onSave={this.props.onSave}
                        onSaveNew={this.props.onSaveNew}
                        onCancel={this.props.onCancel}
                        onDelete={this.props.onDelete}
                        isCreate={this.props.isCreate} />
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                </form>
            </div>
        );
    }
}
/*
                        <DndInput
                            name="assignedEquipment"
                            label="Assign Equipment to Pack"
                            dataType={util.dataTypes.array.ASSIGNED_EQUIPMENT}
                            valueObj={this.props.pack.assignedEquipment}
                            picklists={this.props.picklists}
                            customInput={testCustomInput} />
*/
PackForm.propTypes = {
    pack: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onSaveNew: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    isCreate: PropTypes.bool.isRequired,
    saving: PropTypes.bool,
    picklists: PropTypes.array,
    nonstandardInput: PropTypes.object,
    equipments: PropTypes.array
};

export default PackForm;