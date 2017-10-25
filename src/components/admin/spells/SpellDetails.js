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
            <div>At Higher LevelsL {this.props.spell.atHigherLevels}</div>
        ) : null;
    }
    render() {
        const spell = this.props.spell;
        return (
            <div>
                <div>{spell.name}</div>
                <div>{util.format.forDisplay.obj.spellLevelAndSchool(spell)}</div>
                <div>&nbsp;</div>
                <div>Casting Time: {spell.castingTime.name}</div>
                <div>Range: {spell.range.name}</div>
                <div>Components: </div>
                <div>Duration: {spell.duration.name}</div>
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