import React from 'react';
import PropTypes from 'prop-types';
import DndDataEntryButtonBar from '../../common/DndDataEntryButtonBar';
import DndInput from '../../common/DndInput';
import util from '../../../util/util';

class ItemtypeForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form>
                    <DndInput
                        name="name"
                        label="Name"
                        dataType={util.dataTypes.string.STRING}
                        value={this.props.itemtype.name}
                        onChange={this.props.onChange} />
                    <DndInput
                        name="isPicklist"
                        label="Is Picklist"
                        dataType={util.dataTypes.bool.YES_NO}
                        checked={this.props.itemtype.isPicklist}
                        onChange={this.props.onChange} />
                    <DndDataEntryButtonBar
                        onSave={this.props.onSave}
                        onSaveNew={this.props.onSaveNew}
                        onCancel={this.props.onCancel}
                        onDelete={this.props.onDelete}
                        isCreate={this.props.isCreate}/>
                </form>
            </div>
        );
    }
}

ItemtypeForm.propTypes = {
    itemtype: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onSaveNew: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    isCreate: PropTypes.bool.isRequired,
    saving: PropTypes.bool
};

export default ItemtypeForm;