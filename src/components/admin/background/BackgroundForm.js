import React from 'react';
import PropTypes from 'prop-types';
import DndInput from '../../common/inputs/DndInput';
import DndUniversalInput from '../../common/inputs/DndUniversalInput';
import util from '../../../util/util';
import { Tabs, Tab } from 'react-bootstrap';
import DndManageAssignedItems from '../../common/objectManagement/DndManageAssignedItems';
import DndManageItemGroups from '../../common/objectManagement/DndManageItemGroups';
import DndManageCharts from '../../common/objectManagement/DndManageCharts';

class BackgroundForm extends React.Component {
    constructor(props) {
        super(props);
        this._addEquipmentItem = this._addEquipmentItem.bind(this);
        this._removeEquipmentItem = this._removeEquipmentItem.bind(this);
        this._changeEquipmentCount = this._changeEquipmentCount.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.setFocus = this.setFocus.bind(this);
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
    
    render() {
        const background = this.props.background;
        const picklists = this.props.picklists;
        const proficiencies = this.props.proficiencies;
        return (
            <div>
                <form>
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Description">
                            <div>&nbsp;</div>
                            <DndUniversalInput
                                ref="name"
                                referenceObject={background}
                                onChange={this.props.onChange}
                                picklists={picklists}
                                />
                            <DndInput
                                name="suggestedCharacteristics"
                                label="Suggested Characteristics"
                                dataType={util.datatypes.string.DESCRIPTION}
                                value={background.suggestedCharacteristics}
                                onChange={this.props.onChange}
                                />
                        </Tab>
                        <Tab eventKey={2} title="Feature">
                            <div>&nbsp;</div>
                            <DndInput
                                name="feature.name"
                                label="Feature Name"
                                dataType={util.datatypes.string.STRING}
                                value={background.feature.name}
                                onChange={this.props.onChange}
                                />
                            <DndInput
                                name="feature.description"
                                label="Feature Description"
                                dataType={util.datatypes.string.DESCRIPTION}
                                value={background.feature.description}
                                onChange={this.props.onChange}
                                />
                        </Tab>
                        <Tab eventKey={3} title="Proficiencies">
                            <div>&nbsp;</div>
                            <DndManageItemGroups
                                itemGroups={background.proficiencyGroups}
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
                        <Tab eventKey={4} title="Equipment">
                            <div>&nbsp;</div>
                            <DndInput
                                name="startingGold"
                                label="Starting Gold"
                                dataType={util.datatypes.number.COIN}
                                value={background.startingGold}
                                onChange={this.props.onChange} />
                            <div className="col-md-12">
                                <DndManageAssignedItems
                                    name="selectedEquipment.name"
                                    dataTypeArray={util.datatypes.array.ASSIGNED_EQUIPMENT}
                                    dataType={util.datatypes.obj.EQUIPMENT}
                                    label="Assigned Equipment"
                                    picklist={this.props.equipments}
                                    valueArray={background.assignedEquipment}
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
                                chart={this.props.editChart}
                                charts={background.charts}
                                picklists={this.props.picklists}
                                selectedChartType={this.props.selectedChartType}
                                onChange={this.props.onChangeChart}
                                onReset={this.props.onResetChart}
                                onSelectEdited={this.props.onSelectEditedChart}
                                />
                        </Tab>
                    </Tabs>
                </form>
            </div>
        );
    }
}

BackgroundForm.propTypes = {
    background: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    isCreate: PropTypes.bool.isRequired,
    saving: PropTypes.bool,
    picklists: PropTypes.array.isRequired,
    equipments: PropTypes.array.isRequired,
    proficiencies: PropTypes.array.isRequired,
    onChangeProficiencyGroup: PropTypes.func.isRequired,
    editProficiencyGroup: PropTypes.object.isRequired,
    onChangeChart: PropTypes.func.isRequired,
    editChart: PropTypes.object.isRequired,
    selectedChartType: PropTypes.object.isRequired,
    onResetChart: PropTypes.func.isRequired,
    onSelectEditedChart: PropTypes.func.isRequired,
    addEquipment: PropTypes.func.isRequired,
    removeEquipment: PropTypes.func.isRequired,
    changeEquipmentCount: PropTypes.func.isRequired,
    onChangeEquipment: PropTypes.func.isRequired,
    equipmentItem: PropTypes.object.isRequired
};

export default BackgroundForm;