import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({name, label, onChange, placeholder, checked, error, type="checkbox"}) => {
    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
        wrapperClass += " " + 'has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type={type}
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    checked={checked}
                    onChange={onChange}/>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    checked: PropTypes.bool,
    type: PropTypes.string,
    error: PropTypes.string
};

export default CheckBox;