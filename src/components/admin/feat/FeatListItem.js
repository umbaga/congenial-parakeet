import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DndListItemButtonBar from '../../common/buttons/DndListItemButtonBar';
import * as featActions from '../../../actions/admin/featActions';
//import util from '../../../util/util';

class FeatListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedId: this.props.selectedId
        };
        this.editFeat = this.editFeat.bind(this);
        this.deleteFeat = this.deleteFeat.bind(this);
        this.viewFeatDetails = this.viewFeatDetails.bind(this);
    }
    editFeat() {
        event.preventDefault();
        this.props.openModal();
        this.props.changeSelectedId(this.props.feat.id);
        this.props.onEdit();
        this.setState({selectedId: this.props.feat.id, canEdit: true});
    }
    deleteFeat() {
        event.preventDefault();
        if (confirm('are you sure?')) {
            this.props.actions.deleteFeat(this.props.feat);
        }
    }
    viewFeatDetails() {
        event.preventDefault();
        this.props.openModal();
        this.props.changeSelectedId(this.props.feat.id);
        this.props.onViewDetails();
        this.setState({selectedId: this.props.feat.id, canEdit: false});
    }
    render() {
        return (
            <tr key={this.props.feat.id}>
                <td width="90%">{this.props.feat.name}</td>
                <td width="10%">
                    <DndListItemButtonBar
                        listItem={this.props.feat}
                        onEdit={this.editFeat}
                        onDelete={this.deleteFeat}
                        onViewDetails={this.viewFeatDetails}
                        showDetailsButton />
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {feat: ownProps.feat};
}

FeatListItem.propTypes = {
    feat: PropTypes.object.isRequired,
    actions: PropTypes.object,
    changeSelectedId: PropTypes.func.isRequired,
    onEdit: PropTypes.func,
    onViewDetails: PropTypes.func,
    openModal: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(featActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatListItem);