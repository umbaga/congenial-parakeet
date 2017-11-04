import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weaponActions from '../../../../actions/admin/weaponActions';
import WeaponForm from './WeaponForm';
import util from '../../../../util/util';
import DndModal from '../../../common/DndModal';

class WeaponEntry extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            weapon: this.props.weapon,
            isCreate: this.props.isCreate,
            canEdit: this.props.canEdit,
            saving: false
        };
        this.cancelWeapon = this.cancelWeapon.bind(this);
        this.deleteWeapon = this.deleteWeapon.bind(this);
        this.postAction = this.postAction.bind(this);
        this.saveWeapon = this.saveWeapon.bind(this);
        this.saveAndNewWeapon = this.saveAndNewWeapon.bind(this);
        this.saveAndBackWeapon = this.saveAndBackWeapon.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.weapon.id != nextProps.weapon.id) {
            this.setState({weapon: nextProps.weapon});
        }
        this.setState({saving: false});
    }

    cancelWeapon(event) {
        event.preventDefault();
        this.resetForm();
        this.postAction();
    }

    resetForm() {
        let newWeapon = Object.assign({}, util.objectModel.WEAPON);
        newWeapon.damage.dice.rendered = '';
        newWeapon.weaponProperties = Object.assign([], []);
        newWeapon.range = Object.assign({}, {});
        newWeapon.damage.versatile.dice = Object.assign({}, {rendered: ''});
        return this.setState({weapon: newWeapon});
    }
    
    deleteWeapon(event) {
        event.preventDefault();
        if (confirm('are you sure?')) {
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
        this.resetForm();
    }

    saveAndNewWeapon(event) {
        this.saveWeapon(event);
        this.refs.form.refs.name.setFocus();
    }

    saveAndBackWeapon(event) {
        this.saveWeapon(event);
        this.postAction();
    }

    updateFormState(event) {
        let field = event.target.name !== undefined ? event.target.name : event.target.parentElement.name;
        let subfield = null;
        let tertfield = null;
        if (field.split('.').length > 1) {
            subfield = field.split('.')[1];
            if (field.split('.').length > 2) {
                tertfield = field.split('.')[2];
            }
            field = field.split('.')[0];
        }
        const weapon = this.state.weapon;
        let newSelectedValue = {};
        let newRenderedValue = '';
        let newDiceRollValue = {};
        let isAssign = field.split('Unassigned').length == 2 ? true : false;
        let removeThisId = event.target.value;
        let removeThisIndex = -1;
        let referencePicklistItem = util.picklists.getPicklistItem(this.props.picklists, removeThisId);
        let dataType = event.target.getAttribute('dataType') !== null ? event.target.getAttribute('dataType') : event.target.parentElement.getAttribute('dataType');

        switch (dataType) {
            case util.dataTypes.string.STRING:
            case util.dataTypes.string.LONG_STRING:
            case util.dataTypes.number.COIN:
            case util.dataTypes.number.WEIGHT:
                weapon[field] = event.target.value;
                break;
            case util.dataTypes.bool.YES_NO:
                weapon[field] = !weapon[field];
                break;
            case util.dataTypes.picklist.AMMUNITION_TYPE:
            case util.dataTypes.picklist.DAMAGE_TYPE:
            case util.dataTypes.picklist.RESOURCE:
            case util.dataTypes.picklist.WEAPON_CATEGORY:
            case util.dataTypes.picklist.WEAPON_PROFICIENCY:
                newSelectedValue.id = parseInt(event.target.options[event.target.selectedIndex].value);
                newSelectedValue.name = event.target.options[event.target.selectedIndex].text;
                if (subfield && subfield.length != 0) {
                    weapon[field][subfield] = newSelectedValue;
                } else {
                    weapon[field] = newSelectedValue;
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
                    if (tertfield && tertfield.length != 0) {
                        weapon[field][subfield][tertfield] = newDiceRollValue;
                    } else if (subfield && subfield.length != 0) {
                        weapon[field][subfield] = newDiceRollValue;
                    } else {
                        weapon[field] = newDiceRollValue;
                    }
                }
                if (tertfield && tertfield.length != 0) {
                    weapon[field][subfield][tertfield].rendered = newRenderedValue;
                } else if (subfield && subfield.length != 0) {
                    weapon[field][subfield].rendered = newRenderedValue;
                } else {
                    weapon[field].rendered = newRenderedValue;
                }
                break;
            case util.dataTypes.array.WEAPON_PROPERTIES:
                if (isAssign) {
                    field = field.split('Unassigned')[0];
                    weapon[field].push(referencePicklistItem);
                } else {
                    for (let b = 0; b < weapon.weaponProperties.length; b++) {
                        if (weapon.weaponProperties[b].id == referencePicklistItem.id) {
                            if (weapon.weaponProperties[b].requireDamage) {
                                weapon.damage.versatile.dice = {};
                            }
                            if (weapon.weaponProperties[b].requireDescription) {
                                weapon.specialDescription = null;
                            }
                            if (weapon.weaponProperties[b].requireRange) {
                                weapon.ramge = {};
                            }
                            if (weapon.weaponProperties[b].requireAmmunition) {
                                weapon.ammunition = {};
                            }
                            removeThisIndex = b;
                            break;
                        }
                    }
                    weapon[field].splice(removeThisIndex, 1);
                }
                break;
            case util.dataTypes.special.WEAPON_RANGE:
                if (field.split('_').length == 2) {
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
            <DndModal
                headingCaption="Weapon"
                closeModal={this.props.closeModal}
                isCreate={this.props.isCreate}
                canEdit={this.props.canEdit}
                openModal={this.props.openModal}
                showModal={this.props.showModal}
                onCancel={this.cancelWeapon}
                onDelete={this.deleteWeapon}
                onSave={this.saveAndBackWeapon}
                onSaveNew={this.saveAndNewWeapon}>
                <WeaponForm
                    ref="form"
                    weapon={this.state.weapon}
                    onSave={this.saveAndBackWeapon}
                    onSaveNew={this.saveAndNewWeapon}
                    onChange={this.updateFormState}
                    onCancel={this.cancelWeapon}
                    onDelete={this.deleteWeapon}
                    isCreate={this.state.isCreate}
                    saving={this.state.saving}
                    picklists={this.props.picklists}
                    />
            </DndModal>
        );
    }
}

WeaponEntry.propTypes = {
    weapon: PropTypes.object,
    actions: PropTypes.object,
    canEdit: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    isCreate: PropTypes.bool,
    picklists: PropTypes.array
};

function getWeaponById(weapons, id) {
    if (id != 0) {
        let weapon = weapons.find(weapon => weapon.id == id);
        return Object.assign({}, weapon);
    } else {
        let emptyWeapon = Object.assign({}, util.objectModel.WEAPON);
        emptyWeapon.damage.dice.rendered = '';
        emptyWeapon.weaponProperties = Object.assign([], []);
        emptyWeapon.range = Object.assign({}, {});
        emptyWeapon.damage.versatile.dice = Object.assign({}, {rendered: ''});
        return emptyWeapon;
    }
}

function mapStateToProps(state, ownProps) {
    let weapon = Object.assign({}, util.objectModel.WEAPON);
    weapon.damage.dice.rendered = '';
    weapon.weaponProperties = Object.assign([], []);
    weapon.range = Object.assign({}, {});
    weapon.damage.versatile.dice = Object.assign({}, {rendered: ''});
    const weaponId = ownProps.selectedId;
    let isCreate = true;
    if (ownProps.selecetdId != 0) {
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