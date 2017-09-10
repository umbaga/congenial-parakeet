import React from 'react';
import PropTypes from 'prop-types';
import DndDataEntryButtonBar from '../../../common/DndDataEntryButtonBar';
import DndInput from '../../../common/DndInput';
import util from '../../../../util/util';

class PackForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let damageTypePicklist = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.DAMAGE_TYPE);
        let categoryPicklist = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.PACK_CATEGORY);
        let proficiencyPicklist = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.PACK_PROFICIENCY);
        let packPropertyPicklist = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.PACK_PROPERTY);

        let versatileDamageInput = null;
        let rangeInput = null;
        let specialDescriptionInput = null;
        for (let v = 0; v < this.props.pack.packProperties.length; v++){
            if (this.props.pack.packProperties[v]){
                if (this.props.pack.packProperties[v].requireDamage) {
                    versatileDamageInput = (<div className="col-md-12">
                        <DndInput
                            name="versatileDamage"
                            label="Versatile Damage"
                            dataType={util.dataTypes.special.DICE_ROLL}
                            valueObj={this.props.pack.versatileDamage}
                            onChange={this.props.onChange} />
                    </div>);
                }
                if (this.props.pack.packProperties[v].requireRange) {
                    rangeInput = (<div className="col-md-12">
                        <DndInput
                            name="range"
                            label="Range"
                            dataType={util.dataTypes.special.PACK_RANGE}
                            valueObj={this.props.pack.range}
                            onChange={this.props.onChange} />
                        </div>);
                }
                if (this.props.pack.packProperties[v].requireDescription) {
                    specialDescriptionInput = (<div className="col-md-12">
                            <DndInput
                                name="specialDescription"
                                label="Special"
                                dataType={util.dataTypes.string.LONG_STRING}
                                value={this.props.pack.specialDescription}
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
                            value={this.props.pack.name}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="cost"
                            label="Cost"
                            dataType={util.dataTypes.number.COIN}
                            value={this.props.pack.cost}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="weight"
                            label="Weight"
                            dataType={util.dataTypes.number.WEIGHT}
                            value={this.props.pack.weight}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="proficiency"
                            label="Proficiency"
                            dataType={util.dataTypes.picklist.PACK_PROFICIENCY}
                            valueObj={this.props.pack.proficiency}
                            onChange={this.props.onChange}
                            picklist={proficiencyPicklist} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="category"
                            label="Category"
                            dataType={util.dataTypes.picklist.PACK_CATEGORY}
                            valueObj={this.props.pack.category}
                            onChange={this.props.onChange}
                            picklist={categoryPicklist} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="damageType"
                            label="Damage Type"
                            dataType={util.dataTypes.picklist.DAMAGE_TYPE}
                            valueObj={this.props.pack.damageType}
                            onChange={this.props.onChange}
                            picklist={damageTypePicklist} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="damage"
                            label="Damage"
                            dataType={util.dataTypes.special.DICE_ROLL}
                            valueObj={this.props.pack.damage}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="col-md-12">
                        <DndInput
                            name="packProperties"
                            label="Properties"
                            dataType={util.dataTypes.array.PACK_PROPERTIES}
                            valueArray={this.props.pack.packProperties}
                            onChange={this.props.onChange}
                            picklist={packPropertyPicklist} />
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

PackForm.propTypes = {
    pack: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onSaveNew: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    isCreate: React.PropTypes.bool.isRequired,
    saving: React.PropTypes.bool,
    picklists: PropTypes.array
};

export default PackForm;