import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as backgroundActions from '../../../actions/admin/backgroundActions';
import BackgroundForm from './BackgroundForm';
import BackgroundDetails from './BackgroundDetails';
import util from '../../../util/util';
import DndModal from '../../common/DndModal';

class BackgroundEntry extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            background: this.props.background,
            isCreate: this.props.isCreate,
            canEdit: this.props.canEdit,
            saving: false
        };
        this.cancelBackground = this.cancelBackground.bind(this);
        this.deleteBackground = this.deleteBackground.bind(this);
        this.postAction = this.postAction.bind(this);
        this.saveAndBackBackground = this.saveAndBackBackground.bind(this);
        this.saveAndNewBackground = this.saveAndNewBackground.bind(this);
        this.saveBackground = this.saveBackground.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
        this.removeEquipment = this.removeEquipment.bind(this);
        this.addEquipment = this.addEquipment.bind(this);
        this.changeEquipmentCount = this.changeEquipmentCount.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.background.id != nextProps.background.id) {
            this.setState({background: nextProps.background});
        }
        this.setState({saving: false});
    }
    
    addEquipment () {
        const background = this.state.background;
        const selectedEquipment = this.state.selectedEquipment;
        selectedEquipment.assignedCount = 1;
        background.assignedEquipment.push(selectedEquipment);
        return this.setState({background: background});
    }
    
    removeEquipment (equipmentItem) {
        const background = this.state.background;
        const indexOfItemToRemove = this.props.background.assignedEquipment.findIndex(item => {
            return item.id == equipmentItem.id;
        });
        background.assignedEquipment.splice(indexOfItemToRemove, 1);
        return this.setState({background: background});
    }
    
    changeEquipmentCount (event, equipmentItem) {
        const background = Object.assign({}, this.state.background);
        const itemIndex = this.props.background.assignedEquipment.findIndex(item => {
            return item.id == equipmentItem.id;
        });
        background.assignedEquipment[itemIndex].assignedCount = event.target.value / background.assignedEquipment[itemIndex].count;
        return this.setState({background: background});
    }

    cancelBackground(event) {
        event.preventDefault();
        this.postAction();
    }

    deleteBackground(event) {
        event.preventDefault();
        if (confirm('are you sure?')) {
            //this.props.actions.deleteBackground(this.state.background);
            this.postAction();
        }
    }

    postAction() {
        this.props.closeModal();
    }

    saveAndNewBackground(event) {
        this.saveBackground(event);
        let newBackground = Object.assign({}, util.objectModel.BACKGROUND);
        this.setState({background: newBackground});
        this.refs.form.refs.name.setFocus();
    }

    saveAndBackBackground(event) {
        this.saveBackground(event);
        this.postAction();
    }

    saveBackground(event) {
        event.preventDefault();
        this.setState({saving: true});
        //this.props.actions.upsertBackground(this.state.background);
    }

    updateFormState(event) {
        let field = event.target.name !== undefined ? event.target.name : event.target.parentElement.name;
        const background = this.state.background;
        const dataType = event.target.getAttribute('dataType') !== null ? event.target.getAttribute('dataType') : event.target.parentElement.getAttribute('dataType');
        let newSelectedValue = {};
        switch (dataType) {
            case util.dataTypes.string.STRING:
            case util.dataTypes.number.DESCRIPTION:
                background[field] = event.target.value;
                break;
            case util.dataTypes.picklist.RESOURCE:
                newSelectedValue.id = parseInt(event.target.options[event.target.selectedIndex].value);
                newSelectedValue.name = event.target.options[event.target.selectedIndex].text;
                background[field] = newSelectedValue;
                break;
            case util.dataTypes.obj.EQUIPMENT:
                if (event.target.value != 0) {
                    return this.setState({selectedEquipment: this.props.equipments.filter((equipment) => equipment.id == event.target.value)[0]});
                }
                break;
            case util.dataTypes.bool.BOOL:
            case util.dataTypes.bool.HAS_DISADVANTAGE:
                background[field] = !background[field];
                break;
            default:
        }
        return this.setState({background: background});
    }
    render() {
        let contents = (
            <BackgroundDetails
                background={this.state.background}
                picklists={this.props.picklists}
                />
        );
        if (this.props.canEdit) {
            contents = (
                <BackgroundForm
                    ref="form"
                    background={this.state.background}
                    isCreate={this.props.isCreate}
                    picklists={this.props.picklists}
                    saving={this.state.saving}
                    onChange={this.updateFormState}
                    addEquipment={this.addEquipment}
                    removeEquipment={this.removeEquipment}
                    changeEquipmentCount={this.changeEquipmentCount}
                    equipments={this.props.equipments}
                    />
            );
        }
        return (
            <DndModal
                headingCaption="Background"
                closeModal={this.props.closeModal}
                isCreate={this.props.isCreate}
                canEdit={this.props.canEdit}
                openModal={this.props.openModal}
                showModal={this.props.showModal}
                onCancel={this.cancelBackground}
                onDelete={this.deleteBackground}
                onSave={this.saveAndBackBackground}
                onSaveNew={this.saveAndNewBackground}>
                {contents}
            </DndModal>
        );
    }
}

BackgroundEntry.propTypes = {
    background: PropTypes.object,
    actions: PropTypes.object,
    canEdit: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    isCreate: PropTypes.bool,
    picklists: PropTypes.array,
    equipments: PropTypes.array
};

function getBackgroundById(backgrounds, id) {
    if (id != 0) {
        let background = backgrounds.find(background => background.id == id);
        return Object.assign({}, background);
    } else {
        return Object.assign({}, util.objectModel.BACKGROUND);
    }
}

function mapStateToProps(state, ownProps) {
    let background = Object.assign({}, util.objectModel.BACKGROUND);
    const backgroundId = ownProps.selectedId;
    let isCreate = true;
    if (ownProps.selecetdId != 0) {
        if (backgroundId && state.backgrounds.length > 0) {
            background = getBackgroundById(state.backgrounds, ownProps.selectedId);
            isCreate = false;
        }
    }
    return {background: background, isCreate: isCreate};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(backgroundActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundEntry);