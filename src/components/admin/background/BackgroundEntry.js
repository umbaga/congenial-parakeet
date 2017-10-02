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
        this.addProficiencyGroup = this.addProficiencyGroup.bind(this);
        this.removeProficiencyGroup = this.removeProficiencyGroup.bind(this);
        this.resetProficiencyGroup = this.resetProficiencyGroup.bind(this);
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
    
    addProficiencyGroup() {
        const background = this.state.background;
        background.proficiencyGroups.push(this.state.proficiencyGroup);
        const newProficiencyGroup = Object.assign({}, util.objectModel.PROFICIENCY_GROUP);
        newProficiencyGroup.proficiencies = Object.assign([], []);
        return this.setState({background: background, proficiencyGroup: newProficiencyGroup});
    }
    
    removeProficiencyGroup(group) {
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
    
    resetProficiencyGroup() {
        const proficiencyGroup = Object.assign({}, util.objectModel.PROFICIENCY_GROUP);
        proficiencyGroup.proficiencies = Object.assign([], []);
        return this.setState({proficiencyGroup: proficiencyGroup});
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
                    onProficiencyGroupChange={this.updateProficiencyGroupState}
                    proficiencyGroup={this.state.proficiencyGroup}
                    addProficiencyGroup={this.addProficiencyGroup}
                    removeProficiencyGroup={this.removeProficiencyGroup}
                    resetProficiencyGroup={this.resetProficiencyGroup}
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