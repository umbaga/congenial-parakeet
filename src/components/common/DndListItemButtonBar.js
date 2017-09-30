import React from 'react';
import PropTypes from 'prop-types';
import DndButton from './DndButton';
import { ButtonGroup, Popover, OverlayTrigger } from 'react-bootstrap';

class DndListItemButtonBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._onEdit = this._onEdit.bind(this);
        this._onDelete = this._onDelete.bind(this);
        this._hidePopover = this._hidePopover.bind(this);
        this._onViewDetails = this._onViewDetails.bind(this);
    }

    _onEdit() {
        this._hidePopover();
        this.props.onEdit(this.props.listItem.id);
    }

    _onDelete() {
        this._hidePopover();
        this.props.onDelete(this.props.listItem.id);
    }
    
    _hidePopover() {
        this.refs.buttonPopover.hide();
    }
    
    _onViewDetails() {
        this._hidePopover();
        this.props.onViewDetails(this.props.listItem.id);
    }

    render() {
        let wrapperClass = 'form-group';
        let deleteButton = null;
        if (this.props.hideDeleteButton) {
            deleteButton = null;
        } else {
            deleteButton = (<DndButton onClick={this._onDelete} buttonType="delete" />);
        }
        let detailsButton = null;
        if (this.props.showDetailsButton) {
            detailsButton = (<DndButton onClick={this._onViewDetails} buttonType="view" />);
        } else {
            detailsButton = null;
        }
        const popoverButtons = (
            <Popover id="options-popover">
                <ButtonGroup>
                    {deleteButton}
                    {detailsButton}
                    <DndButton onClick={this._onEdit} buttonType="edit" />
                </ButtonGroup>
            </Popover>
        );
        return (
            <div className={wrapperClass}>
                <div className="pull-right">
                    <OverlayTrigger trigger="click" rootClose placement="left" overlay={popoverButtons} ref="buttonPopover">
                        <DndButton buttonType="hamburger" />
                    </OverlayTrigger>
                </div>
            </div>
        );
    }
}

DndListItemButtonBar.propTypes = {
    listItem: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func,
    onViewDetails: PropTypes.func,
    hideDeleteButton: PropTypes.bool,
    showDetailsButton: PropTypes.bool
};

export default DndListItemButtonBar;
