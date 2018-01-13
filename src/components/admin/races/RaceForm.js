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
import DndManageSpellSelection from '../../common/objectManagement/DndManageSpellSelection';
import DndManageSupplementalDescriptions from '../../common/objectManagement/DndManageSupplementalDescriptions';
import DndManageCharts from '../../common/objectManagement/DndManageCharts';
import DndManageNaturalWeapons from '../../common/objectManagement/DndManageNaturalWeapons';
import DndManageBreathWeapons from '../../common/objectManagement/DndManageBreathWeapons';

class RaceForm extends React.Component {
    constructor(props) {
        super(props);
        this.setFocus = this.setFocus.bind(this);
        this._onChangeParentRace = this._onChangeParentRace.bind(this);
    }
    
    componentDidMount() {
        this.refs.name.setFocus();
    }
    
    _onChangeParentRace(event) {
        this.props.onChange(event);
        this.props.onChangeParentRace(event);
    }
    
    setFocus() {
        this.refs.name.setFocus();
    }
    
    render() {
        const race = this.props.race;
        const races = this.props.races.filter(function(raceItem) {
            return (race.id != raceItem.id) && (raceItem.parent.id == 0);
        });
        const picklists = this.props.picklists;
        const proficiencies = this.props.proficiencies;
        const sizes = util.common.picklists.getPicklistItems(picklists, util.itemtypes.TYPES.SIZE);
        const monsterTypes = util.common.picklists.getPicklistItems(picklists, util.itemtypes.TYPES.MONSTER_TYPE);
        const monsterTags = util.common.picklists.getPicklistItems(picklists, util.itemtypes.TYPES.MONSTER_TAG);
        const abilityScores = util.common.picklists.getPicklistItems(picklists, util.itemtypes.TYPES.ABILITY_SCORE).filter(function(abilityScore) {
            return abilityScore.isPrimary;
        });
        const tabPaneStyle = 'tab-pane-triple-row-of-tabs';
        return (
            <div>
                <form>
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Size/Type" className={tabPaneStyle}>
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
                                dataType={util.datatypes.picklist.GENERAL}
                                label={((race.isVariant) ? 'Variant' : 'Subrace') + ' Parent'}
                                checkboxName="isVariant"
                                picklistName="parent"
                                onChange={this._onChangeParentRace}
                                picklist={races}
                                value={race.parent}
                                placeholder="Select Parent Race"
                                checkboxPlaceholder="Is a Subrace"
                                />
                            <DndInput
                                label="Size"
                                name="size"
                                value={race.size}
                                onChange={this.props.onChange}
                                dataType={util.datatypes.picklist.SIZE}
                                picklist={sizes}
                                />
                            <DndInput
                                label="Type"
                                name="type"
                                value={race.type}
                                onChange={this.props.onChange}
                                dataType={util.datatypes.picklist.MONSTER_TYPE}
                                picklist={monsterTypes}
                                />
                            <DndInput
                                label="Tags"
                                name="tags"
                                value={race.tags}
                                onChange={this.props.onChange}
                                dataType={util.datatypes.array.MONSTER_TAGS}
                                picklist={monsterTags}
                                selectBoxSize={4}
                                />
                        </Tab>
                        <Tab eventKey={2} title="Ability Scores" className={tabPaneStyle}>
                            <div>&nbsp;</div>
                            <div className="col-sm-4">
                                <DndInput
                                    label="Str"
                                    name="abilityScores.strength"
                                    value={race.abilityScores.strength}
                                    onChange={this.props.onChange}
                                    dataType={util.datatypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-4">
                                <DndInput
                                    label="Dex"
                                    name="abilityScores.dexterity"
                                    value={race.abilityScores.dexterity}
                                    onChange={this.props.onChange}
                                    dataType={util.datatypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-4">
                                <DndInput
                                    label="Con"
                                    name="abilityScores.constitution"
                                    value={race.abilityScores.constitution}
                                    onChange={this.props.onChange}
                                    dataType={util.datatypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-4">
                                <DndInput
                                    label="Int"
                                    name="abilityScores.intelligence"
                                    value={race.abilityScores.intelligence}
                                    onChange={this.props.onChange}
                                    dataType={util.datatypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-4">
                                <DndInput
                                    label="Wis"
                                    name="abilityScores.wisdom"
                                    value={race.abilityScores.wisdom}
                                    onChange={this.props.onChange}
                                    dataType={util.datatypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-4">
                                <DndInput
                                    label="Cha"
                                    name="abilityScores.charisma"
                                    value={race.abilityScores.charisma}
                                    onChange={this.props.onChange}
                                    dataType={util.datatypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-6">
                                <DndInput
                                    label="Select #"
                                    name="abilityScores.selection.count"
                                    value={race.abilityScores.selection.count}
                                    onChange={this.props.onChange}
                                    dataType={util.datatypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-6">
                                <DndInput
                                    label="Select Modifier"
                                    name="abilityScores.selection.modifier"
                                    value={race.abilityScores.selection.modifier}
                                    onChange={this.props.onChange}
                                    dataType={util.datatypes.number.INT}
                                    />
                            </div>
                        </Tab>
                        <Tab eventKey={3} title="Height/Weight" className={tabPaneStyle}>
                            <div>&nbsp;</div>
                            <div className="col-sm-7">
                                <DndInput
                                    label="Base Height (inches)"
                                    name="vitals.height.base"
                                    value={race.vitals.height.base}
                                    onChange={this.props.onChange}
                                    dataType={util.datatypes.number.LENGTH}
                                    labelCols={8}
                                    />
                                <DndInput
                                    label="Base Weight (lbs)"
                                    name="vitals.weight.base"
                                    value={race.vitals.weight.base}
                                    onChange={this.props.onChange}
                                    dataType={util.datatypes.number.WEIGHT}
                                    labelCols={8}
                                    />
                            </div>
                            <div className="col-sm-5">
                                <DndInput
                                    label="Height Mod"
                                    name="vitals.height.dice"
                                    value={race.vitals.height.dice}
                                    onChange={this.props.onChange}
                                    dataType={util.datatypes.special.DICE_ROLL}
                                    labelCols={6}
                                    />
                                <DndInput
                                    label="Weight Mod"
                                    name="vitals.weight.dice"
                                    value={race.vitals.weight.dice}
                                    onChange={this.props.onChange}
                                    dataType={util.datatypes.special.DICE_ROLL}
                                    labelCols={6}
                                    />
                            </div>
                        </Tab>
                        <Tab eventKey={4} title="Movement & Senses" className={tabPaneStyle}>
                            <div>&nbsp;</div>
                            <div className="col-md-12">
                                <DndManageTextBoxList
                                    name="movement"
                                    onChange={this.props.onChange}
                                    picklists={picklists}
                                    primaryArray={race.movement}
                                    arrayType={util.itemtypes.TYPES.MOVEMENT_TYPE}
                                    textValueFieldName="speed"
                                    dataType={util.datatypes.array.MOVEMENT}
                                    />
                            </div>
                            <div className="col-md-12">
                                <DndManageTextBoxList
                                    name="senses"
                                    onChange={this.props.onChange}
                                    picklists={picklists}
                                    primaryArray={race.senses}
                                    arrayType={util.itemtypes.TYPES.ADVANCED_SENSE}
                                    textValueFieldName="range"
                                    dataType={util.datatypes.array.ADVANCED_SENSE}
                                    />
                            </div>
                        </Tab>
                        <Tab eventKey={6} title="Proficiencies" className={tabPaneStyle}>
                            <div>&nbsp;</div>
                            <DndManageItemGroups
                                itemGroups={race.proficiencyGroups}
                                picklists={picklists}
                                items={proficiencies}
                                editItemGroup={this.props.editProficiencyGroup}
                                categoryTypeId={util.itemtypes.TYPES.PROFICIENCY_CATEGORY}
                                onChange={this.props.onChangeProficiencyGroup}
                                title="Proficiency"
                                toggleFieldName="proficiencies"
                                actionProperty="PROFICIENCY_GROUP"
                                buttonClickFieldName="proficiencyGroups"
                                groupListItemTextFormatFunction={util.format.forDisplay.obj.proficiencyGroup}
                                />
                        </Tab>
                        <Tab eventKey={7} title="Mechanics" className={tabPaneStyle}>
                            <div>&nbsp;</div>
                            <DndManageMechanics
                                onChange={this.props.onChangeMechanics}
                                picklists={picklists}
                                mechanics={race.mechanics}
                                editMechanic={this.props.editMechanic}
                                />
                        </Tab>
                        <Tab eventKey={5} title="Spellcasting" className={tabPaneStyle}>
                            <div>&nbsp;</div>
                            <DndInput
                                label="Spellcasting Ability"
                                name="spellcasting.abilityScore"
                                value={race.spellcasting.abilityScore}
                                onChange={this.props.onChange}
                                dataType={util.datatypes.picklist.ABILITY_SCORE}
                                picklist={abilityScores}
                                />
                            <DndManageSpellSelection
                                spellSelections={race.spellcasting.spellSelections}
                                picklists={picklists}
                                editSpellSelection={this.props.editSpellSelection}
                                onChange={this.props.onChangeSpellSelection}
                                spells={this.props.spells}
                                spelllists={this.props.spelllists}
                                />
                        </Tab>
                        <Tab eventKey={8} title="Descriptions" className={tabPaneStyle}>
                            <div>&nbsp;</div>
                            <DndManageSupplementalDescriptions
                                descriptions={race.supplementalDescriptions}
                                description={this.props.editDescription}
                                onChange={this.props.onChangeDescriptions}
                                onSelectDescription={this.props.onSelectDescriptions}
                                onResetDescription={this.props.onResetDescriptions}
                                />
                        
                        </Tab>
                        <Tab eventKey={9} title="Charts" className={tabPaneStyle}>
                            <div>&nbsp;</div>
                            <DndManageCharts
                                chart={this.props.editChart}
                                charts={race.charts}
                                picklists={this.props.picklists}
                                selectedChartType={this.props.selectedChartType}
                                onChange={this.props.onChangeChart}
                                onReset={this.props.onResetChart}
                                onSelectEdited={this.props.onSelectChart}
                                />
                        </Tab>
                        <Tab eventKey={10} title="Natural Weapons" className={tabPaneStyle}>
                            <div>&nbsp;</div>
                            <DndManageNaturalWeapons
                                naturalWeapons={race.naturalWeapons}
                                editNaturalWeapon={this.props.editNaturalWeapon}
                                onChange={this.props.onChangeNaturalWeapon}
                                picklists={this.props.picklists}
                                />
                        </Tab>
                        <Tab eventKey={11} title="Breath Weapons" className={tabPaneStyle}>
                            <div>&nbsp;</div>
                            <DndManageBreathWeapons
                                breathWeapons={race.breathWeapons}
                                editBreathWeapon={this.props.editBreathWeapon}
                                editBreathWeaponImprovement={this.props.editBreathWeaponImprovement}
                                onChange={this.props.onChangeBreathWeapon}
                                onChangeImprovement={this.props.onChangeBreathWeaponImprovement}
                                picklists={this.props.picklists}
                                />
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
    editProficiencyGroup: PropTypes.object.isRequired,
    onChangeProficiencyGroup: PropTypes.func.isRequired,
    editMechanic: PropTypes.object.isRequired,
    onChangeMechanics: PropTypes.func.isRequired,
    
    editDescription: PropTypes.object.isRequired,
    onChangeDescriptions: PropTypes.func.isRequired,
    onResetDescriptions: PropTypes.func.isRequired,
    onSelectDescriptions: PropTypes.func.isRequired,
    
    editChart: PropTypes.object.isRequired,
    selectedChartType: PropTypes.object.isRequired,
    onChangeChart: PropTypes.func.isRequired,
    onResetChart: PropTypes.func.isRequired,
    onSelectChart: PropTypes.func.isRequired,
    
    editSpellSelection: PropTypes.object.isRequired,
    onChangeSpellSelection: PropTypes.func.isRequired,
    spells: PropTypes.array.isRequired,
    spelllists: PropTypes.array.isRequired,
    
    editNaturalWeapon: PropTypes.object.isRequired,
    onChangeNaturalWeapon: PropTypes.func.isRequired,
    editBreathWeapon: PropTypes.object.isRequired,
    editBreathWeaponImprovement: PropTypes.object.isRequired,
    onChangeBreathWeapon: PropTypes.func.isRequired,
    onChangeBreathWeaponImprovement: PropTypes.func.isRequired,
    
    onChangeParentRace: PropTypes.func.isRequired
};

export default RaceForm;