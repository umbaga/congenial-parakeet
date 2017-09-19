import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as packActions from '../../../../actions/admin/packActions';
import PackForm from './PackForm';
import util from '../../../../util/util';

class PackEntry extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedEquipment: Object.assign({}, util.objectModel.EQUIPMENT),
            pack: this.props.pack,
            isCreate: this.props.isCreate,
            saving: false
        };
        this.cancelPack = this.cancelPack.bind(this);
        this.deletePack = this.deletePack.bind(this);
        this.postAction = this.postAction.bind(this);
        this.savePack = this.savePack.bind(this);
        this.saveAndNewPack = this.saveAndNewPack.bind(this);
        this.saveAndBackPack = this.saveAndBackPack.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
        this.removeEquipmentFromPack = this.removeEquipmentFromPack.bind(this);
        this.addEquipmentToPack = this.addEquipmentToPack.bind(this);
        this.changeEquipmentCount = this.changeEquipmentCount.bind(this);
        this.calculateCost = this.calculateCost.bind(this);
        this.calculateWeight = this.calculateWeight.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.pack.id != nextProps.pack.id) {
            this.setState({pack: nextProps.pack});
        }
        this.setState({saving: false});
    }
    
    cancelPack(event) {
        event.preventDefault();
        this.postAction();
    }
    
    deletePack(event) {
        event.preventDefault();
        if (confirm('are you sure?')) {
            this.props.actions.deletePack(this.state.pack);
            this.postAction();
        }
    }
    
    postAction() {
        this.props.closeModal();
    }
    
    savePack(event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.upsertPack(this.state.pack);
    }
    
    saveAndNewPack(event) {
        this.savePack(event);
        let newPack = Object.assign({}, util.objectModel.EQUIPMENT_PACK);
        this.setState({pack: newPack});
    }
    
    saveAndBackPack(event) {
        this.savePack(event);
        this.postAction();
    }
    
    addEquipmentToPack () {
        const pack = this.state.pack;
        const selectedEquipment = this.state.selectedEquipment;
        selectedEquipment.assignedCount = 1;
        pack.assignedEquipment.push(selectedEquipment);
        pack.cost = this.calculateCost(pack);
        pack.weight = this.calculateWeight(pack);
        return this.setState({pack: pack});
    }
    
    removeEquipmentFromPack (equipmentItem) {
        const pack = this.state.pack;
        const indexOfItemToRemove = this.props.pack.assignedEquipment.findIndex(item => {
            return item.id == equipmentItem.id;
        });
        pack.assignedEquipment.splice(indexOfItemToRemove, 1);
        pack.cost = this.calculateCost(pack);
        pack.weight = this.calculateWeight(pack);
        return this.setState({pack: pack});
    }
    
    changeEquipmentCount (event, equipmentItem) {
        const pack = Object.assign({}, this.state.pack);
        const itemIndex = this.props.pack.assignedEquipment.findIndex(item => {
            return item.id == equipmentItem.id;
        });
        pack.assignedEquipment[itemIndex].assignedCount = event.target.value / pack.assignedEquipment[itemIndex].count;
        pack.cost = this.calculateCost(pack);
        pack.weight = this.calculateWeight(pack);
        return this.setState({pack: pack});
    }
    
    calculateCost (pack) {
        let retVal = 0;
        for (let x = 0; x < pack.assignedEquipment.length; x++) {
            retVal += parseFloat(pack.assignedEquipment[x].cost) * pack.assignedEquipment[x].assignedCount;
        }
        return retVal.toString();
    }
    
    calculateWeight (pack) {
        let retVal = 0;
        for (let x = 0; x < pack.assignedEquipment.length; x++) {
            retVal += parseFloat(pack.assignedEquipment[x].weight) * pack.assignedEquipment[x].assignedCount;
        }
        return retVal.toString();
    }
    
    updateFormState(event) {
        let field = event.target.name !== undefined ? event.target.name : event.target.parentElement.name;
        const pack = this.state.pack;
        let dataType = event.target.getAttribute('dataType') !== null ? event.target.getAttribute('dataType') : event.target.parentElement.getAttribute('dataType');
        switch (dataType) {
            case util.dataTypes.string.STRING:
            case util.dataTypes.number.COIN:
            case util.dataTypes.number.WEIGHT:
                pack[field] = event.target.value;
                break;
            case util.dataTypes.array.ASSIGNED_EQUIPMENT:
                break;
            case util.dataTypes.obj.EQUIPMENT:
                if (event.target.value != 0) {
                    return this.setState({selectedEquipment: this.props.equipments.filter((equipment) => equipment.id == event.target.value)[0]});
                }
                break;
            default:
        }
        return this.setState({pack: pack});
    }

    render() {
        return (
            <div>
                <PackForm
                    addEquipmentToPack={this.addEquipmentToPack}
                    removeEquipmentFromPack={this.removeEquipmentFromPack}
                    changeEquipmentCount={this.changeEquipmentCount}
                    equipments={this.props.equipments}
                    pack={this.state.pack}
                    onSave={this.saveAndBackPack}
                    onSaveNew={this.saveAndNewPack}
                    onChange={this.updateFormState}
                    onCancel={this.cancelPack}
                    onDelete={this.deletePack}
                    isCreate={this.state.isCreate}
                    saving={this.state.saving}
                    picklists={this.props.picklists} />
            </div>
        );
    }
}

PackEntry.propTypes = {
    pack: PropTypes.object,
    actions: PropTypes.object,
    isCreate: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    picklists: PropTypes.array,
    equipments: PropTypes.array
};

function getPackById(packs, id) {
    if (id != 0) {
        let pack = packs.find(pack => pack.id == id);
        return Object.assign({}, pack);
    } else {
        return Object.assign({}, util.objectModel.EQUIPMENT_PACK);
    }
}

function mapStateToProps(state, ownProps) {
    let pack = Object.assign({}, util.objectModel.EQUIPMENT_PACK);
    const packId = ownProps.selectedId;
    let isCreate = true;
    if (ownProps.selecetdId != 0) {
        if (packId && state.packs.length > 0) {
            pack = getPackById(state.packs, ownProps.selectedId);
            isCreate = false;
        }
    }
    return {pack: pack, isCreate: isCreate};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(packActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PackEntry);