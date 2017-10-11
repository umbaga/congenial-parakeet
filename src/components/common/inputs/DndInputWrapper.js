import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';

class DndInputWrapper extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        let wrapperClass = 'form-group form-horizontal row';

        let finalLabelCols = 4;
        if (this.props.dataType == util.dataTypes.bool.BOOL
          || this.props.dataType == util.dataTypes.bool.HAS_DISADVANTAGE
          || this.props.dataType == util.dataTypes.bool.YES_NO) {
            finalLabelCols = 8;
        }
        if (this.props.labelCols) {
            finalLabelCols = this.props.labelCols;
        }
        if (this.props.dataType == util.dataTypes.bool.BOOL
          || this.props.dataType == util.dataTypes.bool.HAS_DISADVANTAGE
          || this.props.dataType == util.dataTypes.bool.YES_NO) {
            finalInputCols = 1;
        }
        let finalInputCols = 12 - finalLabelCols;
        if (this.props.inputCols) {
            finalInputCols = this.props.inputCols;
        }

        let labelClass = 'col-sm-' + finalLabelCols + ' control-label';
        let labelDivClass = 'align-middle';
        let inputDivClass = 'field col-sm-' + finalInputCols + '';
        return (
            <div className={wrapperClass}>
                <div className={labelDivClass}>
                    <label htmlFor={this.props.name} className={labelClass}>{this.props.label}</label>
                </div>
                <div className={inputDivClass}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

DndInputWrapper.propTypes = {
    children: PropTypes.object,
    dataType: PropTypes.string,
    inputCols: PropTypes.string,
    labelCols: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string
};

export default DndInputWrapper;