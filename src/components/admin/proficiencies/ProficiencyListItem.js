import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DndListItemButtonBar from '../../common/DndListItemButtonBar';
import * as proficiencyActions from '../../../actions/admin/proficiencyActions';

class proficiencyListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            
            selectedId: this.props.selectedId
        };
        this.editProficiency = this.editProficiency.bind(this);
        this.deleteProficiency = this.deleteProficiency.bind(this);
    }
    editProficiency() {
        event.preventDefault();
        this.props.openModal();
        this.props.changeSelectedId(this.props.proficiency.id);
        this.setState({selectedId: this.props.proficiency.id});
    }
    deleteProficiency() {
        event.preventDefault();
        if (confirm('are you sure?')) {
            this.props.actions.deleteproficiency(this.props.proficiency);
        }
    }
    render() {
        const proficiency = this.props.proficiency;
        const proficiencyCategory = this.props.proficiencyCategory;
        
        const editButton = proficiencyCategory.isEquipmentBased
        ?
        (<td></td>)
        :
        (
            <td>
                <DndListItemButtonBar
                    listItem={this.props.proficiency}
                    onEdit={this.editProficiency}
                    onDelete={this.deleteProficiency} />
            </td>
        );
        
        if (proficiencyCategory.requireLanguageInfo && proficiencyCategory.requireAbilityScore) {
            return (
                <tr>
                    <td>{proficiency.name}</td>
                    <td>{proficiency.abilityScore.name}</td>
                    <td>{proficiency.language.type.name}</td>
                    <td>{proficiency.language.script.name}</td>
                    {editButton}
                </tr>
            );
        } else if (proficiencyCategory.requireLanguageInfo && !proficiencyCategory.requireAbilityScore) {
            return (
                <tr>
                    <td>{proficiency.name}</td>
                    <td>{proficiency.language.type.name}</td>
                    <td colSpan="2">{proficiency.language.script.name}</td>
                    {editButton}
                </tr>
            );
        } else if (!proficiencyCategory.requireLanguageInfo && proficiencyCategory.requireAbilityScore) {
            return (
                <tr>
                    <td>{proficiency.name}</td>
                    <td colSpan="3">{proficiency.abilityScore.name}</td>
                    {editButton}
                </tr>
            );
        } else {
            return (
                <tr>
                    <td colSpan="4">{proficiency.name}</td>
                    {editButton}
                </tr>
            );
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {proficiency: ownProps.proficiency};
}

proficiencyListItem.propTypes = {
    proficiency: PropTypes.object.isRequired,
    proficiencyCategory: PropTypes.object.isRequired,
    actions: PropTypes.object,
    openModal: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired,
    changeSelectedId: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(proficiencyActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(proficiencyListItem);