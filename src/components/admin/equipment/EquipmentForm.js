import React from 'react';
import PropTypes from 'prop-types';
import DndDataEntryButtonBar from '../../common/DndDataEntryButtonBar';
import DndInput from '../../common/DndInput';
import util from '../../../util/util';

class EquipmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.setFocus = this.setFocus.bind(this);
        this.renderAmmunitionTypePicklist = this.renderAmmunitionTypePicklist.bind(this);
    }
    
    componentDidMount() {
        this.refs.name.setFocus();
    }
    
    setFocus() {
        this.refs.name.setFocus();
    }
    
    renderAmmunitionTypePicklist() {
        let ammunitionTypePicklistField = null;
        if (this.props.equipment.category.id == util.picklistInfo.AMMUNTION_EQUIPMENT_CATEGORY) {
            let ammunitionTypePicklist = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.AMMUNITION_TYPE);
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
    
    render() {
        let categoryPicklist = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.EQUIPMENT_CATEGORY);
        return (
            <div>
                <form>
                    <div className="col-md-12">
                        <DndInput
                            name="name"
                            ref="name"
                            label="Name"
                            dataType={util.dataTypes.string.STRING}
                            value={this.props.equipment.name}
                            onChange={this.props.onChange} />
                    </div>
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
                    {this.renderAmmunitionTypePicklist()}
                    <DndDataEntryButtonBar
                        onSave={this.props.onSave}
                        onSaveNew={this.props.onSaveNew}
                        onCancel={this.props.onCancel}
                        onDelete={this.props.onDelete}
                        isCreate={this.props.isCreate} />
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
    picklists: PropTypes.array
};

export default EquipmentForm;