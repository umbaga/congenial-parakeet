import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import util from '../../../../util/util';
import DndListItemButtonBar from '../../../common/buttons/DndListItemButtonBar';
import * as weaponActions from '../../../../actions/admin/weaponActions';

class WeaponListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedId: this.props.selectedId
        };
        this.editWeapon = this.editWeapon.bind(this);
        this.deleteWeapon = this.deleteWeapon.bind(this);
    }
    editWeapon() {
        event.preventDefault();
        this.props.openModal();
        this.props.changeSelectedId(this.props.weapon.id);
        this.props.onEdit();
        this.setState({selectedId: this.props.weapon.id});
    }
    deleteWeapon() {
        event.preventDefault();
        if (confirm('are you sure?')) {
            this.props.actions.deleteWeapon(this.props.weapon);
        }
    }
    render() {
        return (
            <tr key={this.props.weapon.id}>
                <td>{this.props.weapon.name}</td>
                <td className="text-center">{util.format.forDisplay.number.coin(this.props.weapon.cost)}</td>
                <td>{util.format.forDisplay.obj.damage(this.props.weapon.damage)}</td>
                <td className="text-center">{util.format.forDisplay.number.weight(this.props.weapon.weight)}</td>
                <td>{util.format.forDisplay.array.weaponProperties(this.props.weapon)}</td>
                <td>
                    <DndListItemButtonBar
                        listItem={this.props.weapon}
                        onEdit={this.editWeapon}
                        onDelete={this.deleteWeapon} />
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {weapon: ownProps.weapon};
}

WeaponListItem.propTypes = {
    weapon: PropTypes.object.isRequired,
    actions: PropTypes.object,
    openModal: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    onEdit: PropTypes.func
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(weaponActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeaponListItem);