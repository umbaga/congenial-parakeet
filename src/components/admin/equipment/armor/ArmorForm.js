import React from 'react';
import PropTypes from 'prop-types';
import DndDataEntryButtonBar from '../../../common/DndDataEntryButtonBar';
import DndInput from '../../../common/DndInput';
import util from '../../../../util/util';

class ArmorForm extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const isCreate = this.props.isCreate;
        
        let proficiencyPicklist = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.ARMOR_PROFICIENCY);
        
        return (
            <div>
                <form>
                    <div>ARMOR FORM</div>
                    <DndDataEntryButtonBar
                        onSave={this.props.onSave} 
                        onSaveNew={this.props.onSaveNew}
                        onCancel={this.props.onCancel}
                        onDelete={this.props.onDelete}
                        isCreate={this.props.isCreate} />
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                </form>
            </div>
        );
    }
}
/*
                    <div className="col-md-12">
                        <DndInput
                            name="name"
                            label="Name"
                            dataType={util.dataTypes.string.STRING}
                            value={this.props.armor.name}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="cost"
                            label="Cost"
                            dataType={util.dataTypes.number.COIN}
                            value={this.props.armor.cost}
                            onChange={this.props.onChange} />
                    </div>
*/

ArmorForm.propTypes = {
    armor: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onSaveNew: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    isCreate: React.PropTypes.bool.isRequired,
    saving: React.PropTypes.bool,
    picklists: PropTypes.array
};

export default ArmorForm;