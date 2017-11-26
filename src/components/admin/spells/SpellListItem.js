import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DndListItemButtonBar from '../../common/buttons/DndListItemButtonBar';
import * as spellActions from '../../../actions/admin/spellActions';
import util from '../../../util/util';

class SpellListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedId: this.props.selectedId
        };
        this.editSpell = this.editSpell.bind(this);
        this.deleteSpell = this.deleteSpell.bind(this);
        this.viewSpellDetails = this.viewSpellDetails.bind(this);
    }
    editSpell() {
        event.preventDefault();
        this.props.openModal();
        this.props.changeSelectedId(this.props.spell.id);
        this.props.onEdit();
        this.setState({selectedId: this.props.spell.id, canEdit: true});
    }
    deleteSpell() {
        event.preventDefault();
        if (confirm('are you sure?')) {
            this.props.actions.deleteSpell(this.props.spell);
        }
    }
    viewSpellDetails() {
        event.preventDefault();
        this.props.openModal();
        this.props.changeSelectedId(this.props.spell.id);
        this.props.onViewDetails();
        this.setState({selectedId: this.props.spell.id, canEdit: false});
    }
    render() {
        return (
            <tr key={this.props.spell.id}>
                <td width="50%">{this.props.spell.name}</td>
                <td width="15%">{util.format.forDisplay.number.ordinal(this.props.spell.level)}</td>
                <td width="25%">{this.props.spell.school.name}</td>
                <td width="10%">
                    <DndListItemButtonBar
                        listItem={this.props.spell}
                        onEdit={this.editSpell}
                        onDelete={this.deleteSpell}
                        onViewDetails={this.viewSpellDetails}
                        showDetailsButton />
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {spell: ownProps.spell};
}

SpellListItem.propTypes = {
    spell: PropTypes.object.isRequired,
    actions: PropTypes.object,
    changeSelectedId: PropTypes.func.isRequired,
    onEdit: PropTypes.func,
    onViewDetails: PropTypes.func,
    openModal: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(spellActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpellListItem);