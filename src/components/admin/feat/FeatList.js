import React from 'react';
import PropTypes from 'prop-types';
import FeatListItem from './FeatListItem';

const FeatList = ({feats, openModal, selectedId, changeSelectedId, onEdit, onViewDetails}) => {
    console.log(feats);
    return (
        <tbody>
            {feats.map(feat =>
                       <FeatListItem
                           key={feat.id}
                           feat={feat}
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

FeatList.propTypes = {
    feats: PropTypes.array.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    onEdit: PropTypes.func,
    onViewDetails: PropTypes.func,
    openModal: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired
};

export default FeatList;