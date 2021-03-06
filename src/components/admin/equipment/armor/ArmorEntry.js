import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as armorActions from '../../../../actions/admin/armorActions';
import ArmorForm from './ArmorForm';
import util from '../../../../util/util';
import DndModal from '../../../common/DndModal';

class ArmorEntry extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            armor: this.props.armor,
            isCreate: this.props.isCreate,
            canEdit: this.props.canEdit,
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
        if (confirm('are you sure?')) {
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
        this.refs.form.refs.name.setFocus();
    }

    saveAndBackArmor(event) {
        this.saveArmor(event);
        this.postAction();
    }

    updateFormState(event) {
        return this.setState({armor: util.common.formState.standard(event, this.state.armor, this.props.picklists)});
    }
    render() {
        return (
            <DndModal
                headingCaption="Armor"
                closeModal={this.props.closeModal}
                isCreate={this.props.isCreate}
                canEdit={this.props.canEdit}
                openModal={this.props.openModal}
                showModal={this.props.showModal}
                onCancel={this.cancelArmor}
                onDelete={this.deleteArmor}
                onSave={this.saveAndBackArmor}
                onSaveNew={this.saveAndNewArmor}>
                <ArmorForm
                    ref="form"
                    armor={this.state.armor}
                    onSave={this.saveAndBackArmor}
                    onSaveNew={this.saveAndNewArmor}
                    onChange={this.updateFormState}
                    onCancel={this.cancelArmor}
                    onDelete={this.deleteArmor}
                    isCreate={this.state.isCreate}
                    saving={this.state.saving}
                    picklists={this.props.picklists}
                    />
            </DndModal>
        );
    }
}

ArmorEntry.propTypes = {
    armor: PropTypes.object,
    actions: PropTypes.object,
    canEdit: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    isCreate: PropTypes.bool,
    picklists: PropTypes.array
};

function getArmorById(armors, id) {
    if (id != 0) {
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
    if (ownProps.selecetdId != 0) {
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