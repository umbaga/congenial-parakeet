import React from 'react';
import PropTypes from 'prop-types';
import DndButton from './DndButton';
import { ButtonGroup } from 'react-bootstrap';

class ListItemButtonBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._onEdit = this._onEdit.bind(this);
        this._onDelete = this._onDelete.bind(this);
    }

    _onEdit() {
        this.props.onEdit(this.props.listItem.id);
    }

    _onDelete() {
        this.props.onDelete(this.props.listItem.id);
    }

    render() {
        let wrapperClass = 'form-group';

        return (
            <div className={wrapperClass}>
                <div className="pull-right">
                    <ButtonGroup>
                        <DndButton onClick={this._onEdit} buttonType="edit" />
                        <DndButton onClick={this._onDelete} buttonType="delete" />
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

ListItemButtonBar.propTypes = {
    listItem: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default ListItemButtonBar;
