import React from 'react';
import PropTypes from 'prop-types';
import SpellListItem from './SpellListItem';
//import util from '../../../util/util';


const SpellList = ({spells, openModal, selectedId, changeSelectedId, onEdit, onViewDetails, selectedLevel, selectedSchoolId}) => {
    return (
        <tbody>
            {spells.filter(function(spell) {
                if (selectedLevel != -1 && selectedSchoolId != 0) {
                    return selectedLevel == spell.level && selectedSchoolId == spell.school.id;
                } else if (selectedLevel == -1 && selectedSchoolId != 0) {
                    return selectedSchoolId == spell.school.id;
                } else if (selectedLevel != -1 && selectedSchoolId == 0) {
                    return selectedLevel == spell.level;
                } else {
                    return true;
                }
            }).map(spell =>
                             <SpellListItem
                                 key={spell.id}
                                 spell={spell}
                                 changeSelectedId={changeSelectedId}
                                 onEdit={onEdit}
                                 onViewDetails={onViewDetails}
                                 openModal={openModal}
                                 selectedId={selectedId}
                                 />
                            )}
        </tbody>
    );
};

SpellList.propTypes = {
    spells: PropTypes.array.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    onEdit: PropTypes.func,
    onViewDetails: PropTypes.func,
    openModal: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired,
    selectedLevel: PropTypes.number.isRequired,
    selectedSchoolId: PropTypes.number.isRequired
};

export default SpellList;