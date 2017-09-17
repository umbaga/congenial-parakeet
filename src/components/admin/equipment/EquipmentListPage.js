import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import EquipmentList from './EquipmentList';
import EquipmentEntry from './EquipmentEntry';
import * as actions from '../../../actions/admin/equipmentActions';
import util from '../../../util/util';
import DndButton from '../../common/DndButton';
import DndModal from '../../common/DndModal';

class EquipmentListPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showModal: false,
            isCreate: false,
            selectedId: 0
        };
        this.onCreate = this.onCreate.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.changeSelectedId = this.changeSelectedId.bind(this);
    }

    componentWillMount() {
        if (this.props.equipments[0].id == '') {
            this.props.actions.loadEquipments();
        }
    }

    backToAdminHome() {
        browserHistory.push('/Home');
    }

    onCreate() {
        this.open();
        this.setState({isCreate: true, selectedId: 0});
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
        const equipments = this.props.equipments;
        return (
            <div className="col-md-12">
                <div>
                    <table className="table table-sm table-striped table-hover">
                        <thead>
                            <tr>
                                <th colSpan="6">
                                    <h2><span><DndButton onClick={this.backToAdminHome} buttonType="back" /></span>Equipment</h2>
                                </th>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <th className="text-center">Cost</th>
                                <th className="text-center">Weight</th>
                                <th>
                                    <div className="pull-right">
                                        <DndButton onClick={this.onCreate} buttonType="create" />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <EquipmentList
                            equipments={equipments}
                            openModal={this.open}
                            selectedId={this.state.selectedId}
                            changeSelectedId={this.changeSelectedId}
                            />
                    </table>
                </div>
                <DndModal
                    headingCaption="Equipment"
                    closeModal={this.close}
                    isCreate={this.state.isCreate}
                    showModal={this.state.showModal}>
                        <EquipmentEntry
                            closeModal={this.close}
                            equipments={equipments}
                            isCreate={this.state.isCreate}
                            selectedId={this.state.selectedId}
                            picklists={this.props.picklists}
                            />
                </DndModal>
            </div>
        );
    }
}

EquipmentListPage.propTypes = {
    actions: PropTypes.object,
    children: PropTypes.object,
    picklists: PropTypes.array,
    equipments: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    if (state.equipments.length > 0) {
        return {
            equipments: state.equipments,
            picklists: state.picklists
        };
    } else {
        return {
            equipments: [util.objectModel.EQUIPMENT],
            picklists: [util.objectModel.PICKLIST]
        };
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentListPage);