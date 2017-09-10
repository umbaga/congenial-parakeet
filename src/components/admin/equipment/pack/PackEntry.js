import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as packActions from '../../../../actions/admin/packActions';
import PackForm from './PackForm';
import util from '../../../../util/util';

class PackEntry extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            pack: this.props.pack,
            isCreate: this.props.isCreate,
            saving: false
        };
        this.cancelPack = this.cancelPack.bind(this);
        this.deletePack = this.deletePack.bind(this);
        this.postAction = this.postAction.bind(this);
        this.savePack = this.savePack.bind(this);
        this.saveAndNewPack = this.saveAndNewPack.bind(this);
        this.saveAndBackPack = this.saveAndBackPack.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.pack.id != nextProps.pack.id) {
            this.setState({pack: nextProps.pack});
        }
        this.setState({saving: false});
    }

    cancelPack(event) {
        event.preventDefault();
        this.postAction();
    }

    deletePack(event) {
        event.preventDefault();
        if (confirm('are you sure?')) {
            this.props.actions.deletePack(this.state.pack);
            this.postAction();
        }
    }

    postAction() {
        this.props.closeModal();
    }

    savePack(event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.upsertPack(this.state.pack);
    }

    saveAndNewPack(event) {
        this.savePack(event);
        let newPack = Object.assign({}, util.objectModel.EQUIPMENT_PACK);
        this.setState({pack: newPack});
    }

    saveAndBackPack(event) {
        this.savePack(event);
        this.postAction();
    }

    updateFormState(event) {
        let field = event.target.name !== undefined ? event.target.name : event.target.parentElement.name;
        let subfield = null;
        const pack = this.state.pack;
        let newSelectedValue = {};
        let newRenderedValue = '';
        let newDiceRollValue = {};
        let isAssign = field.split('Unassigned').length == 2 ? true : false;
        let removeThisId = event.target.value;
        let removeThisIndex = -1;
        let referencePicklistItem = util.picklistInfo.getPicklistItem(this.props.picklists, removeThisId);
        let dataType = event.target.getAttribute('dataType') !== null ? event.target.getAttribute('dataType') : event.target.parentElement.getAttribute('dataType');

        switch (dataType) {
            case util.dataTypes.string.STRING:
            case util.dataTypes.string.LONG_STRING:
            case util.dataTypes.number.COIN:
            case util.dataTypes.number.WEIGHT:
                pack[field] = event.target.value;
                break;
            case util.dataTypes.bool.YES_NO:
                pack[field] = !pack[field];
                break;
            case util.dataTypes.picklist.DAMAGE_TYPE:
            case util.dataTypes.picklist.PACK_CATEGORY:
            case util.dataTypes.picklist.PACK_PROFICIENCY:
                newSelectedValue.id = parseInt(event.target.options[event.target.selectedIndex].value);
                newSelectedValue.name = event.target.options[event.target.selectedIndex].text;
                pack[field] = newSelectedValue;
                break;
            case util.dataTypes.special.DICE_ROLL:
                newRenderedValue = '';
                if (event.target.value && event.target.value.length != 0) {
                    for (let y = 0; y < event.target.value.length; y++) {
                        if (event.target.value.charAt(y) == '1' || event.target.value.charAt(y) == '2' ||
                           event.target.value.charAt(y) == '3' || event.target.value.charAt(y) == '4' ||
                           event.target.value.charAt(y) == '5' || event.target.value.charAt(y) == '6' ||
                           event.target.value.charAt(y) == '7' || event.target.value.charAt(y) == '8' ||
                           event.target.value.charAt(y) == '9' || event.target.value.charAt(y) == '0' ||
                           event.target.value.charAt(y) == 'd' || event.target.value.charAt(y) == 'D') {
                            newRenderedValue += event.target.value.charAt(y);
                        }
                    }
                }
                if (util.dataTypes.compareDataType(newRenderedValue, util.dataTypes.special.DICE_ROLL)) {
                    newDiceRollValue.dieCount = parseInt(event.target.value.toLowerCase().split('d')[0]);
                    newDiceRollValue.dieType = parseInt(event.target.value.toLowerCase().split('d')[1]);
                    pack[field] = newDiceRollValue;
                }
                pack[field].rendered = newRenderedValue;
                break;
            case util.dataTypes.array.PACK_PROPERTIES:
                if (isAssign) {
                    field = field.split('Unassigned')[0];
                    pack[field].push(referencePicklistItem);
                } else {
                    for (let b = 0; b < pack.packProperties.length; b++) {
                        if (pack.packProperties[b].id == referencePicklistItem.id) {
                            if (pack.packProperties[b].requireDamage) {
                                pack.versatileDamage = {};
                            }
                            if (pack.packProperties[b].requireDescription) {
                                pack.specialDescription = null;
                            }
                            if (pack.packProperties[b].requireRange) {
                                pack.ramge = {};
                            }
                            removeThisIndex = b;
                            break;
                        }
                    }
                    pack[field].splice(removeThisIndex, 1);
                }
                break;
            case util.dataTypes.special.PACK_RANGE:
                if (field.split('_').length == 2) {
                    subfield = field.split('_')[1];
                    field = field.split('_')[0];
                }
                pack[field][subfield] = parseInt(event.target.value);
                break;
            default:
        }
        return this.setState({pack: pack});
    }

    render() {
        return (
            <div>
                <PackForm
                    pack={this.state.pack}
                    onSave={this.saveAndBackPack}
                    onSaveNew={this.saveAndNewPack}
                    onChange={this.updateFormState}
                    onCancel={this.cancelPack}
                    onDelete={this.deletePack}
                    isCreate={this.state.isCreate}
                    saving={this.state.saving}
                    picklists={this.props.picklists} />
            </div>
        );
    }
}

PackEntry.propTypes = {
    pack: PropTypes.object,
    actions: PropTypes.object,
    isCreate: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    picklists: PropTypes.array
};

function getPackById(packs, id) {
    if (id != 0) {
        let pack = packs.find(pack => pack.id == id);
        return Object.assign({}, pack);
    } else {
        return Object.assign({}, util.objectModel.EQUIPMENT_PACK);
    }
}

function mapStateToProps(state, ownProps) {
    let pack = Object.assign({}, util.objectModel.EQUIPMENT_PACK);
    const packId = ownProps.selectedId;
    let isCreate = true;
    if (ownProps.selecetdId != 0) {
        if (packId && state.packs.length > 0) {
            pack = getPackById(state.packs, ownProps.selectedId);
            isCreate = false;
        }
    }
    return {pack: pack, isCreate: isCreate};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(packActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PackEntry);