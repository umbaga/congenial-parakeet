import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../common/TextInput';
import CheckBox from '../../common/CheckBox';
import DataEntryButtonBar from '../../common/DataEntryButtonBar';

class ItemtypeForm extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const isCreate = this.props.isCreate;
        let deleteButton = null;
        if(!isCreate) {
            deleteButton = <button onClick={this.props.onDelete} className="btn btn-default  ">Delete</button>;
        }
        return (
            <div>
                <form>
                    <TextInput
                        name="name"
                        label="Name"
                        value={this.props.itemtype.name}
                        onChange={this.props.onChange} />
                    <CheckBox
                        name="isPicklist"
                        label="Is Picklist"
                        checked={this.props.itemtype.isPicklist}
                        onChange={this.props.onChange} />
                    <DataEntryButtonBar
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