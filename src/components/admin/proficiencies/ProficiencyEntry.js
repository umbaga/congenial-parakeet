import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as proficiencyActions from '../../../actions/admin/proficiencyActions';
import ProficiencyForm from './ProficiencyForm';
import util from '../../../util/util';
import DndModal from '../../common/DndModal';

class ProficiencyEntry extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            proficiency: this.props.proficiency,
            isCreate: this.props.isCreate,
            canEdit: this.props.canEdit,
            saving: false
        };
        this.cancelProficiency = this.cancelProficiency.bind(this);
        this.deleteProficiency = this.deleteProficiency.bind(this);
        this.postAction = this.postAction.bind(this);
        this.saveProficiency = this.saveProficiency.bind(this);
        this.saveAndNewProficiency = this.saveAndNewProficiency.bind(this);
        this.saveAndBackProficiency = this.saveAndBackProficiency.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.proficiency.id != nextProps.proficiency.id) {
            this.setState({proficiency: nextProps.proficiency});
        }
        this.setState({saving: false});
    }

    cancelProficiency(event) {
        event.preventDefault();
        this.postAction();
    }

    deleteProficiency(event) {
        event.preventDefault();
        if (confirm('are you sure?')) {
            this.props.actions.deleteProficiency(this.state.proficiency);
            this.postAction();
        }
    }

    postAction() {
        this.props.closeModal();
    }

    saveProficiency(event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.upsertProficiency(this.state.proficiency);
        let newProficiency = Object.assign({}, util.objectModel.PROFICIENCY);
        newProficiency.language = Object.assign({}, {
            rarity: {
                id: 0,
                name: ''
            },
            script: {
                id: 0,
                name: ''
            }
        });
        this.setState({proficiency: newProficiency});
    }

    saveAndNewProficiency(event) {
        this.saveProficiency(event);
    }

    saveAndBackProficiency(event) {
        this.saveProficiency(event);
        this.postAction();
    }

    updateFormState(event) {
        let field = event.target.name !== undefined ? event.target.name : event.target.parentElement.name;
        let field2 = null;
        if (field.split('.').length > 1) {
            field2 = field.split('.')[1];
            field = field.split('.')[0];
        }
        const proficiency = this.state.proficiency;
        const dataType = event.target.getAttribute('dataType') !== null ? event.target.getAttribute('dataType') : event.target.parentElement.getAttribute('dataType');
        let newSelectedValue = {};
        switch (dataType) {
            case util.dataTypes.string.DESCRIPTION:
            case util.dataTypes.string.STRING:
                proficiency[field] = event.target.value;
                break;
            case util.dataTypes.picklist.ABILITY_SCORE:
            case util.dataTypes.picklist.PROFICIENCY_CATEGORY:
            case util.dataTypes.picklist.RESOURCE:
                newSelectedValue.id = parseInt(event.target.options[event.target.selectedIndex].value);
                newSelectedValue.name = event.target.options[event.target.selectedIndex].text;
                proficiency[field] = newSelectedValue;
                break;
            case util.dataTypes.picklist.LANGUAGE_RARITY:
            case util.dataTypes.picklist.LANGUAGE_SCRIPT:
                newSelectedValue.id = parseInt(event.target.options[event.target.selectedIndex].value);
                newSelectedValue.name = event.target.options[event.target.selectedIndex].text;
                proficiency[field][field2] = newSelectedValue;
                break;
            default:
        }
        return this.setState({proficiency: proficiency});
    }
    render() {
        return (
            <DndModal
                headingCaption="Proficiency"
                closeModal={this.props.closeModal}
                isCreate={this.props.isCreate}
                canEdit={this.props.canEdit}
                openModal={this.props.openModal}
                showModal={this.props.showModal}
                onCancel={this.cancelProficiency}
                onDelete={this.deleteProficiency}
                onSave={this.saveAndBackProficiency}
                onSaveNew={this.saveAndNewProficiency}>
                <ProficiencyForm
                    ref="form"
                    proficiency={this.state.proficiency}
                    onSave={this.saveAndBackProficiency}
                    onSaveNew={this.saveAndNewProficiency}
                    onChange={this.updateFormState}
                    onCancel={this.cancelProficiency}
                    onDelete={this.deleteProficiency}
                    isCreate={this.state.isCreate}
                    saving={this.state.saving}
                    picklists={this.props.picklists}
                    />
            </DndModal>
        );
    }
}

ProficiencyEntry.propTypes = {
    proficiency: PropTypes.object,
    actions: PropTypes.object,
    canEdit: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    isCreate: PropTypes.bool,
    picklists: PropTypes.array
};

function getProficiencyById(proficiencies, id) {
    if (id != 0) {
        let proficiency = proficiencies.find(proficiency => proficiency.id == id);
        return Object.assign({}, proficiency);
    } else {
        return Object.assign({}, util.objectModel.PROFICIENCY);
    }
}

function mapStateToProps(state, ownProps) {
    let proficiency = Object.assign({}, util.objectModel.PROFICIENCY);
    const proficiencyId = ownProps.selectedId;
    let isCreate = true;
    if (ownProps.selecetdId != 0) {
        if (proficiencyId && state.proficiencies.length > 0) {
            proficiency = getProficiencyById(state.proficiencies, ownProps.selectedId);
            isCreate = false;
        }
    }
    return {proficiency: proficiency, isCreate: isCreate};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(proficiencyActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProficiencyEntry);