import React from 'react';
import PropTypes from 'prop-types';
import DndInputWrapper from './DndInputWrapper';
import DndButton from '../buttons/DndButton';

class DndPicklistAddSelect extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isSelectMode: true
        };
        this._onClick = this._onClick.bind(this);
        this._onSave = this._onSave.bind(this);
        this._onCancel = this._onCancel.bind(this);
        this.toggleMode = this.toggleMode.bind(this);
        this.renderInput = this.renderInput.bind(this);
        this.renderButtons = this.renderButtons.bind(this);
    }

    toggleMode() {
        this.setState({isSelectMode: !this.state.isSelectMode});
    }
    
    _onClick() {
        if (typeof this.props.addItemOnClick === 'function') {
            this.props.addItemOnClick();
        }
        this.toggleMode();
    }
    
    _onSave() {
        if (typeof this.props.saveButtonOnClick === 'function') {
            this.props.saveButtonOnClick();
        }
        this.toggleMode();
    }
    
    _onCancel() {
        if (typeof this.props.cancelButtonOnClick === 'function') {
            this.props.cancelButtonOnClick();
        }
        this.toggleMode();
    }
    
    renderInput() {
        return this.state.isSelectMode ? (
            <select
                value={this.props.valueObj.id}
                name={this.props.name}
                ref={this.props.name}
                className="form-control"
                onChange={this.props.onChange}
                datatype={this.props.dataType}>
                <option value="0">SELECT ONE</option>
                {this.props.picklist.map(picklistItem =>
                                         <option
                                             key={picklistItem.id}
                                             value={picklistItem.id}>
                                             {picklistItem.name}
                                         </option>)}
            </select>
        ) : (
            <input type="text"
                className="form-control"/>
        );
    }
    
    renderButtons() {
        const addItemButtonType = this.props.addItemButtonType && this.props.addItemButtonType.length != 0 ? this.props.addItemButtonType : 'create';
        const saveButtonType = this.props.saveButtonType && this.props.saveButtonType.length != 0 ? this.props.saveButtonType : 'save';
        const cancelButtonType = this.props.cancelButtonType && this.props.cancelButtonType.length != 0 ? this.props.cancelButtonType : 'cancel';
        let finalAddItemButtonStyle = '';
        let finalSaveButtonStyle = '';
        let finalCancelButtonItemStyle = '';
        if (this.props.bsAddItemButtonStyle && this.props.bsAddItemButtonStyle.length != 0) {
            finalAddItemButtonStyle = this.props.bsAddItemButtonStyle;
        } else if (this.props.bsButtonStyle && this.props.bsButtonStyle.length != 0) {
            finalAddItemButtonStyle = this.props.bsButtonStyle;
        } else {
            finalAddItemButtonStyle = 'default';
        }
        if (this.props.bsSaveButtonStyle && this.props.bsSaveButtonStyle.length != 0) {
            finalSaveButtonStyle = this.props.bsSaveButtonStyle;
        } else if (this.props.bsButtonStyle && this.props.bsButtonStyle.length != 0) {
            finalSaveButtonStyle = this.props.bsButtonStyle;
        } else {
            finalSaveButtonStyle = 'primary';
        }
        if (this.props.bsCancelButtonStyle && this.props.bsCancelButtonStyle.length != 0) {
            finalCancelButtonItemStyle = this.props.bsCancelButtonStyle;
        } else if (this.props.bsButtonStyle && this.props.bsButtonStyle.length != 0) {
            finalCancelButtonItemStyle = this.props.bsButtonStyle;
        } else {
            finalCancelButtonItemStyle = 'default';
        }
        return this.state.isSelectMode ? (
            <span className="input-group-btn">
                <DndButton
                    buttonType={addItemButtonType}
                    onClick={this._onClick}
                    bsButtonStyle={finalAddItemButtonStyle}
                    />
            </span>
        ) : (
            <span className="input-group-btn">
                <DndButton
                    buttonType={cancelButtonType}
                    onClick={this._onCancel}
                    bsButtonStyle={finalCancelButtonItemStyle}
                    />
                <DndButton
                    buttonType={saveButtonType}
                    onClick={this._onSave}
                    bsButtonStyle={finalSaveButtonStyle}
                    />
            </span>
        );
    }
    
    render() {
        return (
            <DndInputWrapper
                label={this.props.label}
                dataType={this.props.dataType}
                inputCols={this.props.inputCols}
                labelCols={this.props.labelCols}
                >
                <div className="input-group">
                    {this.renderInput()}
                    {this.renderButtons()}
                </div>
            </DndInputWrapper>
        );
    }
}

DndPicklistAddSelect.propTypes = {
    dataType: PropTypes.string.isRequired,
    inputCols: PropTypes.string,
    labelCols: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    picklist: PropTypes.array.isRequired,
    valueObj: PropTypes.object,
    addItemButtonType: PropTypes.string,
    addItemOnClick: PropTypes.func,
    saveButtonType: PropTypes.string,
    saveButtonOnClick: PropTypes.func.isRequired,
    cancelButtonType: PropTypes.string,
    cancelButtonOnClick: PropTypes.string,
    bsButtonStyle: PropTypes.string,
    bsAddItemButtonStyle: PropTypes.string,
    bsSaveButtonStyle: PropTypes.string,
    bsCancelButtonStyle: PropTypes.string
};

export default DndPicklistAddSelect;