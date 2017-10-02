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
            if (proficiencyGroups[x].category.id == util.picklistInfo.PROFICIENCY_CATEGORY_ARMOR || proficiencyGroups[x].category.parentId == util.picklistInfo.PROFICIENCY_CATEGORY_ARMOR) {
                showArmor = true;
            }
            if (proficiencyGroups[x].category.id == util.picklistInfo.PROFICIENCY_CATEGORY_LANGUAGE || proficiencyGroups[x].category.parentId == util.picklistInfo.PROFICIENCY_CATEGORY_LANGUAGE) {
                showLanguage = true;
            }
            if (proficiencyGroups[x].category.id == util.picklistInfo.PROFICIENCY_CATEGORY_SAVING_THROW || proficiencyGroups[x].category.parentId == util.picklistInfo.PROFICIENCY_CATEGORY_SAVING_THROW) {
                showSavingThrow = true;
            }
            if (proficiencyGroups[x].category.id == util.picklistInfo.PROFICIENCY_CATEGORY_SKILL || proficiencyGroups[x].category.parentId == util.picklistInfo.PROFICIENCY_CATEGORY_SKILL) {
                showSkill = true;
            }
            if (proficiencyGroups[x].category.id == util.picklistInfo.PROFICIENCY_CATEGORY_TOOL || proficiencyGroups[x].category.parentId == util.picklistInfo.PROFICIENCY_CATEGORY_TOOL) {
                showTool = true;
            }
            if (proficiencyGroups[x].category.id == util.picklistInfo.PROFICIENCY_CATEGORY_WEAPON || proficiencyGroups[x].category.parentId == util.picklistInfo.PROFICIENCY_CATEGORY_WEAPON) {
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
                            return group.category.id == util.picklistInfo.PROFICIENCY_CATEGORY_ARMOR || group.category.parentId == util.picklistInfo.PROFICIENCY_CATEGORY_ARMOR;
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
                            return group.category.id == util.picklistInfo.PROFICIENCY_CATEGORY_LANGUAGE || group.category.parentId == util.picklistInfo.PROFICIENCY_CATEGORY_LANGUAGE;
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
                            return group.category.id == util.picklistInfo.PROFICIENCY_CATEGORY_SAVING_THROW || group.category.parentId == util.picklistInfo.PROFICIENCY_CATEGORY_SAVING_THROW;
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
                            return group.category.id == util.picklistInfo.PROFICIENCY_CATEGORY_SKILL || group.category.parentId == util.picklistInfo.PROFICIENCY_CATEGORY_SKILL;
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
                            return group.category.id == util.picklistInfo.PROFICIENCY_CATEGORY_TOOL || group.category.parentId == util.picklistInfo.PROFICIENCY_CATEGORY_TOOL;
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
                            return group.category.id == util.picklistInfo.PROFICIENCY_CATEGORY_WEAPON || group.category.parentId == util.picklistInfo.PROFICIENCY_CATEGORY_WEAPON;
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
