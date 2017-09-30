import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';
import DndProficiencyGroupDisplay from '../../common/display/DndProficiencyGroupDisplay';
import DndChartDisplay from '../../common/display/DndChartDisplay';

class BackgroundDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        const background = this.props.background;
        //const proficiencyCategories = util.picklistInfo.getPicklistItems(this.props.picklists, util.picklistInfo.PROFICIENCY_CATEGORY);
        console.log(background);
        console.log(this.props.picklists);
        return (
            <div>
                <div>{background.name}</div>
                <div>{background.description}</div>
                <DndProficiencyGroupDisplay
                    proficiencyGroups={background.proficiencyGroups}
                    />
                <div>
                    <div>
                        <div>Equipment:</div>
                        <div>
                            {util.format.forDisplay.obj.equipmentList(background)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

BackgroundDetails.propTypes = {
    background: PropTypes.object.isRequired,
    picklists: PropTypes.array
};

export default BackgroundDetails;