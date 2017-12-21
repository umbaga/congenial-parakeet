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
        let damageTypePicklist = util.common.picklists.getPicklistItems(this.props.picklists, util.itemtypes.TYPES.DAMAGE_TYPE);
        let categoryPicklist = util.common.picklists.getPicklistItems(this.props.picklists, util.itemtypes.TYPES.WEAPON_CATEGORY);
        let proficiencyPicklist = util.common.picklists.getPicklistItems(this.props.picklists, util.itemtypes.TYPES.WEAPON_PROFICIENCY);
        let weaponPropertyPicklist = util.common.picklists.getPicklistItems(this.props.picklists, util.itemtypes.TYPES.WEAPON_PROPERTY);
        let ammunitionTypePicklist = util.common.picklists.getPicklistItems(this.props.picklists, util.itemtypes.TYPES.AMMUNITION_TYPE);
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
                            dataType={util.datatypes.special.DICE_ROLL}
                            value={this.props.weapon.damage.versatile.dice}
                            onChange={this.props.onChange} />
                    </div>);
                }
                if (this.props.weapon.weaponProperties[v].requireRange) {
                    rangeInput = (<div className="col-md-12">
                        <DndInput
                            name="range"
                            label="Range"
                            dataType={util.datatypes.special.WEAPON_RANGE}
                            value={this.props.weapon.range}
                            onChange={this.props.onChange} />
                        </div>);
                }
                if (this.props.weapon.weaponProperties[v].requireAmmunition) {
                    ammunitionTypeInput = (<div className="col-md-12">
                        <DndInput
                            name="ammunition"
                            label="Ammunition Type"
                            dataType={util.datatypes.picklist.AMMUNITION_TYPE}
                            value={this.props.weapon.ammunition}
                            onChange={this.props.onChange}
                            picklist={ammunitionTypePicklist} />
                        </div>);
                }
                if (this.props.weapon.weaponProperties[v].requireDescription) {
                    specialDescriptionInput = (<div className="col-md-12">
                            <DndInput
                                name="specialDescription"
                                label="Special"
                                dataType={util.datatypes.string.LONG_STRING}
                                value={this.props.weapon.specialDescription}
                                onChange={this.props.onChange} />
                        </div>);
                }
            }
        }
        return (
            <div>
                <form>
                    <div className="modal-no-tabs">
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
                                dataType={util.datatypes.number.COIN}
                                value={this.props.weapon.cost}
                                onChange={this.props.onChange} />
                        </div>
                        <div className="col-md-6">
                            <DndInput
                                name="weight"
                                label="Weight"
                                dataType={util.datatypes.number.WEIGHT}
                                value={this.props.weapon.weight}
                                onChange={this.props.onChange} />
                        </div>
                        <div className="col-md-6">
                            <DndInput
                                name="proficiency"
                                label="Proficiency"
                                dataType={util.datatypes.picklist.WEAPON_PROFICIENCY}
                                value={this.props.weapon.proficiency}
                                onChange={this.props.onChange}
                                picklist={proficiencyPicklist} />
                        </div>
                        <div className="col-md-6">
                            <DndInput
                                name="category"
                                label="Category"
                                dataType={util.datatypes.picklist.WEAPON_CATEGORY}
                                value={this.props.weapon.category}
                                onChange={this.props.onChange}
                                picklist={categoryPicklist} />
                        </div>
                        <div className="col-md-12">
                            <DndInput
                                name="damage"
                                label="Damage and Type"
                                dataType={util.datatypes.combo.DAMAGE_AND_DAMAGE_TYPE}
                                value={this.props.weapon.damage}
                                onChange={this.props.onChange}
                                picklist={damageTypePicklist}
                                />
                        </div>
                        <div className="col-md-12">
                            <DndInput
                                name="weaponProperties"
                                label="Properties"
                                dataType={util.datatypes.array.WEAPON_PROPERTIES}
                                value={this.props.weapon.weaponProperties}
                                onChange={this.props.onChange}
                                picklist={weaponPropertyPicklist} />
                        </div>
                        {rangeInput}
                        {ammunitionTypeInput}
                        {versatileDamageInput}
                        {specialDescriptionInput}
                    </div>
                </form>
            </div>
        );
    }
}

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