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
        const field = event.target.name;
        const weapon = this.state.weapon;
        switch(event.target.getAttribute('dataType')) {
            case util.dataTypes.string.STRING:
                weapon[field] = event.target.value;
                break;
            case util.dataTypes.bool.YES_NO:
                weapon[field] = !weapon[field];
                break;
            case util.dataTypes.number.COIN:
            case util.dataTypes.number.WEIGHT:
                weapon[field] = event.target.value;
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
                    saving={this.state.saving} /> 
            </div>
        );
    }
}

WeaponEntry.propTypes = {
    weapon: PropTypes.object,
    actions: PropTypes.object,
    isCreate: PropTypes.bool,
    closeModal: PropTypes.func.isRequired
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