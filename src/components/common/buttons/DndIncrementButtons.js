import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from 'react-bootstrap';

class DndIncrementButtons extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._moveItem = this._moveItem.bind(this);
    }
    
    _moveItem(event) {
        this.props.onMoveItem(event, this.props.item, true);
    }
    
    render() {
        let wrapperClass = 'input-group {line-height: 10px}';
        const downDisabled = this.props.item.orderIndex == this.props.items.length - 1;
        const upDisabled = this.props.item.orderIndex == 0;
        return (
            <div className={wrapperClass}>
                <ButtonGroup className="btn-group-vertical">
                    <Button bsStyle="default" onClick={this._moveItem} className="button-increment" disabled={upDisabled} datatype={this.props.moveItemUpAction}>
                        <i className="fa fa-caret-up"></i>
                    </Button>
                    <Button bsStyle="default" onClick={this._moveItem} className="button-increment" disabled={downDisabled} datatype={this.props.moveItemDownAction}>
                        <i className="fa fa-caret-down"></i>
                    </Button>
                </ButtonGroup>
            </div>
        );
    }
}

DndIncrementButtons.propTypes = {
    item: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    onMoveItem: PropTypes.func.isRequired,
    downIcon: PropTypes.string,
    upIcon: PropTypes.string,
    moveItemDownAction: PropTypes.string,
    moveItemUpAction: PropTypes.string
};

export default DndIncrementButtons;
