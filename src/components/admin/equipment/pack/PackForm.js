import React from 'react';
import PropTypes from 'prop-types';
import DndDataEntryButtonBar from '../../../common/DndDataEntryButtonBar';
import DndButton from '../../../common/DndButton';
import DndInput from '../../../common/DndInput';
import DndInputWrapper from '../../../common/DndInputWrapper';
import PackEquipmentItemRow from './PackEquipmentItemRow';
import util from '../../../../util/util';

class PackForm extends React.Component {
    constructor(props) {
        super(props);
        this._addEquipmentItem = this._addEquipmentItem.bind(this);
        this._removeEquipmentItem = this._removeEquipmentItem.bind(this);
        this._changeEquipmentCount = this._changeEquipmentCount.bind(this);
        this.renderEquipmentItemList = this.renderEquipmentItemList.bind(this);
        this.setFocus = this.setFocus.bind(this);
    }
    
    componentDidMount() {
        this.refs.name.setFocus();
    }
    
    setFocus() {
        this.refs.name.setFocus();
    }
        
    _addEquipmentItem () {
        event.preventDefault();
        this.props.addEquipmentToPack(this.props);
    }
    
    _removeEquipmentItem (equipmentItem) {
        this.props.removeEquipmentFromPack(equipmentItem);
    }
    
    _changeEquipmentCount (event, equipmentItem) {
        this.props.changeEquipmentCount(event, equipmentItem);
    }
    
    renderEquipmentItemList () {
        const equipmentItemList = this.props.pack.assignedEquipment.length == 0 ? null : (
            <div>
                <table>
                    <colgroup>
                        <col width="50%"></col>
                        <col width="20%"></col>
                        <col width="20%"></col>
                        <col width="10%"></col>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>Equipment</th>
                            <th>Count</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.pack.assignedEquipment.map(equipmentItem =>
                            <PackEquipmentItemRow
                                key={equipmentItem.id}
                                equipmentItem={equipmentItem}
                                changeEquipmentCount={this._changeEquipmentCount}
                                removePackEquipmentItem={this._removeEquipmentItem}
                                />
                        )}
                    </tbody>
                </table>
            </div>
        );
        return equipmentItemList;
    }
    
    render() {
        return (
            <div>
                <form>
                    <div className="col-md-12">
                        <DndInput
                            name="name"
                            ref="name"
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
                            isReadOnly
                             />
                    </div>
                    <div className="col-md-12">
                        <DndInputWrapper
                            dataType={util.dataTypes.array.ASSIGNED_EQUIPMENT}
                            label="Assigned Equipment">
                            <div>
                                <div className="input-group">
                                    <select
                                        name="selectedEquipment"
                                        className="form-control"
                                        onChange={this.props.onChange}
                                        datatype={util.dataTypes.obj.EQUIPMENT}
                                        >
                                        <option value="0">SELECT ONE</option>
                                        {util.picklistInfo.filterPicklistByAssigned(this.props.equipments, this.props.pack.assignedEquipment).map(equipmentItem =>
                                                                 <option
                                                                     key={equipmentItem.id}
                                                                     value={equipmentItem.id}>
                                                                     {equipmentItem.name}
                                                                 </option>)}
                                    </select>
                                    <span className="input-group-btn">
                                        <DndButton
                                            buttonType="additem"
                                            onClick={this._addEquipmentItem}
                                            />
                                    </span>
                                </div>
                                {this.renderEquipmentItemList()}
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

PackForm.propTypes = {
    addEquipmentToPack: PropTypes.func.isRequired,
    removeEquipmentFromPack: PropTypes.func.isRequired,
    changeEquipmentCount: PropTypes.func.isRequired,
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