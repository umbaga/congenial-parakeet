import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const DndButton = ({onClick, buttonType, isBadge}) => {
    let bootstrapStyle = '';
    let fontawesomeStyle = 'fa fa-';
    let extraText = '';
    let extraClasses = '';
    if (isBadge) {
        extraClasses += ' badge ';
    }
    switch (buttonType.toLowerCase()) {
        case 'additem':
            fontawesomeStyle += 'plus-circle';
            bootstrapStyle += 'default';
            break;
        case 'back':
            fontawesomeStyle += 'angle-left';
            bootstrapStyle += 'default';
            break;
        case 'cancel':
            fontawesomeStyle += 'ban';
            bootstrapStyle += 'primary';
            break;
        case 'collapse':
            fontawesomeStyle += 'caret-up';
            bootstrapStyle += 'default';
            break;
        case 'create':
            fontawesomeStyle += 'file-text-o';
            bootstrapStyle += 'primary';
            break;
        case 'delete':
            fontawesomeStyle += 'trash-o';
            bootstrapStyle += 'primary';
            break;
        case 'edit':
            fontawesomeStyle += 'edit';
            bootstrapStyle += 'primary';
            break;
        case 'expand':
            fontawesomeStyle += 'caret-down';
            bootstrapStyle += 'default';
            break;
        case 'hamburger':
            fontawesomeStyle += 'bars';
            bootstrapStyle += 'primary';
            break;
        case 'removeitem':
            fontawesomeStyle += 'minus-circle';
            bootstrapStyle += 'default';
            break;
        case 'reset':
            fontawesomeStyle += 'undo';
            bootstrapStyle += 'primary';
            break;
        case 'save':
            fontawesomeStyle += 'floppy-o';
            bootstrapStyle += 'primary';
            break;
        case 'savenew':
            fontawesomeStyle += 'floppy-o';
            bootstrapStyle += 'primary';
            extraText += '+';
            break;
        case 'search':
            fontawesomeStyle += 'search';
            bootstrapStyle += 'default';
            break;
        case 'view':
            fontawesomeStyle += 'eye';
            bootstrapStyle += 'primary';
            break;
        default:
            fontawesomeStyle += 'cog';
            bootstrapStyle += 'primary';
    }
    return (
        <Button bsStyle={bootstrapStyle} onClick={onClick}>
            <i className={fontawesomeStyle + extraClasses}></i>{extraText}
        </Button>
    );
};

DndButton.propTypes = {
    buttonType: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isBadge: PropTypes.bool
};

export default DndButton;