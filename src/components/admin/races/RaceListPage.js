import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RaceList from './RaceList';
import RaceEntry from './RaceEntry';
import * as actions from '../../../actions/admin/raceActions';
import util from '../../../util/util';
import DndButton from '../../common/buttons/DndButton';

class RaceListPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            canEdit: true,
            isCreate: false,
            selectedId: 0,
            showModal: false,
            selectedLevel: -1,
            selectedSchoolId: 0
        };
        this.changeSelectedId = this.changeSelectedId.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.onCreate = this.onCreate.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onViewDetails = this.onViewDetails.bind(this);
    }

    componentWillMount() {
        if (this.props.races[0].id == '') {
            this.props.actions.loadRaces();
        }
    }

    backToAdminHome() {
        browserHistory.push('/Home');
    }

    changeSelectedId(newId) {
        this.setState({selectedId: parseInt(newId)});
    }
    
    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    onCreate() {
        this.changeSelectedId(0);
        this.open();
        this.setState({isCreate: true, selectedId: 0, canEdit: true});
    }

    onEdit() {
        this.setState({isCreate: false, canEdit: true});
    }
    
    onViewDetails() {
        this.setState({isCreate: false, canEdit: false});
    }
    
    render() {
        const races = this.props.races;
        const picklists = this.props.picklists;
        const proficiencies = this.props.proficiencies;
        const spells = this.props.spells;
        return (
            <div className="col-md-12">
                <div>
                    <table className="table table-sm table-striped table-hover">
                        <thead>
                            <tr>
                                <th colSpan="2">
                                    <h2><span><DndButton onClick={this.backToAdminHome} buttonType="back" /></span>Races</h2>
                                </th>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <th style={{paddingRight: '25px'}}>
                                    <div className="pull-right">
                                        <DndButton onClick={this.onCreate} buttonType="create" />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <RaceList
                            races={races}
                            openModal={this.open}
                            selectedId={this.state.selectedId}
                            changeSelectedId={this.changeSelectedId}
                            onEdit={this.onEdit}
                            onViewDetails={this.onViewDetails}
                            selectedLevel={this.state.selectedLevel}
                            selectedSchoolId={this.state.selectedSchoolId}
                            />
                    </table>
                </div>
                <RaceEntry
                    closeModal={this.close}
                    openModal={this.open}
                    races={races}
                    isCreate={this.state.isCreate}
                    canEdit={this.state.canEdit}
                    selectedId={this.state.selectedId}
                    picklists={picklists}
                    showModal={this.state.showModal}
                    onEdit={this.onEdit}
                    onViewDetails={this.onViewDetails}
                    proficiencies={proficiencies}
                    spells={spells}
                    />
            </div>
        );
    }
}
/*
                    */
                            
                            
RaceListPage.propTypes = {
    races: PropTypes.array.isRequired,
    actions: PropTypes.object,
    children: PropTypes.object,
    picklists: PropTypes.array,
    proficiencies: PropTypes.array,
    spells: PropTypes.array
};

function mapStateToProps(state) {
    let picklists = Object.assign([{}], [util.objectModel.PICKLIST]);
    if (state.picklists.length > 0) {
        picklists = Object.assign([{}], state.picklists);
    }
    let proficiencies = Object.assign([{}], [util.objectModel.PROFICIENCY]);
    if (state.proficiencies.length > 0) {
        proficiencies = Object.assign([{}], state.proficiencies);
    }
    let spells = Object.assign([{}], [util.objectModel.SPELL]);
    if (state.spells.length > 0) {
        spells = Object.assign([{}], state.spells);
    }
    if (state.races.length > 0) {
        return {
            races: state.races,
            picklists: picklists,
            proficiencies: proficiencies,
            spells: spells
        };
    } else {
        return {
            races: [util.objectModel.RACE],
            picklists: picklists,
            proficiencies: proficiencies,
            spells: spells
        };
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(RaceListPage);