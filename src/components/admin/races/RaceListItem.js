import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DndListItemButtonBar from '../../common/buttons/DndListItemButtonBar';
import * as raceActions from '../../../actions/admin/raceActions';

class RaceListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedId: this.props.selectedId
        };
        this.editRace = this.editRace.bind(this);
        this.deleteRace = this.deleteRace.bind(this);
        this.viewRaceDetails = this.viewRaceDetails.bind(this);
    }
    editRace() {
        event.preventDefault();
        this.props.openModal();
        this.props.changeSelectedId(this.props.race.id);
        this.props.onEdit();
        this.setState({selectedId: this.props.race.id, canEdit: true});
    }
    deleteRace() {
        event.preventDefault();
        if (confirm('are you sure?')) {
            this.props.actions.deleteRace(this.props.race);
        }
    }
    viewRaceDetails() {
        event.preventDefault();
        this.props.openModal();
        this.props.changeSelectedId(this.props.race.id);
        this.props.onViewDetails();
        this.setState({selectedId: this.props.race.id, canEdit: false});
    }
    render() {
        return (
            <tr key={this.props.race.id}>
                <td width="90%">{this.props.race.name}</td>
                <td width="10%">
                    <DndListItemButtonBar
                        listItem={this.props.race}
                        onEdit={this.editRace}
                        onDelete={this.deleteRace}
                        onViewDetails={this.viewRaceDetails}
                        showDetailsButton />
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {race: ownProps.race};
}

RaceListItem.propTypes = {
    race: PropTypes.object.isRequired,
    actions: PropTypes.object,
    changeSelectedId: PropTypes.func.isRequired,
    onEdit: PropTypes.func,
    onViewDetails: PropTypes.func,
    openModal: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(raceActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RaceListItem);