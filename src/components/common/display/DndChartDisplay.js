import React from 'react';
import PropTypes from 'prop-types';

class DndChartDisplay extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.renderDescription = this.renderDescription.bind(this);
        this.renderRowColumnInHeader = this.renderRowColumnInHeader.bind(this);
        this.renderRowColumnInBody = this.renderRowColumnInBody.bind(this);
    }

    renderDescription(chart) {
        if (chart.description && chart.description.length != 0) {
            return (
                <div>
                    {chart.description}
                </div>
            );
        }
        return null;
    }
    
    renderRowColumnInHeader(hasRowTitles) {
        if (hasRowTitles) {
            return (<th></th>);
        } else {
            return null;
        }
    }
    
    renderRowColumnInBody(row, hasRowTitles) {
        if (hasRowTitles) {
            return (<th>{row.title}</th>);
        } else {
            return null;
        }
    }
    
    render() {
        const chart = this.props.chart;
        let hasRowTitles = false;
        for (let x = 0; x < chart.rows.length; x++) {
            if (chart.rows[x].title && chart.rows[x].title.length != 0) {
                hasRowTitles = true;
            }
        }
        return (
            <div>
                <table className="table table-sm table-striped table-hover">
                    <thead>
                        <tr>
                            <th colSpan={chart.columnCount + 1}>{chart.title}</th>
                        </tr>
                        <tr>
                            {this.renderRowColumnInHeader(hasRowTitles)}
                            {chart.columns.map(column =>
                                <th key={column.id}>{column.title}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {chart.rows.map(row =>
                            <tr key={row.id}>
                                {this.renderRowColumnInBody(row, hasRowTitles)}
                                {chart.entries.filter(function(entry) {
                                    return entry.rowIndex == row.rowIndex;
                                }).map(entry =>
                                    <td key={entry.id}>{entry.description}</td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
                {this.renderDescription(chart)}
            </div>
        );
    }
}

DndChartDisplay.propTypes = {
    chart: PropTypes.object.isRequired
};

export default DndChartDisplay;
