import React from 'react';
import PropTypes from 'prop-types';
import DndInput from '../../common/inputs/DndInput';
import DndUniversalInput from '../../common/inputs/DndUniversalInput';
import util from '../../../util/util';

class ProficiencyForm extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.refs.name.setFocus();
    }
    
    render() {
        const categoryPicklist = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.PROFICIENCY_CATEGORY).filter(function(category) {
            return !category.isEquipmentBased;
        });
        const abilityScorePicklist = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.ABILITY_SCORE);
        const languageRarityPicklist = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.LANGUAGE_RARITY);
        const langaugeScriptPicklist = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.LANGUAGE_SCRIPT);
        
        let selectedCategory = util.common.picklists.getPicklistItem(this.props.picklists, this.props.proficiency.category.id);
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
                    <div className="modal-no-tabs">
                        <DndUniversalInput
                            ref="name"
                            referenceObject={this.props.proficiency}
                            onChange={this.props.onChange}
                            picklists={this.props.picklists}
                            />
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
                    </div>
                </form>
            </div>
        );
    }
}

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