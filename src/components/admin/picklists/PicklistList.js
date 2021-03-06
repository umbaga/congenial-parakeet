import React from 'react';
import PropTypes from 'prop-types';
import PicklistListItem from './PicklistListItem';

class PicklistList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <tbody>
                {this.props.picklists.map(function(picklist, idx) {
                    return (
                        <PicklistListItem
                            key={idx}
                            picklist={picklist}
                            openModal={this.props.openModal}
                            selectedId={this.props.selectedId}
                            changeSelectedId={this.props.changeSelectedId}
                            onEdit={this.props.onEdit}
                            />
                    );
                }.bind(this))}
            </tbody>
        );
    }
}

PicklistList.propTypes = {
    picklists: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired,
    onEdit: PropTypes.func
};

export default PicklistList;