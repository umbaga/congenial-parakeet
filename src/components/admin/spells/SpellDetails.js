import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';
import DndChartDisplay from '../../common/display/DndChartDisplay';

class SpellDetails extends React.Component {
    constructor(props) {
        super(props);
        this.renderAtHighestLevel = this.renderAtHighestLevel.bind(this);
        this.renderCharts = this.renderCharts.bind(this);
        this.renderSupplementalDescriptions = this.renderSupplementalDescriptions.bind(this);
    }
    
    componentDidMount() {
        
    }
    
    renderAtHighestLevel() {
        return this.props.spell.atHigherLevels && this.props.spell.atHigherLevels.length != 0 ? (
            <div>
                <strong>At Higher Levels: </strong>
                <div dangerouslySetInnerHTML={{ __html: this.props.spell.atHigherLevels }}/>
            </div>
        ) : null;
    }
    
    renderCharts() {
        if (this.props.spell.charts && this.props.spell.charts.length != 0) {
            return (
                <div>
                    {this.props.spell.charts.map(chart =>
                        <DndChartDisplay
                            key={chart.id}
                            chart={chart}
                            />
                    )}
                </div>
            );
        } else {
            return null;
        }
    }
    
    renderSupplementalDescriptions() {
        return (this.props.spell.supplementalDescriptions && this.props.spell.supplementalDescriptions.length != 0) ? (
            <div>
                {this.props.spell.supplementalDescriptions.map(description =>
                    <div key={description.id}>
                        <strong>{description.title}</strong>
                        <div dangerouslySetInnerHTML={{ __html: description.description }}/>
                    </div>
                )}
            </div>
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
                <div dangerouslySetInnerHTML={{ __html: spell.description }}/>
                {this.renderSupplementalDescriptions()}
                {this.renderAtHighestLevel()}
                {this.renderCharts()}
            </div>
        );
    }
}

SpellDetails.propTypes = {
    spell: PropTypes.object.isRequired,
    picklists: PropTypes.array
};

export default SpellDetails;