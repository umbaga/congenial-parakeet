import React from 'react';
import PropTypes from 'prop-types';
import util from '../../util/util';
import DndInput from './DndInput';
import DndDataEntryButtonBar from './DndDataEntryButtonBar';
import DndAssignedItemRow from './DndAssignedItemRow';

class DndManageProficiencyGroups extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.renderSelectCount = this.renderSelectCount.bind(this);
        this.renderCategory = this.renderCategory.bind(this);
        this.renderProficiencyToggle = this.renderProficiencyToggle.bind(this);
        this.renderList = this.renderList.bind(this);
    }

    renderCategory(picklist) {
        return this.props.proficiencyGroup.mechanic && this.props.proficiencyGroup.mechanic.id != 0 ? (
            <DndInput
                name="category"
                label="Category"
                dataType={util.dataTypes.picklist.PROFICIENCY_CATEGORY}
                picklist={picklist}
                onChange={this.props.onProficiencyGroupChange}
                valueObj={this.props.proficiencyGroup.category}
                />
        ) : null;
    }
    
    renderSelectCount() {
        if (this.props.proficiencyGroup.mechanic.id == util.picklistInfo.PROFICIENCY_SELECTION_MECHANIC_SELECT_FROM_CATEGORY ||
           this.props.proficiencyGroup.mechanic.id == util.picklistInfo.PROFICIENCY_SELECTION_MECHANIC_SELECT_FROM_LIST) {
            return (
            <DndInput
                name="selectCount"
                label="Selection Count"
                dataType={util.dataTypes.number.INT}
                onChange={this.props.onProficiencyGroupChange}
                value={this.props.proficiencyGroup.selectCount.toString()}
                />
            );
        }
        return null;
    }
    
    renderProficiencyToggle(picklist) {
        if (this.props.proficiencyGroup.mechanic.id == util.picklistInfo.PROFICIENCY_SELECTION_MECHANIC_ASSIGNMENT ||
           this.props.proficiencyGroup.mechanic.id == util.picklistInfo.PROFICIENCY_SELECTION_MECHANIC_SELECT_FROM_LIST) {
            if (this.props.proficiencyGroup.category && this.props.proficiencyGroup.category.id) {
                return (
                    <DndInput
                        name="proficiencies"
                        label="Proficiencies"
                        dataType={util.dataTypes.array.PROFICIENCIES}
                        valueArray={this.props.proficiencyGroup.proficiencies}
                        onChange={this.props.onProficiencyGroupChange}
                        picklist={picklist} />
                );
            }
        }
        return null;
    }
    
    renderList(groups) {
        return groups && groups.length != 0 ? (
                <fieldset>
                    <legend>Existing Proficiency Groups</legend>
                    <table>
                        <thead>
                            <tr>
                                <th>Group</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {groups.map(group =>
                                <DndAssignedItemRow
                                    key={group.id}
                                    item={group}
                                    displayValue={util.format.forDisplay.obj.proficiencyGroup(group)}
                                    removeItem={this.props.removeProficiencyGroup}
                                    />
                            )}
                        </tbody>
                    </table>
                </fieldset>
        ) : null;
    }
    
    render() {
        const groups = this.props.proficiencyGroups;
        const categories = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.PROFICIENCY_CATEGORY);
        let proficiencies = this.props.proficiencies;
        if (this.props.proficiencyGroup && this.props.proficiencyGroup.category && this.props.proficiencyGroup.category.id != 0) {
            proficiencies = proficiencies.filter(proficiency => proficiency.category.id == this.props.proficiencyGroup.category.id);
        }
        const selectionMechanics = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.PROFICIENCY_SELECTION_MECHANIC);
        return (
            <div>
                <fieldset>
                    <legend>New Proficiency Group</legend>
                    <DndInput
                        name="mechanic"
                        label="Selection Type"
                        dataType={util.dataTypes.picklist.PROFICIENCY_SELECTION_MECHANIC}
                        picklist={selectionMechanics}
                        onChange={this.props.onProficiencyGroupChange}
                        valueObj={this.props.proficiencyGroup.mechanic}
                        />
                    {this.renderSelectCount()}
                    {this.renderCategory(categories)}
                    {this.renderProficiencyToggle(proficiencies)}
                    <DndDataEntryButtonBar
                        onSave={this.props.addProficiencyGroup}
                        onReset={this.props.resetProficiencyGroup}
                        />
                </fieldset>
                {this.renderList(groups)}
            </div>
        );
    }
}
/*
                        <DndInput
                            name="language.script"
                            label="Script"
                            dataType={util.dataTypes.picklist.LANGUAGE_SCRIPT}
                            valueObj={this.props.proficiency.language.script}
                            onChange={this.props.onChange}
                            picklist={langaugeScriptPicklist} />*/
DndManageProficiencyGroups.propTypes = {
    proficiencyGroups: PropTypes.array.isRequired,
    picklists: PropTypes.array.isRequired,
    proficiencies: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    onProficiencyGroupChange: PropTypes.func.isRequired,
    proficiencyGroup: PropTypes.object.isRequired,
    addProficiencyGroup: PropTypes.func.isRequired,
    removeProficiencyGroup: PropTypes.func.isRequired,
    resetProficiencyGroup: PropTypes.func.isRequired
};

export default DndManageProficiencyGroups;
