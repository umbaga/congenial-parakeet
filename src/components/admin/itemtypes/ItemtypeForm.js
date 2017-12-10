import React from 'react';
import PropTypes from 'prop-types';
import DndInput from '../../common/inputs/DndInput';
import util from '../../../util/util';

class ItemtypeForm extends React.Component {
    constructor(props) {
        super(props);
        this.setFocus = this.setFocus.bind(this);
    }
    
    componentDidMount() {
        this.refs.name.setFocus();
    }
    
    setFocus() {
        this.refs.name.setFocus();
    }
    
    render() {
        return (
            <div>
                <form>
                    <div className="modal-no-tabs">
                        <DndInput
                            name="name"
                            ref="name"
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
                        <DndInput
                            name="isDescription"
                            label="Is Description"
                            dataType={util.dataTypes.bool.YES_NO}
                            checked={this.props.itemtype.isDescription}
                            onChange={this.props.onChange} />
                        <DndInput
                            name="isChart"
                            label="Is Chart"
                            dataType={util.dataTypes.bool.YES_NO}
                            checked={this.props.itemtype.isChart}
                            onChange={this.props.onChange} />
                    </div>
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