import React from 'react';
import PropTypes from 'prop-types';
import DndInput from '../../common/inputs/DndInput';
import DndUniversalInput from '../../common/inputs/DndUniversalInput';
import DndCheckboxPicklist from '../../common/inputs/DndCheckboxPicklist';
import util from '../../../util/util';
import { Tabs, Tab } from 'react-bootstrap';
import DndManageTextBoxList from '../../common/objectManagement/DndManageTextBoxList';

class RaceForm extends React.Component {
    constructor(props) {
        super(props);
        this.setFocus = this.setFocus.bind(this);
    }
    
    componentDidMount() {
        this.refs.name.setFocus();
    }
    
    setFocus() {
        this.refs.name.setFocus();
    }
    
    render() {
        const race = this.props.race;
        const races = this.props.races.filter(function(raceItem) {
            return (race.id != raceItem.id) && (raceItem.parentId == 0);
        });
        const picklists = this.props.picklists;
        const sizes = util.common.picklists.getPicklistItems(picklists, util.itemTypes.TYPES.SIZE);
        const monsterTypes = util.common.picklists.getPicklistItems(picklists, util.itemTypes.TYPES.MONSTER_TYPE);
        const monsterTags = util.common.picklists.getPicklistItems(picklists, util.itemTypes.TYPES.MONSTER_TAG);
        return (
            <div>
                <form>
                    <Tabs defaultActiveKey={3} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Size/Type">
                            <div>&nbsp;</div>
                            <DndUniversalInput
                                ref="name"
                                referenceObject={race}
                                onChange={this.props.onChange}
                                picklists={this.props.picklists}
                                hideDescription
                                />
                            <DndCheckboxPicklist
                                checked={this.props.isSubrace}
                                dataType={util.dataTypes.number.INT}
                                label="Subrace Parent"
                                checkboxName="chkParentId"
                                picklistName="parentId"
                                onChange={this.props.onChangeSubrace}
                                picklist={races}
                                valueObj={{id: race.parentId}}
                                onClick={this.props.onChangeSubrace}
                                placeholder="Select Parent Race"
                                checkboxPlaceholder="Is a Subrace"
                                />
                            <DndInput
                                label="Size"
                                name="size"
                                valueObj={race.size}
                                onChange={this.props.onChange}
                                dataType={util.dataTypes.picklist.SIZE}
                                picklist={sizes}
                                />
                            <DndInput
                                label="Type"
                                name="type"
                                valueObj={race.type}
                                onChange={this.props.onChange}
                                dataType={util.dataTypes.picklist.MONSTER_TYPE}
                                picklist={monsterTypes}
                                />
                            <DndInput
                                label="Tags"
                                name="tags"
                                valueArray={race.tags}
                                onChange={this.props.onChange}
                                dataType={util.dataTypes.array.MONSTER_TAGS}
                                picklist={monsterTags}
                                selectBoxSize={4}
                                />
                        </Tab>
                        <Tab eventKey={2} title="Ability Scores">
                            <div>&nbsp;</div>
                            <div className="col-sm-4">
                                <DndInput
                                    label="Str"
                                    name="abilityScores.strength"
                                    value={race.abilityScores.strength.toString()}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-4">
                                <DndInput
                                    label="Dex"
                                    name="abilityScores.dexterity"
                                    value={race.abilityScores.dexterity.toString()}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-4">
                                <DndInput
                                    label="Con"
                                    name="abilityScores.constitution"
                                    value={race.abilityScores.constitution.toString()}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-4">
                                <DndInput
                                    label="Int"
                                    name="abilityScores.intelligence"
                                    value={race.abilityScores.intelligence.toString()}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-4">
                                <DndInput
                                    label="Wis"
                                    name="abilityScores.wisdom"
                                    value={race.abilityScores.wisdom.toString()}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-4">
                                <DndInput
                                    label="Cha"
                                    name="abilityScores.charisma"
                                    value={race.abilityScores.charisma.toString()}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-6">
                                <DndInput
                                    label="Select #"
                                    name="abilityScores.selection.count"
                                    value={race.abilityScores.selection.count.toString()}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.number.INT}
                                    />
                            </div>
                            <div className="col-sm-6">
                                <DndInput
                                    label="Select Modifier"
                                    name="abilityScores.selection.modifier"
                                    value={race.abilityScores.selection.modifier.toString()}
                                    onChange={this.props.onChange}
                                    dataType={util.dataTypes.number.INT}
                                    />
                            </div>
                        </Tab>
                        <Tab eventKey={3} title="Movement & Senses">
                            <div>&nbsp;</div>
                            <div className="col-md-12">
                                <DndManageTextBoxList
                                    name="movement"
                                    onChange={this.props.onChange}
                                    picklists={picklists}
                                    primaryArray={race.movement}
                                    arrayType={util.itemTypes.TYPES.MOVEMENT_TYPE}
                                    textValueFieldName="speed"
                                    dataType={util.dataTypes.array.MOVEMENT}
                                    />
                            </div>
                            <div className="col-md-12">
                                <DndManageTextBoxList
                                    name="senses"
                                    onChange={this.props.onChange}
                                    picklists={picklists}
                                    primaryArray={race.senses}
                                    arrayType={util.itemTypes.TYPES.ADVANCED_SENSE}
                                    textValueFieldName="range"
                                    dataType={util.dataTypes.array.ADVANCED_SENSE}
                                    />
                            </div>
                        </Tab>
                    </Tabs>
                </form>
            </div>
        );
    }
}
/**/
RaceForm.propTypes = {
    race: PropTypes.object.isRequired,
    races: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    isCreate: PropTypes.bool.isRequired,
    onEdit: PropTypes.func,
    onViewDetails: PropTypes.func,
    saving: PropTypes.bool,
    picklists: PropTypes.array,
    isSubrace: PropTypes.bool.isRequired,
    onChangeSubrace: PropTypes.func.isRequired
};

export default RaceForm;