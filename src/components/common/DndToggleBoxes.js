import React from 'react';
import PropTypes from 'prop-types';
import util from '../../util/util';

class DndToggleBoxes extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        let idKey = 'id';
        let textKey = 'name';
        let selectBoxSize = 10;
        return (
            <div>
                <div className="col-sm-5">
                    <select
                        name={this.props.name + 'Unassigned'}
                        multiple
                        size={selectBoxSize}
                        datatype={this.props.dataType}
                        onDoubleClick={this.props.toggleAddItem}>
                        {util.picklistInfo.filterPicklistByAssigned(this.props.unselectedItemArray, this.props.selectedItemArray).map(picklistItem =>
                                                                                                                    <option
                                                                                                                        key={picklistItem[idKey]}
                                                                                                                        value={picklistItem[idKey]}>
                                                                                                                        {picklistItem[textKey]}
                                                                                                                    </option>)}
                    </select>
                </div>
                <div className="col-sm-2">
                    TEST
                </div>
                <div className="col-sm-5">
                    <select
                        name={this.props.name}
                        multiple
                        size={selectBoxSize}
                        datatype={this.props.dataType}
                        onDoubleClick={this.props.toggleRemoveItem}>
                        {this.props.selectedItemArray.map(picklistItem =>
                                                   <option
                                                       key={picklistItem[idKey]}
                                                       value={picklistItem[idKey]}>
                                                       {picklistItem[textKey]}
                                                   </option>)}
                    </select>
                </div>
            </div>
        );
    }
}

DndToggleBoxes.propTypes = {
    dataType: PropTypes.string.isRequired,
    toggleAddItem: PropTypes.func.isRequired,
    toggleRemoveItem: PropTypes.func.isRequired,
    unselectedItemArray: PropTypes.array.isRequired,
    selectedItemArray: PropTypes.array.isRequired,
    listOptionValueKey: PropTypes.string,
    listOptionTextKey: PropTypes.string,
    selectBoxSize: PropTypes.number,
    name: PropTypes.string.isRequired
};

export default DndToggleBoxes;