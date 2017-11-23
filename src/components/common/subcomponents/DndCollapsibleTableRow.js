import React from 'react';
import PropTypes from 'prop-types';
import DndButton from '../buttons/DndButton';
import DndListItemButtonBar from '../buttons/DndListItemButtonBar';
import DndIncrementButtons from '../buttons/DndIncrementButtons';
import { Panel } from 'react-bootstrap';

class DndCollapsibleTableRow extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        const item = this.props.item;
        const items = this.props.items;
        return (
            <tr key={item.id}>
                <td>
                    <DndButton
                        buttonType={item.id == this.props.showThisId ? 'collapse' : 'expand'}
                        onClick={this.props.boundClick}
                        />
                </td>
                <td>
                    {item.title}
                    <Panel collapsible expanded={this.props.showThisId == item.id}>
                        <table>
                            {this.props.children}
                        </table>
                    </Panel>
                </td>
                <td>
                    <DndIncrementButtons
                        item={item}
                        items={items}
                        onMoveItem={this.props.onChangeOrder}
                        />
                </td>
                <td>
                    <DndListItemButtonBar
                        listItem={item}
                        onEdit={this.props.onSelectItem}
                        onDelete={this.props.onRemoveItem}
                        />
                </td>
            </tr>
        );
    }
}

DndCollapsibleTableRow.propTypes = {
    children: PropTypes.object,
    item: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    onChangeOrder: PropTypes.func.isRequired,
    onSelectItem: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
    boundClick: PropTypes.func.isRequired,
    showThisId: PropTypes.number
};

export default DndCollapsibleTableRow;