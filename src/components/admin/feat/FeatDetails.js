import React from 'react';
import PropTypes from 'prop-types';
//import util from '../../../util/util';
//import DndChartDisplay from '../../common/display/DndChartDisplay';

class FeatDetails extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    componentDidMount() {
        
    }
    
    render() {
        const feat = this.props.feat;
        return (
            <div>
                <div><em>{feat.name}</em></div>
            </div>
        );
    }
}

FeatDetails.propTypes = {
    feat: PropTypes.object.isRequired,
    picklists: PropTypes.array
};

export default FeatDetails;