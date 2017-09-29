import React from 'react';
import PropTypes from 'prop-types';
import DndInput from '../../../common/DndInput';
import DndUniversalInput from '../../../common/DndUniversalInput';
import util from '../../../../util/util';

class ArmorForm extends React.Component {
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
        let proficiencyPicklist = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.ARMOR_PROFICIENCY);

        let hasMaxDexInput = null;
        let maximumDexInput = null;
        if (this.props.armor.applyDexModifier) {
            if (this.props.armor.hasMaxDexModifier) {
                maximumDexInput = (
                    <DndInput
                        name="maxDexModifier"
                        label="Max Dex Mod"
                        dataType={util.dataTypes.number.INT}
                        value={this.props.armor.maxDexModifier.toString()}
                        onChange={this.props.onChange} />
                );
            }
            hasMaxDexInput = (
                <div className="col-md-12">
                    <div className="col-md-6">
                        <DndInput
                            name="hasMaxDexModifier"
                            label="Has Max Dex Mod"
                            dataType={util.dataTypes.bool.BOOL}
                            checked={this.props.armor.hasMaxDexModifier}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="col-md-6">
                        {maximumDexInput}
                    </div>
                </div>
            );
        }

        return (
            <div>
                <form>
                    <DndUniversalInput
                        ref="name"
                        referenceObject={this.props.armor}
                        onChange={this.props.onChange}
                        picklists={this.props.picklists}
                        />
                    <div className="col-md-6">
                        <DndInput
                            name="cost"
                            label="Cost"
                            dataType={util.dataTypes.number.COIN}
                            value={this.props.armor.cost}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="weight"
                            label="Weight"
                            dataType={util.dataTypes.number.WEIGHT}
                            value={this.props.armor.weight}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="proficiency"
                            label="Proficiency"
                            dataType={util.dataTypes.picklist.ARMOR_PROFICIENCY}
                            valueObj={this.props.armor.proficiency}
                            onChange={this.props.onChange}
                            picklist={proficiencyPicklist} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="baseArmorClass"
                            label="Armor Class"
                            dataType={util.dataTypes.number.INT}
                            value={this.props.armor.baseArmorClass.toString()}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="isCumulative"
                            label="AC stacks (i.e. Shields)"
                            dataType={util.dataTypes.bool.BOOL}
                            checked={this.props.armor.isCumulative}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="applyDexModifier"
                            label="Apply Dex Mod"
                            dataType={util.dataTypes.bool.BOOL}
                            checked={this.props.armor.applyDexModifier}
                            onChange={this.props.onChange} />
                    </div>
                        {hasMaxDexInput}
                    <div className="col-md-6">
                        <DndInput
                            name="stealthDisadvantage"
                            label="Stealth Disadvantage"
                            dataType={util.dataTypes.bool.BOOL}
                            checked={this.props.armor.stealthDisadvantage}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="minimumStrength"
                            label="Minimum Strength"
                            dataType={util.dataTypes.number.INT}
                            value={this.props.armor.minimumStrength.toString()}
                            onChange={this.props.onChange} />
                    </div>
                </form>
            </div>
        );
    }
}

ArmorForm.propTypes = {
    armor: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onSaveNew: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    isCreate: PropTypes.bool.isRequired,
    saving: PropTypes.bool,
    picklists: PropTypes.array
};

export default ArmorForm;