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
        return this.setState({weapon: util.common.formState.standard(event, this.state.weapon, this.props.picklists)});
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