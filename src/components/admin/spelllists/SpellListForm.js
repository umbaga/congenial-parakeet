import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';
import DndInput from '../../common/inputs/DndInput';
import DndUniversalInput from '../../common/inputs/DndUniversalInput';
import DndToggleBoxes from '../../common/inputs/DndToggleBoxes';

class SpellListForm extends React.Component {
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
        const spelllist = this.props.spelllist;
        const spellLevels = this.props.spellLevels;
        const spells = this.props.spells.filter(function(spell) {
            if (this.props.selectedSpellLevel.id == -1) {
                return true;
            } else {
                return this.props.selectedSpellLevel.id == spell.level;
            }
        }.bind(this));
        const displaySpells = spelllist.spells.filter(function(spell) {
            if (this.props.selectedSpellLevel.id == -1) {
                return true;
            } else {
                return this.props.selectedSpellLevel.id == spell.level;
            }
        }.bind(this));
        return (
            <div>
                <form>
                    <DndUniversalInput
                        ref="name"
                        referenceObject={spelllist}
                        onChange={this.props.onChange}
                        picklists={this.props.picklists}
                        hideDescription
                        />
                    <DndInput
                        label="Spell Level"
                        name="school"
                        valueObj={this.props.selectedSpellLevel}
                        onChange={this.props.onChangeSelectedSpellLevel}
                        dataType={util.dataTypes.picklist.SPELL_LEVEL}
                        picklist={spellLevels}
                        hideSelectOneOption
                        />
                    <DndToggleBoxes
                        dataType={util.dataTypes.array.ASSIGNED_SPELLS}
                        name="spells"
                        selectedItemArray={displaySpells}
                        unselectedItemArray={spells}
                        onAddItem={this.props.onAddSpell}
                        onRemoveItem={this.props.onRemoveSpell}
                        />
                </form>
            </div>
        );
    }
}

SpellListForm.propTypes = {
    spelllist: PropTypes.object.isRequired,
    spells: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    isCreate: PropTypes.bool.isRequired,
    onEdit: PropTypes.func,
    onViewDetails: PropTypes.func,
    saving: PropTypes.bool,
    picklists: PropTypes.array,
    selectedSpellLevel: PropTypes.object.isRequired,
    spellLevels: PropTypes.array.isRequired,
    onChangeSelectedSpellLevel: PropTypes.func.isRequired,
    onAddSpell: PropTypes.func.isRequired,
    onRemoveSpell: PropTypes.func.isRequired
};

export default SpellListForm;