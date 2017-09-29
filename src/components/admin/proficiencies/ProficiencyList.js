import React from 'react';
import PropTypes from 'prop-types';
import ProficiencyListItem from './ProficiencyListItem';

const ProficiencyList = ({proficiencies, proficiencyCategory, openModal, selectedId, changeSelectedId, onEdit}) => {
    let listHeader = null;
                                
    if (proficiencyCategory.requireLanguageInfo && proficiencyCategory.requireAbilityScore) {
        listHeader = (
            <tr>
                <th>{proficiencyCategory.name}</th>
                <th>Ability Score</th>
                <th>Type</th>
                <th>Script</th>
                <th></th>
            </tr>
        );
    } else if (proficiencyCategory.requireLanguageInfo && !proficiencyCategory.requireAbilityScore) {
        listHeader = (
            <tr>
                <th>{proficiencyCategory.name}</th>
                <th>Type</th>
                <th colSpan="2">Script</th>
                <th></th>
            </tr>
        );
    } else if (!proficiencyCategory.requireLanguageInfo && proficiencyCategory.requireAbilityScore) {
        listHeader = (
            <tr>
                <th>{proficiencyCategory.name}</th>
                <th colSpan="3">Ability Score</th>
                <th></th>
            </tr>
        );
    } else {
        listHeader = (
            <tr>
                <th colSpan="4">{proficiencyCategory.name}</th>
                <th></th>
            </tr>
        );
    }
    return (
        <tbody>
            {listHeader}
            {proficiencies.filter(
                function(proficiency) {
                    return proficiency.category.id == proficiencyCategory.id;
                }).map(proficiency =>
                           <ProficiencyListItem
                                key={proficiency.id}
                                proficiency={proficiency}
                                openModal={openModal}
                                selectedId={selectedId}
                               proficiencyCategory={proficiencyCategory}
                                changeSelectedId={changeSelectedId}
                            onEdit={onEdit}
                               />
            )}
        </tbody>
    );
};

ProficiencyList.propTypes = {
    proficiencyCategory: PropTypes.object.isRequired,
    proficiencies: PropTypes.array.isRequired,
    onCreate: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired,
    onEdit: PropTypes.func
};

export default ProficiencyList;