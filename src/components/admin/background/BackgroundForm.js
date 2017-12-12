import React from 'react';
import PropTypes from 'prop-types';
import DndInput from '../../common/inputs/DndInput';
import DndUniversalInput from '../../common/inputs/DndUniversalInput';
import util from '../../../util/util';
import { Tabs, Tab } from 'react-bootstrap';
import DndManageAssignedItems from '../../common/objectManagement/DndManageAssignedItems';
import _DndManageItemGroups from '../../common/objectManagement/_DndManageItemGroups';
import DndManageCharts from '../../common/objectManagement/DndManageCharts';
import DndListItemButtonBar from '../../common/buttons/DndListItemButtonBar';

class BackgroundForm extends React.Component {
    constructor(props) {
        super(props);
        this._addEquipmentItem = this._addEquipmentItem.bind(this);
        this._removeEquipmentItem = this._removeEquipmentItem.bind(this);
        this._changeEquipmentCount = this._changeEquipmentCount.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.setFocus = this.setFocus.bind(this);
        this.renderVariants = this.renderVariants.bind(this);
    }
    
    componentDidMount() {
        this.refs.name.setFocus();
    }
    
    setFocus() {
        this.refs.name.setFocus();
    }
    
    handleSelect(selectedKey) {
        alert('selected ' + selectedKey);
    }
        
    _addEquipmentItem () {
        event.preventDefault();
        this.props.addEquipment(this.props);
    }
    
    _removeEquipmentItem (equipmentItem) {
        this.props.removeEquipment(equipmentItem);
    }
    
    _changeEquipmentCount (event, equipmentItem) {
        this.props.changeEquipmentCount(event, equipmentItem);
    }
    
    renderVariants(variants) {
        return (variants && variants.length != 0) ? (
            <fieldset>
                <legend>Variants</legend>
                <table>
                    <thead>
                        <tr>
                            <th>Variant</th>
                            <th>Feature Name</th>
                            <th>Feture Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.background.variants.map(variant =>
                            <tr key={variant.id}>
                                <td>{variant.name}</td>
                                <td>{variant.feature.name}</td>
                                <td>{variant.feature.description}</td>
                                <td>
                                    <DndListItemButtonBar
                                        listItem={variant}
                                        onDelete={this.props.onRemoveVariant}
                                        onEdit={this.props.onSelectVariant}
                                        />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </fieldset>
        ) : null;
    }
    render() {
        return (
            <div>
                <form>
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Description">
                            <div>&nbsp;</div>
                            <DndUniversalInput
                                ref="name"
                                referenceObject={this.props.background}
                                onChange={this.props.onChange}
                                picklists={this.props.picklists}
                                />
                            <DndInput
                                name="suggestedCharacteristics"
                                label="Suggested Characteristics"
                                dataType={util.dataTypes.string.DESCRIPTION}
                                value={this.props.background.suggestedCharacteristics}
                                onChange={this.props.onChange}
                                />
                        </Tab>
                        <Tab eventKey={2} title="Feature">
                            <div>&nbsp;</div>
                            <DndInput
                                name="feature.name"
                                label="Feature Name"
                                dataType={util.dataTypes.string.STRING}
                                value={this.props.background.feature.name}
                                onChange={this.props.onChange}
                                />
                            <DndInput
                                name="feature.description"
                                label="Feature Description"
                                dataType={util.dataTypes.string.DESCRIPTION}
                                value={this.props.background.feature.description}
                                onChange={this.props.onChange}
                                />
                        </Tab>
                        <Tab eventKey={3} title="Proficiencies">
                            <div>&nbsp;</div>
                            <_DndManageItemGroups
                                itemGroups={this.props.background.proficiencyGroups}
                                onAddItemGroup={this.props.onAddProficiencyGroup}
                                onChange={this.props.onChange}
                                onChangeItemGroup={this.props.onChangeProficiencyGroup}
                                onRemoveItemGroup={this.props.onRemoveProficiencyGroup}
                                onResetItemGroup={this.props.onResetProficiencyGroup}
                                picklists={this.props.picklists}
                                proficiencies={this.props.proficiencies}
                                itemGroup={this.props.proficiencyGroup}
                                title="Proficiency"
                                groupListItemTextFormatFunction={util.format.forDisplay.obj.proficiencyGroup}
                                />
                        </Tab>
                        <Tab eventKey={4} title="Equipment">
                            <div>&nbsp;</div>
                            <DndInput
                                name="startingGold"
                                label="Starting Gold"
                                dataType={util.dataTypes.number.COIN}
                                value={this.props.background.startingGold}
                                onChange={this.props.onChange} />
                            <div className="col-md-12">
                                <DndManageAssignedItems
                                    name="selectedEquipment.name"
                                    dataTypeArray={util.dataTypes.array.ASSIGNED_EQUIPMENT}
                                    dataType={util.dataTypes.obj.EQUIPMENT}
                                    label="Assigned Equipment"
                                    picklist={this.props.equipments}
                                    valueArray={this.props.background.assignedEquipment}
                                    valueObj={this.props.equipmentItem}
                                    onAddItem={this._addEquipmentItem}
                                    onChange={this.props.onChangeEquipment}
                                    onRemoveItem={this._removeEquipmentItem}
                                    onChangeCount={this._changeEquipmentCount}
                                    itemListTitle="Equipment"
                                    showCount
                                    supplementalText="unit"
                                    />
                            </div>
                        </Tab>
                        <Tab eventKey={5} title="Charts">
                            <div>&nbsp;</div>
                            <DndManageCharts
                                charts={this.props.background.charts}
                                chart={this.props.chart}
                                onAddChart={this.props.onAddChart}
                                onChange={this.props.onChange}
                                onChangeChart={this.props.onChangeChart}
                                onRemoveChart={this.props.onRemoveChart}
                                onResetChart={this.props.onResetChart}
                                onSelectChart={this.props.onSelectChart}
                                onRemoveEntry={this.props.onRemoveEntry}
                                onChangeChartOrder={this.props.onChangeChartOrder}
                                onClickExpand={this.props.onChartExpand}
                                disallowStandardCharts
                                />
                        </Tab>
                    </Tabs>
                </form>
            </div>
        );
    }
}

BackgroundForm.propTypes = {
    addEquipment: PropTypes.func.isRequired,
    removeEquipment: PropTypes.func.isRequired,
    changeEquipmentCount: PropTypes.func.isRequired,
    background: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    isCreate: PropTypes.bool.isRequired,
    onEdit: PropTypes.func,
    onViewDetails: PropTypes.func,
    saving: PropTypes.bool,
    picklists: PropTypes.array,
    equipments: PropTypes.array,
    proficiencies: PropTypes.array,
    proficiencyGroup: PropTypes.object.isRequired,
    onChangeProficiencyGroup: PropTypes.func.isRequired,
    onAddProficiencyGroup: PropTypes.func.isRequired,
    onRemoveProficiencyGroup: PropTypes.func.isRequired,
    onResetProficiencyGroup: PropTypes.func.isRequired,
    chart: PropTypes.object.isRequired,
    onAddChart: PropTypes.func.isRequired,
    onChangeChart: PropTypes.func.isRequired,
    onRemoveChart: PropTypes.func.isRequired,
    onResetChart: PropTypes.func.isRequired,
    onSelectChart: PropTypes.func.isRequired,
    onRemoveEntry: PropTypes.func.isRequired,
    onAddVariant: PropTypes.func.isRequired,
    onChangeVariant: PropTypes.func.isRequired,
    onRemoveVariant: PropTypes.func.isRequired,
    onResetVariant: PropTypes.func.isRequired,
    onSelectVariant: PropTypes.func.isRequired,
    variant: PropTypes.object.isRequired,
    onChangeChartOrder: PropTypes.func.isRequired,
    onChartExpand: PropTypes.func.isRequired,
    equipmentItem: PropTypes.object.isRequired,
    onSaveNewEquipmentButtonClick: PropTypes.func.isRequired,
    onCancelNewEquipmentButtonClick: PropTypes.func.isRequired,
    onCreateNewEquipmentButtonClick: PropTypes.func.isRequired,
    onChangeEquipment: PropTypes.func.isRequired
};

export default BackgroundForm;