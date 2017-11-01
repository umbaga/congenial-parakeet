import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';
import DndInput from './DndInput';

class DndUniversalInput extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    
    setFocus() {
        this.refs.name.refs.name.focus();
    }
    
    render() {
        const resourcePicklist = this.props.picklists ? util.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.RESOURCE) : null;
        const resourceLabel = this.props.labelPrefix && this.props.labelPrefix.length != 0 ? this.props.labelPrefix + ' Resource' : 'Resource';
        const nameLabel = this.props.labelPrefix && this.props.labelPrefix.length != 0 ? this.props.labelPrefix + ' Name' : 'Name';
        const descriptionLabel = this.props.labelPrefix && this.props.labelPrefix.length != 0 ? this.props.labelPrefix + ' Description' : 'Description';
        const resourceInput = this.props.picklists ? (
            <div className="col-md-12">
                <DndInput
                    name="resource"
                    label={resourceLabel}
                    dataType={util.dataTypes.picklist.RESOURCE}
                    valueObj={this.props.referenceObject.resource}
                    onChange={this.props.onChange}
                    picklist={resourcePicklist}
                    />
            </div>
        ) : null;
        const descriptionInput = this.props.hideDescription ? null : (
            <div className="col-md-12">
                <DndInput
                    name="description"
                    label={descriptionLabel}
                    dataType={util.dataTypes.string.DESCRIPTION}
                    value={this.props.referenceObject.description}
                    onChange={this.props.onChange}
                    />
            </div>
        );
        return (
            <div className="col-md-12">
                <div className="col-md-12">
                    <DndInput
                        name="name"
                        ref="name"
                        label={nameLabel}
                        dataType={util.dataTypes.string.STRING}
                        value={this.props.referenceObject.name}
                        onChange={this.props.onChange}
                        />
                </div>
                {resourceInput}
                {descriptionInput}
            </div>
        );
    }
}

DndUniversalInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    picklists: PropTypes.array,
    referenceObject: PropTypes.object.isRequired,
    labelPrefix: PropTypes.string,
    hideDescription: PropTypes.bool
};

export default DndUniversalInput;