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
            isSubrace: this.props.race.parentId != 0,
            editProficiencyGroup: Object.assign({}, util.objectModel.PROFICIENCY_GROUP),
            editMechanic: Object.assign({}, util.objectModel.MECHANIC),
            editDescription: Object.assign({}, util.objectModel.SUPPLEMENTAL_DESCRIPTION),
            editSpellSelection: Object.assign({}, util.objectModel.SPELL_SELECTION),
            editChart: Object.assign({}, util.objectModel.CHART),
            selectedChartType: Object.assign({}, util.objectModel.CHART_TYPE)
        };
        this.cancelRace = this.cancelRace.bind(this);
        this.deleteRace = this.deleteRace.bind(this);
        this.postAction = this.postAction.bind(this);
        this.saveAndBackRace = this.saveAndBackRace.bind(this);
        this.saveAndNewRace = this.saveAndNewRace.bind(this);
        this.saveRace = this.saveRace.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
        this.onChangeSubrace = this.onChangeSubrace.bind(this);
        this.updateProficiencyGroupFormState = this.updateProficiencyGroupFormState.bind(this);
        this.updateMechanicsFormState = this.updateMechanicsFormState.bind(this);
        this.updateDescriptionsFormState = this.updateDescriptionsFormState.bind(this);
        this.onResetDescriptions = this.onResetDescriptions.bind(this);
        this.onSelectDescriptions = this.onSelectDescriptions.bind(this);
        this.updateSpellSelectionFormState = this.updateSpellSelectionFormState.bind(this);
        this.updateChartFormState = this.updateChartFormState.bind(this);
        this.onResetChart = this.onResetChart.bind(this);
        this.onSelectChart = this.onSelectChart.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.race.id != nextProps.race.id) {
            this.setState({race: nextProps.race});
        }
        this.setState({saving: false});
    }

    cancelRace(event) {
        event.preventDefault();
        this.setState({race: util.common.resetObject.race()});
        this.postAction();
    }

    deleteRace(event) {
        event.preventDefault();
        if (confirm('are you sure?')) {
            this.props.actions.deleteRace(this.state.race);
            this.postAction();
        }
    }
    
    postAction() {
        this.props.closeModal();
    }

    saveAndNewRace(event) {
        this.saveRace(event);
        this.setState({race: util.common.resetObject.race()});
        this.refs.form.refs.name.setFocus();
    }

    saveAndBackRace(event) {
        this.saveRace(event);
        this.postAction();
    }

    saveRace(event) {
        event.preventDefault();
        this.props.actions.upsertRace(this.state.race);
        this.setState({race: util.common.resetObject.race()});
    }
    
    updateFormState(event) {
        const race = util.common.formState.standard(event, this.state.race, this.props.picklists);
        console.log(race);
        //TODO: Need to check if parent is being edited, then populate size, monster type & tags, movement, and senses with parental values
        return this.setState({race: race});
    }
    
    updateProficiencyGroupFormState(event, refObj) {
        let editProficiencyGroup = util.common.formState.proficiencyGroup(event, this.state.editProficiencyGroup, this.state.race, this.props.picklists, this.props.proficiencies, refObj);
        const race = util.common.formState.proficiencyGroup(event, this.state.race, this.state.editProficiencyGroup, this.props.picklists, this.props.proficiencies, refObj);
        if (race.resetProficiencyGroup){
            editProficiencyGroup = util.common.resetObject.proficiencyGroup();
        }
        race.proficiencyGroups = util.common.picklists.refactorUnsavedItemIds(race.proficiencyGroups);
        return this.setState({race: race, editProficiencyGroup: editProficiencyGroup});
    }
    
    updateMechanicsFormState(event, refObj) {
        let editMechanic = util.common.formState.mechanic(event, this.state.editMechanic, this.state.race, this.props.picklists, refObj);
        let race = util.common.formState.mechanic(event, this.state.race, this.state.editMechanic, this.props.picklists, refObj);
        if (race.resetMechanic){
            editMechanic = util.common.resetObject.mechanic();
        }
        race.mechanics.base = util.common.picklists.refactorUnsavedItemIds(race.mechanics.base);
        return this.setState({race: race, editMechanic: editMechanic});
    }
    
    updateDescriptionsFormState(event, refObj, isOrderChange) {
        let editDescription = util.common.formState.description(event, this.state.editDescription, this.state.race);
        editDescription.orderIndex = this.state.race.supplementalDescriptions.length;
        editDescription.id = (this.state.race.supplementalDescriptions.length + 1) * -1;
        let arrayPropertyRefObj = (isOrderChange) ? refObj : editDescription;
        let race = util.common.formState.arrayProperty(event, this.state.race, arrayPropertyRefObj);
        race.supplementalDescriptions = util.common.picklists.refactorUnsavedItemIds(race.supplementalDescriptions);
        if (race.resetDescription){
            editDescription = util.common.resetObject.description();
        }
        this.setState({race: race, editDescription: editDescription});
    }
    
    updateSpellSelectionFormState(event, refObj) {
        let editSpellSelection = util.common.formState.spellSelection(event, this.state.editSpellSelection, this.state.race, this.props.picklists, refObj);
        let race = util.common.formState.spellSelection(event, this.state.race, this.state.editSpellSelection, this.props.picklists, refObj);
        if (race.resetSpellSelection){
            editSpellSelection = util.common.resetObject.spellSelections();
        }
        race.spellcasting.spellSelections = util.common.picklists.refactorUnsavedItemIds(race.spellcasting.spellSelections);
        return this.setState({race: race, editSpellSelection: editSpellSelection});
    }
    
    onResetDescriptions() {
        this.setState({editDescription: util.common.resetObject.description()});
    }
    
    onSelectDescriptions() {
        
    }
    
    updateChartFormState(event, refObj, isOrderChange) {
        const newChartType = util.common.formState.chartType(event, this.state.selectedChartType, this.props.picklists);
        const editChart = util.common.formState.chart(event, this.state.editChart, refObj, this.props.picklists);
        editChart.type = newChartType;
        editChart.orderIndex = this.state.race.charts.length;
        editChart.id = (this.state.race.charts.length + 1) * -1;
        let arrayPropertyRefObj = (isOrderChange) ? refObj : editChart;
        let race = util.common.formState.arrayProperty(event, this.state.race, arrayPropertyRefObj);
        race.charts = util.common.picklists.refactorUnsavedItemIds(race.charts);
        this.setState({race: race, editChart: editChart, selectedChartType: newChartType});
    }
    
    onResetChart() {
        const emptyChartType = util.common.resetObject.chartType();
        const emptyChart = util.common.resetObject.chart(emptyChartType);
        this.setState({editChart: emptyChart, selectedChartType: emptyChartType});
    }
    
    onSelectChart() {
        
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
                proficiencies={this.props.proficiencies}
                saving={this.state.saving}
                onChange={this.updateFormState}
                isSubrace={this.state.isSubrace}
                onChangeSubrace={this.onChangeSubrace}
                editProficiencyGroup={this.state.editProficiencyGroup}
                onChangeProficiencyGroup={this.updateProficiencyGroupFormState}
                editMechanic={this.state.editMechanic}
                onChangeMechanics={this.updateMechanicsFormState}
                
                editDescription={this.state.editDescription}
                onChangeDescriptions={this.updateDescriptionsFormState}
                onResetDescriptions={this.onResetDescriptions}
                onSelectDescriptions={this.onSelectDescriptions}
                
                editChart={this.state.editChart}
                selectedChartType={this.state.selectedChartType}
                onChangeChart={this.updateChartFormState}
                onResetChart={this.onResetChart}
                onSelectChart={this.onSelectChart}
                
                editSpellSelection={this.state.editSpellSelection}
                onChangeSpellSelection={this.updateSpellSelectionFormState}
                spells={this.props.spells}
                spelllists={this.props.spelllists}
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
    picklists: PropTypes.array.isRequired,
    proficiencies: PropTypes.array.isRequired,
    spells: PropTypes.array.isRequired,
    spelllists: PropTypes.array.isRequired
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