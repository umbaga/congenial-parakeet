import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as backgroundActions from '../../../actions/admin/backgroundActions';
import BackgroundForm from './BackgroundForm';
import BackgroundDetails from './BackgroundDetails';
import util from '../../../util/util';
import DndModal from '../../common/DndModal';

class BackgroundEntry extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            background: this.props.background,
            isCreate: this.props.isCreate,
            canEdit: this.props.canEdit,
            proficiencyGroup: Object.assign({}, util.objectModel.PROFICIENCY_GROUP),
            chart: Object.assign({}, util.objectModel.CHART),
            selectedChartId: 0,
            saving: false
        };
        this.cancelBackground = this.cancelBackground.bind(this);
        this.deleteBackground = this.deleteBackground.bind(this);
        this.postAction = this.postAction.bind(this);
        this.saveAndBackBackground = this.saveAndBackBackground.bind(this);
        this.saveAndNewBackground = this.saveAndNewBackground.bind(this);
        this.saveBackground = this.saveBackground.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
        this.removeEquipment = this.removeEquipment.bind(this);
        this.addEquipment = this.addEquipment.bind(this);
        this.changeEquipmentCount = this.changeEquipmentCount.bind(this);
        this.updateProficiencyGroupState = this.updateProficiencyGroupState.bind(this);
        this.onAddProficiencyGroup = this.onAddProficiencyGroup.bind(this);
        this.onRemoveProficiencyGroup = this.onRemoveProficiencyGroup.bind(this);
        this.onResetProficiencyGroup = this.onResetProficiencyGroup.bind(this);
        this.onAddChart = this.onAddChart.bind(this);
        this.onChangeChart = this.onChangeChart.bind(this);
        this.onRemoveChart = this.onRemoveChart.bind(this);
        this.onResetChart = this.onResetChart.bind(this);
        this.onSelectChart = this.onSelectChart.bind(this);
        this.onRemoveChartEntry = this.onRemoveChartEntry.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.background.id != nextProps.background.id) {
            this.setState({background: nextProps.background});
        }
        this.setState({saving: false});
    }
    
    addEquipment () {
        const background = this.state.background;
        const selectedEquipment = this.state.selectedEquipment;
        selectedEquipment.assignedCount = 1;
        background.assignedEquipment.push(selectedEquipment);
        return this.setState({background: background});
    }
    
    removeEquipment (equipmentItem) {
        const background = this.state.background;
        const indexOfItemToRemove = this.props.background.assignedEquipment.findIndex(item => {
            return item.id == equipmentItem.id;
        });
        background.assignedEquipment.splice(indexOfItemToRemove, 1);
        return this.setState({background: background});
    }
    
    changeEquipmentCount (event, equipmentItem) {
        const background = Object.assign({}, this.state.background);
        const itemIndex = this.props.background.assignedEquipment.findIndex(item => {
            return item.id == equipmentItem.id;
        });
        background.assignedEquipment[itemIndex].assignedCount = event.target.value / background.assignedEquipment[itemIndex].count;
        return this.setState({background: background});
    }

    cancelBackground(event) {
        event.preventDefault();
        this.postAction();
    }

    deleteBackground(event) {
        event.preventDefault();
        if (confirm('are you sure?')) {
            //this.props.actions.deleteBackground(this.state.background);
            this.postAction();
        }
    }

    postAction() {
        this.props.closeModal();
    }

    saveAndNewBackground(event) {
        this.saveBackground(event);
        let newBackground = Object.assign({}, util.objectModel.BACKGROUND);
        this.setState({background: newBackground});
        this.refs.form.refs.name.setFocus();
    }

    saveAndBackBackground(event) {
        this.saveBackground(event);
        this.postAction();
    }

    saveBackground(event) {
        event.preventDefault();
        this.setState({saving: true});
        //this.props.actions.upsertBackground(this.state.background);
    }

    updateProficiencyGroupState(event) {
        let field = event.target.name !== undefined ? event.target.name : event.target.parentElement.name;
        const groupItemCount = -1 * this.state.background.proficiencyGroups.length;
        const proficiencyGroup = this.state.proficiencyGroup;
        proficiencyGroup.id = groupItemCount;
        let newSelectedValue = {};
        let isAssign = field.split('Unassigned').length == 2 ? true : false;
        let removeThisId = event.target.value;
        let removeThisIndex = -1;
        let referencePicklistItem = util.picklistInfo.getPicklistItemFromSinglePicklist(this.props.proficiencies, removeThisId);
        let dataType = event.target.getAttribute('dataType') !== null ? event.target.getAttribute('dataType') : event.target.parentElement.getAttribute('dataType');
        switch (dataType) {
            case util.dataTypes.number.INT:
                proficiencyGroup[field] = event.target.value;
                break;
            case util.dataTypes.picklist.PROFICIENCY_CATEGORY:
            case util.dataTypes.picklist.PROFICIENCY_SELECTION_MECHANIC:
                newSelectedValue.id = parseInt(event.target.options[event.target.selectedIndex].value);
                newSelectedValue.name = event.target.options[event.target.selectedIndex].text;
                proficiencyGroup[field] = newSelectedValue;
                break;
            case util.dataTypes.array.PROFICIENCIES:
                if (isAssign) {
                    field = field.split('Unassigned')[0];
                    proficiencyGroup[field].push(referencePicklistItem);
                } else {
                    for (let b = 0; b < proficiencyGroup.proficiencies.length; b++) {
                        if (proficiencyGroup.proficiencies[b].id == referencePicklistItem.id) {
                            removeThisIndex = b;
                            break;
                        }
                    }
                    proficiencyGroup[field].splice(removeThisIndex, 1);
                }
                break;
            default:
        }
        return this.setState({proficiencyGroup: proficiencyGroup});
    }
    
    updateFormState(event) {
        let field = event.target.name !== undefined ? event.target.name : event.target.parentElement.name;
        const background = this.state.background;
        const dataType = event.target.getAttribute('dataType') !== null ? event.target.getAttribute('dataType') : event.target.parentElement.getAttribute('dataType');
        let newSelectedValue = {};
        let field2 = null;
        if (field.split('.').length > 1) {
            field2 = field.split('.')[1];
            field = field.split('.')[0];
        }
        switch (dataType) {
            case util.dataTypes.string.STRING:
            case util.dataTypes.string.DESCRIPTION:
                if (field2) {
                    background[field][field2] = event.target.value;
                } else {
                    background[field] = event.target.value;
                }
                break;
            case util.dataTypes.picklist.RESOURCE:
                newSelectedValue.id = parseInt(event.target.options[event.target.selectedIndex].value);
                newSelectedValue.name = event.target.options[event.target.selectedIndex].text;
                background[field] = newSelectedValue;
                break;
            case util.dataTypes.obj.EQUIPMENT:
                if (event.target.value != 0) {
                    return this.setState({selectedEquipment: this.props.equipments.filter((equipment) => equipment.id == event.target.value)[0]});
                }
                break;
            default:
        }
        return this.setState({background: background});
    }
    
    onAddProficiencyGroup() {
        const background = this.state.background;
        background.proficiencyGroups.push(this.state.proficiencyGroup);
        const newProficiencyGroup = Object.assign({}, util.objectModel.PROFICIENCY_GROUP);
        newProficiencyGroup.proficiencies = Object.assign([], []);
        return this.setState({background: background, proficiencyGroup: newProficiencyGroup});
    }
    
    onRemoveProficiencyGroup(group) {
        const background = this.state.background;
        let removeIndex = -1;
        for (let g = 0; g < background.proficiencyGroups.length; g++) {
            if (background.proficiencyGroups[g].id == group.id) {
                removeIndex = g;
            }
        }
        if (removeIndex != -1) {
            background.proficiencyGroups.splice(removeIndex, 1);
        }
        return this.setState({background: background});
    }
    
    onResetProficiencyGroup() {
        const proficiencyGroup = Object.assign({}, util.objectModel.PROFICIENCY_GROUP);
        proficiencyGroup.proficiencies = Object.assign([], []);
        return this.setState({proficiencyGroup: proficiencyGroup});
    }
        
    onAddChart() {
        const background = this.state.background;
        const blankChart = Object.assign({}, util.objectModel.CHART);
        if (this.state.chart.id > 0) {
            background.charts[util.picklistInfo.getIndexById(background.charts, this.state.chart.id)] = this.state.chart;
        } else {
            background.charts.push(this.state.chart);
        }
        this.setState({background: background, chart: blankChart});
    }
    
    onChangeChart(event) {
        const chart = this.state.chart;
        let field = event.target.name;
        let dataType = event.target.getAttribute('dataType');
        let newRenderedValue = '';
        let newDiceRollValue = {};
        let newEntry = null;
        let changedEntryId = null;
        let changedEntryIndex = -1;
        let higherIndexedEntryExists = false;
        let removeEntryCount = 0;
        let removeEntryIndex = -1;
        let finalEntryIndex = -1;
        let referenceEntry = {};
        let chartMaximumValue = 0;
        switch (dataType) {
            case util.dataTypes.string.STRING:
                chart[field] = event.target.value;
                break;
            case util.dataTypes.special.DICE_ROLL:
                newRenderedValue = '';
                if (event.target.value && event.target.value.length != 0) {
                    for (let y = 0; y < event.target.value.length; y++) {
                        if (event.target.value.charAt(y) == '1' || event.target.value.charAt(y) == '2' ||
                           event.target.value.charAt(y) == '3' || event.target.value.charAt(y) == '4' ||
                           event.target.value.charAt(y) == '5' || event.target.value.charAt(y) == '6' ||
                           event.target.value.charAt(y) == '7' || event.target.value.charAt(y) == '8' ||
                           event.target.value.charAt(y) == '9' || event.target.value.charAt(y) == '0' ||
                           event.target.value.charAt(y) == 'd' || event.target.value.charAt(y) == 'D') {
                            newRenderedValue += event.target.value.charAt(y);
                        }
                    }
                }
                if (util.dataTypes.compareDataType(newRenderedValue, util.dataTypes.special.DICE_ROLL, [0, 1])) {
                    newDiceRollValue.dieCount = parseInt(event.target.value.toLowerCase().split('d')[0]);
                    newDiceRollValue.dieType = parseInt(event.target.value.toLowerCase().split('d')[1]);
                    chart[field] = newDiceRollValue;
                    if (chart.entries.length == 0) {
                        newEntry = Object.assign({}, util.objectModel.CHART_ENTRY);
                        newEntry.minimum = newDiceRollValue.dieCount;
                        newEntry.maximum = newDiceRollValue.dieCount * newDiceRollValue.dieType;
                        chart.entries.push(newEntry);
                    } else if (chart.entries.length != 0 && chart.entries[0].maximum == 0) {
                        chart.entries[0].minimum = newDiceRollValue.dieCount;
                        chart.entries[0].maximum = newDiceRollValue.dieCount * newDiceRollValue.dieType;
                    }
                }
                chart[field].rendered = newRenderedValue;
                break;
            case util.dataTypes.special.CHART_ENTRY_DIE_ROLL_RANGE:
                changedEntryId = parseInt(field.split('_')[0]);
                //get index of changed entry
                chartMaximumValue = chart.dieRoll.dieCount * chart.dieRoll.dieType;
                for (let x = 0; x < chart.entries.length; x++) {
                    if (chart.entries[x].id == changedEntryId) {
                        changedEntryIndex = x;
                        break;
                    }
                }
                //change maximum value of changedEntry
                chart.entries[changedEntryIndex].maximum = parseInt(event.target.options[event.target.selectedIndex].value);
                //check for existence of higher valued entry
                if (changedEntryIndex < chart.entries.length - 1) {
                    higherIndexedEntryExists = true;
                }
                if (higherIndexedEntryExists) {
                    //if exists, change minimum value of next record
                    chart.entries[changedEntryIndex + 1].minimum = parseInt(event.target.options[event.target.selectedIndex].value) + 1;
                    if (chart.entries[changedEntryIndex + 1].maximum < chart.entries[changedEntryIndex + 1].minimum) {
                        chart.entries[changedEntryIndex + 1].maximum = chart.entries[changedEntryIndex + 1].minimum;
                    }
                    //remove entries with a minimum and maximum < current maximum
                    for (let p = changedEntryIndex + 1; p < chart.entries.length; p++) {
                        if (chart.entries[p].minimum <= parseInt(event.target.options[event.target.selectedIndex].value) && chart.entries[p].maximum <= parseInt(event.target.options[event.target.selectedIndex].value)) {
                            if (removeEntryIndex == -1) {
                                removeEntryIndex = p;
                            }
                            removeEntryCount++;
                        }
                        if (finalEntryIndex == -1 && chart.entries[p].maximum == chartMaximumValue) {
                            finalEntryIndex = p;
                        }
                    }
                    chart.entries.splice(removeEntryIndex, removeEntryCount);
                    chart.entries.splice(finalEntryIndex + 1, chart.entries.length - 1);
                    //final check on chart entry
                    for (let h = 0; h < chart.entries.length; h++) {
                        if (referenceEntry.minimum) {
                            if (chart.entries[h].maximum >= referenceEntry.maximum) {
                                chart.entries[h].minimum = referenceEntry.maximum + 1;
                                chart.entries[h].maximum = referenceEntry.maximum + 1;
                                if (h == chart.entries.length - 1) {
                                    chart.entries[h].maximum = chartMaximumValue;
                                }
                            }
                        }
                        referenceEntry.minimum = chart.entries[h].minimum;
                        referenceEntry.maximum = chart.entries[h].maximum;
                    }
                    
                } else {
                    //if not exists, create new entry
                    newEntry = Object.assign({}, util.objectModel.CHART_ENTRY);
                    newEntry.id = -1 * chart.entries.length;
                    newEntry.minimum = parseInt(event.target.options[event.target.selectedIndex].value) + 1;
                    newEntry.maximum = chartMaximumValue;//chart.dieRoll.dieCount * chart.dieRoll.dieType;
                    chart.entries.push(newEntry);
                }
                break;
            case util.dataTypes.special.CHART_ENTRY_DESCRIPTION:
                changedEntryId = parseInt(field.split('_')[0]);
                for (let x = 0; x < chart.entries.length; x++) {
                    if (chart.entries[x].id == changedEntryId) {
                        changedEntryIndex = x;
                        break;
                    }
                }
                chart.entries[changedEntryIndex].description = event.target.value;
                break;
            default:
        }
        this.setState({chart: chart});
    }
    
    onRemoveChart(chartId) {
        const background = this.state.background;
        background.charts.splice(util.picklistInfo.getIndexById(background.charts, chartId), 1);
        this.setState({background: background});
    }
    
    onRemoveChartEntry(entry) {
        const chart = this.state.chart;
        let removeIndex = -1;
        let refMin = entry.minimum;
        let refId = entry.id;
        for (let r = 0; r < chart.entries.length; r++) {
            if (entry.id == chart.entries[r].id) {
                removeIndex = r;
                refMin = chart.entries[r].minimum;
            }
        }
        let isFirst = removeIndex == 0;
        let isLast = removeIndex == chart.entries.length - 1;
        if (removeIndex != -1) {
            chart.entries.splice(removeIndex, 1);
            if (isFirst) {
                chart.entries[0].minimum = chart.dieRoll.dieCount;
                chart.entries[0].id = refId;
            } else if (isLast) {
                chart.entries[chart.entries.length - 1].maximum = chart.dieRoll.dieCount * chart.dieRoll.dieType;
                chart.entries[chart.entries.length - 1].id = refId;
            } else {
                chart.entries[removeIndex].minimum = refMin;
                chart.entries[removeIndex].id = refId;
            }
        }
        this.setState({chart: chart});
    }
    
    onResetChart() {
        const chart = Object.assign({}, util.objectModel.CHART);
        chart.entries = Object.assign([], []);
        chart.dieRoll.rendered = '';
        this.setState({chart: chart});
    }
    
    onSelectChart(chartId) {
        let chart = Object.assign({}, util.objectModel.CHART);
        for (let t = 0; t < this.state.background.charts.length; t++) {
            if (chartId == this.state.background.charts[t].id) {
                chart = Object.assign({}, this.state.background.charts[t]);
            }
        }
        this.setState({chart: chart});
    }

    render() {
        let contents = (
            <BackgroundDetails
                background={this.state.background}
                picklists={this.props.picklists}
                />
        );
        if (this.props.canEdit) {
            contents = (
                <BackgroundForm
                    ref="form"
                    background={this.state.background}
                    isCreate={this.props.isCreate}
                    picklists={this.props.picklists}
                    saving={this.state.saving}
                    onChange={this.updateFormState}
                    addEquipment={this.addEquipment}
                    removeEquipment={this.removeEquipment}
                    changeEquipmentCount={this.changeEquipmentCount}
                    equipments={this.props.equipments}
                    proficiencies={this.props.proficiencies}
                    onChangeProficiencyGroup={this.updateProficiencyGroupState}
                    proficiencyGroup={this.state.proficiencyGroup}
                    onAddProficiencyGroup={this.onAddProficiencyGroup}
                    onRemoveProficiencyGroup={this.onRemoveProficiencyGroup}
                    onResetProficiencyGroup={this.onResetProficiencyGroup}
                    chart={this.state.chart}
                    onAddChart={this.onAddChart}
                    onChangeChart={this.onChangeChart}
                    onRemoveChart={this.onRemoveChart}
                    onResetChart={this.onResetChart}
                    onSelectChart={this.onSelectChart}
                    onRemoveEntry={this.onRemoveChartEntry}
                    />
            );
        }
        return (
            <DndModal
                headingCaption="Background"
                closeModal={this.props.closeModal}
                isCreate={this.props.isCreate}
                canEdit={this.props.canEdit}
                openModal={this.props.openModal}
                showModal={this.props.showModal}
                onCancel={this.cancelBackground}
                onDelete={this.deleteBackground}
                onSave={this.saveAndBackBackground}
                onSaveNew={this.saveAndNewBackground}>
                {contents}
            </DndModal>
        );
    }
}

BackgroundEntry.propTypes = {
    background: PropTypes.object,
    actions: PropTypes.object,
    canEdit: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    isCreate: PropTypes.bool,
    picklists: PropTypes.array,
    equipments: PropTypes.array,
    proficiencies: PropTypes.array
};

function getBackgroundById(backgrounds, id) {
    if (id != 0) {
        let background = backgrounds.find(background => background.id == id);
        return Object.assign({}, background);
    } else {
        return Object.assign({}, util.objectModel.BACKGROUND);
    }
}

function mapStateToProps(state, ownProps) {
    let background = Object.assign({}, util.objectModel.BACKGROUND);
    const backgroundId = ownProps.selectedId;
    let isCreate = true;
    if (ownProps.selecetdId != 0) {
        if (backgroundId && state.backgrounds.length > 0) {
            background = getBackgroundById(state.backgrounds, ownProps.selectedId);
            isCreate = false;
        }
    }
    return {background: background, isCreate: isCreate};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(backgroundActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundEntry);