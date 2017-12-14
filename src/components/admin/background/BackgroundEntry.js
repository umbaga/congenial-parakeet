import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as backgroundActions from '../../../actions/admin/backgroundActions';
import * as equipmentActions from '../../../actions/admin/equipmentActions';

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
            saving: false,
            editProficiencyGroup: Object.assign({}, util.objectModel.PROFICIENCY_GROUP),
            selectedChartType: Object.assign({}, util.objectModel.CHART_TYPE),
            editChart: Object.assign({}, util.objectModel.CHART),
            selectedEquipment: Object.assign({}, util.objectModel.EQUIPMENT)
        };
        this.cancelBackground = this.cancelBackground.bind(this);
        this.deleteBackground = this.deleteBackground.bind(this);
        this.postAction = this.postAction.bind(this);
        this.saveAndBackBackground = this.saveAndBackBackground.bind(this);
        this.saveAndNewBackground = this.saveAndNewBackground.bind(this);
        this.saveBackground = this.saveBackground.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
        this.resetBackground = this.resetBackground.bind(this);
        
        this.updateProficiencyGroupFormState = this.updateProficiencyGroupFormState.bind(this);
        this.updateChartFormState = this.updateChartFormState.bind(this);
        this.onResetChart = this.onResetChart.bind(this);
        this.onSelectEditedChart = this.onSelectEditedChart.bind(this);
        this.updateAssignedEquipmentFormState = this.updateAssignedEquipmentFormState.bind(this);
        
        this.addEquipment = this.addEquipment.bind(this);
        this.removeEquipment = this.removeEquipment.bind(this);
        this.changeEquipmentCount = this.changeEquipmentCount.bind(this);
        this.onSaveNewEquipmentButtonClick = this.onSaveNewEquipmentButtonClick.bind(this);
        this.onChangeEquipment = this.onChangeEquipment.bind(this);
        
        this.props.actions.upsertEquipment = this.props.actions.upsertEquipment.bind(this);
        
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.background.id != nextProps.background.id) {
            this.setState({background: nextProps.background});
        }
        this.setState({saving: false});
    }

    cancelBackground(event) {
        event.preventDefault();
        this.postAction();
        this.resetBackground();
    }

    deleteBackground(event) {
        event.preventDefault();
        if (confirm('are you sure?')) {
            this.props.actions.deleteBackground(this.state.background);
            this.postAction();
        }
    }

    postAction() {
        this.props.closeModal();
    }

    saveAndNewBackground(event) {
        this.saveBackground(event);
        this.refs.form.refs.name.setFocus();
    }

    saveAndBackBackground(event) {
        this.saveBackground(event);
        this.postAction();
    }

    saveBackground(event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.upsertBackground(this.state.background);
        this.resetBackground();
    }

    resetBackground() {
        let newBackground = util.common.resetObject.background();
        this.setState({background: newBackground});
    }
    
    updateFormState(event) {
        return this.setState({background: util.common.formState.standard(event, this.state.background, this.props.picklists)});
    }
    
    updateProficiencyGroupFormState(event, refObj) {
        let editProficiencyGroup = util.common.formState.proficiencyGroup(event, this.state.editProficiencyGroup, this.state.background, this.props.picklists, this.props.proficiencies, refObj);
        const background = util.common.formState.proficiencyGroup(event, this.state.background, this.state.editProficiencyGroup, this.props.picklists, this.props.proficiencies, refObj);
        if (background.resetProficiencyGroup){
            editProficiencyGroup = util.common.resetObject.proficiencyGroup();
        }
        background.proficiencyGroups = util.common.picklists.refactorUnsavedItemIds(background.proficiencyGroups);
        return this.setState({background: background, editProficiencyGroup: editProficiencyGroup});
    }
    
    updateChartFormState(event, refObj, isOrderChange) {
        const newChartType = util.common.formState.chartType(event, this.state.selectedChartType, this.props.picklists);
        const newChart = util.common.formState.chart(event, this.state.editChart, refObj, this.props.picklists);
        newChart.type = newChartType;
        newChart.orderIndex = this.state.background.charts.length;
        newChart.id = (this.state.background.charts.length + 1) * -1;
        let newSpell = null;
        if (isOrderChange) {
            newSpell = util.common.formState.arrayProperty(event, this.state.background, refObj);
        } else {
            newSpell = util.common.formState.arrayProperty(event, this.state.background, newChart);
        }
        newSpell.charts = util.common.picklists.refactorUnsavedItemIds(newSpell.charts);
        this.setState({background: newSpell, editChart: newChart, selectedChartType: newChartType});
    }
    
    onResetChart() {
        const emptyChartType = util.common.resetObject.chartType();
        const emptyChart = util.common.resetObject.chart(emptyChartType, this.state.background.charts.length);
        this.setState({editChart: emptyChart, selectedChartType: emptyChartType});
    }
    
    onSelectEditedChart() {
        
    }
    
    updateAssignedEquipmentFormState(event) {
        
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
        let itemCount = background.assignedEquipment[itemIndex].count ? background.assignedEquipment[itemIndex].count : 1;
        background.assignedEquipment[itemIndex].assignedCount = event.target.value / itemCount;
        return this.setState({background: background});
    }
    
    onSaveNewEquipmentButtonClick() {
        const selectedEquipment = this.state.selectedEquipment;
        const background = this.state.background;
        selectedEquipment.resource = this.state.background.resource;
        selectedEquipment.category.id = util.itemTypes.EQUIPMENT_CATEGORY.MINOR_ITEM;
        selectedEquipment.assignedCount = 1;
        let self = this;
        this.props.actions.upsertEquipment(selectedEquipment).then(function(newEquipmentItem) {
            background.assignedEquipment.push(Object.assign({}, newEquipmentItem.equipment));
            self.setState({selectedEquipment: Object.assign({}, util.objectModel.EQUIPMENT), background: background});
        });
    }
    
    onChangeEquipment(event) {
        let field = event.target.name.split('.')[1];
        const selectedEquipment = this.state.selectedEquipment;
        const dataType = event.target.getAttribute('dataType') !== null ? event.target.getAttribute('dataType') : event.target.parentElement.getAttribute('dataType');
        switch (dataType) {
            case util.dataTypes.string.STRING:
                selectedEquipment[field] = event.target.value;
                break;
            case util.dataTypes.obj.EQUIPMENT:
                if (event.target.value != 0) {
                    return this.setState({selectedEquipment: this.props.equipments.filter((equipment) => equipment.id == event.target.value)[0]});
                }
                break;
            default:
        }
        return this.setState({selectedEquipment: selectedEquipment});
    }
    
    render() {
        const contents = this.props.canEdit ? (
            <BackgroundForm
                ref="form"
                background={this.state.background}
                onChange={this.updateFormState}
                isCreate={this.props.isCreate}
                saving={this.state.saving}
                picklists={this.props.picklists}
                equipments={this.props.equipments}
                proficiencies={this.props.proficiencies}
                onChangeProficiencyGroup={this.updateProficiencyGroupFormState}
                editProficiencyGroup={this.state.editProficiencyGroup}
                onChangeChart={this.updateChartFormState}
                editChart={this.state.editChart}
                selectedChartType={this.state.selectedChartType}
                onResetChart={this.onResetChart}
                onSelectEditedChart={this.onSelectEditedChart}
                addEquipment={this.addEquipment}
                removeEquipment={this.removeEquipment}
                changeEquipmentCount={this.changeEquipmentCount}
                onChangeEquipment={this.onChangeEquipment}
                />
        ) : (
            <BackgroundDetails
                background={this.state.background}
                picklists={this.props.picklists}
                />
        );
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
        actions: bindActionCreators(Object.assign({}, backgroundActions, equipmentActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundEntry);