import React from 'react';
import PropTypes from 'prop-types';

class DndChartDisplay extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const chart = this.props.chart;
        console.log(chart);
        return (
            <div>CHART</div>
        );
    }
}

DndChartDisplay.propTypes = {
    chart: PropTypes.object.isRequired
};

export default DndChartDisplay;
