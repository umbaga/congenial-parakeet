import React from 'react';
import PropTypes from 'prop-types';
import util from '../../util/util';

class DndInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        
    }

    render() {
        let wrapperClass = 'form-group form-horizontal row';

        let primaryInput = null;
        
        let finalLabelCols = 3;
        if(this.props.labelCols) {
            finalLabelCols = this.props.labelCols;
        }
        let finalInputCols = 12 - finalLabelCols;
        if(this.props.inputCols) {
            finalInputCols = this.props.inputCols;
        }
        switch(this.props.dataType) {
            case util.dataTypes.bool.YES_NO:
                finalInputCols = 1;
                primaryInput = (<input
                                    type="checkbox"
                                    name={this.props.name}
                                    checked={this.props.checked}
                                    datatype={this.props.dataType}
                                    onChange={this.props.onChange}
                                    className="form-control checkbox-inline"  />);
                break;
            case util.dataTypes.string.STRING:
                primaryInput = (<input
                                    type="text"
                                    name={this.props.name}
                                    placeholder={this.props.placeholder}
                                    value={this.props.value}
                                    datatype={this.props.dataType}
                                    onChange={this.props.onChange}
                                    className="form-control" />);
                break;
            case util.dataTypes.number.COIN:
            case util.dataTypes.number.WEIGHT:
                primaryInput = (<input
                                    type="number"
                                    name={this.props.name}
                                    placeholder={this.props.placeholder}
                                    value={this.props.value}
                                    datatype={this.props.dataType}
                                    onChange={this.props.onChange}
                                    className="form-control" />);
                break;
        }

        let labelClass = 'col-sm-' + finalLabelCols + ' control-label';
        let inputDivClass = 'field col-sm-' + finalInputCols + '';
        
        return (
            <div className={wrapperClass}>
                <div className="align-middle">
                    <label htmlFor={this.props.name} className={labelClass}>{this.props.label}</label>
                </div>
                <div className={inputDivClass}>
                    {primaryInput}
                </div>
            </div>
        );
    }
}
/*
                primaryInput = (<input
                                    type="text"
                                    name={this.props.name}
                                    placeholder={this.props.placeholder}
                                    value={this.props.value}
                                    datatype={this.props.dataType}
                                    onKeyDown={this.props.onChange}
                                    className="form-control" />);*/
DndInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    dataType: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    labelCols: PropTypes.number,
    inputCols: PropTypes.number,
    checked: PropTypes.bool,
    value: PropTypes.string,
    valueObj: PropTypes.object,
    placeholder: PropTypes.string
};

export default DndInput;