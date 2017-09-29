import React from 'react';
import PropTypes from 'prop-types';
import DndDataEntryButtonBar from '../../common/DndDataEntryButtonBar';
import DndInput from '../../common/DndInput';
import util from '../../../util/util';

class ProficiencyForm extends React.Component {
    constructor(props) {
        super(props);
        this.setFocus = this.setFocus.bind(this);
        //this.renderAmmunitionTypePicklist = this.renderAmmunitionTypePicklist.bind(this);
    }
    
    componentDidMount() {
        this.refs.name.setFocus();
    }
    
    setFocus() {
        this.refs.name.setFocus();
    }
        
    render() {
        const categoryPicklist = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.PROFICIENCY_CATEGORY).filter(function(category) {
            return !category.isEquipmentBased;
        });
        const abilityScorePicklist = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.ABILITY_SCORE);
        const languageRarityPicklist = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.LANGUAGE_RARITY);
        const langaugeScriptPicklist = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.LANGUAGE_SCRIPT);
        
        let selectedCategory = util.picklistInfo.getPicklistItem(this.props.picklists, this.props.proficiency.category.id);
        let languageForm = null;
        let abilityScoreForm = null;
        if (selectedCategory && selectedCategory.requireAbilityScore) {
            abilityScoreForm = (
                    <div className="col-md-6">
                        <DndInput
                            name="abilityScore"
                            label="Assoicated Ability Score"
                            dataType={util.dataTypes.picklist.ABILITY_SCORE}
                            valueObj={this.props.proficiency.abilityScore}
                            onChange={this.props.onChange}
                            picklist={abilityScorePicklist} />
                    </div>
            );
        }
        if (selectedCategory && selectedCategory.requireLanguageInfo) {
            languageForm = (
                <div className="col-md-12">
                    <div className="col-md-6">
                        <DndInput
                            name="language.rarity"
                            label="Rarity"
                            dataType={util.dataTypes.picklist.LANGUAGE_RARITY}
                            valueObj={this.props.proficiency.language.rarity}
                            onChange={this.props.onChange}
                            picklist={languageRarityPicklist} />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="language.script"
                            label="Script"
                            dataType={util.dataTypes.picklist.LANGUAGE_SCRIPT}
                            valueObj={this.props.proficiency.language.script}
                            onChange={this.props.onChange}
                            picklist={langaugeScriptPicklist} />
                    </div>
                </div>
            );
        }
        return (
            <div>
                <form>
                    <div className="col-md-12">
                        <DndInput
                            name="name"
                            ref="name"
                            label="Name"
                            dataType={util.dataTypes.string.STRING}
                            value={this.props.proficiency.name}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="col-md-12">
                        <DndInput
                            name="category"
                            label="Category"
                            dataType={util.dataTypes.picklist.PROFICIENCY_CATEGORY}
                            valueObj={this.props.proficiency.category}
                            onChange={this.props.onChange}
                            picklist={categoryPicklist} />
                    </div>
                    {languageForm}
                    {abilityScoreForm}
                    <DndDataEntryButtonBar
                        onSave={this.props.onSave}
                        onSaveNew={this.props.onSaveNew}
                        onCancel={this.props.onCancel}
                        onDelete={this.props.onDelete}
                        isCreate={this.props.isCreate} />
                </form>
            </div>
        );
    }
}
/*
                    <div className="col-md-6">
                        <DndInput
                            name="languageRarity"
                            label="Rarity"
                            dataType={util.dataTypes.picklist.LANGUAGE_RARITY}
                            valueObj={this.props.proficiency.langauge.type}
                            onChange={this.props.onChange}
                            picklist={languageRarityPicklist} />
                    </div>*/
/*
                    <div className="col-md-6">
                        <DndInput
                            name="category"
                            label="Category"
                            dataType={util.dataTypes.picklist.PROFICIENCY_CATEGORY}
                            valueObj={this.props.proficiency.category}
                            onChange={this.props.onChange}
                            picklist={categoryPicklist} />
                    </div>*/
ProficiencyForm.propTypes = {
    proficiency: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onSaveNew: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    isCreate: PropTypes.bool.isRequired,
    saving: PropTypes.bool,
    picklists: PropTypes.array
};

export default ProficiencyForm;