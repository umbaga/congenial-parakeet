import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';
import DndInputWrapper from './DndInputWrapper';
import DndToggleBoxes from './DndToggleBoxes';
import DndButton from '../buttons/DndButton';

class DndInput extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    
    setFocus() {
        this.refs[this.props.name].focus();
    }
    
    render() {
        let primaryInput = null;
        let longValue = '';
        let isReadOnly = this.props.isReadOnly ? this.props.isReadOnly : false;
        let numberMinVal = this.props.numberMinVal ? this.props.numberMinVal : 0;
        let numberStepVal = this.props.numberStepVal ? this.props.numberStepVal : 1;
        let hasButton = this.props.buttonOnClick ? true : false;
        switch (this.props.dataType) {
            case util.dataTypes.bool.BOOL:
            case util.dataTypes.bool.HAS_DISADVANTAGE:
            case util.dataTypes.bool.YES_NO:
                primaryInput = (<input
                                    type="checkbox"
                                    name={this.props.name}
                                    ref={this.props.name}
                                    checked={this.props.checked}
                                    datatype={this.props.dataType}
                                    onChange={this.props.onChange}
                                    className="form-control checkbox-inline" />);
                break;
            case util.dataTypes.string.STRING:
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
            case util.dataTypes.number.COIN:
            case util.dataTypes.number.INT:
            case util.dataTypes.number.SPELL_LEVEL:
            case util.dataTypes.number.WEIGHT:
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
                                    value={this.props.valueObj.rendered}
                                    datatype={this.props.dataType}
                                    onKeyUp={this.props.onChange}
                                    onChange={this.props.onChange}
                                    className="form-control" />);
                break;
            case util.dataTypes.picklist.ABILITY_SCORE:
            case util.dataTypes.picklist.AMMUNITION_TYPE:
            case util.dataTypes.picklist.ARMOR_PROFICIENCY:
            case util.dataTypes.picklist.DAMAGE_TYPE:
            case util.dataTypes.picklist.EQUIPMENT_CATEGORY:
            case util.dataTypes.picklist.LANGUAGE_RARITY:
            case util.dataTypes.picklist.LANGUAGE_SCRIPT:
            case util.dataTypes.picklist.PROFICIENCY_CATEGORY:
            case util.dataTypes.picklist.PROFICIENCY_SELECTION_MECHANIC:
            case util.dataTypes.picklist.RESOURCE:
            case util.dataTypes.picklist.SCHOOL_OF_MAGIC:
            case util.dataTypes.picklist.WEAPON_CATEGORY:
            case util.dataTypes.picklist.WEAPON_PROFICIENCY:
                primaryInput = (<select
                                    value={this.props.valueObj.id}
                                    name={this.props.name}
                                    ref={this.props.name}
                                    className="form-control"
                                    onChange={this.props.onChange}
                                    datatype={this.props.dataType}>
                        <option value="0">SELECT ONE</option>
                        {this.props.picklist.map(picklistItem =>
                                                 <option
                                                     key={picklistItem.id}
                                                     value={picklistItem.id}>
                                                     {picklistItem.name}
                                                 </option>)}
                    </select>);
                break;
            case util.dataTypes.array.PROFICIENCIES:
            case util.dataTypes.array.WEAPON_PROPERTIES:
                primaryInput = (
                    <DndToggleBoxes
                        dataType={this.props.dataType}
                        toggleAddItem={this.props.onChange}
                        toggleRemoveItem={this.props.onChange}
                        unselectedItemArray={this.props.picklist}
                        selectedItemArray={this.props.valueArray}
                        name={this.props.name}
                        />
                );
                break;
            case util.dataTypes.special.WEAPON_RANGE:
                primaryInput = (
                    <div name={this.props.name}>
                        <div className="col-sm-6">
                            <label htmlFor={this.props.name + '_normal'}>Normal</label>
                            <input type="number"
                                name={this.props.name + '_normal'}
                                ref={this.props.name + '_normal'}
                                placeholder={this.props.placeholder}
                                value={this.props.valueObj.normal}
                                datatype={this.props.dataType}
                                onChange={this.props.onChange}
                                className="form-control"/>
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor={this.props.name + '_maximum'}>Maximum</label>
                            <input type="number"
                                name={this.props.name + '_maximum'}
                                ref={this.props.name + '_maximum'}
                                placeholder={this.props.placeholder}
                                value={this.props.valueObj.maximum}
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
                    <textarea
                        name={this.props.name}
                        rows="6"
                        placeholder={this.props.placeholder}
                        value={longValue}
                        datatype={this.props.dataType}
                        onKeyUp={this.props.onChange}
                        onChange={this.props.onChange}
                        className="form-control" />
                );
                break;
            default:
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
    checked: PropTypes.bool,
    dataType: PropTypes.string.isRequired,
    inputCols: PropTypes.number,
    label: PropTypes.string.isRequired,
    labelCols: PropTypes.number,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    picklist: PropTypes.array,
    placeholder: PropTypes.string,
    isReadOnly: PropTypes.bool,
    value: PropTypes.string,
    valueArray: PropTypes.array,
    valueObj: PropTypes.object,
    buttonType: PropTypes.string,
    buttonOnClick: PropTypes.func,
    bsButtonStyle: PropTypes.string
};

export default DndInput;