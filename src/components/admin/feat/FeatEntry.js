import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as featActions from '../../../actions/admin/featActions';
import * as picklistActions from '../../../actions/admin/picklistActions';

import FeatForm from './FeatForm';
import FeatDetails from './FeatDetails';
import util from '../../../util/util';
import DndModal from '../../common/DndModal';

class FeatEntry extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            feat: this.props.feat,
            isCreate: this.props.isCreate,
            canEdit: this.props.canEdit,
            saving: false,
            editProficiencyGroup: Object.assign({}, util.objectModel.PROFICIENCY_GROUP),
            editMechanic: Object.assign({}, util.objectModel.MECHANIC)
        };
        this.cancelFeat = this.cancelFeat.bind(this);
        this.deleteFeat = this.deleteFeat.bind(this);
        this.resetFeat = this.resetFeat.bind(this);
        this.postAction = this.postAction.bind(this);
        this.saveAndBackFeat = this.saveAndBackFeat.bind(this);
        this.saveAndNewFeat = this.saveAndNewFeat.bind(this);
        this.saveFeat = this.saveFeat.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
        this.updateProficiencyGroupFormState = this.updateProficiencyGroupFormState.bind(this);
        this.updateMechanicsFormState = this.updateMechanicsFormState.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.feat.id != nextProps.feat.id) {
            this.setState({feat: nextProps.feat});
        }
        this.setState({saving: false});
    }

    cancelFeat(event) {
        event.preventDefault();
        this.resetFeat();
        this.postAction();
    }

    deleteFeat(event) {
        event.preventDefault();
        if (confirm('are you sure?')) {
            this.props.actions.deleteFeat(this.state.feat);
            this.postAction();
        }
    }

    resetFeat() {
        const blankFeat = Object.assign({}, util.objectModel.FEAT);
        this.setState({feat: blankFeat});
    }
    
    postAction() {
        this.props.closeModal();
    }

    saveAndNewFeat(event) {
        this.saveFeat(event);
        this.resetFeat();
        this.refs.form.refs.name.setFocus();
    }

    saveAndBackFeat(event) {
        this.saveFeat(event);
        this.postAction();
    }

    saveFeat(event) {
        event.preventDefault();
        this.props.actions.upsertFeat(this.state.feat);
        this.resetFeat();
    }
    
    updateFormState(event) {
        const feat = util.common.formState.standard(event, this.state.feat, this.props.picklists);
        return this.setState({feat: feat});
    }
    
    updateProficiencyGroupFormState(event, refObj) {
        let editProficiencyGroup = util.common.formState.proficiencyGroup(event, this.state.editProficiencyGroup, this.state.race, this.props.picklists, this.props.proficiencies, refObj);
        const race = util.common.formState.actions(event, this.state.race, this.props.picklists, this.state.editProficiencyGroup);
        if (race.resetProficiencyGroups){
            editProficiencyGroup = util.common.resetObject.proficiencyGroup();
        }
        race.proficiencyGroups = util.common.picklists.refactorUnsavedItemIds(race.proficiencyGroups);
        return this.setState({race: race, editProficiencyGroup: editProficiencyGroup});
    }
    
    updateMechanicsFormState(event, refObj) {
        let editMechanic = util.common.formState.mechanic(event, this.state.editMechanic, this.state.race, this.props.picklists, refObj);
        let race = util.common.formState.actions(event, this.state.race, this.props.picklists, this.state.editMechanic);
        if (race.resetMechanics){
            editMechanic = util.common.resetObject.mechanic();
        }
        race.mechanics = util.common.picklists.refactorUnsavedItemIds(race.mechanics);
        return this.setState({race: race, editMechanic: editMechanic});
    }
    
    render() {
        const feat = this.state.feat;
        const contents = this.props.canEdit ? (
            <FeatForm
                ref="form"
                feat={feat}
                isCreate={this.props.isCreate}
                picklists={this.props.picklists}
                saving={this.state.saving}
                onChange={this.updateFormState}
                proficiencies={this.props.proficiencies}
                
                editProficiencyGroup={this.state.editProficiencyGroup}
                onChangeProficiencyGroup={this.updateProficiencyGroupFormState}
                
                editMechanic={this.state.editMechanic}
                onChangeMechanics={this.updateMechanicsFormState}
                />
        ) : (
            <FeatDetails
                feat={feat}
                picklists={this.props.picklists}
                />
        );
        return (
            <DndModal
                headingCaption="Feat"
                closeModal={this.props.closeModal}
                isCreate={this.props.isCreate}
                canEdit={this.props.canEdit}
                openModal={this.props.openModal}
                showModal={this.props.showModal}
                onCancel={this.cancelFeat}
                onDelete={this.deleteFeat}
                onSave={this.saveAndBackFeat}
                onSaveNew={this.saveAndNewFeat}>
                {contents}
            </DndModal>
        );
    }
}

FeatEntry.propTypes = {
    feat: PropTypes.object,
    equipments: PropTypes.array,
    actions: PropTypes.object,
    canEdit: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    isCreate: PropTypes.bool,
    picklists: PropTypes.array.isRequired,
    proficiencies: PropTypes.array.isRequired
};

function getFeatById(feats, id) {
    if (id != 0) {
        let feat = feats.find(feat => feat.id == id);
        return Object.assign({}, feat);
    } else {
        return Object.assign({}, util.objectModel.FEAT);
    }
}

function mapStateToProps(state, ownProps) {
    let feat = Object.assign({}, util.objectModel.FEAT);
    const featId = ownProps.selectedId;
    let isCreate = true;
    if (ownProps.selecetdId != 0) {
        if (featId && state.feats.length > 0) {
            feat = getFeatById(state.feats, ownProps.selectedId);
            isCreate = false;
        }
    }
    return {feat: feat, isCreate: isCreate};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, featActions, picklistActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatEntry);