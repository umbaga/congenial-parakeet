import React from 'react';
import PropTypes from 'prop-types';
import RaceListItem from './RaceListItem';
//import util from '../../../util/util';


const RaceList = ({races, openModal, selectedId, changeSelectedId, onEdit, onViewDetails}) => {
    const notSubraces = races.filter(function(race) {
        return race.parent.id == 0;
    });
    const subraces = races.filter(function(subrace) {
        return subrace.parent.id != 0;
    });
    let finalRaces = [];
    for (let r = 0; r < notSubraces.length; r++) {
        finalRaces.push(notSubraces[r]);
        for (let s = 0; s < subraces.length; s++) {
            if (subraces[s].parent.id == notSubraces[r].id) {
                finalRaces.push(subraces[s]);
            }
        }
    }
    return (
        <tbody>
            {finalRaces.map(function(race, idx) {
                return (
                    <RaceListItem
                        key={idx}
                        race={race}
                        changeSelectedId={changeSelectedId}
                        onEdit={onEdit}
                        onViewDetails={onViewDetails}
                        openModal={openModal}
                        selectedId={selectedId}
                        />
                );
            })}
        </tbody>
    );
};

RaceList.propTypes = {
    races: PropTypes.array.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    onEdit: PropTypes.func,
    onViewDetails: PropTypes.func,
    openModal: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired
};

export default RaceList;