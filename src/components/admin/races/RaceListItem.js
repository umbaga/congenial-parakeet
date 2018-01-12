import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DndListItemButtonBar from '../../common/buttons/DndListItemButtonBar';
import * as raceActions from '../../../actions/admin/raceActions';
import util from '../../../util/util';

class RaceListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedId: this.props.selectedId
        };
        this.editRace = this.editRace.bind(this);
        this.deleteRace = this.deleteRace.bind(this);
        this.viewRaceDetails = this.viewRaceDetails.bind(this);
        this.renderNameCell = this.renderNameCell.bind(this);
        this.renderIndentation = this.renderIndentation.bind(this);
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
    
    renderNameCell(race) {
        let cellWidth = (race.parent.id == 0) ? '90%' : '88%';
        let colspan = (race.parent.id == 0) ? '2' : '1';
        return (<td colSpan={colspan} width={cellWidth}>{this.props.race.name}</td>);
    }
    
    renderIndentation(race) {
        return (race.parent.id == 0) ? null : (
            <td width="2%">{util.unicode.punctuation.longDash}</td>
        );
    }
    
    render() {
        const race = this.props.race;
        return (
            <tr key={this.props.race.id}>
                {this.renderIndentation(race)}
                {this.renderNameCell(race)}
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