import React from 'react';
import PropTypes from 'prop-types';
import DndButton from '../buttons/DndButton';

class DndAssignedItemRow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._onRemove = this._onRemove.bind(this);
        this._onChange = this._onChange.bind(this);
        this.renderCount = this.renderCount.bind(this);
        this.renderSupplementalText = this.renderSupplementalText.bind(this);
    }
    
    _onRemove(event) {
        event.preventDefault();
        this.props.onRemoveItem(this.props.item);
    }
    
    _onChange(event) {
        this.props.onChangeCount(event, this.props.item);
    }
    
    renderCount() {
        return this.props.showCount ? (
            <td>
                <input
                    className="form-control"
                    width="50"
                    type="number"
                    value={this.props.item.assignedCount * this.props.item.count}
                    min={this.props.item.count}
                    step={this.props.item.count}
                    onChange={this._onChange}
                    />
            </td>
        ) : null;
        
    }
    /**/
    renderSupplementalText() {
        return this.props.supplementalText && this.props.supplementalText.length ? (
            <td>
                {this.props.item[this.props.supplementalText]}
            </td>
        ) : null;
    }
    /**/
    render() {
        const displayText = (this.props.displayValue && this.props.displayValue.length != 0) ? this.props.displayValue : this.props.item.name;
        return (
            <tr>
                <td>{displayText}</td>
                {this.renderCount()}
                {this.renderSupplementalText()}
                <td>
                    <DndButton
                        buttonType="removeitem"
                        onClick={this._onRemove}
                        />
                </td>
            </tr>
        );
    }
}

DndAssignedItemRow.propTypes = {
    item: PropTypes.object.isRequired,
    onChangeCount: PropTypes.func,
    onRemoveItem: PropTypes.func.isRequired,
    showCount: PropTypes.bool,
    supplementalText: PropTypes.string,
    displayValue: PropTypes.string
};

export default DndAssignedItemRow;