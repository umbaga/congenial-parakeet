import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProficiencyList from './ProficiencyList';
import ProficiencyEntry from './ProficiencyEntry';
import * as actions from '../../../actions/admin/proficiencyActions';
import util from '../../../util/util';
import DndButton from '../../common/buttons/DndButton';

class ProficiencyListPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            canEdit: true,
            isCreate: false,
            selectedId: 0,
            showModal: false
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.changeSelectedId = this.changeSelectedId.bind(this);
        this.onCreate = this.onCreate.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    componentWillMount() {
        if (this.props.proficiencies[0].id == '') {
            this.props.actions.loadProficiencies();
        }
    }

    backToAdminHome() {
        browserHistory.push('/Home');
    }

    onCreate() {
        this.changeSelectedId(0);
        this.open();
        this.setState({isCreate: true, selectedId: 0, canEdit: true});
    }

    onEdit() {
        this.setState({isCreate: false, canEdit: true});
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    changeSelectedId(newId) {
        this.setState({selectedId: parseInt(newId)});
    }

    render() {
        const proficiencies = this.props.proficiencies;
        const proficiencyCategories = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.PROFICIENCY_CATEGORY);
        return (
            <div className="col-md-12">
                <div>
                    <table className="table table-sm table-striped table-hover">
                        <thead>
                            <tr>
                                <th colSpan="4">
                                    <h2><span><DndButton onClick={this.backToAdminHome} buttonType="back" /></span>Proficiency</h2>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th colSpan="4">Name</th>
                                <th>
                                    <div className="pull-right">
                                        <DndButton onClick={this.onCreate} buttonType="create" />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                            {proficiencyCategories.map(proficiencyCategory =>
                                                       <ProficiencyList
                                                           key={proficiencyCategory.id}
                                                           proficiencyCategory={proficiencyCategory}
                                                           proficiencies={proficiencies}
                                                           openModal={this.open}
                                                           selectedId={this.state.selectedId}
                                                           changeSelectedId={this.changeSelectedId}
                                                           onCreate={this.onCreate}
                                                            onEdit={this.onEdit}
                                                           />
                                                      )}
                    </table>
                </div>
                <ProficiencyEntry
                    closeModal={this.close}
                    openModal={this.open}
                    proficiencies={proficiencies}
                    isCreate={this.state.isCreate}
                    canEdit={this.state.canEdit}
                    selectedId={this.state.selectedId}
                    picklists={this.props.picklists}
                    showModal={this.state.showModal}
                    onEdit={this.onEdit}
                    />
            </div>
        );
    }
}

ProficiencyListPage.propTypes = {
    actions: PropTypes.object,
    children: PropTypes.object,
    picklists: PropTypes.array,
    proficiencies: PropTypes.array.isRequired,
    proficiencyCategories: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    let picklists = Object.assign([{}], [util.objectModel.PICKLIST]);
    let proficiencyCategories = Object.assign({}, util.objectModel.PICKLIST);
    if (state.picklists.length > 0) {
        picklists = Object.assign([{}], state.picklists);
        proficiencyCategories = state.picklists.filter(function(picklist) {
            return picklist.id == util.picklistInfo.PROFICIENCY_CATEGORY;
        })[0];
    }
    if (state.proficiencies.length > 0) {
        return {
            proficiencies: state.proficiencies,
            picklists: picklists,
            proficiencyCategories: proficiencyCategories
        };
    } else {
        return {
            proficiencies: [util.objectModel.PROFICIENCY],
            picklists: picklists,
            proficiencyCategories: proficiencyCategories
        };
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProficiencyListPage);