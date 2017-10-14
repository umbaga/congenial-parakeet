import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../actions/admin/backgroundActions';
import util from '../../../util/util';
import DndInput from '../../common/inputs/DndInput';
import DndPicklistAddSelect from '../../common/inputs/DndPicklistAddSelect';

class testbed extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.updateFormState = this.updateFormState.bind(this);
        this.saveNewItem = this.saveNewItem.bind(this);
        this.cancel = this.cancel.bind(this);
        this.click = this.click.bind(this);
    }

    updateFormState(event) {
        const field = event.target.name;
        const itemtype = this.state.itemtype;
        switch (event.target.type) {
            case 'text':
                itemtype[field] = event.target.value;
                break;
            case 'checkbox':
                itemtype[field] = !itemtype[field];
                break;
            default:
        }
        return this.setState({itemtype: itemtype});
    }
    saveNewItem() {
        
    }
    cancel() {
        
    }
    click() {
        
    }
    render() {
        const damageTypes = this.props.picklists[4].items;
        const selectedItem = damageTypes[3];
        return (
            <div className="jumbotron">
                <h1>TESTBBED</h1>
                <form>
                    <DndInput
                        dataType={util.dataTypes.picklist.DAMAGE_TYPE}
                        label="Damage Type"
                        name="damageType"
                        onChange={this.updateFormState}
                        picklist={damageTypes}
                        valueObj={selectedItem}
                        buttonType="reset"
                        buttonOnClick={this.click}
                        />
                    <DndInput
                        dataType={util.dataTypes.picklist.DAMAGE_TYPE}
                        label="Damage Type"
                        name="damageType"
                        onChange={this.updateFormState}
                        picklist={damageTypes}
                        valueObj={selectedItem}
                        />
                    <DndPicklistAddSelect
                        dataType={util.dataTypes.picklist.DAMAGE_TYPE}
                        label="Damage Type"
                        name="damageType"
                        onChange={this.updateFormState}
                        picklist={damageTypes}
                        valueObj={selectedItem}
                        saveButtonOnClick={this.saveNewItem}
                        bsSaveButtonStyle="danger"
                        bsCancelButtonStyle="info"
                        bsButtonStyle="primary"
                        />
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    let picklists = Object.assign([{}], [util.objectModel.PICKLIST]);
    if (state.picklists.length > 0) {
        picklists = Object.assign([{}], state.picklists);
    }
    if (state.weapons.length > 0) {
        return {
            weapons: state.weapons,
            picklists: picklists
        };
    } else {
        return {
            weapons: [util.objectModel.WEAPON],
            picklists: picklists
        };
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)};
}

testbed.propTypes = {
    picklists: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(testbed);