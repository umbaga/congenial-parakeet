import React from 'react';
import PropTypes from 'prop-types';
import DndInput from '../../common/inputs/DndInput';
import DndUniversalInput from '../../common/inputs/DndUniversalInput';
import DndPicklistAddSelect from '../../common/inputs/DndPicklistAddSelect';
import util from '../../../util/util';

class SpellForm extends React.Component {
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
        const spell = this.props.spell;
        const castingTimes = util.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SPELL_CASTING_TIME);
        const components = util.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SPELL_COMPONENT);
        const durations = util.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SPELL_DURATION);
        const ranges = util.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SPELL_RANGE);
        const schools = util.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SCHOOL_OF_MAGIC);
        return (
            <div>
                <form>
                    <DndUniversalInput
                        ref="name"
                        referenceObject={spell}
                        onChange={this.props.onChange}
                        picklists={this.props.picklists}
                        hideDescription
                        />
                    <DndInput
                        label="Spell Level"
                        name="level"
                        value={spell.level.toString()}
                        onChange={this.props.onChange}
                        dataType={util.dataTypes.number.SPELL_LEVEL}
                        />
                    <DndInput
                        label="School of Magic"
                        name="school"
                        valueObj={spell.school}
                        onChange={this.props.onChange}
                        dataType={util.dataTypes.picklist.SCHOOL_OF_MAGIC}
                        picklist={schools}
                        />
                    <DndPicklistAddSelect
                        dataType={util.dataTypes.picklist.SPELL_CASTING_TIME}
                        label="Casting Time"
                        name="castingTime"
                        onChange={this.props.onChange}
                        picklist={castingTimes}
                        valueObj={spell.castingTime}
                        onSaveButtonClick={this.props.saveNewCastingTime}
                        />
                    <DndPicklistAddSelect
                        dataType={util.dataTypes.picklist.SPELL_RANGE}
                        label="Range"
                        name="range"
                        onChange={this.props.onChange}
                        picklist={ranges}
                        valueObj={spell.range}
                        onSaveButtonClick={this.props.saveNewRange}
                        />
                    <DndPicklistAddSelect
                        dataType={util.dataTypes.picklist.SPELL_DURATION}
                        label="Duration"
                        name="duration"
                        onChange={this.props.onChange}
                        picklist={durations}
                        valueObj={spell.duration}
                        onSaveButtonClick={this.props.saveNewDuration}
                        />
                    <DndInput
                        label="Description"
                        name="description"
                        value={spell.description}
                        onChange={this.props.onChange}
                        dataType={util.dataTypes.string.DESCRIPTION}
                        />
                    <DndInput
                        label="At Higher Levels"
                        name="atHigherLevels"
                        value={spell.atHigherLevels}
                        onChange={this.props.onChange}
                        dataType={util.dataTypes.string.DESCRIPTION}
                        />
                </form>
            </div>
        );
    }
}

SpellForm.propTypes = {
    spell: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    isCreate: PropTypes.bool.isRequired,
    onEdit: PropTypes.func,
    onViewDetails: PropTypes.func,
    saving: PropTypes.bool,
    picklists: PropTypes.array,
    saveNewCastingTime: PropTypes.func.isRequired,
    saveNewDuration: PropTypes.func.isRequired,
    saveNewRange: PropTypes.func.isRequired
};

export default SpellForm;