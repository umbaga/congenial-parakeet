import React from 'react';
import PropTypes from 'prop-types';
import DndButton from './DndButton';
import { ButtonGroup } from 'react-bootstrap';

const DndDataEntryButtonBar = ({isCreate, onCancel, onSave, onSaveNew, onDelete}) => {
    let wrapperClass = 'form-group';
    let deleteButton = null;
    if (!isCreate) {
        deleteButton = <DndButton onClick={onDelete} buttonType="delete" />;
    }

    return (
        <div className={wrapperClass}>
            <div className="pull-right">
                <ButtonGroup>
                    {deleteButton}
                    <DndButton onClick={onCancel} buttonType="cancel" />
                    <DndButton onClick={onSave} buttonType="save" />
                    <DndButton onClick={onSaveNew} buttonType="savenew" />
                </ButtonGroup>
            </div>
            <div>&nbsp;</div>
        </div>
    );
};

DndDataEntryButtonBar.propTypes = {
    isCreate: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onSaveNew: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    saving: PropTypes.bool
};

export default DndDataEntryButtonBar;
