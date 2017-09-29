import React from 'react';
import PropTypes from 'prop-types';
import DndDataEntryButtonBar from '../../common/DndDataEntryButtonBar';
import DndInput from '../../common/DndInput';
import util from '../../../util/util';

class BackgroundForm extends React.Component {
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
                    <div className="col-md-12">
                        <DndInput
                            name="name"
                            ref="name"
                            label="Name"
                            dataType={util.dataTypes.string.STRING}
                            value={this.props.background.name}
                            onChange={this.props.onChange} />
                    </div>
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

BackgroundForm.propTypes = {
    background: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onSaveNew: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    isCreate: PropTypes.bool.isRequired,
    saving: PropTypes.bool,
    picklists: PropTypes.array
};

export default BackgroundForm;