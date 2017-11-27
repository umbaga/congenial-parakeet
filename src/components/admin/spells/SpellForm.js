import React from 'react';
import PropTypes from 'prop-types';
import DndInput from '../../common/inputs/DndInput';
import DndUniversalInput from '../../common/inputs/DndUniversalInput';
import DndPicklistAddSelect from '../../common/inputs/DndPicklistAddSelect';
import DndCheckboxList from '../../common/inputs/DndCheckboxList';
import util from '../../../util/util';
import { Tabs, Tab } from 'react-bootstrap';
import DndManageMechanics from '../../common/objectManagement/DndManageMechanics';
import DndManageCharts from '../../common/objectManagement/DndManageCharts';
import DndManageSupplementalDescriptions from '../../common/objectManagement/DndManageSupplementalDescriptions';
import DndManageDieCharts from '../../common/objectManagement/DndManageDieCharts';

class SpellForm extends React.Component {
    constructor(props) {
        super(props);
        this.setFocus = this.setFocus.bind(this);
        this.renderChartControl = this.renderChartControl.bind(this);
    }
    
    componentDidMount() {
        this.refs.name.setFocus();
    }
    
    setFocus() {
        this.refs.name.setFocus();
    }
    
    renderChartControl(spell) {
        switch (this.props.selectedChartTypeId) {
            case util.itemTypes.CHARTS.STANDARD:
                return (
                    <DndManageCharts
                        charts={spell.charts.standard}
                        chart={this.props.chart}
                        onChange={this.props.onChangeChart}
                        onChangeChartOrder={this.props.onChangeChartOrder}
                        onAddChart={this.props.onAddChart}
                        onAddColumn={this.props.onAddChartColumn}
                        onAddRow={this.props.onAddChartRow}
                        onCreateChart={this.props.onCreateChart}
                        onRemoveChart={this.props.onRemoveChart}
                        onRemoveColumn={this.props.onRemoveChartColumn}
                        onRemoveRow={this.props.onRemoveChartRow}
                        onSelectChart={this.props.onSelectChart}
                        onResetChart={this.props.onResetChart}
                        />
                );
            case util.itemTypes.CHARTS.DIE_ROLL:
                return (
                    <DndManageDieCharts
                        charts={spell.charts.die}
                        chart={this.props.dieChart}
                        onAddChart={this.props.onAddChart}
                        onChange={this.props.onChange}
                        onChangeChart={this.props.onChangeChart}
                        onRemoveChart={this.props.onRemoveChart}
                        onResetChart={this.props.onResetChart}
                        onSelectChart={this.props.onSelectChart}
                        onRemoveEntry={this.props.onDieChartRemoveEntry}
                        onChangeChartOrder={this.props.onChangeChartOrder}
                        onClickExpand={this.props.onDieChartExpand}
                        />
                );
            default:
                return null;
        }
    }
    
    render() {
        const spell = this.props.spell;
        const castingTimes = util.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SPELL_CASTING_TIME);
        const components = util.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SPELL_COMPONENT);
        const durations = util.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SPELL_DURATION);
        const ranges = util.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SPELL_RANGE);
        const schools = util.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SCHOOL_OF_MAGIC);
        const damageTypes = util.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.DAMAGE_TYPE);
        const abilityScores = util.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.ABILITY_SCORE);
        const chartTypes = [
            {id: util.itemTypes.CHARTS.STANDARD, name: 'Standard'},
            {id: util.itemTypes.CHARTS.DIE_ROLL, name: 'Die Roll'}
        ];
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
                                name="damage.dice"
                                label="Damage"
                                dataType={util.dataTypes.special.DICE_ROLL}
                                valueObj={this.props.spell.damage.dice}
                                onChange={this.props.onChange}
                                />
                            <DndInput
                                name="damage.improvement.dice"
                                label="Damage Gained"
                                dataType={util.dataTypes.special.DICE_ROLL}
                                valueObj={this.props.spell.damage.improvement.dice}
                                onChange={this.props.onChange}
                                />
                            <DndInput
                                name="damage.type"
                                label="Damage Type"
                                dataType={util.dataTypes.picklist.DAMAGE_TYPE}
                                valueObj={this.props.spell.damage.type}
                                onChange={this.props.onChange}
                                picklist={damageTypes}
                                />
                            <DndInput
                                name="savingThrow.abilityScore"
                                label="Saving Throw"
                                dataType={util.dataTypes.picklist.ABILITY_SCORE}
                                valueObj={this.props.spell.savingThrow.abilityScore}
                                onChange={this.props.onChange}
                                picklist={abilityScores}
                                />
                        </Tab>
                        <Tab eventKey={3} title="Mechanics">
                            <div>&nbsp;</div>
                            <DndManageMechanics
                                onChange={this.props.onChangeMechanic}
                                picklists={this.props.picklists}
                                mechanics={this.props.spell.mechanics}
                                onRemoveMechanic={this.props.onRemoveMechanic}
                                onAddMechanic={this.props.onAddMechanic}
                                onResetMechanic={this.props.onResetMechanic}
                                newMechanic={this.props.newMechanic}
                                showAdvancement
                                />
                        </Tab>
                        <Tab eventKey={4} title="Charts">
                            <div>&nbsp;</div>
                            <DndInput
                                name="chartType"
                                label="Chart Type"
                                dataType={util.dataTypes.picklist.CHART_TYPE}
                                valueObj={{id: this.props.selectedChartTypeId}}
                                onChange={this.props.onChangeChartType}
                                picklist={chartTypes}
                                />
                            {this.renderChartControl(spell)}
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
    chart: PropTypes.object.isRequired,
    onChangeChart: PropTypes.func.isRequired,
    onChangeChartOrder: PropTypes.func.isRequired,
    onAddChart: PropTypes.func.isRequired,
    onAddChartColumn: PropTypes.func.isRequired,
    onAddChartRow: PropTypes.func.isRequired,
    onCreateChart: PropTypes.func.isRequired,
    onRemoveChart: PropTypes.func.isRequired,
    onRemoveChartColumn: PropTypes.func.isRequired,
    onRemoveChartRow: PropTypes.func.isRequired,
    onSelectChart: PropTypes.func.isRequired,
    onResetChart: PropTypes.func.isRequired,
    description: PropTypes.object.isRequired,
    onChangeDescriptions: PropTypes.func.isRequired,
    onChangeDescriptionOrder: PropTypes.func.isRequired,
    onAddDescription: PropTypes.func.isRequired,
    onCreateDescription: PropTypes.func.isRequired,
    onRemoveDescription: PropTypes.func.isRequired,
    onSelectDescription: PropTypes.func.isRequired,
    onResetDescription: PropTypes.func.isRequired,
    onChangeChartType: PropTypes.func.isRequired,
    selectedChartTypeId: PropTypes.number.isRequired,
    dieChart: PropTypes.object.isRequired,
    onDieChartExpand: PropTypes.func.isRequired,
    onDieChartRemoveEntry: PropTypes.func.isRequired
};

export default SpellForm;