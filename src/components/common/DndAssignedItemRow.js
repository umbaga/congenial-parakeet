import React from 'react';
import PropTypes from 'prop-types';
import DndButton from './DndButton';

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
        this.props.removeItem(this.props.item);
    }
    
    _onChange(event) {
        this.props.changeCount(event, this.props.item);
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
        return (
            <tr>
                <td>{this.props.item.name}</td>
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
    changeCount: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    showCount: PropTypes.bool,
    supplementalText: PropTypes.string
};

export default DndAssignedItemRow;