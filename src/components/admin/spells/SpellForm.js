import React from 'react';
import PropTypes from 'prop-types';
import DndButton from '../../common/buttons/DndButton';
import DndInput from '../../common/inputs/DndInput';
import DndInputWrapper from '../../common/inputs/DndInputWrapper';
import DndUniversalInput from '../../common/inputs/DndUniversalInput';
import DndPicklistAddSelect from '../../common/inputs/DndPicklistAddSelect';
import DndCheckboxList from '../../common/inputs/DndCheckboxList';
import DndCheckboxPicklist from '../../common/inputs/DndCheckboxPicklist';
import util from '../../../util/util';
import { Tabs, Tab } from 'react-bootstrap';
import DndManageMechanics from '../../common/objectManagement/DndManageMechanics';
import DndManageCharts from '../../common/objectManagement/DndManageCharts';
import DndManageSupplementalDescriptions from '../../common/objectManagement/DndManageSupplementalDescriptions';

class SpellForm extends React.Component {
    constructor(props) {
        super(props);
        this.setFocus = this.setFocus.bind(this);
        this.renderSupplementalDamages = this.renderSupplementalDamages.bind(this);
        this.renderMaximumDamage = this.renderMaximumDamage.bind(this);
    }
    
    componentDidMount() {
        this.refs.name.setFocus();
    }
    
    setFocus() {
        this.refs.name.setFocus();
    }
    
    renderSupplementalDamages(spell) {
        return spell.damage.supplemental && spell.damage.supplemental.length != 0 ? (
            <DndInputWrapper
                label="Supplemental Damage"
                >
                <div>
                    {spell.damage.supplemental.map(function(suppDamage, idx) {
                        return (
                            <div key={idx}>
                                {util.format.forDisplay.obj.damage(suppDamage)}
                                <DndButton
                                    buttonType="removeitem"
                                    onClick={this.props.onRemoveDamageGrouping}
                                    dataType={util.dataTypes.action.DAMAGE_GROUPING.REMOVE}
                                    name={idx + '_removeDamageGroupButton'}
                                    />
                            </div>
                        );
                    }.bind(this))}
                </div>
            </DndInputWrapper>
        ) : null;
    }
    
    renderMaximumDamage(spell) {
        return spell.damage.improvement && spell.damage.improvement.dice && spell.damage.improvement.dice.dieCount != 0 ? (
            <DndInput
                name="damage.maximum.dice"
                label="Maximum Damage"
                dataType={util.dataTypes.special.DICE_ROLL}
                valueObj={spell.damage.maximum.dice}
                onChange={this.props.onChange}
                />
        ) : null;
    }
    
    render() {
        const spell = this.props.spell;
        const castingTimes = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SPELL_CASTING_TIME);
        const components = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SPELL_COMPONENT);
        const durations = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SPELL_DURATION);
        const ranges = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SPELL_RANGE);
        const schools = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SCHOOL_OF_MAGIC);
        const damageTypes = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.DAMAGE_TYPE);
        const abilityScores = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.ABILITY_SCORE);
        const attackRollTypes = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.ATTACK_ROLL_TYPE);
        const conditions = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.CONDITION);
        const saveEffects = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SAVE_EFFECT);
        
        return (
            <div>
                <form>
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="General">
                            <div>&nbsp;</div>
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
                            <DndInput
                                label="Is Ritual"
                                name="isRitual"
                                labelCols={4}
                                checked={spell.isRitual}
                                onChange={this.props.onChange}
                                dataType={util.dataTypes.bool.BOOL}
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
                            <DndCheckboxList
                                dataType={util.dataTypes.picklist.SPELL_COMPONENT}
                                label="Components"
                                name="components"
                                valueArray={spell.components}
                                onChange={this.props.onChange}
                                picklist={components}
                                textBoxKey="description"
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
                        </Tab>
                        <Tab eventKey={2} title="Damage/Save">
                            <div>&nbsp;</div>
                            <DndInput
                                name="damage"
                                label="Damage and Type"
                                dataType={util.dataTypes.combo.DAMAGE_AND_DAMAGE_TYPE}
                                valueObj={spell.damage}
                                onChange={this.props.onChange}
                                picklist={damageTypes}
                                buttonOnClick={this.props.onAddDamageGrouping}
                                buttonType="additem"
                                />
                            {this.renderSupplementalDamages(spell)}
                            <DndInput
                                name="damage.improvement.dice"
                                label="Damage Gained"
                                dataType={util.dataTypes.special.DICE_ROLL}
                                valueObj={spell.damage.improvement.dice}
                                onChange={this.props.onChange}
                                />
                            {this.renderMaximumDamage(spell)}
                            <DndCheckboxPicklist
                                checked={spell.damage.applyAbilityScoreModifier}
                                dataType={util.dataTypes.picklist.ABILITY_SCORE}
                                label="Apply Ability Score Modifier to Damage"
                                checkboxName="damage.applyAbilityScoreModifier"
                                picklistName="damage.abilityScore"
                                onChange={this.props.onChange}
                                picklist={abilityScores}
                                valueObj={spell.damage.abilityScore}
                                />
                            <DndInput
                                name="damage.attackRollType"
                                label="Attack Roll"
                                dataType={util.dataTypes.picklist.ATTACK_ROLL_TYPE}
                                valueObj={spell.damage.attackRollType}
                                onChange={this.props.onChange}
                                picklist={attackRollTypes}
                                />
                            <DndInput
                                name="damage.condition"
                                label="Resulting Condition"
                                dataType={util.dataTypes.picklist.CONDITION}
                                valueObj={spell.damage.condition}
                                onChange={this.props.onChange}
                                picklist={conditions}
                                />
                            <DndInput
                                name="savingThrow.abilityScore"
                                label="Saving Throw"
                                dataType={util.dataTypes.picklist.ABILITY_SCORE}
                                valueObj={spell.savingThrow.abilityScore}
                                onChange={this.props.onChange}
                                picklist={abilityScores}
                                />
                            <DndInput
                                name="savingThrow.effect"
                                label="Save Effect"
                                dataType={util.dataTypes.picklist.SAVE_EFFECT}
                                valueObj={spell.savingThrow.effect}
                                onChange={this.props.onChange}
                                picklist={saveEffects}
                                />
                        </Tab>
                        <Tab eventKey={3} title="Mechanics">
                            <div>&nbsp;</div>
                            <DndManageMechanics
                                onChange={this.props.onChangeMechanic}
                                picklists={this.props.picklists}
                                mechanics={spell.mechanics}
                                onRemoveMechanic={this.props.onRemoveMechanic}
                                onAddMechanic={this.props.onAddMechanic}
                                onResetMechanic={this.props.onResetMechanic}
                                newMechanic={this.props.newMechanic}
                                showAdvancement
                                />
                        </Tab>
                        <Tab eventKey={4} title="Charts">
                            <div>&nbsp;</div>
                            <DndManageCharts
                                chart={this.props.chart}
                                charts={spell.charts}
                                picklists={this.props.picklists}
                                selectedChartType={this.props.selectedChartType}
                                onChange={this.props.onChangeChart}
                                onReset={this.props.onResetChart}
                                onSelectEdited={this.props.onSelectEditedChart}
                                />
                        </Tab>
                        <Tab eventKey={5} title="Descriptions">
                            <div>&nbsp;</div>
                            <DndManageSupplementalDescriptions
                                descriptions={spell.supplementalDescriptions}
                                description={this.props.description}
                                onChange={this.props.onChangeDescriptions}
                                onChangeDescriptionOrder={this.props.onChangeDescriptionOrder}
                                onCreateDescription={this.props.onCreateDescription}
                                onRemoveDescription={this.props.onRemoveDescription}
                                onSelectDescription={this.props.onSelectDescription}
                                onResetDescription={this.props.onResetDescription}
                                onAddDescription={this.props.onAddDescription}
                                />
                        </Tab>
                    </Tabs>
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
    saveNewRange: PropTypes.func.isRequired,
    onChangeMechanic: PropTypes.func.isRequired,
    onRemoveMechanic: PropTypes.func.isRequired,
    onResetMechanic: PropTypes.func,
    onAddMechanic: PropTypes.func.isRequired,
    newMechanic: PropTypes.object.isRequired,
    description: PropTypes.object.isRequired,
    onChangeDescriptions: PropTypes.func.isRequired,
    onChangeDescriptionOrder: PropTypes.func.isRequired,
    onAddDescription: PropTypes.func.isRequired,
    onCreateDescription: PropTypes.func.isRequired,
    onRemoveDescription: PropTypes.func.isRequired,
    onSelectDescription: PropTypes.func.isRequired,
    onResetDescription: PropTypes.func.isRequired,
    chart: PropTypes.object.isRequired,
    selectedChartType: PropTypes.object.isRequired,
    onChangeChart: PropTypes.func.isRequired,
    onResetChart: PropTypes.func.isRequired,
    onSelectEditedChart: PropTypes.func.isRequired,
    onAddDamageGrouping: PropTypes.func.isRequired,
    onRemoveDamageGrouping: PropTypes.func.isRequired
};

export default SpellForm;