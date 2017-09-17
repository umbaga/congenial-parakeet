import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ItemtypeList from './ItemtypeList';
import ItemtypeEntry from './ItemtypeEntry';
import * as actions from '../../../actions/admin/itemtypeActions';
import util from '../../../util/util';
import DndButton from '../../common/DndButton';
import DndModal from '../../common/DndModal';

class ItemtypeListPage extends React.Component {
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
        if (this.props.itemtypes[0].id == '') {
            this.props.actions.loadItemtypes();
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
        const itemtypes = this.props.itemtypes;
        return (
            <div className="col-md-12">
                <div>
                    <table className="table table-sm table-striped table-hover">
                        <thead>
                            <tr>
                                <th colSpan="3">
                                    <h2><span><DndButton onClick={this.backToAdminHome} buttonType="back" /></span>Itemtypes</h2>
                                </th>
                            </tr>
                            <tr>
                                <th></th>
                                <th className="text-center">isPicklist</th>
                                <th>
                                    <div className="pull-right">
                                        <DndButton onClick={this.onCreate} buttonType="create" />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <ItemtypeList
                            itemtypes={itemtypes}
                            openModal={this.open}
                            selectedId={this.state.selectedId}
                            changeSelectedId={this.changeSelectedId}
                            />
                    </table>
                </div>
                <DndModal
                    headingCaption="Item Type"
                    closeModal={this.close}
                    isCreate={this.state.isCreate}
                    showModal={this.state.showModal}>
                        <ItemtypeEntry
                            closeModal={this.close}
                            itemtypes={itemtypes}
                            isCreate={this.state.isCreate}
                            selectedId={this.state.selectedId}
                            />
                </DndModal>
            </div>
        );
    }
}

ItemtypeListPage.propTypes = {
    itemtypes: PropTypes.array.isRequired,
    children: PropTypes.object,
    actions: PropTypes.object
};

function mapStateToProps(state) {
    if (state.itemtypes.length > 0) {
        return {
            itemtypes: state.itemtypes
        };
    } else {
        return {
            itemtypes: [util.objectModel.ITEMTYPE]
        };
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemtypeListPage);