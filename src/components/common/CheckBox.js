import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({name, label, onChange, placeholder, checked, error, type="checkbox"}) => {
    let wrapperClass = 'form-group form-horizontal row checkbox-row hidey';
    if (error && error.length > 0) {
        wrapperClass += " " + 'has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name} className="col-sm-2 control-label">{label}</label>
            <div className="field col-sm-10 ">
                <input
                    type={type}
                    name={name}
                    className="vertical-align-middle"
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