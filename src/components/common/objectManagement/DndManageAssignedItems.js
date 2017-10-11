import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';
import DndInputWrapper from '../inputs/DndInputWrapper';
import DndButton from '../buttons/DndButton';
import DndAssignedItemRow from '../subcomponents/DndAssignedItemRow';

class DndManageAssignedItems extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._addItem = this._addItem.bind(this);
        this.renderItemList = this.renderItemList.bind(this);
        this.renderListHead = this.renderListHead.bind(this);
        this.renderListColumns = this.renderListColumns.bind(this);
        this.renderSelectDisplayText = this.renderSelectDisplayText.bind(this);
    }
    
    _addItem() {
        this.props.addItem();
    }
    
    renderListHead() {
        const count = this.props.showCount ? (
            <th>Count</th>
        ) : null;
        return (
            <thead>
                <tr>
                    <th>{this.props.itemListTitle}</th>
                    {count}
                    <th></th>
                    <th></th>
                </tr>
            </thead>
        );
    }
    
    renderListColumns() {
        return this.props.showCount ? (
            <colgroup>
                <col width="50%"></col>
                <col width="25%"></col>
                <col width="15%"></col>
                <col width="10%"></col>
            </colgroup>
        ) : (
            <colgroup>
                <col width="70%"></col>
                <col width="20%"></col>
                <col width="10%"></col>
            </colgroup>
        );
    }
    
    renderItemList() {
        const itemList = this.props.valueArray.length == 0 ? null : (
            <div>
                <table>
                    {this.renderListColumns()}
                    {this.renderListHead()}
                    <tbody>
                        {this.props.valueArray.map(item =>
                            <DndAssignedItemRow
                                key={item.id}
                                item={item}
                                changeCount={this.props.changeCount}
                                removeItem={this.props.removeItem}
                                showCount={this.props.showCount}
                                supplementalText={this.props.supplementalText}
                                />
                        )}
                    </tbody>
                </table>
            </div>
        );
        return itemList;
    }
    
    renderSelectDisplayText(item, dataType) {
        switch (dataType) {
            case util.dataTypes.array.ASSIGNED_EQUIPMENT:
                return util.format.forDisplay.obj.equipmentName(item);
            default:
                return item.name;
        }
    }
    
    render() {

        return (
            <DndInputWrapper
                label={this.props.label}
                dataType={this.props.dataType}
                inputCols={this.props.inputCols}
                labelCols={this.props.labelCols}
                >
                <div>
                    <div className="input-group">
                        <select
                            name={this.props.name}
                            className="form-control"
                            onChange={this.props.onChange}
                            datatype={util.dataTypes.obj.EQUIPMENT}
                            >
                            <option value="0">SELECT ONE</option>
                            {util.picklistInfo.filterPicklistByAssigned(this.props.picklist, this.props.valueArray).map(item =>
                                                     <option
                                                         key={item.id}
                                                         value={item.id}>
                                                         {this.renderSelectDisplayText(item, this.props.dataType)}
                                                     </option>)}
                        </select>
                        <span className="input-group-btn">
                            <DndButton
                                buttonType="additem"
                                onClick={this._addItem}
                                />
                        </span>
                    </div>
                    {this.renderItemList()}
                </div>
            </DndInputWrapper>
        );
    }
}

DndManageAssignedItems.propTypes = {
    inputCols: PropTypes.number,
    labelCols: PropTypes.number,
    dataType: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    picklist: PropTypes.array,
    value: PropTypes.string,
    valueArray: PropTypes.array,
    valueObj: PropTypes.object,
    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    changeCount: PropTypes.func,
    showCount: PropTypes.bool,
    supplementalText: PropTypes.string,
    itemListTitle: PropTypes.string.isRequired
};

export default DndManageAssignedItems;