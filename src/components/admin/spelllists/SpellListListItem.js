import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DndListItemButtonBar from '../../common/buttons/DndListItemButtonBar';
import * as spelllistActions from '../../../actions/admin/spelllistActions';
//import util from '../../../util/util';

class SpellListListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedId: this.props.selectedId
        };
        this.editSpellList = this.editSpellList.bind(this);
        this.deleteSpellList = this.deleteSpellList.bind(this);
        this.viewSpellListDetails = this.viewSpellListDetails.bind(this);
    }
    editSpellList() {
        event.preventDefault();
        this.props.openModal();
        this.props.changeSelectedId(this.props.spelllist.id);
        this.props.onEdit();
        this.setState({selectedId: this.props.spelllist.id, canEdit: true});
    }
    deleteSpellList() {
        event.preventDefault();
        if (confirm('are you sure?')) {
            this.props.actions.deleteSpellList(this.props.spelllist);
        }
    }
    viewSpellListDetails() {
        event.preventDefault();
        this.props.openModal();
        this.props.changeSelectedId(this.props.spelllist.id);
        this.props.onViewDetails();
        this.setState({selectedId: this.props.spelllist.id, canEdit: false});
    }
    render() {
        return (
            <tr key={this.props.spelllist.id}>
                <td>{this.props.spelllist.name}</td>
                <td>
                    <DndListItemButtonBar
                        listItem={this.props.spelllist}
                        onEdit={this.editSpellList}
                        onDelete={this.deleteSpellList}
                        onViewDetails={this.viewSpellListDetails}
                        showDetailsButton />
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {spelllist: ownProps.spelllist};
}

SpellListListItem.propTypes = {
    spelllist: PropTypes.object.isRequired,
    actions: PropTypes.object,
    changeSelectedId: PropTypes.func.isRequired,
    onEdit: PropTypes.func,
    onViewDetails: PropTypes.func,
    openModal: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(spelllistActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpellListListItem);