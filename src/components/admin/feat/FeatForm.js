import React from 'react';
import PropTypes from 'prop-types';
import DndButton from '../../common/buttons/DndButton';
import DndInput from '../../common/inputs/DndInput';
import DndInputWrapper from '../../common/inputs/DndInputWrapper';
import DndUniversalInput from '../../common/inputs/DndUniversalInput';
import DndPicklistAddSelect from '../../common/inputs/DndPicklistAddSelect';
import DndCheckboxList from '../../common/inputs/DndCheckboxList';
import DndCheckboxPicklist from '../../common/inputs/DndCheckboxPicklist';
import util from '../../../util/util';
import { Tabs, Tab } from 'react-bootstrap';
import DndManageMechanics from '../../common/objectManagement/DndManageMechanics';
import DndManageCharts from '../../common/objectManagement/DndManageCharts';
import DndManageSupplementalDescriptions from '../../common/objectManagement/DndManageSupplementalDescriptions';
import DndManageItemGroups from '../../common/objectManagement/DndManageItemGroups';

class FeatForm extends React.Component {
    constructor(props) {
        super(props);
        this.setFocus = this.setFocus.bind(this);
        this.renderSupplementalDamages = this.renderSupplementalDamages.bind(this);
    }
    
    componentDidMount() {
        this.refs.name.setFocus();
    }
    
    setFocus() {
        this.refs.name.setFocus();
    }
    
    renderSupplementalDamages(feat) {
        return feat.damage.supplemental && feat.damage.supplemental.length != 0 ? (
            <DndInputWrapper
                label="Supplemental Damage"
                >
                <div>
                    {feat.damage.supplemental.map(function(suppDamage, idx) {
                        return (
                            <div key={idx}>
                                {util.format.forDisplay.obj.damage(suppDamage)}
                                <DndButton
                                    buttonType="removeitem"
                                    onClick={this.props.onRemoveDamageGrouping}
                                    dataType={util.datatypes.action.DAMAGE_GROUPING.REMOVE}
                                    name={idx + '_removeDamageGroupButton'}
                                    />
                            </div>
                        );
                    }.bind(this))}
                </div>
            </DndInputWrapper>
        ) : null;
    }
    
    render() {
        const feat = this.props.feat;
        const picklists = this.props.picklists;
        const proficiencies = this.props.proficiencies;
        
        return (
            <div>
                <form>
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="General">
                            <div>&nbsp;</div>
                            <DndUniversalInput
                                ref="name"
                                referenceObject={feat}
                                onChange={this.props.onChange}
                                picklists={this.props.picklists}
                                />
                        </Tab>
                        <Tab eventKey={2} title="Prerequisites">
                            <div>&nbsp;</div>
                            Prerequisites
                        </Tab>
                        <Tab eventKey={3} title="Mechanics">
                            <div>&nbsp;</div>
                            Mechanics
                        </Tab>
                        <Tab eventKey={4} title="Proficiencies">
                            <div>&nbsp;</div>
                            <DndManageItemGroups
                                itemGroups={feat.proficiencyGroups}
                                picklists={picklists}
                                items={proficiencies}
                                editItemGroup={this.props.editProficiencyGroup}
                                categoryTypeId={util.itemtypes.TYPES.PROFICIENCY_CATEGORY}
                                onChange={this.props.onChangeProficiencyGroup}
                                title="Proficiency"
                                toggleFieldName="proficiencies"
                                actionProperty="PROFICIENCY_GROUP"
                                buttonClickFieldName="proficiencyGroups"
                                groupListItemTextFormatFunction={util.format.forDisplay.obj.proficiencyGroup}
                                />
                        </Tab>
                    </Tabs>
                </form>
            </div>
        );
    }
}

FeatForm.propTypes = {
    feat: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    isCreate: PropTypes.bool.isRequired,
    onEdit: PropTypes.func,
    onViewDetails: PropTypes.func,
    saving: PropTypes.bool,
    picklists: PropTypes.array.isRequired,
    proficiencies: PropTypes.array.isRequired,
    
    editProficiencyGroup: PropTypes.object.isRequired,
    onChangeProficiencyGroup: PropTypes.func.isRequired,
    
    editMechanic: PropTypes.object.isRequired,
    onChangeMechanics: PropTypes.func.isRequired
};

export default FeatForm;