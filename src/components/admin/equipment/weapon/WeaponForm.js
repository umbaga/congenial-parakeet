import React from 'react';
import PropTypes from 'prop-types';
import DndDataEntryButtonBar from '../../../common/DndDataEntryButtonBar';
import DndInput from '../../../common/DndInput';
import util from '../../../../util/util';

class WeaponForm extends React.Component {
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
                    <DndInput
                        name="name"
                        label="Name"
                        dataType={util.dataTypes.string.STRING}
                        value={this.props.weapon.name}
                        onChange={this.props.onChange} />
                    <DndInput
                        name="cost"
                        label="Cost"
                        dataType={util.dataTypes.number.COIN}
                        value={this.props.weapon.cost}
                        onChange={this.props.onChange} />
                    <DndInput
                        name="weight"
                        label="Weight"
                        dataType={util.dataTypes.number.WEIGHT}
                        value={this.props.weapon.weight}
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

WeaponForm.propTypes = {
    weapon: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onSaveNew: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    isCreate: React.PropTypes.bool.isRequired,
    saving: React.PropTypes.bool
};

export default WeaponForm;