import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as raceActions from '../../../actions/admin/raceActions';
import * as picklistActions from '../../../actions/admin/picklistActions';

import RaceForm from './RaceForm';
import RaceDetails from './RaceDetails';
import util from '../../../util/util';
import DndModal from '../../common/DndModal';

class RaceEntry extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            race: this.props.race,
            isCreate: this.props.isCreate,
            canEdit: this.props.canEdit,
            saving: false,
            isSubrace: this.props.race.parentId != 0
        };
        this.cancelRace = this.cancelRace.bind(this);
        this.deleteRace = this.deleteRace.bind(this);
        this.resetRace = this.resetRace.bind(this);
        this.postAction = this.postAction.bind(this);
        this.saveAndBackRace = this.saveAndBackRace.bind(this);
        this.saveAndNewRace = this.saveAndNewRace.bind(this);
        this.saveRace = this.saveRace.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
        this.onChangeMovement = this.onChangeMovement.bind(this);
        this.onChangeSubrace = this.onChangeSubrace.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.race.id != nextProps.race.id) {
            this.setState({race: nextProps.race});
        }
        this.setState({saving: false});
    }

    cancelRace(event) {
        event.preventDefault();
        this.resetRace();
        this.postAction();
    }

    deleteRace(event) {
        event.preventDefault();
        if (confirm('are you sure?')) {
            this.props.actions.deleteRace(this.state.race);
            this.postAction();
        }
    }

    resetRace() {
        const blankRace = Object.assign({}, util.objectModel.RACE);
        blankRace.components = [];
        blankRace.supplementalDescriptions = [];
        blankRace.damage = {
            dice: {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 1},
            type: {id: 0, name: ''},
            attackRollType: {id: 0, name: ''},
            condition: {id: 0, name: ''},
            improvement: {
                dice: {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 1},
                levelCount: 0,
                projectileCount: 0
            },
            supplemental: [],
            applyAbilityScoreModifier: false,
            abilityScore: {id: 0, name: ''},
            maximum: {dice: {id: 0, dieCount: 0, dieType: 0, rendered: '', modifier: 0, multiplier: 1, divisor: 1}},
            projectileCount: 0
        };
        blankRace.savingThrow = {
            abilityScore: {id: 0, name: ''},
            effect: {id: 0, name: ''}
        };
        blankRace.charts = [];
        blankRace.mechanics = {base: [], advancement: []};
        this.setState({race: blankRace});
    }
    
    postAction() {
        this.props.closeModal();
    }

    saveAndNewRace(event) {
        this.saveRace(event);
        this.resetRace();
        this.refs.form.refs.name.setFocus();
    }

    saveAndBackRace(event) {
        this.saveRace(event);
        this.postAction();
    }

    saveRace(event) {
        event.preventDefault();
        this.props.actions.upsertRace(this.state.race);
        this.resetRace();
    }
    
    updateFormState(event) {
        const race = util.common.formState.standard(event, this.state.race, this.props.picklists);
        return this.setState({race: race});
    }
    
    onChangeMovement(event) {
        const race = util.common.formState.movement(event, this.state.race, this.props.picklists);
        return this.setState({race: race});
    }
    
    onChangeSubrace(event) {
        let isSubrace = this.state.isSubrace;
        const race = this.state.race;
        if (event.target.name == 'chkParentId') {
            isSubrace = !isSubrace;
        } else {
            race.parentId = parseInt(event.target.value);
        }
        return this.setState({isSubrace: isSubrace, race: race});
    }
    
    render() {
        const race = this.state.race;
        const contents = this.props.canEdit ? (
            <RaceForm
                ref="form"
                race={race}
                races={this.props.races}
                isCreate={this.props.isCreate}
                picklists={this.props.picklists}
                saving={this.state.saving}
                onChange={this.updateFormState}
                onChangeMovement={this.onChangeMovement}
                isSubrace={this.state.isSubrace}
                onChangeSubrace={this.onChangeSubrace}
                />
        ) : (
            <RaceDetails
                race={race}
                picklists={this.props.picklists}
                />
        );
        return (
            <DndModal
                headingCaption="Race"
                closeModal={this.props.closeModal}
                isCreate={this.props.isCreate}
                canEdit={this.props.canEdit}
                openModal={this.props.openModal}
                showModal={this.props.showModal}
                onCancel={this.cancelRace}
                onDelete={this.deleteRace}
                onSave={this.saveAndBackRace}
                onSaveNew={this.saveAndNewRace}>
                {contents}
            </DndModal>
        );
    }
}

RaceEntry.propTypes = {
    race: PropTypes.object,
    races: PropTypes.array,
    actions: PropTypes.object,
    canEdit: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    isCreate: PropTypes.bool,
    picklists: PropTypes.array
};

function getRaceById(races, id) {
    if (id != 0) {
        let race = races.find(race => race.id == id);
        return Object.assign({}, race);
    } else {
        return Object.assign({}, util.objectModel.RACE);
    }
}

function mapStateToProps(state, ownProps) {
    let race = Object.assign({}, util.objectModel.RACE);
    const raceId = ownProps.selectedId;
    let isCreate = true;
    if (ownProps.selecetdId != 0) {
        if (raceId && state.races.length > 0) {
            race = getRaceById(state.races, ownProps.selectedId);
            isCreate = false;
        }
    }
    return {race: race, isCreate: isCreate};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, raceActions, picklistActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RaceEntry);