import React from 'react';
import PropTypes from 'prop-types';

const DndButton = ({onClick, buttonType}) => {
    let bootstrapStyle = 'btn btn-';
    let fontawesomeStyle = 'fa fa-';
    let extraText = '';
    switch(buttonType.toLowerCase()) {
        case 'edit':
            fontawesomeStyle += 'edit';
            bootstrapStyle += 'primary';
            break;
        case 'cancel':
            fontawesomeStyle += 'ban';
            bootstrapStyle += 'primary';
            break;
        case 'delete':
            fontawesomeStyle += 'trash-o';
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
        case 'hamburger':
            fontawesomeStyle += 'bars';
            bootstrapStyle += 'primary';
            break;
        case 'create':
            fontawesomeStyle += 'file-text-o';
            bootstrapStyle += 'primary';
            break;
        default:
            fontawesomeStyle += 'cog';
            bootstrapStyle += 'primary';
    }
    return (
        <button onClick={onClick} className={bootstrapStyle}>
            <i className={fontawesomeStyle}></i>{extraText}
        </button>
    );
};

DndButton.propTypes = {
    buttonType: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default DndButton;