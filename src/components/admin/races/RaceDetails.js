import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';

class RaceDetails extends React.Component {
    constructor(props) {
        super(props);
        this.renderSpeedBlock = this.renderSpeedBlock.bind(this);
        this.renderAbilityScoreBlock = this.renderAbilityScoreBlock.bind(this);
        this.renderSpecificAbilityScore = this.renderSpecificAbilityScore.bind(this);
        this.renderSelectionAbilityScores = this.renderSelectionAbilityScores.bind(this);
    }
    
    componentDidMount() {
        
    }
    
    renderSpeedBlock(race) {
        if (race && race.movement && race.movement.length != 0) {
            return (
                <div>
                    <strong>Speed: </strong>
                    {race.movement.sort(function(a, b) {
                        if (a.name < b.name) {
                            return 1;
                        }
                        if (a.name > b.name) {
                            return -1;
                        }
                    }).map(function(movement, idx) {
                        if (idx == 0) {
                            return (
                                <span key={idx}>Your base {movement.name.toLowerCase()} speed is {movement.speed} feet.</span>
                            );
                        } else {
                            return (
                                <span key={idx}>You also have a {movement.name.toLowerCase()} speed of {movement.speed} feet.</span>
                            );
                        }
                    }.bind(this))}
                </div>
            );
        }
        return null;
    }
    
    renderAbilityScoreBlock(race) {
        if (race.abilityScores &&
            (race.abilityScores.strength != 0 || race.abilityScores.dexterity != 0 || race.abilityScores.constitution != 0 ||
             race.abilityScores.intelligence != 0 || race.abilityScores.wisdom != 0 || race.abilityScores.charisma != 0 ||
             (race.abilityScores.selections && race.abilityScores.selections.length != 0))) {
            return (
                <div>
                    <strong>Ability Scores: </strong>
                    {this.renderSpecificAbilityScore('Strength', race.abilityScores.strength)}
                    {this.renderSpecificAbilityScore('Dexterity', race.abilityScores.dexterity)}
                    {this.renderSpecificAbilityScore('Constitution', race.abilityScores.constitution)}
                    {this.renderSpecificAbilityScore('Intelligence', race.abilityScores.intelligence)}
                    {this.renderSpecificAbilityScore('Wisdom', race.abilityScores.wisdom)}
                    {this.renderSpecificAbilityScore('Charisma', race.abilityScores.charisma)}
                    {this.renderSelectionAbilityScores(race)}
                </div>
            );
        }
        return null;
    }
    
    renderSelectionAbilityScores(race) {
        if (race && race.abilityScores && race.abilityScores.selection && race.abilityScores.selection.count != 0) {
            let tmp = '';
            tmp = '+' + race.abilityScores.selection.modifier + ' to ' + race.abilityScores.selection.count + ' ability scores.';
            
            tmp = 'Select ' + race.abilityScores.selection.count.toString() + ' ability score' + (race.abilityScores.selection.count == 1 ? '' : 's');
            tmp += ' and increase them by ' + race.abilityScores.selection.modifier.toString();
            return (
                <span>
                    {tmp}
                </span>
            );
        }
        return null;
    }
    
    renderSpecificAbilityScore(caption, val) {
        if (val > 0) {
            return (<span>Your {caption} scrore increases by {val}.</span>);
        } else if (val < 0) {
            return (<span>Your {caption} scrore is reduced by {Math.abs(val)}.</span>);
        }
        return null;
    }
    
    render() {
        const race = this.props.race;
        return (
            <div>
                <div><strong>{race.name}</strong></div>
                <div>{util.format.forDisplay.obj.monsterTypeSizeBlock(race)}</div>
                {this.renderAbilityScoreBlock(race)}
                {this.renderSpeedBlock(race)}
            </div>
        );
    }
}

RaceDetails.propTypes = {
    race: PropTypes.object.isRequired,
    picklists: PropTypes.array
};

export default RaceDetails;