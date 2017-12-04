import React from 'react';
import PropTypes from 'prop-types';
import DndInput from '../../../common/inputs/DndInput';
import DndUniversalInput from '../../../common/inputs/DndUniversalInput';
import util from '../../../../util/util';

class WeaponForm extends React.Component {
    constructor(props) {
        super(props);
        this.setFocus = this.setFocus.bind(this);
    }
    
    componentDidMount() {
        this.refs.name.setFocus();
    }
    
    setFocus() {
        this.refs.name.setFocus();
    }
    
    render() {
        let damageTypePicklist = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.DAMAGE_TYPE);
        let categoryPicklist = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.WEAPON_CATEGORY);
        let proficiencyPicklist = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.WEAPON_PROFICIENCY);
        let weaponPropertyPicklist = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.WEAPON_PROPERTY);
        let ammunitionTypePicklist = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.AMMUNITION_TYPE);
        let versatileDamageInput = null;
        let rangeInput = null;
        let specialDescriptionInput = null;
        let ammunitionTypeInput = null;
        for (let v = 0; v < this.props.weapon.weaponProperties.length; v++) {
            if (this.props.weapon.weaponProperties[v]){
                if (this.props.weapon.weaponProperties[v].requireDamage) {
                    versatileDamageInput = (<div className="col-md-12">
                        <DndInput
                            name="damage.versatile.dice"
                            label="Versatile Damage"
                            dataType={util.dataTypes.special.DICE_ROLL}
                            valueObj={this.props.weapon.damage.versatile.dice}
                            onChange={this.props.onChange} />
                    </div>);
                }
                if (this.props.weapon.weaponProperties[v].requireRange) {
                    rangeInput = (<div className="col-md-12">
                        <DndInput
                            name="range"
                            label="Range"
                            dataType={util.dataTypes.special.WEAPON_RANGE}
                            valueObj={this.props.weapon.range}
                            onChange={this.props.onChange} />
                        </div>);
                }
                if (this.props.weapon.weaponProperties[v].requireAmmunition) {
                    ammunitionTypeInput = (<div className="col-md-12">
                        <DndInput
                            name="ammunition"
                            label="Ammunition Type"
                            dataType={util.dataTypes.picklist.AMMUNITION_TYPE}
                            valueObj={this.props.weapon.ammunition}
                            onChange={this.props.onChange}
                            picklist={ammunitionTypePicklist} />
                        </div>);
                }
                if (this.props.weapon.weaponProperties[v].requireDescription) {
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
                    <DndUniversalInput
                        ref="name"
                        referenceObject={this.props.weapon}
                        onChange={this.props.onChange}
                        picklists={this.props.picklists}
                        hideDescription
                        />
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
                            name="proficiency"
                            label="Proficiency"
                            dataType={util.dataTypes.picklist.WEAPON_PROFICIENCY}
                            valueObj={this.props.weapon.proficiency}
                            onChange={this.props.onChange}
                            picklist={proficiencyPicklist} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="category"
                            label="Category"
                            dataType={util.dataTypes.picklist.WEAPON_CATEGORY}
                            valueObj={this.props.weapon.category}
                            onChange={this.props.onChange}
                            picklist={categoryPicklist} />
                    </div>
                    <div className="col-md-12">
                        <DndInput
                            name="damage"
                            label="Damage and Type"
                            dataType={util.dataTypes.combo.DAMAGE_AND_DAMAGE_TYPE}
                            valueObj={this.props.weapon.damage}
                            onChange={this.props.onChange}
                            picklist={damageTypePicklist}
                            />
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
                    {ammunitionTypeInput}
                    {versatileDamageInput}
                    {specialDescriptionInput}
                </form>
            </div>
        );
    }
}
/*
                    <div className="col-md-6">
                        <DndInput
                            name="damage.type"
                            label="Damage Type"
                            dataType={util.dataTypes.picklist.DAMAGE_TYPE}
                            valueObj={this.props.weapon.damage.type}
                            onChange={this.props.onChange}
                            picklist={damageTypePicklist} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="damage.dice"
                            label="Damage"
                            dataType={util.dataTypes.special.DICE_ROLL}
                            valueObj={this.props.weapon.damage.dice}
                            onChange={this.props.onChange} />
                    </div>*/
WeaponForm.propTypes = {
    weapon: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onSaveNew: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    isCreate: PropTypes.bool.isRequired,
    saving: PropTypes.bool,
    picklists: PropTypes.array
};

export default WeaponForm;