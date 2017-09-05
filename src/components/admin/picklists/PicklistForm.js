import React from 'react';
import PropTypes from 'prop-types';
import DndDataEntryButtonBar from '../../common/DndDataEntryButtonBar';
import DndButton from '../../common/DndButton';
import util from '../../../util/util';
import PicklistItemRow from './PicklistItemRow';

class PicklistForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._onAdd = this._onAdd.bind(this);
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
                            <input type="text" name="newPicklistItem" className="form-control" onChange={this.props.onChange} />
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
    picklist: React.PropTypes.object.isRequired,
    picklistItem: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    addPicklistItem: React.PropTypes.func.isRequired,
    removePicklistItem: React.PropTypes.func.isRequired
};

export default PicklistForm;