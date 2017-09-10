import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as equipmentActions from '../../../actions/admin/equipmentActions';
import EquipmentForm from './EquipmentForm';
import util from '../../../util/util';

class EquipmentEntry extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            equipment: this.props.equipment,
            isCreate: this.props.isCreate,
            saving: false
        };
        this.cancelEquipment = this.cancelEquipment.bind(this);
        this.deleteEquipment = this.deleteEquipment.bind(this);
        this.postAction = this.postAction.bind(this);
        this.saveEquipment = this.saveEquipment.bind(this);
        this.saveAndNewEquipment = this.saveAndNewEquipment.bind(this);
        this.saveAndBackEquipment = this.saveAndBackEquipment.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
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
    }

    saveAndNewEquipment(event) {
        this.saveEquipment(event);
        let newEquipment = Object.assign({}, util.objectModel.EQUIPMENT);
        this.setState({equipment: newEquipment});
    }

    saveAndBackEquipment(event) {
        this.saveEquipment(event);
        this.postAction();
    }

    updateFormState(event) {
        let field = event.target.name !== undefined ? event.target.name : event.target.parentElement.name;
        const equipment = this.state.equipment;
        const dataType = event.target.getAttribute('dataType') !== null ? event.target.getAttribute('dataType') : event.target.parentElement.getAttribute('dataType');
        let newSelectedValue = {};
        switch (dataType) {
            case util.dataTypes.string.STRING:
            case util.dataTypes.number.COIN:
            case util.dataTypes.number.INT:
            case util.dataTypes.number.WEIGHT:
                equipment[field] = event.target.value;
                break;
            case util.dataTypes.picklist.EQUIPMENT_CATEGORY:
                newSelectedValue.id = parseInt(event.target.options[event.target.selectedIndex].value);
                newSelectedValue.name = event.target.options[event.target.selectedIndex].text;
                equipment[field] = newSelectedValue;
                break;
            default:
        }
        return this.setState({equipment: equipment});
    }
    render() {
        return (
            <div>
                <EquipmentForm
                    equipment={this.state.equipment}
                    onSave={this.saveAndBackEquipment}
                    onSaveNew={this.saveAndNewEquipment}
                    onChange={this.updateFormState}
                    onCancel={this.cancelEquipment}
                    onDelete={this.deleteEquipment}
                    isCreate={this.state.isCreate}
                    saving={this.state.saving}
                    picklists={this.props.picklists} />
            </div>
        );
    }
}

EquipmentEntry.propTypes = {
    equipment: PropTypes.object,
    actions: PropTypes.object,
    isCreate: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
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