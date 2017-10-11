import React from 'react';
import PropTypes from 'prop-types';
import DndButton from '../../common/buttons/DndButton';
import PicklistItemRow from './PicklistItemRow';

class PicklistForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._onAdd = this._onAdd.bind(this);
        this.setFocus = this.setFocus.bind(this);
    }
    
    componentDidMount() {
        this.setFocus();
    }
    
    setFocus() {
        this.refs.newPicklistItem.focus();
    }
    
    _onAdd(event) {
        event.preventDefault();
        this.props.addPicklistItem(this.props.picklistItem);
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="newPicklistItem">Add Picklist Item</label>
                        <div className="input-group">
                            <input type="text" name="newPicklistItem" ref="newPicklistItem" className="form-control" onChange={this.props.onChange} />
                            <span className="input-group-btn">
                                <DndButton
                                    buttonType="additem"
                                    onClick={this._onAdd} />
                            </span>
                        </div>
                    </div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.picklist.items.map(item =>
                                                               <PicklistItemRow key={item.id}
                                                                   picklistItem={item}
                                                                   removePicklistItem={this.props.removePicklistItem} />
                                  )}
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        );
    }
}

PicklistForm.propTypes = {
    picklist: PropTypes.object.isRequired,
    picklistItem: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    addPicklistItem: PropTypes.func.isRequired,
    removePicklistItem: PropTypes.func.isRequired
};

export default PicklistForm;