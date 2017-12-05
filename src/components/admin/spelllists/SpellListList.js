import React from 'react';
import PropTypes from 'prop-types';
import SpellListListItem from './SpellListListItem';


const SpellListList = ({spelllists, openModal, selectedId, changeSelectedId, onEdit, onViewDetails}) => {
    console.log(spelllists);
    return (
        <tbody>
            {spelllists.map(spelllist =>
                             <SpellListListItem
                                 key={spelllist.id}
                                 spelllist={spelllist}
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

SpellListList.propTypes = {
    spelllists: PropTypes.array.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    onEdit: PropTypes.func,
    onViewDetails: PropTypes.func,
    openModal: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired
};

export default SpellListList;