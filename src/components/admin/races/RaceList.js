import React from 'react';
import PropTypes from 'prop-types';
import RaceListItem from './RaceListItem';
//import util from '../../../util/util';


const RaceList = ({races, openModal, selectedId, changeSelectedId, onEdit, onViewDetails}) => {
    return (
        <tbody>
            {races.map(race =>
                             <RaceListItem
                                 key={race.id}
                                 race={race}
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

RaceList.propTypes = {
    races: PropTypes.array.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    onEdit: PropTypes.func,
    onViewDetails: PropTypes.func,
    openModal: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired
};

export default RaceList;