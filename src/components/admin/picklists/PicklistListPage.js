import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PicklistList from './PicklistList';
import PicklistEntry from './PicklistEntry';
import * as actions from '../../../actions/admin/picklistActions';
import util from '../../../util/util';
import DndButton from '../../common/DndButton';
import DndModal from '../../common/DndModal';

class PicklistListPage extends React.Component {
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
        if (this.props.picklists[0] && this.props.picklists[0].id == '') {
            this.props.actions.loadPicklists();
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
        this.setState({isCreate: false, selectedId: 0, canEdit: true});
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
        const picklists = this.props.picklists;
        return (
            <div className="col-md-12">
                <div>
                    <table className="table table-sm table-striped table-hover">
                        <thead>
                            <tr>
                                <th colSpan="3">
                                    <h2><span><DndButton onClick={this.backToAdminHome} buttonType="back" /></span>Picklists</h2>
                                </th>
                            </tr>
                            <tr>
                                <th></th>
                                <th>Items</th>
                                <th>
                                </th>
                            </tr>
                        </thead>
                        <PicklistList
                            picklists={picklists}
                            openModal={this.open}
                            selectedId={this.state.selectedId}
                            changeSelectedId={this.changeSelectedId}
                            onEdit={this.onEdit}
                            />
                    </table>
                </div>
                <DndModal
                    headingCaption="Picklist"
                    closeModal={this.close}
                    isCreate={this.state.isCreate}
                    canEdit={this.state.canEdit}
                    showModal={this.state.showModal}>
                        <PicklistEntry
                            closeModal={this.close}
                            picklists={picklists}
                            isCreate={this.state.isCreate}
                            canEdit={this.state.canEdit}
                            selectedId={this.state.selectedId}
                            />
                </DndModal>
            </div>
        );
    }
}

PicklistListPage.propTypes = {
    picklists: PropTypes.array.isRequired,
    children: PropTypes.object,
    actions: PropTypes.object
};

function mapStateToProps(state) {
    if (state.picklists.length > 0) {
        return {
            picklists: state.picklists
        };
    } else {
        return {
            picklists: [util.objectModel.PICKLIST]
        };
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(PicklistListPage);