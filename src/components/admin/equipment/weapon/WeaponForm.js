import React from 'react';
import PropTypes from 'prop-types';
import DndDataEntryButtonBar from '../../../common/DndDataEntryButtonBar';
import DndInput from '../../../common/DndInput';
import util from '../../../../util/util';

class WeaponForm extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const isCreate = this.props.isCreate;
        let deleteButton = null;
        if(!isCreate) {
            deleteButton = <button onClick={this.props.onDelete} className="btn btn-default  ">Delete</button>;
        }
        let damageTypePicklist = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.DAMAGE_TYPE);
        let weaponCategoryPicklist = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.WEAPON_CATEGORY);
        let weaponProficiencyPicklist = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.WEAPON_PROFICIENCY);
        let weaponPropertyPicklist = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.WEAPON_PROPERTY);
        
        let versatileDamageInput = null;
        let rangeInput = null;
        let specialDescriptionInput = null;
        for(let v = 0; v < this.props.weapon.weaponProperties.length; v++){
            if(this.props.weapon.weaponProperties[v]){
                if(this.props.weapon.weaponProperties[v].requireDamage) {
                    versatileDamageInput = (<div className="col-md-12">
                        <DndInput
                            name="versatileDamage"
                            label="Versatile Damage"
                            dataType={util.dataTypes.special.DICE_ROLL}
                            valueObj={this.props.weapon.versatileDamage}
                            onChange={this.props.onChange} />
                    </div>);
                }
                if(this.props.weapon.weaponProperties[v].requireRange) {
                    rangeInput = (<div className="col-md-12">
                        <DndInput
                            name="range"
                            label="Range"
                            dataType={util.dataTypes.special.WEAPON_RANGE}
                            valueObj={this.props.weapon.range}
                            onChange={this.props.onChange} />
                        </div>);
                }
                if(this.props.weapon.weaponProperties[v].requireDescription) {
                    specialDescriptionInput = (<div className="col-md-12">
                            <DndInput
                                name="specialDescription"
                                label="Special"
                                dataType={util.dataTypes.string.LONG_STRING}
                                value={this.props.weapon.specialDescription}
                                onChange={this.props.onChange} />
                        </div>);
                }
            }
        }
        return (
            <div>
                <form>
                    <div className="col-md-12">
                        <DndInput
                            name="name"
                            label="Name"
                            dataType={util.dataTypes.string.STRING}
                            value={this.props.weapon.name}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="cost"
                            label="Cost"
                            dataType={util.dataTypes.number.COIN}
                            value={this.props.weapon.cost}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="weight"
                            label="Weight"
                            dataType={util.dataTypes.number.WEIGHT}
                            value={this.props.weapon.weight}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="weaponProficiency"
                            label="Proficiency"
                            dataType={util.dataTypes.picklist.WEAPON_PROFICIENCY}
                            valueObj={this.props.weapon.weaponProficiency}
                            onChange={this.props.onChange}
                            picklist={weaponProficiencyPicklist} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="weaponCategory"
                            label="Category"
                            dataType={util.dataTypes.picklist.WEAPON_CATEGORY}
                            valueObj={this.props.weapon.weaponCategory}
                            onChange={this.props.onChange}
                            picklist={weaponCategoryPicklist} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="damageType"
                            label="Damage Type"
                            dataType={util.dataTypes.picklist.DAMAGE_TYPE}
                            valueObj={this.props.weapon.damageType}
                            onChange={this.props.onChange}
                            picklist={damageTypePicklist} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="damage"
                            label="Damage"
                            dataType={util.dataTypes.special.DICE_ROLL}
                            valueObj={this.props.weapon.damage}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="col-md-12">
                        <DndInput
                            name="weaponProperties"
                            label="Properties"
                            dataType={util.dataTypes.array.WEAPON_PROPERTIES}
                            valueArray={this.props.weapon.weaponProperties}
                            onChange={this.props.onChange}
                            picklist={weaponPropertyPicklist} />
                    </div>
                    {rangeInput}
                    {versatileDamageInput}
                    {specialDescriptionInput}
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

WeaponForm.propTypes = {
    weapon: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onSaveNew: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    isCreate: React.PropTypes.bool.isRequired,
    saving: React.PropTypes.bool,
    picklists: PropTypes.array
};

export default WeaponForm;