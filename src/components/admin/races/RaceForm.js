import React from 'react';
import PropTypes from 'prop-types';
import DndInput from '../../common/inputs/DndInput';
import DndUniversalInput from '../../common/inputs/DndUniversalInput';
import DndCheckboxPicklist from '../../common/inputs/DndCheckboxPicklist';
import util from '../../../util/util';
import { Tabs, Tab } from 'react-bootstrap';
import DndManageTextBoxList from '../../common/objectManagement/DndManageTextBoxList';
import DndManageItemGroups from '../../common/objectManagement/DndManageItemGroups';
import DndManageMechanics from '../../common/objectManagement/DndManageMechanics';

class RaceForm extends React.Component {
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
        const race = this.props.race;
        const races = this.props.races.filter(function(raceItem) {
            return (race.id != raceItem.id) && (raceItem.parentId == 0);
        });
        const picklists = this.props.picklists;
        const proficiencies = this.props.proficiencies;
        const sizes = util.common.picklists.getPicklistItems(picklists, util.itemTypes.TYPES.SIZE);
        const monsterTypes = util.common.picklists.getPicklistItems(picklists, util.itemTypes.TYPES.MONSTER_TYPE);
        const monsterTags = util.common.picklists.getPicklistItems(picklists, util.itemTypes.TYPES.MONSTER_TAG);
        const abilityScores = util.common.picklists.getPicklistItems(picklists, util.itemTypes.TYPES.ABILITY_SCORE).filter(function(abilityScore) {
            return abilityScore.isPrimary;
        });
        return (
            <div>
                <form>
                    <Tabs defaultActiveKey={5} id="uncontrolled-tab-example" className="tab-pane-double-row-of-tabs">
                        <Tab eventKey={1} title="Size/Type">
                            <div>&nbsp;</div>
                            <DndUniversalInput
                                ref="name"
                                referenceObject={race}
                                onChange={this.props.onChange}
                                picklists={this.props.picklists}
                                hideDescription
                                />
                            <DndCheckboxPicklist
                                checked={this.props.isSubrace}
                                dataType={util.dataTypes.number.INT}
                                label="Subrace Parent"
                                checkboxName="chkParentId"
                                picklistName="parentId"
                                onChange={this.props.onChangeSubrace}
                                picklist={races}
                                valueObj={{id: race.parentId}}
                                onClick={this.props.onChangeSubrace}
                                placeholder="Select Parent Race"
                                checkboxPlaceholder="Is a Subrace"
                                />
                            <DndInput
                                label="Size"
                                name="size"
                                valueObj={race.size}
                                onChange={this.props.onChange}
                                dataType={util.dataTypes.picklist.SIZE}
                                picklist={sizes}
                                />
                            <DndInput
                                label="Type"
                                name="type"
                                valueObj={race.type}
                                onChange={this.props.onChange}
                                dataType={util.dataTypes.picklist.MONSTER_TYPE}
                                picklist={monsterTypes}
                                />
                            <DndInput
                                label="Tags"
                                name="tags"
                                valueArray={race.tags}
                                onChange={this.props.onChange}
                                dataType={util.dataTypes.array.MONSTER_TAGS}
                                picklist={monsterTags}
                                selectBoxSize={4}
                                />
                        </Tab>
                        <Tab eventKey={2} title="Ability Scores">
                            <div>&nbsp;</div>
                            <div className="col-sm-4">
                                <DndInput
                                    label="Str"
                                    name="abilityScores.strength"
                                    value={race.abilityScores.strength.toString()}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-4">
                                <DndInput
                                    label="Dex"
                                    name="abilityScores.dexterity"
                                    value={race.abilityScores.dexterity.toString()}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-4">
                                <DndInput
                                    label="Con"
                                    name="abilityScores.constitution"
                                    value={race.abilityScores.constitution.toString()}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-4">
                                <DndInput
                                    label="Int"
                                    name="abilityScores.intelligence"
                                    value={race.abilityScores.intelligence.toString()}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-4">
                                <DndInput
                                    label="Wis"
                                    name="abilityScores.wisdom"
                                    value={race.abilityScores.wisdom.toString()}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-4">
                                <DndInput
                                    label="Cha"
                                    name="abilityScores.charisma"
                                    value={race.abilityScores.charisma.toString()}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-6">
                                <DndInput
                                    label="Select #"
                                    name="abilityScores.selection.count"
                                    value={race.abilityScores.selection.count.toString()}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-6">
                                <DndInput
                                    label="Select Modifier"
                                    name="abilityScores.selection.modifier"
                                    value={race.abilityScores.selection.modifier.toString()}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.number.INT}
                                    />
                            </div>
                        </Tab>
                        <Tab eventKey={3} title="Height/Weight">
                            <div>&nbsp;</div>
                            <div className="col-sm-7">
                                <DndInput
                                    label="Base Height (inches)"
                                    name="vitals.height.base"
                                    value={race.vitals.height.base.toString()}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.number.LENGTH}
                                    labelCols={8}
                                    />
                                <DndInput
                                    label="Base Weight (lbs)"
                                    name="vitals.weight.base"
                                    value={race.vitals.weight.base.toString()}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.number.WEIGHT}
                                    labelCols={8}
                                    />
                            </div>
                            <div className="col-sm-5">
                                <DndInput
                                    label="Height Mod"
                                    name="vitals.height.dice"
                                    valueObj={race.vitals.height.dice}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.special.DICE_ROLL}
                                    labelCols={6}
                                    />
                                <DndInput
                                    label="Weight Mod"
                                    name="vitals.weight.dice"
                                    valueObj={race.vitals.weight.dice}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.special.DICE_ROLL}
                                    labelCols={6}
                                    />
                            </div>
                        </Tab>
                        <Tab eventKey={4} title="Movement & Senses">
                            <div>&nbsp;</div>
                            <div className="col-md-12">
                                <DndManageTextBoxList
                                    name="movement"
                                    onChange={this.props.onChange}
                                    picklists={picklists}
                                    primaryArray={race.movement}
                                    arrayType={util.itemTypes.TYPES.MOVEMENT_TYPE}
                                    textValueFieldName="speed"
                                    dataType={util.dataTypes.array.MOVEMENT}
                                    />
                            </div>
                            <div className="col-md-12">
                                <DndManageTextBoxList
                                    name="senses"
                                    onChange={this.props.onChange}
                                    picklists={picklists}
                                    primaryArray={race.senses}
                                    arrayType={util.itemTypes.TYPES.ADVANCED_SENSE}
                                    textValueFieldName="range"
                                    dataType={util.dataTypes.array.ADVANCED_SENSE}
                                    />
                            </div>
                        </Tab>
                        <Tab eventKey={5} title="Spellcasting">
                            <div>&nbsp;</div>
                            <DndInput
                                label="Spellcasting Ability"
                                name="race.spellcasting.abilityScore"
                                valueObj={race.spellcasting.abilityScore}
                                onChange={this.props.onChange}
                                dataType={util.dataTypes.picklist.ABILITY_SCORE}
                                picklist={abilityScores}
                                />
                        </Tab>
                        <Tab eventKey={6} title="Proficiencies">
                            <div>&nbsp;</div>
                            <DndManageItemGroups
                                itemGroups={race.proficiencyGroups}
                                picklists={picklists}
                                items={proficiencies}
                                editItemGroup={this.props.editProficiencyGroup}
                                categoryTypeId={util.itemTypes.TYPES.PROFICIENCY_CATEGORY}
                                onChange={this.props.onChangeProficiencyGroup}
                                title="Proficiency"
                                toggleFieldName="proficiencies"
                                actionProperty="PROFICIENCY_GROUP"
                                buttonClickFieldName="proficiencyGroups"
                                groupListItemTextFormatFunction={util.format.forDisplay.obj.proficiencyGroup}
                                />
                        </Tab>
                        <Tab eventKey={7} title="Mechanics">
                            <div>&nbsp;</div>
                            <DndManageMechanics
                                onChange={this.props.onChangeMechanics}
                                picklists={picklists}
                                mechanics={race.mechanics}
                                editMechanic={this.props.editMechanic}
                                />
                        </Tab>
                        <Tab eventKey={8} title="Descriptions">
                            <div>&nbsp;</div>
                        
                        </Tab>
                        <Tab eventKey={9} title="Charts">
                            <div>&nbsp;</div>
                            NEED TO ADD SELECTION CHART TYPE (for Dragonborn species)
                        </Tab>
                    </Tabs>
                </form>
            </div>
        );
    }
}

RaceForm.propTypes = {
    race: PropTypes.object.isRequired,
    races: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    isCreate: PropTypes.bool.isRequired,
    onEdit: PropTypes.func,
    onViewDetails: PropTypes.func,
    saving: PropTypes.bool,
    picklists: PropTypes.array.isRequired,
    proficiencies: PropTypes.array.isRequired,
    isSubrace: PropTypes.bool.isRequired,
    onChangeSubrace: PropTypes.func.isRequired,
    editProficiencyGroup: PropTypes.object.isRequired,
    onChangeProficiencyGroup: PropTypes.func.isRequired,
    editMechanic: PropTypes.object.isRequired,
    onChangeMechanics: PropTypes.func.isRequired
};

export default RaceForm;