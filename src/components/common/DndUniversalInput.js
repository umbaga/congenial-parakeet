import React from 'react';
import PropTypes from 'prop-types';
import util from '../../util/util';
import DndInput from './DndInput';

class DndUniversalInput extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    
    setFocus() {
        this.refs.name.refs.name.focus();
    }
    
    render() {
        const resourcePicklist = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.RESOURCE);
        return (
            <div className="col-md-12">
                <div className="col-md-12">
                    <DndInput
                        name="name"
                        ref="name"
                        label="Name"
                        dataType={util.dataTypes.string.STRING}
                        value={this.props.referenceObject.name}
                        onChange={this.props.onChange}
                        />
                </div>
                <div className="col-md-12">
                    <DndInput
                        name="resource"
                        label="Resource"
                        dataType={util.dataTypes.picklist.RESOURCE}
                        valueObj={this.props.referenceObject.resource}
                        onChange={this.props.onChange}
                        picklist={resourcePicklist}
                        />
                </div>
                <div className="col-md-12">
                    <DndInput
                        name="description"
                        label="Description"
                        dataType={util.dataTypes.string.DESCRIPTION}
                        value={this.props.referenceObject.description}
                        onChange={this.props.onChange}
                        />
                </div>
            </div>
        );
    }
}

DndUniversalInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    picklists: PropTypes.array.isRequired,
    referenceObject: PropTypes.object.isRequired
};

export default DndUniversalInput;