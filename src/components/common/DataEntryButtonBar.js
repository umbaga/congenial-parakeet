import React from 'react';
import PropTypes from 'prop-types';
import DndButton from './DndButton';

const DataEntryButtonBar = ({isCreate, onCancel, onSave, onSaveNew, onDelete, saving}) => {
    let wrapperClass = 'form-group';
    let deleteButton = null;
    if(!isCreate) {
        deleteButton = <DndButton onClick={onDelete} buttonType="delete" />;
    }

    return (
        <div className={wrapperClass}>
            {deleteButton}
            <DndButton onClick={onCancel} buttonType="cancel" />
            <DndButton onClick={onSave} buttonType="save" />
            <DndButton onClick={onSaveNew} buttonType="savenew" />
        </div>
    );
};

DataEntryButtonBar.propTypes = {
    isCreate: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onSaveNew: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    saving: PropTypes.bool
};

export default DataEntryButtonBar;
