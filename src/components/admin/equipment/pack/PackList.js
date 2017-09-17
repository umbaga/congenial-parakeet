import React from 'react';
import PropTypes from 'prop-types';
import PackListItem from './PackListItem';


const PackList = ({packs, openModal, selectedId, changeSelectedId}) => {
    return (
        <tbody>
            <tr>
                <th colSpan="6">Simple Melee Packs</th>
            </tr>
            {packs.map(pack =>
                           <PackListItem
                                key={pack.id}
                                pack={pack}
                                openModal={openModal}
                                selectedId={selectedId}
                                changeSelectedId={changeSelectedId}
                               />
                          )}
        </tbody>
    );
};

PackList.propTypes = {
    packs: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired
};

export default PackList;