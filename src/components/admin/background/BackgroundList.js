import React from 'react';
import PropTypes from 'prop-types';
import BackgroundListItem from './BackgroundListItem';
//import util from '../../../util/util';


const BackgroundList = ({backgrounds, openModal, selectedId, changeSelectedId, onEdit, onViewDetails}) => {
    return (
        <tbody>
            {backgrounds.map(background =>
                             <BackgroundListItem
                                 key={background.id}
                                 background={background}
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

BackgroundList.propTypes = {
    backgrounds: PropTypes.array.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    onEdit: PropTypes.func,
    onViewDetails: PropTypes.func,
    openModal: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired
};

export default BackgroundList;