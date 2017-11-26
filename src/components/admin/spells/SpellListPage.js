import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SpellList from './SpellList';
import SpellEntry from './SpellEntry';
import * as actions from '../../../actions/admin/spellActions';
import util from '../../../util/util';
import DndButton from '../../common/buttons/DndButton';

class SpellListPage extends React.Component {
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
        this.onChangeSchool = this.onChangeSchool.bind(this);
        this.onChangeLevel = this.onChangeLevel.bind(this);
    }

    componentWillMount() {
        if (this.props.spells[0].id == '') {
            this.props.actions.loadSpells();
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

    onChangeSchool(event) {
        this.setState({selectedSchoolId: event.target.value});
    }
    onChangeLevel(event) {
        this.setState({selectedLevel: event.target.value});
    }
    render() {
        const spells = this.props.spells;
        console.log(spells);
        const spellLevels = [
            {id: -1, name: 'All'},
            {id: 0, name: 'Cantrip'},
            {id: 1, name: '1st'},
            {id: 2, name: '2nd'},
            {id: 3, name: '3rd'},
            {id: 4, name: '4th'},
            {id: 5, name: '5th'},
            {id: 6, name: '6th'},
            {id: 7, name: '7th'},
            {id: 8, name: '8th'},
            {id: 9, name: '9th'}
        ];
        const schools = util.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.SCHOOL_OF_MAGIC);
        return (
            <div className="col-md-12">
                <div>
                    <table className="table table-sm table-striped table-hover">
                        <thead style={{display: 'block', width: '100%', tableLayout: 'fixed'}}>
                            <tr>
                                <th colSpan="6">
                                    <h2><span><DndButton onClick={this.backToAdminHome} buttonType="back" /></span>Spells</h2>
                                </th>
                            </tr>
                            <tr>
                                <th width="50%">Name</th>
                                <th width="15%">Level</th>
                                <th width="25%">School</th>
                                <th width="10%" style={{paddingRight: '25px'}}>
                                    <div className="pull-right">
                                        <DndButton onClick={this.onCreate} buttonType="create" />
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <div className="col-sm-5">
                                        <select
                                            name="selectLevel"
                                            className="form-control"
                                            onChange={this.onChangeLevel}
                                            value={this.state.selectedLevel}>
                                            {spellLevels.map(spellLevel =>
                                                            <option key={spellLevel.id} value={spellLevel.id}>
                                                                {spellLevel.name}
                                                             </option>
                                                            )}
                                        </select>
                                    </div>
                                </td>
                                <td>
                                
                                    <div className="col-sm-5">
                                        <select
                                            name="selectSchool"
                                            className="form-control"
                                            onChange={this.onChangeSchool}
                                            value={this.state.selectedSchoolId}>
                                            <option value="0">All</option>
                                            {schools.map(school =>
                                                            <option key={school.id} value={school.id}>
                                                                {school.name}
                                                             </option>
                                                            )}
                                        </select>
                                    </div>
                                </td>
                                <td></td>
                            </tr>
                        </thead>
                        <SpellList
                            spells={spells}
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
                <SpellEntry
                    closeModal={this.close}
                    openModal={this.open}
                    spells={spells}
                    isCreate={this.state.isCreate}
                    canEdit={this.state.canEdit}
                    selectedId={this.state.selectedId}
                    picklists={this.props.picklists}
                    showModal={this.state.showModal}
                    onEdit={this.onEdit}
                    onViewDetails={this.onViewDetails}
                    equipments={this.props.equipments}
                    proficiencies={this.props.proficiencies}
                    />
            </div>
        );
    }
}

SpellListPage.propTypes = {
    spells: PropTypes.array.isRequired,
    actions: PropTypes.object,
    children: PropTypes.object,
    picklists: PropTypes.array,
    equipments: PropTypes.array,
    proficiencies: PropTypes.array
};

function mapStateToProps(state) {
    let picklists = Object.assign([{}], [util.objectModel.PICKLIST]);
    if (state.picklists.length > 0) {
        picklists = Object.assign([{}], state.picklists);
    }
    if (state.spells.length > 0) {
        return {
            spells: state.spells,
            picklists: picklists
        };
    } else {
        return {
            spells: [util.objectModel.SPELL],
            picklists: picklists
        };
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(SpellListPage);