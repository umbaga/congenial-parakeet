import React from 'react';
import PropTypes from 'prop-types';

class SpellListDetails extends React.Component {
    constructor(props) {
        super(props);
        this.renderSpellsPerLevel = this.renderSpellsPerLevel.bind(this);
    }
    
    componentDidMount() {
        
    }
    
    renderSpellsPerLevel(spells, level) {
        const filteredSpells = spells.filter(function(spell) {
            return level.id == spell.level;
        });
        if (level.id >= 0) {
            if (filteredSpells.length != 0) {
                return (
                    <div key={level.id}>
                        <strong>{level.name}</strong>
                        {
                            filteredSpells.map(spell =>
                                <div key={spell.id}>
                                    {spell.name}
                                </div>
                            )
                        }
                    </div>
                );
            }
        }
        return null;
    }
    
    render() {
        const spelllist = this.props.spelllist;
        const spellLevels = this.props.spellLevels;
        return (
            <div>
                <div><strong>{spelllist.name}</strong></div>
                {spellLevels.map(level =>
                    this.renderSpellsPerLevel(spelllist.spells, level)
                )}
            </div>
        );
    }
}

SpellListDetails.propTypes = {
    spelllist: PropTypes.object.isRequired,
    picklists: PropTypes.array,
    spellLevels: PropTypes.array.isRequired
};

export default SpellListDetails;