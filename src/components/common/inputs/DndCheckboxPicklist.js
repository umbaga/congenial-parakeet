import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';
import DndInputWrapper from './DndInputWrapper';
import DndButton from '../buttons/DndButton';

class DndCheckboxPicklist extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.renderNotSelectedItem = this.renderNotSelectedItem.bind(this);
        this.renderButton = this.renderButton.bind(this);
    }
    
    renderNotSelectedItem() {
        return this.props.checked ? (
            <option value="0">SELECT ONE</option>
        ) : (
            <option value="0">Check the checkbox</option>
        );
    }
    
    renderButton() {
        return this.props.onClick ? (
            <span className="input-group-btn">
                <DndButton
                    buttonType="additem"
                    onClick={this.props.onClick}
                    />
            </span>
        ) : null;
    }
    render() {
        let finalInput = (
            <div className="input-group">
                <span className="input-group-addon">
                    <input
                        type="checkbox"
                        name={this.props.checkboxName}
                        ref={this.props.checkboxName}
                        checked={this.props.checked}
                        datatype={util.dataTypes.bool.BOOL}
                        onChange={this.props.onChange}
                        className="checkbox-inline" />
                </span>
                <select
                    value={this.props.valueObj.id}
                    name={this.props.picklistName}
                    ref={this.props.picklistName}
                    className="form-control"
                    onChange={this.props.onChange}
                    datatype={this.props.dataType}>
                        {this.renderNotSelectedItem()}
                        {this.props.picklist.filter(function() {
                            return this.props.checked;
                        }.bind(this)).map(picklistItem =>
                                          <option
                                              key={picklistItem.id}
                                              value={picklistItem.id}>
                                              {picklistItem.name}
                                          </option>)}
                </select>
                {this.renderButton()}
            </div>
        );
        
        return (
            <DndInputWrapper
                label={this.props.label}
                dataType={this.props.dataType}
                inputCols={this.props.inputCols}
                labelCols={this.props.labelCols}
                >
                    {finalInput}
            </DndInputWrapper>
        );
    }
}

DndCheckboxPicklist.propTypes = {
    checked: PropTypes.bool,
    dataType: PropTypes.string.isRequired,
    inputCols: PropTypes.number,
    label: PropTypes.string.isRequired,
    labelCols: PropTypes.number,
    checkboxName: PropTypes.string.isRequired,
    picklistName: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    picklist: PropTypes.array,
    valueObj: PropTypes.object,
    onClick: PropTypes.func
};

export default DndCheckboxPicklist;