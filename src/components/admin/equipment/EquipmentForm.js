import React from 'react';
import PropTypes from 'prop-types';
import DndInput from '../../common/inputs/DndInput';
import DndUniversalInput from '../../common/inputs/DndUniversalInput';
import util from '../../../util/util';

class EquipmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.setFocus = this.setFocus.bind(this);
        this.renderAmmunitionTypePicklist = this.renderAmmunitionTypePicklist.bind(this);
        this.renderImprovisedWeaponFields = this.renderImprovisedWeaponFields.bind(this);
    }
    
    componentDidMount() {
        this.refs.name.setFocus();
    }
    
    setFocus() {
        this.refs.name.setFocus();
    }
    
    renderAmmunitionTypePicklist() {
        let ammunitionTypePicklistField = null;
        if (this.props.equipment.category.id == util.itemTypes.EQUIPMENT_CATEGORY.AMMUNTION) {
            let ammunitionTypePicklist = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.AMMUNITION_TYPE);
            ammunitionTypePicklistField = (
                    <div className="col-md-6">
                        <DndInput
                            name="ammunition"
                            label="Ammunition Type"
                            dataType={util.dataTypes.picklist.AMMUNITION_TYPE}
                            valueObj={this.props.equipment.ammunition}
                            onChange={this.props.onChange}
                            picklist={ammunitionTypePicklist} />
                    </div>
                
            );
        }
        return ammunitionTypePicklistField;
    }
    
    renderImprovisedWeaponFields() {
        let damageTypePicklist = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.DAMAGE_TYPE);
        return this.props.hasImprovisedWeapon ? (
            <div>
                <div className="col-md-4">
                    <DndInput
                        name="improvisedWeapon.damage"
                        label="Damage"
                        dataType={util.dataTypes.special.DICE_ROLL}
                        valueObj={this.props.equipment.improvisedWeapon.damage}
                        onChange={this.props.onChange} />
                </div>
                <div className="col-md-4">
                    <DndInput
                        name="improvisedWeapon.damageType"
                        label="Damage Type"
                        dataType={util.dataTypes.picklist.DAMAGE_TYPE}
                        valueObj={this.props.equipment.improvisedWeapon.damageType}
                        onChange={this.props.onChange}
                        picklist={damageTypePicklist} />
                </div>
                <div className="col-md-4">
                    <DndInput
                        name="improvisedWeapon.range"
                        label="Range"
                        dataType={util.dataTypes.number.INT}
                        value={this.props.equipment.improvisedWeapon.range.toString()}
                        onChange={this.props.onChange} />
                </div>
            </div>
        ) : null;
    }
    
    render() {
        let categoryPicklist = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.EQUIPMENT_CATEGORY);
        return (
            <div>
                <form>
                    <div className="modal-no-tabs">
                        <DndUniversalInput
                            ref="name"
                            referenceObject={this.props.equipment}
                            onChange={this.props.onChange}
                            picklists={this.props.picklists}
                            />
                        <div className="col-md-6">
                            {util.format.forDisplay.obj.equipmentName(this.props.equipment)}
                        </div>
                        <div className="col-md-6">
                            <DndInput
                                name="category"
                                label="Category"
                                dataType={util.dataTypes.picklist.EQUIPMENT_CATEGORY}
                                valueObj={this.props.equipment.category}
                                onChange={this.props.onChange}
                                picklist={categoryPicklist} />
                        </div>
                        <div className="col-md-6">
                            <DndInput
                                name="cost"
                                label="Cost"
                                dataType={util.dataTypes.number.COIN}
                                value={this.props.equipment.cost}
                                onChange={this.props.onChange} />
                        </div>
                        <div className="col-md-6">
                            <DndInput
                                name="weight"
                                label="Weight"
                                dataType={util.dataTypes.number.WEIGHT}
                                value={this.props.equipment.weight}
                                onChange={this.props.onChange} />
                        </div>
                        <div className="col-md-6">
                            <DndInput
                                name="count"
                                label="Item Count"
                                dataType={util.dataTypes.number.INT}
                                value={this.props.equipment.count.toString()}
                                onChange={this.props.onChange} />
                        </div>
                        <div className="col-md-6">
                            <DndInput
                                name="unit"
                                label="Item Unit"
                                dataType={util.dataTypes.string.STRING}
                                value={this.props.equipment.unit}
                                onChange={this.props.onChange} />
                        </div>
                        <div className="col-md-12">
                            <DndInput
                                name="showImprovisedWeapon"
                                label="Is Improvised Weapon"
                                dataType={util.dataTypes.bool.BOOL}
                                onChange={this.props.onChangeImprovisedWeapon}
                                labelCols={4}
                                />
                            {this.renderImprovisedWeaponFields()}
                        </div>
                        {this.renderAmmunitionTypePicklist()}
                    </div>
                </form>
            </div>
        );
    }
}

EquipmentForm.propTypes = {
    equipment: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onSaveNew: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    isCreate: PropTypes.bool.isRequired,
    saving: PropTypes.bool,
    picklists: PropTypes.array,
    onChangeImprovisedWeapon: PropTypes.func.isRequired,
    hasImprovisedWeapon: PropTypes.bool.isRequired
};

export default EquipmentForm;