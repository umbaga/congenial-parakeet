import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';
import DndChartDisplay from '../../common/display/DndChartDisplay';

class SpellListDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        const spelllist = this.props.spelllist;
        return (
            <div>
                <div><em>{spelllist.name}</em></div>
            </div>
        );
    }
}

SpellListDetails.propTypes = {
    spelllist: PropTypes.object.isRequired,
    picklists: PropTypes.array
};

export default SpellListDetails;