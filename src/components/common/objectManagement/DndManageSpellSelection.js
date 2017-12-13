import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';
import DndInput from '../inputs/DndInput';
import DndDataEntryButtonBar from '../buttons/DndDataEntryButtonBar';
import DndAssignedItemRow from '../subcomponents/DndAssignedItemRow';

class DndManageSpellSelection extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.renderList = this.renderList.bind(this);
        this.renderForm = this.renderForm.bind(this);
        
    }
    
    renderList() {
        const spellSelections = this.props.spellSelections;
        
    }
    
    renderForm(){
        const editSpellSelection = this.props.editSpellSelection;
        const spells = this.props.spells;
        const spelllists = this.props.spelllists;
        const schools = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SCHOOL_OF_MAGIC);
        const selectionTypes = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SPELL_SELECTION);
        
        const spellInput = (
            <DndInput
                label="Select Spell"
                name="spell"
                valueObj={editSpellSelection.spell}
                onChange={this.props.onChange}
                dataType={util.dataTypes.picklist.GENERAL}
                picklist={spells}
                />
        );
        const schoolInput = (
            <DndInput
                label="Select School"
                name="school"
                valueObj={editSpellSelection.school}
                onChange={this.props.onChange}
                dataType={util.dataTypes.picklist.SCHOOL_OF_MAGIC}
                picklist={schools}
                />
        );
        const spelllistInput = (
            <DndInput
                label="Select Spell List"
                name="spelllist"
                valueObj={editSpellSelection.spelllist}
                onChange={this.props.onChange}
                dataType={util.dataTypes.picklist.GENERAL}
                picklist={spelllists}
                />
        );
        const spellLevelInput = (
            <DndInput
                label="Select Spell Level"
                name="spellLevel"
                value={editSpellSelection.spellLevel}
                onChange={this.props.onChange}
                dataType={util.dataTypes.number.SPELL_LEVEL}
                />
        );
        return (
            <div>
                <DndInput
                    label="Selection Type"
                    name="type"
                    valueObj={editSpellSelection.type}
                    onChange={this.props.onChange}
                    dataType={util.dataTypes.picklist.SPELL_SELECTION}
                    picklist={selectionTypes}
                    />
            </div>
        );
    }
    
    render() {
        return (
            <div>
                <div>
                    {this.renderForm()}
                </div>
                <div>
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

DndManageSpellSelection.propTypes = {
    spellSelections: PropTypes.array.isRequired,
    picklists: PropTypes.array.isRequired,
    editSpellSelection: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    spells: PropTypes.array.isRequired,
    spelllists: PropTypes.array.isRequired
};

export default DndManageSpellSelection;
