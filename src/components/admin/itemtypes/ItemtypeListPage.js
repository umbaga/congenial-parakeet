import React from 'react';
import PropTypes from 'prop-types';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ItemtypeList from './ItemtypeList';
import NewItemtypePage from './NewItemtypePage';
import * as actions from '../../../actions/admin/itemtypeActions';
import util from '../../../util/util';
import DndButton from '../../common/DndButton';

class ItemtypeListPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onCreate = this.onCreate.bind(this);
    }

    componentWillMount() {
        if (this.props.itemtypes[0].id == '') {
            this.props.actions.loadItemtypes();
        }
    }

    onCreate(event) {
        browserHistory.push('/admin/Itemtype/0');
    }

    render() {
        const itemtypes = this.props.itemtypes;
        return (
            <div className="col-md-12">
                <div>{this.props.children}</div>
                <div>
                    <table className="table table-sm table-striped table-hover">
                        <thead>
                            <tr>
                                <th colSpan="3"><h3>Itemtypes</h3></th>
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
                        <ItemtypeList itemtypes={itemtypes} />
                    </table>
                </div>
            </div>
        );
    }
}

ItemtypeListPage.propTypes = {
    itemtypes: PropTypes.array.isRequired,
    children: PropTypes.object,
    actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
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