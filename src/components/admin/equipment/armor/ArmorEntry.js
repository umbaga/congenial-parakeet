import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as armorActions from '../../../../actions/admin/armorActions';
import ArmorForm from './ArmorForm';
import util from '../../../../util/util';

class ArmorEntry extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            armor: this.props.armor, 
            isCreate: this.props.isCreate,
            saving: false
        };
        this.cancelArmor = this.cancelArmor.bind(this);
        this.deleteArmor = this.deleteArmor.bind(this);
        this.postAction = this.postAction.bind(this);
        this.saveArmor = this.saveArmor.bind(this);
        this.saveAndNewArmor = this.saveAndNewArmor.bind(this);
        this.saveAndBackArmor = this.saveAndBackArmor.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.armor.id != nextProps.armor.id) {
            this.setState({armor: nextProps.armor});
        }
        this.setState({saving: false});
    }

    cancelArmor(event) {
        event.preventDefault();
        this.postAction();
    }

    deleteArmor(event) {
        event.preventDefault();
        if(confirm('are you sure?')) {
            this.props.actions.deleteArmor(this.state.armor);
            this.postAction();
        }
    }

    postAction() {
        this.props.closeModal();
    }

    saveArmor(event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.upsertArmor(this.state.armor);
    } 

    saveAndNewArmor(event) {
        this.saveArmor(event);
        let newArmor = Object.assign({}, util.objectModel.ARMOR);
        this.setState({armor: newArmor});
    }

    saveAndBackArmor(event) {
        this.saveArmor(event);
        this.postAction();
    }

    updateFormState(event) {
        let field = event.target.name !== undefined ? event.target.name : event.target.parentElement.name;
        let subfield = null;
        const armor = this.state.armor;
        /*let newSelectedValue = {};
        let newRenderedValue = '';
        let newDiceRollValue = {};
        let isAssign = field.split('Unassigned').length == 2 ? true : false;
        let removeThisId = event.target.value;
        let removeThisIndex = -1;
        let referencePicklistItem = util.picklistInfo.getPicklistItem(this.props.picklists, removeThisId);
        let dataType = event.target.getAttribute('dataType') !== null ? event.target.getAttribute('dataType') : event.target.parentElement.getAttribute('dataType');

        switch(dataType) {
            case util.dataTypes.string.STRING:
            case util.dataTypes.string.LONG_STRING:
            case util.dataTypes.number.COIN:
            case util.dataTypes.number.WEIGHT:
                armor[field] = event.target.value;
                break;
            case util.dataTypes.bool.YES_NO:
                armor[field] = !armor[field];
                break;
            case util.dataTypes.picklist.DAMAGE_TYPE:
            case util.dataTypes.picklist.ARMOR_CATEGORY:
            case util.dataTypes.picklist.ARMOR_PROFICIENCY:
                newSelectedValue.id = parseInt(event.target.options[event.target.selectedIndex].value);
                newSelectedValue.name = event.target.options[event.target.selectedIndex].text;
                armor[field] = newSelectedValue;
                break;
            case util.dataTypes.special.DICE_ROLL:
                newRenderedValue = '';
                if(event.target.value && event.target.value.length != 0) {
                    for(let y = 0; y < event.target.value.length; y++) {
                        if(event.target.value.charAt(y) == '1' || event.target.value.charAt(y) == '2' || 
                           event.target.value.charAt(y) == '3' || event.target.value.charAt(y) == '4' || 
                           event.target.value.charAt(y) == '5' || event.target.value.charAt(y) == '6' || 
                           event.target.value.charAt(y) == '7' || event.target.value.charAt(y) == '8' || 
                           event.target.value.charAt(y) == '9' || event.target.value.charAt(y) == '0' || 
                           event.target.value.charAt(y) == 'd' || event.target.value.charAt(y) == 'D') {
                            newRenderedValue += event.target.value.charAt(y);
                        }
                    }
                }
                if(util.dataTypes.compareDataType(newRenderedValue, util.dataTypes.special.DICE_ROLL)) {
                    newDiceRollValue.dieCount = parseInt(event.target.value.toLowerCase().split('d')[0]);
                    newDiceRollValue.dieType = parseInt(event.target.value.toLowerCase().split('d')[1]);
                    armor[field] = newDiceRollValue;
                }
                armor[field].rendered = newRenderedValue;
                break;
            case util.dataTypes.array.ARMOR_PROPERTIES:
                if(isAssign) {
                    field = field.split('Unassigned')[0];
                    armor[field].push(referencePicklistItem);
                } else {
                    for(let b = 0; b < armor.armorProperties.length; b++) {
                        if(armor.armorProperties[b].id == referencePicklistItem.id) {
                            if(armor.armorProperties[b].requireDamage) {
                                armor.versatileDamage = {};
                            }
                            if(armor.armorProperties[b].requireDescription)  {
                                armor.specialDescription = null;
                            }
                            if(armor.armorProperties[b].requireRange)  {
                                armor.ramge = {};
                            }
                            removeThisIndex = b;
                            break;
                        }
                    }
                    armor[field].splice(removeThisIndex, 1);
                }
                break;
            case util.dataTypes.special.ARMOR_RANGE:
                if(field.split('_').length == 2) {
                    subfield = field.split('_')[1];
                    field = field.split('_')[0];
                }
                armor[field][subfield] = parseInt(event.target.value);
                break;
            default:
        }*/
        return this.setState({armor: armor});
    }

    render() {
        return (
            <div>
                <ArmorForm 
                    armor={this.state.armor} 
                    onSave={this.saveAndBackArmor} 
                    onSaveNew={this.saveAndNewArmor}
                    onChange={this.updateFormState} 
                    onCancel={this.cancelArmor}
                    onDelete={this.deleteArmor}
                    isCreate={this.state.isCreate}
                    saving={this.state.saving}
                    picklists={this.props.picklists} /> 
            </div>
        );
    }
}

ArmorEntry.propTypes = {
    armor: PropTypes.object,
    actions: PropTypes.object,
    isCreate: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    picklists: PropTypes.array
};

function getArmorById(armors, id) {
    if(id != 0) {
        let armor = armors.find(armor => armor.id == id);
        return Object.assign({}, armor);
    } else {
        return Object.assign({}, util.objectModel.ARMOR);
    }
}

function mapStateToProps(state, ownProps) {
    let armor = Object.assign({}, util.objectModel.ARMOR);
    const armorId = ownProps.selectedId;
    let isCreate = true;
    if(ownProps.selecetdId != 0) {
        if (armorId && state.armors.length > 0) {
            armor = getArmorById(state.armors, ownProps.selectedId);
            isCreate = false;
        }
    }
    return {armor: armor, isCreate: isCreate};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(armorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArmorEntry);