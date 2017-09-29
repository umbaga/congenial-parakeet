import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';

class BackgroundDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        console.log(this.props.background);
        return (
            <div className="col-md-12">
                DETAILS
                {this.props.background.name}
                {util.format.forDisplay.bool.asCheckX(true)}
                <div className="col-md-12">
                    DETAILS
                    {this.props.background.name}
                    {util.format.forDisplay.bool.asCheckX(true)}
                </div>
                <div className="col-md-12">
                    DETAILS
                    {this.props.background.name}
                    {util.format.forDisplay.bool.asCheckX(true)}
                </div>
                <div className="col-md-12">
                    DETAILS
                    {this.props.background.name}
                    {util.format.forDisplay.bool.asCheckX(true)}
                </div>
            </div>
        );
    }
}

BackgroundDetails.propTypes = {
    background: PropTypes.object.isRequired
};

export default BackgroundDetails;