import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';
import DndInput from '../inputs/DndInput';
import DndDataEntryButtonBar from '../buttons/DndDataEntryButtonBar';
import DndMechanicRow from '../subcomponents/DndMechanicRow';

class DndManageMechanics extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.renderMechanicLists = this.renderMechanicLists.bind(this);
        this.renderMechanicList = this.renderMechanicList.bind(this);
        this.renderFormInputs = this.renderFormInputs.bind(this);
        this.renderBaseAdvancementInput = this.renderBaseAdvancementInput.bind(this);
        this.renderValueInput = this.renderValueInput.bind(this);
    }
    
    renderMechanicLists(mechanics) {
        return (mechanics && mechanics.base && mechanics.base.length != 0) ? (
            <div>
                {this.renderMechanicList(mechanics.base, 'Base')}
                {this.renderMechanicList(mechanics.advancement, 'Advancement')}
            </div>
        ) : null;
    }
    
    renderMechanicList(mechanics, title) {
        const retVal = (mechanics && mechanics.length != 0) ? (
            <table>
                <thead>
                    <tr>
                        <th>{title}</th>
                    </tr>
                </thead>
                <tbody>
                    {mechanics.map(function(mechanic, idx) {
                        return (
                            <DndMechanicRow
                                key={idx}
                                mechanic={mechanic}
                                onRemoveMechanic={this.props.onChange}
                                deleteButtonName={'mechanics.' + title.toLowerCase()}
                                deleteButtonAction={util.dataTypes.action.MECHANIC.REMOVE}
                                />
                        );
                    }.bind(this))}
                </tbody>
            </table>
        ) : null;
        
        if (title == 'Advancement') {
            if (this.props.showAdvancement) {
                return retVal;
            } else {
                return null;
            }
        } else {
            return retVal;
        }
    }
    
    renderBaseAdvancementInput() {
        if (this.props.showAdvancement) {
            const baseAdvancementPicklist = [
                {id: util.itemTypes.MECHANIC_ASSIGNMENT.BASE, name: 'Base Only'},
                {id: util.itemTypes.MECHANIC_ASSIGNMENT.ADVANCEMENT, name: 'Advancement Only'},
                {id: util.itemTypes.MECHANIC_ASSIGNMENT.BOTH, name: 'Both Base and Advancement'}
            ];
            return (
                <DndInput
                    name="assignmentType"
                    label="Assignment Type"
                    dataType={util.dataTypes.picklist.GENERAL}
                    value={this.props.editMechanic.assignmentType}
                    onChange={this.props.onChange}
                    picklist={baseAdvancementPicklist}
                    />
            );
        } else {
            return null;
        }
    }
    
    renderFormInputs(targets, types, valueObjects) {
        return (
            <div>
                {this.renderBaseAdvancementInput()}
                <DndInput
                    name="type"
                    label="Mechanic Type"
                    dataType={util.dataTypes.picklist.MECHANIC_TYPE}
                    value={this.props.editMechanic.type}
                    onChange={this.props.onChange}
                    picklist={types}
                    />
                {this.renderTargetInput(targets)}
                {this.renderValueInput(valueObjects)}
                <DndDataEntryButtonBar
                    onCancel={this.props.onChange}
                    onSave={this.props.onChange}
                    name="mechanics"
                    saveAction={util.dataTypes.action.MECHANIC.ADD}
                    cancelAction={util.dataTypes.action.MECHANIC.RESET}
                    />
            </div>
        );
    }
    
    renderTargetInput(targets) {
        return (this.props.editMechanic && this.props.editMechanic.type && this.props.editMechanic.type.id != 0) ? (
            <DndInput
                name="target"
                label="Mechanic Target"
                dataType={util.dataTypes.picklist.MECHANIC_TARGET}
                value={this.props.editMechanic.target}
                onChange={this.props.onChange}
                picklist={targets}
                />
        ) : null;
    }
    
    renderValueInput(valueObjects) {
        if (this.props.editMechanic && this.props.editMechanic.type
            && (this.props.editMechanic.type.id == util.itemTypes.MECHANIC_TYPE.BONUS
                || this.props.editMechanic.type.id == util.itemTypes.MECHANIC_TYPE.DIVIDE_STAT
                || this.props.editMechanic.type.id == util.itemTypes.MECHANIC_TYPE.MULTIPLY_STAT)) {
            return (
                <DndInput
                    name="value"
                    label="Value"
                    dataType={util.dataTypes.number.INT}
                    value={this.props.editMechanic.value}
                    onChange={this.props.onChange}
                    />
            );
        } else if (this.props.editMechanic && this.props.editMechanic.type && this.props.editMechanic.type.id == util.itemTypes.MECHANIC_TYPE.DIE_ROLL_BONUS_TO_STAT) {
            return (
                <DndInput
                    name="dice"
                    label="Die Value"
                    dataType={util.dataTypes.special.DICE_ROLL}
                    value={this.props.editMechanic.dice}
                    onChange={this.props.onChange}
                    />
            );
        } else if (this.props.editMechanic && this.props.editMechanic.type && this.props.editMechanic.type.id == util.itemTypes.MECHANIC_TYPE.APPLY_ABILITY_SCORE_TO_STAT) {
            return (
                <DndInput
                    name="valueObject"
                    label="Ability Score Modifier"
                    dataType={util.dataTypes.picklist.GENERAL}
                    value={this.props.editMechanic.valueObject}
                    picklist={valueObjects}
                    onChange={this.props.onChange}
                    />
            );
        }
        return null;
    }
    
    render() {
        const mechanicTypes = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.MECHANIC_TYPE);
        let mechanicTargets = [];
        let mechanicValueObjects = [];
        switch (this.props.editMechanic.type.id) {
            case util.itemTypes.MECHANIC_TYPE.DIVIDE_STAT:
            case util.itemTypes.MECHANIC_TYPE.MULTIPLY_STAT:
            case util.itemTypes.MECHANIC_TYPE.DIE_ROLL_BONUS_TO_STAT:
            case util.itemTypes.MECHANIC_TYPE.APPLY_ABILITY_SCORE_TO_STAT:
            case util.itemTypes.MECHANIC_TYPE.BONUS:
                mechanicTargets = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.ABILITY_SCORE)
                    .concat(util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.STAT))
                    .concat(util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SKILL));
                mechanicValueObjects = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.ABILITY_SCORE);
                break;
            case util.itemTypes.MECHANIC_TYPE.ADVANTAGE:
            case util.itemTypes.MECHANIC_TYPE.DISADVANTAGE:
                mechanicTargets = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SKILL)
                    .concat(util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.ADVANTAGE_TARGET));
                break;
            case util.itemTypes.MECHANIC_TYPE.ADVANTAGE_SAVING_THROW:
            case util.itemTypes.MECHANIC_TYPE.DISADVANTAGE_SAVING_THROW:
                mechanicTargets = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.ABILITY_SCORE)
                    .concat(util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.CONDITION))
                    .concat(util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.DAMAGE_TYPE))
                    .concat(util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SCHOOL_OF_MAGIC));
                break;
            case util.itemTypes.MECHANIC_TYPE.RESISTANCE:
            case util.itemTypes.MECHANIC_TYPE.VULNERABILITY:
                mechanicTargets = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.DAMAGE_TYPE);
                break;
            case util.itemTypes.MECHANIC_TYPE.IMMUNITY:
                mechanicTargets = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.DAMAGE_TYPE)
                    .concat(util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.CONDITION))
                    .concat(util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SCHOOL_OF_MAGIC));
                break;
            default:
        }
        mechanicTargets.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        return (
            <div>
                <div className="col-md-12">
                    {this.renderFormInputs(mechanicTargets, mechanicTypes, mechanicValueObjects)}
                </div>
                <div className="col-md-12">
                    {this.renderMechanicLists(this.props.mechanics)}
                </div>
            </div>
        );
    }
}

DndManageMechanics.propTypes = {
    onChange: PropTypes.func.isRequired,
    picklists: PropTypes.array.isRequired,
    mechanics: PropTypes.object.isRequired,
    editMechanic: PropTypes.object.isRequired,
    showAdvancement: PropTypes.bool
};

export default DndManageMechanics;