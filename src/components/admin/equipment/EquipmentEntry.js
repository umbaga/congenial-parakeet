import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as equipmentActions from '../../../actions/admin/equipmentActions';
import EquipmentForm from './EquipmentForm';
import util from '../../../util/util';
import DndModal from '../../common/DndModal';

class EquipmentEntry extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            equipment: this.props.equipment,
            isCreate: this.props.isCreate,
            canEdit: this.props.canEdit,
            saving: false,
            hasImprovisedWeapon: false
        };
        this.cancelEquipment = this.cancelEquipment.bind(this);
        this.deleteEquipment = this.deleteEquipment.bind(this);
        this.postAction = this.postAction.bind(this);
        this.saveEquipment = this.saveEquipment.bind(this);
        this.saveAndNewEquipment = this.saveAndNewEquipment.bind(this);
        this.saveAndBackEquipment = this.saveAndBackEquipment.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.onChangeImprovisedWeapon = this.onChangeImprovisedWeapon.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.equipment.id != nextProps.equipment.id) {
            this.setState({equipment: nextProps.equipment});
        }
        this.setState({saving: false});
    }

    cancelEquipment(event) {
        event.preventDefault();
        this.postAction();
    }

    resetForm() {
        let newEquipment = Object.assign({}, util.objectModel.EQUIPMENT);
        return this.setState({equipment: newEquipment});
    }

    deleteEquipment(event) {
        event.preventDefault();
        if (confirm('are you sure?')) {
            this.props.actions.deleteEquipment(this.state.equipment);
            this.postAction();
        }
    }

    postAction() {
        this.props.closeModal();
    }

    saveEquipment(event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.upsertEquipment(this.state.equipment);
        this.resetForm();
    }

    saveAndNewEquipment(event) {
        this.saveEquipment(event);
        let newEquipment = Object.assign({}, util.objectModel.EQUIPMENT);
        newEquipment.improvisedWeapon = {
            damage: {dieCount: 0, dieType: 0, rendered: ''},
            damageType: {id: 0, name: ''},
            range: 0
        };
        this.setState({equipment: newEquipment});
    }

    saveAndBackEquipment(event) {
        this.saveEquipment(event);
        this.postAction();
    }

    onChangeImprovisedWeapon() {
        this.setState({hasImprovisedWeapon: !this.state.hasImprovisedWeapon});
    }
    
    updateFormState(event) {
        let field = event.target.name !== undefined ? event.target.name : event.target.parentElement.name;
        let hasSubfield = field.split('.').length != 1;
        const equipment = this.state.equipment;
        const dataType = event.target.getAttribute('dataType') !== null ? event.target.getAttribute('dataType') : event.target.parentElement.getAttribute('dataType');
        let newSelectedValue = {};
        let newRenderedValue = '';
        let newDiceRollValue = {};
        switch (dataType) {
            case util.dataTypes.string.STRING:
            case util.dataTypes.string.DESCRIPTION:
            case util.dataTypes.number.COIN:
            case util.dataTypes.number.INT:
            case util.dataTypes.number.WEIGHT:
                if (hasSubfield) {
                    equipment[field.split('.')[0]][field.split('.')[1]] = event.target.value;
                } else {
                    equipment[field] = event.target.value;
                }
                break;
            case util.dataTypes.picklist.AMMUNITION_TYPE:
            case util.dataTypes.picklist.EQUIPMENT_CATEGORY:
            case util.dataTypes.picklist.RESOURCE:
            case util.dataTypes.picklist.DAMAGE_TYPE:
                newSelectedValue.id = parseInt(event.target.options[event.target.selectedIndex].value);
                newSelectedValue.name = event.target.options[event.target.selectedIndex].text;
                if (hasSubfield) {
                    equipment[field.split('.')[0]][field.split('.')[1]] = newSelectedValue;
                } else {
                    equipment[field] = newSelectedValue;
                }
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
                if (util.dataTypes.compareDataType(newRenderedValue, util.dataTypes.special.DICE_ROLL)) {
                    newDiceRollValue.dieCount = parseInt(event.target.value.toLowerCase().split('d')[0]);
                    newDiceRollValue.dieType = parseInt(event.target.value.toLowerCase().split('d')[1]);
                    if (hasSubfield) {
                        equipment[field.split('.')[0]][field.split('.')[1]] = newDiceRollValue;
                    } else {
                        equipment[field] = newDiceRollValue;
                    }
                }
                if (hasSubfield) {
                    equipment[field.split('.')[0]][field.split('.')[1]].rendered = newRenderedValue;
                } else {
                    equipment[field].rendered = newRenderedValue;
                }
                break;
            default:
        }
        return this.setState({equipment: equipment});
    }
    render() {
        return (
            <DndModal
                headingCaption="Equipment"
                closeModal={this.props.closeModal}
                isCreate={this.props.isCreate}
                canEdit={this.props.canEdit}
                openModal={this.props.openModal}
                showModal={this.props.showModal}
                onCancel={this.cancelEquipment}
                onDelete={this.deleteEquipment}
                onSave={this.saveAndBackEquipment}
                onSaveNew={this.saveAndNewEquipment}>
                <EquipmentForm
                    ref="form"
                    equipment={this.state.equipment}
                    onSave={this.saveAndBackEquipment}
                    onSaveNew={this.saveAndNewEquipment}
                    onChange={this.updateFormState}
                    onCancel={this.cancelEquipment}
                    onDelete={this.deleteEquipment}
                    isCreate={this.state.isCreate}
                    saving={this.state.saving}
                    picklists={this.props.picklists}
                    onChangeImprovisedWeapon={this.onChangeImprovisedWeapon}
                    hasImprovisedWeapon={this.state.hasImprovisedWeapon}
                    />
            </DndModal>
        );
    }
}

EquipmentEntry.propTypes = {
    equipment: PropTypes.object,
    actions: PropTypes.object,
    canEdit: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    isCreate: PropTypes.bool,
    picklists: PropTypes.array
};

function getEquipmentById(equipments, id) {
    if (id != 0) {
        let equipment = equipments.find(equipment => equipment.id == id);
        return Object.assign({}, equipment);
    } else {
        return Object.assign({}, util.objectModel.EQUIPMENT);
    }
}

function mapStateToProps(state, ownProps) {
    let equipment = Object.assign({}, util.objectModel.EQUIPMENT);
    const equipmentId = ownProps.selectedId;
    let isCreate = true;
    if (ownProps.selecetdId != 0) {
        if (equipmentId && state.equipments.length > 0) {
            equipment = getEquipmentById(state.equipments, ownProps.selectedId);
            isCreate = false;
        }
    }
    return {equipment: equipment, isCreate: isCreate};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(equipmentActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentEntry);