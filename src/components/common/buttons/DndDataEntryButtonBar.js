import React from 'react';
import PropTypes from 'prop-types';
import DndButton from './DndButton';
import { ButtonGroup } from 'react-bootstrap';

class DndDataEntryButtonBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        
    }
    
    render() {
        let wrapperClass = 'form-group';
        const cancelButton = this.props.onCancel ? (<DndButton onClick={this.props.onCancel} buttonType="cancel" dataType={this.props.cancelAction} />) : null;
        const deleteButton = this.props.onDelete ? (<DndButton onClick={this.props.onDelete} buttonType="delete" dataType={this.props.deleteAction} />) : null;
        const resetButton = this.props.onReset ? (<DndButton onClick={this.props.onReset} buttonType="reset" dataType={this.props.resetAction} />) : null;
        const saveButton = this.props.onSave ? (<DndButton onClick={this.props.onSave} buttonType="save" dataType={this.props.saveAction} />) : null;
        const saveNewButton = this.props.onSaveNew ? (<DndButton onClick={this.props.onSaveNew} buttonType="savenew" dataType={this.props.saveAction} />) : null;
        return (
            <div className={wrapperClass}>
                <div className="pull-right">
                    <ButtonGroup>
                        {deleteButton}
                        {resetButton}
                        {cancelButton}
                        {saveButton}
                        {saveNewButton}
                    </ButtonGroup>
                </div>
                <div>&nbsp;</div>
            </div>
        );
    }
}

DndDataEntryButtonBar.propTypes = {
    isCreate: PropTypes.bool,
    onCancel: PropTypes.func,
    onDelete: PropTypes.func,
    onReset: PropTypes.func,
    onSave: PropTypes.func,
    onSaveNew: PropTypes.func,
    saving: PropTypes.bool,
    cancelAction: PropTypes.string,
    deleteAction: PropTypes.string,
    resetAction: PropTypes.string,
    saveAction: PropTypes.string
};

export default DndDataEntryButtonBar;
