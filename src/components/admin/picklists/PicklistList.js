import React from 'react';
import PropTypes from 'prop-types';
import PicklistListItem from './PicklistListItem';

const PicklistList = ({picklists, openModal, selectedId, changeSelectedId, onEdit}) => {
    return (
        <tbody>
            {picklists.map(function(picklist, idx) {
                return (
                    <PicklistListItem
                        key={idx}
                        picklist={picklist}
                        openModal={openModal}
                        selectedId={selectedId}
                        changeSelectedId={changeSelectedId}
                        onEdit={onEdit}
                        />
                );
            }.bind(this))}
        </tbody>
    );
};

PicklistList.propTypes = {
    picklists: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired,
    onEdit: PropTypes.func
};

export default PicklistList;