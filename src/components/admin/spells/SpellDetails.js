import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';

class SpellDetails extends React.Component {
    constructor(props) {
        super(props);
        this.renderAtHighestLevel = this.renderAtHighestLevel.bind(this);
    }
    
    componentDidMount() {
        
    }
    renderAtHighestLevel() {
        return this.props.spell.atHigherLevels && this.props.spell.atHigherLevels.length != 0 ? (
            <div><strong>At Higher Levels: </strong>{this.props.spell.atHigherLevels}</div>
        ) : null;
    }
    render() {
        const spell = this.props.spell;
        return (
            <div>
                <div><em>{spell.name}</em></div>
                <div>{util.format.forDisplay.obj.spellLevelAndSchool(spell)}</div>
                <div>&nbsp;</div>
                <div><strong>Casting Time: </strong>{spell.castingTime.name}</div>
                <div><strong>Range: </strong>{spell.range.name}</div>
                <div><strong>Components: </strong>{util.format.forDisplay.obj.spellComponents(spell)}</div>
                <div><strong>Duration: </strong>{spell.duration.name}</div>
                <div>&nbsp;</div>
                <div>{spell.description}</div>
                {this.renderAtHighestLevel()}
            </div>
        );
    }
}

SpellDetails.propTypes = {
    spell: PropTypes.object.isRequired,
    picklists: PropTypes.array
};

export default SpellDetails;