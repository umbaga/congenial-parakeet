import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';
import DndInputWrapper from './DndInputWrapper';
import DndToggleBoxes from './DndToggleBoxes';
import DndButton from '../buttons/DndButton';

class DndInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.renderSelectOneOption = this.renderSelectOneOption.bind(this);
    }
    
    setFocus() {
        this.refs[this.props.name].focus();
    }
    
    renderSelectOneOption(placeholderText) {
        if (this.props.hideSelectOneOption) {
            return null;
        } else {
            return (<option value="0">{placeholderText}</option>);
        }
    }
    
    render() {
        let primaryInput = null;
        let longValue = '';
        let isReadOnly = this.props.isReadOnly ? this.props.isReadOnly : false;
        let numberMinVal = this.props.numberMinVal ? this.props.numberMinVal : 0;
        let numberStepVal = this.props.numberStepVal ? this.props.numberStepVal : 1;
        let hasButton = this.props.buttonOnClick ? true : false;
        let size = 10;
        if (this.props.selectBoxSize) {
            size = this.props.selectBoxSize;
        }
        let placeholderText = '';
        switch (this.props.dataType) {
            case util.dataTypes.bool.BOOL:
            case util.dataTypes.bool.HAS_DISADVANTAGE:
            case util.dataTypes.bool.YES_NO:
                primaryInput = (<input
                                    type="checkbox"
                                    name={this.props.name}
                                    ref={this.props.name}
                                    checked={this.props.value}
                                    datatype={this.props.dataType}
                                    onChange={this.props.onChange}
                                    className="form-control checkbox-inline" />);
                break;
            case util.dataTypes.string.STRING:
            case util.dataTypes.number.LENGTH:
                primaryInput = (<input
                                    type="text"
                                    name={this.props.name}
                                    ref={this.props.name}
                                    placeholder={this.props.placeholder}
                                    value={this.props.value}
                                    datatype={this.props.dataType}
                                    onChange={this.props.onChange}
                                    className="form-control"
                                    readOnly={isReadOnly} />);
                break;
            case util.dataTypes.array.ADVANCED_SENSE:
            case util.dataTypes.array.MOVEMENT:
            case util.dataTypes.number.COIN:
            case util.dataTypes.number.INT:
            case util.dataTypes.number.SPELL_LEVEL:
            case util.dataTypes.number.WEIGHT:
            case util.dataTypes.special.CHART_COLUMN_COUNT:
            case util.dataTypes.special.CHART_ROW_COUNT:
                if (this.props.dataType == util.dataTypes.number.SPELL_LEVEL) {
                    primaryInput = (<input
                                        type="number"
                                        name={this.props.name}
                                        ref={this.props.name}
                                        placeholder={this.props.placeholder}
                                        value={this.props.value}
                                        datatype={this.props.dataType}
                                        onChange={this.props.onChange}
                                        className="form-control"
                                        step={numberStepVal}
                                        min="0"
                                        max="9"
                                        readOnly={isReadOnly} />);
                } else {
                    primaryInput = (<input
                                        type="number"
                                        name={this.props.name}
                                        ref={this.props.name}
                                        placeholder={this.props.placeholder}
                                        value={this.props.value}
                                        datatype={this.props.dataType}
                                        onChange={this.props.onChange}
                                        className="form-control"
                                        step={numberStepVal}
                                        min={numberMinVal}
                                        readOnly={isReadOnly} />);
                }
                break;
            case util.dataTypes.special.DICE_ROLL:
                primaryInput = (<input
                                    type="text"
                                    name={this.props.name}
                                    ref={this.props.name}
                                    placeholder={this.props.placeholder}
                                    value={this.props.value.rendered}
                                    datatype={this.props.dataType}
                                    onKeyUp={this.props.onChange}
                                    onChange={this.props.onChange}
                                    className="form-control" />);
                break;
            case util.dataTypes.picklist.ABILITY_SCORE:
            case util.dataTypes.picklist.AMMUNITION_TYPE:
            case util.dataTypes.picklist.ARMOR_PROFICIENCY:
            case util.dataTypes.picklist.ATTACK_ROLL_TYPE:
            case util.dataTypes.picklist.CHART_TYPE:
            case util.dataTypes.picklist.CONDITION:
            case util.dataTypes.picklist.DAMAGE_TYPE:
            case util.dataTypes.picklist.DESCRIPTION_TYPE:
            case util.dataTypes.picklist.EQUIPMENT_CATEGORY:
            case util.dataTypes.picklist.GENERAL:
            case util.dataTypes.picklist.LANGUAGE_RARITY:
            case util.dataTypes.picklist.LANGUAGE_SCRIPT:
            case util.dataTypes.picklist.MECHANIC_TARGET:
            case util.dataTypes.picklist.MECHANIC_TYPE:
            case util.dataTypes.picklist.MONSTER_TYPE:
            case util.dataTypes.picklist.PROFICIENCY_CATEGORY:
            case util.dataTypes.picklist.PROFICIENCY_SELECTION_MECHANIC:
            case util.dataTypes.picklist.RESOURCE:
            case util.dataTypes.picklist.SAVE_EFFECT:
            case util.dataTypes.picklist.SCHOOL_OF_MAGIC:
            case util.dataTypes.picklist.SIZE:
            case util.dataTypes.picklist.SPELL_CASTING_TIME:
            case util.dataTypes.picklist.SPELL_COMPONENT:
            case util.dataTypes.picklist.SPELL_DURATION:
            case util.dataTypes.picklist.SPELL_LEVEL:
            case util.dataTypes.picklist.SPELL_RANGE:
            case util.dataTypes.picklist.SPELL_SELECTION:
            case util.dataTypes.picklist.WEAPON_CATEGORY:
            case util.dataTypes.picklist.WEAPON_PROFICIENCY:
                placeholderText = (this.props.placeholder && this.props.placeholder.length != 0) ? this.props.placeholder : 'SELECT ONE';
                primaryInput = (<select
                                    value={this.props.value.id}
                                    name={this.props.name}
                                    ref={this.props.name}
                                    className="form-control"
                                    onChange={this.props.onChange}
                                    datatype={this.props.dataType}>
                        {this.renderSelectOneOption(placeholderText)}
                        {this.props.picklist.map(picklistItem =>
                                                 <option
                                                     key={picklistItem.id}
                                                     value={picklistItem.id}>
                                                     {picklistItem.name}
                                                 </option>)}
                    </select>);
                break;
            case util.dataTypes.array.MONSTER_TAGS:
            case util.dataTypes.array.PROFICIENCIES:
            case util.dataTypes.array.WEAPON_PROPERTIES:
                primaryInput = (
                    <DndToggleBoxes
                        dataType={this.props.dataType}
                        onAddItem={this.props.onChange}
                        onRemoveItem={this.props.onChange}
                        unselectedItemArray={this.props.picklist}
                        selectedItemArray={this.props.value}
                        name={this.props.name}
                        selectBoxSize={size}
                        />
                );
                break;
            case util.dataTypes.special.WEAPON_RANGE:
                primaryInput = (
                    <div name={this.props.name}>
                        <div className="col-sm-6">
                            <label htmlFor={this.props.name + '.normal'}>Normal</label>
                            <input type="number"
                                name={this.props.name + '.normal'}
                                ref={this.props.name + '.normal'}
                                placeholder={this.props.placeholder}
                                value={this.props.value.normal}
                                datatype={this.props.dataType}
                                onChange={this.props.onChange}
                                className="form-control"/>
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor={this.props.name + '.maximum'}>Maximum</label>
                            <input type="number"
                                name={this.props.name + '.maximum'}
                                ref={this.props.name + '.maximum'}
                                placeholder={this.props.placeholder}
                                value={this.props.value.maximum}
                                datatype={this.props.dataType}
                                onChange={this.props.onChange}
                                className="form-control"/>
                        </div>
                    </div>
                );
                break;
            case util.dataTypes.string.LONG_STRING:
                if (this.props.value) {
                    longValue = this.props.value;
                }
                primaryInput = (
                    <textarea
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        value={longValue}
                        datatype={this.props.dataType}
                        onKeyUp={this.props.onChange}
                        onChange={this.props.onChange}
                        className="form-control" />
                );
                break;
            case util.dataTypes.string.DESCRIPTION:
                if (this.props.value) {
                    longValue = this.props.value;
                }
                primaryInput = (
                    <div
                        id={this.props.name}
                        datatype={this.props.dataType}
                        className="form-control pre-scrollable"
                        style={{height: '200px'}}
                        contentEditable
                        dangerouslySetInnerHTML={{ __html: longValue }}
                        onBlur={this.props.onChange}
                        />
                );
                break;
            case util.dataTypes.combo.DAMAGE_AND_DAMAGE_TYPE:
                primaryInput = (
                    <div className=" input-group input-inline">
                        <input
                            type="text"
                            name={this.props.name + '.dice'}
                            ref={this.props.name + '.dice'}
                            value={this.props.value.dice.rendered}
                            datatype={util.dataTypes.special.DICE_ROLL}
                            onKeyUp={this.props.onChange}
                            onChange={this.props.onChange}
                            className="form-control" />
                        <select
                            value={this.props.value.type.id}
                            name={this.props.name + '.type'}
                            ref={this.props.name + '.type'}
                            className="form-control"
                            onChange={this.props.onChange}
                            datatype={util.dataTypes.picklist.DAMAGE_TYPE}>
                            <option value="0">SELECT ONE</option>
                            {this.props.picklist.map(picklistItem =>
                                 <option
                                     key={picklistItem.id}
                                     value={picklistItem.id}>
                                     {picklistItem.name}
                                 </option>)}
                        </select>
                    </div>
                );
                break;
            default:
                primaryInput = (<div>Need to add dataType to switch in DndInput</div>);
        }
        const buttonType = (this.props.buttonType && this.props.buttonType.length) != 0 ? this.props.buttonType : 'additem';
        const finalInput = hasButton ? (
            <div className="input-group">
                {primaryInput}
                <span className="input-group-btn">
                    <DndButton
                        buttonType={buttonType}
                        onClick={this.props.buttonOnClick}
                        bsButtonStyle={this.props.bsButtonStyle}
                        />
                </span>
            </div>
        ) : primaryInput;
        
        return (
            <DndInputWrapper
                label={this.props.label}
                dataType={this.props.dataType}
                inputCols={this.props.inputCols}
                labelCols={this.props.labelCols}
                >
                <div>
                    {finalInput}
                </div>
            </DndInputWrapper>
        );
    }
}

DndInput.propTypes = {
    numberMinVal: PropTypes.number,
    numberMaxVal: PropTypes.number,
    numberStepVal: PropTypes.number,
    dataType: PropTypes.string.isRequired,
    inputCols: PropTypes.number,
    label: PropTypes.string.isRequired,
    labelCols: PropTypes.number,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    picklist: PropTypes.array,
    placeholder: PropTypes.string,
    isReadOnly: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
        PropTypes.array,
        PropTypes.bool
    ]).isRequired,
    buttonType: PropTypes.string,
    buttonOnClick: PropTypes.func,
    bsButtonStyle: PropTypes.string,
    hideSelectOneOption: PropTypes.bool,
    selectBoxSize: PropTypes.number
};
/*
    checked: PropTypes.bool,
    value: PropTypes.string,
    valueArray: PropTypes.array,
    valueObj: PropTypes.object,*/
export default DndInput;