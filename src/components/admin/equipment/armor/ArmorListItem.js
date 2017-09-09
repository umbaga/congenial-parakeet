import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link, browserHistory} from 'react-router';
import util from '../../../../util/util';
import DndListItemButtonBar from '../../../common/DndListItemButtonBar';
import * as armorActions from '../../../../actions/admin/armorActions';

class ArmorListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedId: this.props.selectedId
        };
        this.editArmor = this.editArmor.bind(this);
        this.deleteItemType = this.deleteItemType.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        
    }
    editArmor(armor) {
        event.preventDefault();
        this.props.openModal();
        this.props.changeSelectedId(this.props.armor.id);
        this.setState({selectedId: this.props.armor.id});
    }
    deleteItemType(armor) {
        event.preventDefault();
        if(confirm('are you sure?')) {
            this.props.actions.deleteArmor(this.props.armor);
        }
    }
    render() {
        return (
            <tr key={this.props.armor.id}>
                <td>{this.props.armor.name}</td>
                <td className="text-center">{util.format.forDisplay.number.coin(this.props.armor.cost)}</td>
                <td>{util.format.forDisplay.obj.armorClass(this.props.armor)}</td>
                <td>{util.format.forDisplay.number.abilityScoreMinimum(this.props.armor.minimumStrength, 'Str')}</td>
                <td>{util.format.forDisplay.bool.hasDisadvantage(this.props.armor.stealthDisadvantage)}</td>
                <td className="text-center">{util.format.forDisplay.number.weight(this.props.armor.weight)}</td>
                <td>
                    <DndListItemButtonBar 
                        listItem={this.props.armor}
                        onEdit={this.editArmor} 
                        onDelete={this.deleteItemType} />
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {armor: ownProps.armor};
}

ArmorListItem.propTypes = {
    armor: PropTypes.object.isRequired,
    actions: PropTypes.object,
    openModal: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired,
    changeSelectedId: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(armorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArmorListItem);