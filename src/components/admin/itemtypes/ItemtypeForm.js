import React from 'react';
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
    itemtype: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onSaveNew: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    isCreate: React.PropTypes.bool.isRequired,
    saving: React.PropTypes.bool
};

export default ItemtypeForm;