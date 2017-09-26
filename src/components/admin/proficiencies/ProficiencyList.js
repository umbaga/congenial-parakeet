import React from 'react';
import PropTypes from 'prop-types';
import ProficiencyListItem from './ProficiencyListItem';
import DndButton from '../../common/DndButton';

const ProficiencyList = ({proficiencies, proficiencyCategory, openModal, onCreate, selectedId, changeSelectedId}) => {
    let listHeader = null;
                                /**/
    const createButton = proficiencyCategory.isEquipmentBased
    ?
    (<th></th>)
    :
    (
        <th>
            <div className="pull-right">
                <DndButton onClick={onCreate} buttonType="create" />
            </div>
        </th>
    );
    if (proficiencyCategory.requireLanguageInfo && proficiencyCategory.requireAbilityScore) {
        listHeader = (
            <tr>
                <th>{proficiencyCategory.name}</th>
                <th>Ability Score</th>
                <th>Type</th>
                <th>Script</th>
                {createButton}
            </tr>
        );
    } else if (proficiencyCategory.requireLanguageInfo && !proficiencyCategory.requireAbilityScore) {
        listHeader = (
            <tr>
                <th>{proficiencyCategory.name}</th>
                <th>Type</th>
                <th colSpan="2">Script</th>
                {createButton}
            </tr>
        );
    } else if (!proficiencyCategory.requireLanguageInfo && proficiencyCategory.requireAbilityScore) {
        listHeader = (
            <tr>
                <th>{proficiencyCategory.name}</th>
                <th colSpan="3">Ability Score</th>
                {createButton}
            </tr>
        );
    } else {
        listHeader = (
            <tr>
                <th colSpan="4">{proficiencyCategory.name}</th>
                {createButton}
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
    selectedId: PropTypes.number.isRequired
};

export default ProficiencyList;