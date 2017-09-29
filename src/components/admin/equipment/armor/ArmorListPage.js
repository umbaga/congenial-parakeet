import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ArmorList from './ArmorList';
import ArmorEntry from './ArmorEntry';
import * as actions from '../../../../actions/admin/armorActions';
import util from '../../../../util/util';
import DndButton from '../../../common/DndButton';

class ArmorListPage extends React.Component {
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
        if (this.props.armors[0].id == '') {
            this.props.actions.loadArmors();
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
        const armors = this.props.armors;
        return (
            <div className="col-md-12">
                <div>
                    <table className="table table-sm table-striped table-hover">
                        <thead>
                            <tr>
                                <th colSpan="6">
                                    <h2><span><DndButton onClick={this.backToAdminHome} buttonType="back" /></span>Armors</h2>
                                </th>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <th className="text-center">Cost</th>
                                <th>Armor Class (AC)</th>
                                <th>Strength</th>
                                <th>Stealth</th>
                                <th className="text-center">Weight</th>
                                <th>
                                    <div className="pull-right">
                                        <DndButton onClick={this.onCreate} buttonType="create" />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <ArmorList
                            armors={armors}
                            openModal={this.open}
                            selectedId={this.state.selectedId}
                            changeSelectedId={this.changeSelectedId}
                            onEdit={this.onEdit}
                            />
                    </table>
                </div>
                <ArmorEntry
                    closeModal={this.close}
                    openModal={this.open}
                    armors={armors}
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

ArmorListPage.propTypes = {
    actions: PropTypes.object,
    children: PropTypes.object,
    picklists: PropTypes.array,
    armors: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    let picklists = Object.assign([{}], [util.objectModel.PICKLIST]);
    if (state.picklists.length > 0) {
        picklists = Object.assign([{}], state.picklists);
    }
    if (state.armors.length > 0) {
        return {
            armors: state.armors,
            picklists: picklists
        };
    } else {
        return {
            armors: [util.objectModel.ARMOR],
            picklists: picklists
        };
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ArmorListPage);