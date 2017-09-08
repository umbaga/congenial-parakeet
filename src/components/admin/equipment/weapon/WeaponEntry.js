import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as weaponActions from '../../../../actions/admin/weaponActions';
import WeaponForm from './WeaponForm';
import util from '../../../../util/util';

class WeaponEntry extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            weapon: this.props.weapon, 
            isCreate: this.props.isCreate,
            saving: false
        };
        this.cancelWeapon = this.cancelWeapon.bind(this);
        this.deleteWeapon = this.deleteWeapon.bind(this);
        this.postAction = this.postAction.bind(this);
        this.saveWeapon = this.saveWeapon.bind(this);
        this.saveAndNewWeapon = this.saveAndNewWeapon.bind(this);
        this.saveAndBackWeapon = this.saveAndBackWeapon.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.weapon.id != nextProps.weapon.id) {
            this.setState({weapon: nextProps.weapon});
        }
        this.setState({saving: false});
    }

    cancelWeapon(event) {
        event.preventDefault();
        this.postAction();
    }

    deleteWeapon(event) {
        event.preventDefault();
        if(confirm('are you sure?')) {
            this.props.actions.deleteWeapon(this.state.weapon);
            this.postAction();
        }
    }

    postAction() {
        this.props.closeModal();
    }

    saveWeapon(event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.upsertWeapon(this.state.weapon);
    } 

    saveAndNewWeapon(event) {
        this.saveWeapon(event);
        let newWeapon = Object.assign({}, util.objectModel.WEAPON);
        this.setState({weapon: newWeapon});
    }

    saveAndBackWeapon(event) {
        this.saveWeapon(event);
        this.postAction();
    }

    updateFormState(event) {
        let field = event.target.name !== undefined ? event.target.name : event.target.parentElement.name;
        let subfield = null;
        const weapon = this.state.weapon;
        let newSelectedValue = {};
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
                weapon[field] = event.target.value;
                break;
            case util.dataTypes.bool.YES_NO:
                weapon[field] = !weapon[field];
                break;
            case util.dataTypes.picklist.DAMAGE_TYPE:
            case util.dataTypes.picklist.WEAPON_CATEGORY:
            case util.dataTypes.picklist.WEAPON_PROFICIENCY:
                newSelectedValue.id = parseInt(event.target.options[event.target.selectedIndex].value);
                newSelectedValue.name = event.target.options[event.target.selectedIndex].text;
                weapon[field] = newSelectedValue;
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
                    weapon[field] = newDiceRollValue;
                }
                weapon[field].rendered = newRenderedValue;
                break;
            case util.dataTypes.array.WEAPON_PROPERTIES:
                if(isAssign) {
                    field = field.split('Unassigned')[0];
                    weapon[field].push(referencePicklistItem);
                } else {
                    for(let b = 0; b < weapon.weaponProperties.length; b++) {
                        if(weapon.weaponProperties[b].id == referencePicklistItem.id) {
                            if(weapon.weaponProperties[b].requireDamage) {
                                weapon.versatileDamage = {};
                            }
                            if(weapon.weaponProperties[b].requireDescription)  {
                                weapon.specialDescription = null;
                            }
                            if(weapon.weaponProperties[b].requireRange)  {
                                weapon.ramge = {};
                            }
                            removeThisIndex = b;
                            break;
                        }
                    }
                    weapon[field].splice(removeThisIndex, 1);
                }
                break;
            case util.dataTypes.special.WEAPON_RANGE:
                if(field.split('_').length == 2) {
                    subfield = field.split('_')[1];
                    field = field.split('_')[0];
                }
                weapon[field][subfield] = parseInt(event.target.value);
                break;
            default:
        }
        return this.setState({weapon: weapon});
    }

    render() {
        return (
            <div>
                <WeaponForm 
                    weapon={this.state.weapon} 
                    onSave={this.saveAndBackWeapon} 
                    onSaveNew={this.saveAndNewWeapon}
                    onChange={this.updateFormState} 
                    onCancel={this.cancelWeapon}
                    onDelete={this.deleteWeapon}
                    isCreate={this.state.isCreate}
                    saving={this.state.saving}
                    picklists={this.props.picklists} /> 
            </div>
        );
    }
}

WeaponEntry.propTypes = {
    weapon: PropTypes.object,
    actions: PropTypes.object,
    isCreate: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    picklists: PropTypes.array
};

function getWeaponById(weapons, id) {
    if(id != 0) {
        let weapon = weapons.find(weapon => weapon.id == id);
        return Object.assign({}, weapon);
    } else {
        return Object.assign({}, util.objectModel.WEAPON);
    }
}

function mapStateToProps(state, ownProps) {
    let weapon = Object.assign({}, util.objectModel.WEAPON);
    const weaponId = ownProps.selectedId;
    let isCreate = true;
    if(ownProps.selecetdId != 0) {
        if (weaponId && state.weapons.length > 0) {
            weapon = getWeaponById(state.weapons, ownProps.selectedId);
            isCreate = false;
        }
    }
    return {weapon: weapon, isCreate: isCreate};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(weaponActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeaponEntry);