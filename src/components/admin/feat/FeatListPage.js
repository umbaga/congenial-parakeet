import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FeatList from './FeatList';
import FeatEntry from './FeatEntry';
import * as actions from '../../../actions/admin/featActions';
import util from '../../../util/util';
import DndButton from '../../common/buttons/DndButton';

class FeatListPage extends React.Component {
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
        if (this.props.feats[0].id == '') {
            this.props.actions.loadFeats();
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
        const feats = this.props.feats;
        const picklists = this.props.picklists;
        const proficiencies = this.props.proficiencies;
        return (
            <div className="col-md-12">
                <div>
                    <table className="table table-sm table-striped table-hover">
                        <thead>
                            <tr>
                                <th colSpan="2">
                                    <h2><span><DndButton onClick={this.backToAdminHome} buttonType="back" /></span>Feats</h2>
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
                        <FeatList
                            feats={feats}
                            openModal={this.open}
                            selectedId={this.state.selectedId}
                            changeSelectedId={this.changeSelectedId}
                            onEdit={this.onEdit}
                            onViewDetails={this.onViewDetails}
                            />
                    </table>
                </div>
                <FeatEntry
                    closeModal={this.close}
                    openModal={this.open}
                    feats={feats}
                    isCreate={this.state.isCreate}
                    canEdit={this.state.canEdit}
                    selectedId={this.state.selectedId}
                    picklists={picklists}
                    showModal={this.state.showModal}
                    onEdit={this.onEdit}
                    onViewDetails={this.onViewDetails}
                    proficiencies={this.props.proficiencies}
                    />
            </div>
        );
    }
}
/*
                <FeatEntry
                    closeModal={this.close}
                    openModal={this.open}
                    feats={feats}
                    isCreate={this.state.isCreate}
                    canEdit={this.state.canEdit}
                    selectedId={this.state.selectedId}
                    picklists={this.props.picklists}
                    showModal={this.state.showModal}
                    onEdit={this.onEdit}
                    onViewDetails={this.onViewDetails}
                    equipments={this.props.equipments}
                    proficiencies={this.props.proficiencies}
                    />*/
FeatListPage.propTypes = {
    feats: PropTypes.array.isRequired,
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
    let proficiencies = Object.assign([{}], [util.objectModel.PROFICIENCY]);
    if (state.proficiencies.length > 0) {
        proficiencies = Object.assign([{}], state.proficiencies);
    }
    if (state.feats.length > 0) {
        return {
            feats: state.feats,
            picklists: picklists,
            proficiencies: proficiencies
        };
    } else {
        return {
            feats: [util.objectModel.FEAT],
            picklists: picklists,
            proficiencies: proficiencies
        };
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatListPage);