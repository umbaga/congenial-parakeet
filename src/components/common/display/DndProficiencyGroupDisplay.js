import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';
import DndProficiencyGroupItem from './DndProficiencyGroupItem';

class DndProficiencyGroupDisplay extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const proficiencyGroups = this.props.proficiencyGroups;
        let showArmor = false;
        let showLanguage = false;
        let showSavingThrow = false;
        let showSkill = false;
        let showTool = false;
        let showWeapon = false;
        for (let x = 0; x < proficiencyGroups.length; x++) {
            if (proficiencyGroups[x].category.id == util.picklistInfo.ARMOR_PROFICIENCY_CATEGORY || proficiencyGroups[x].category.parentId == util.picklistInfo.ARMOR_PROFICIENCY_CATEGORY) {
                showArmor = true;
            }
            if (proficiencyGroups[x].category.id == util.picklistInfo.LANGUAGE_PROFICIENCY_CATEGORY || proficiencyGroups[x].category.parentId == util.picklistInfo.LANGUAGE_PROFICIENCY_CATEGORY) {
                showLanguage = true;
            }
            if (proficiencyGroups[x].category.id == util.picklistInfo.SAVING_THROW_PROFICIENCY_CATEGORY || proficiencyGroups[x].category.parentId == util.picklistInfo.SAVING_THROW_PROFICIENCY_CATEGORY) {
                showSavingThrow = true;
            }
            if (proficiencyGroups[x].category.id == util.picklistInfo.SKILL_PROFICIENCY_CATEGORY || proficiencyGroups[x].category.parentId == util.picklistInfo.SKILL_PROFICIENCY_CATEGORY) {
                showSkill = true;
            }
            if (proficiencyGroups[x].category.id == util.picklistInfo.TOOL_PROFICIENCY_CATEGORY || proficiencyGroups[x].category.parentId == util.picklistInfo.TOOL_PROFICIENCY_CATEGORY) {
                showTool = true;
            }
            if (proficiencyGroups[x].category.id == util.picklistInfo.WEAPON_PROFICIENCY_CATEGORY || proficiencyGroups[x].category.parentId == util.picklistInfo.WEAPON_PROFICIENCY_CATEGORY) {
                showWeapon = true;
            }
        }
        let armor = null;
        let language = null;
        let savingThrow = null;
        let skill = null;
        let tool = null;
        let weapon = null;
        if (showArmor) {
            skill = (
                <div>
                    <span>Armor:</span>
                    <span>
                        {proficiencyGroups.filter(function(group) {
                            return group.category.id == util.picklistInfo.ARMOR_PROFICIENCY_CATEGORY || group.category.parentId == util.picklistInfo.ARMOR_PROFICIENCY_CATEGORY;
                        }).map(group =>
                               <DndProficiencyGroupItem
                                   key={group.id}
                                   proficiencyGroup={group}
                                   />
                          )}
                    </span>
                </div>
            );
        }
        if (showLanguage) {
            skill = (
                <div>
                    <span>Languages:</span>
                    <span>
                        {proficiencyGroups.filter(function(group) {
                            return group.category.id == util.picklistInfo.LANGUAGE_PROFICIENCY_CATEGORY || group.category.parentId == util.picklistInfo.LANGUAGE_PROFICIENCY_CATEGORY;
                        }).map(group =>
                               <DndProficiencyGroupItem
                                   key={group.id}
                                   proficiencyGroup={group}
                                   />
                          )}
                    </span>
                </div>
            );
        }
        if (showSavingThrow) {
            skill = (
                <div>
                    <span>Saving Throws:</span>
                    <span>
                        {proficiencyGroups.filter(function(group) {
                            return group.category.id == util.picklistInfo.SAVING_THROW_PROFICIENCY_CATEGORY || group.category.parentId == util.picklistInfo.SAVING_THROW_PROFICIENCY_CATEGORY;
                        }).map(group =>
                               <DndProficiencyGroupItem
                                   key={group.id}
                                   proficiencyGroup={group}
                                   />
                          )}
                    </span>
                </div>
            );
        }
        if (showSkill) {
            skill = (
                <div>
                    <span>Skills:</span>
                    <span>
                        {proficiencyGroups.filter(function(group) {
                            return group.category.id == util.picklistInfo.SKILL_PROFICIENCY_CATEGORY || group.category.parentId == util.picklistInfo.SKILL_PROFICIENCY_CATEGORY;
                        }).map(group =>
                               <DndProficiencyGroupItem
                                   key={group.id}
                                   proficiencyGroup={group}
                                   />
                          )}
                    </span>
                </div>
            );
        }
        if (showTool) {
            tool = (
                <div>
                    <span>Tools:</span>
                    <span>
                        {proficiencyGroups.filter(function(group) {
                            return group.category.id == util.picklistInfo.TOOL_PROFICIENCY_CATEGORY || group.category.parentId == util.picklistInfo.TOOL_PROFICIENCY_CATEGORY;
                        }).map(group =>
                               <DndProficiencyGroupItem
                                   key={group.id}
                                   proficiencyGroup={group}
                                   />
                          )}
                    </span>
                </div>
            );
        }
        if (showWeapon) {
            skill = (
                <div>
                    <span>Weapons:</span>
                    <span>
                        {proficiencyGroups.filter(function(group) {
                            return group.category.id == util.picklistInfo.WEAPON_PROFICIENCY_CATEGORY || group.category.parentId == util.picklistInfo.WEAPON_PROFICIENCY_CATEGORY;
                        }).map(group =>
                               <DndProficiencyGroupItem
                                   key={group.id}
                                   proficiencyGroup={group}
                                   />
                          )}
                    </span>
                </div>
            );
        }
        
        return (
            <div>
                <div>Proficiencies:</div>
                {armor}
                {weapon}
                {savingThrow}
                {skill}
                {language}
                {tool}
            </div>
        );
    }
}

DndProficiencyGroupDisplay.propTypes = {
    proficiencyGroups: PropTypes.array.isRequired
};

export default DndProficiencyGroupDisplay;
