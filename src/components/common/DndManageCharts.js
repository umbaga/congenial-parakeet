import React from 'react';
import PropTypes from 'prop-types';
import util from '../../util/util';
import DndInput from './DndInput';
import DndDataEntryButtonBar from './DndDataEntryButtonBar';
import DndManageChartEntry from './subcomponents/DndManageChartEntry';
import DndListItemButtonBar from './DndListItemButtonBar';

class DndManageCharts extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.renderCharts = this.renderCharts.bind(this);
        this.renderManageChartEntries = this.renderManageChartEntries.bind(this);
    }
    
    renderCharts(charts) {
        return charts && charts.length != 0 ? (
            <fieldset>
                <legend>Charts</legend>
                <table>
                    <tbody>
                        {charts.map(chart =>
                            <tr key={chart.id}>
                                <td>{chart.title}</td>
                                <td>
                                    <DndListItemButtonBar
                                        listItem={chart}
                                        onEdit={this.props.onSelectChart}
                                        onDelete={this.props.onRemoveChart}
                                        />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </fieldset>
        ) : null;
    }
    
    renderManageChartEntries(chart) {
        return chart && chart.title && chart.title.length && chart.dieRoll && util.dataTypes.compareDataType(chart.dieRoll.rendered, util.dataTypes.special.DICE_ROLL) ? (
            <div>
                <table>
                    <tbody>
                        {chart.entries.map(entry =>
                            <DndManageChartEntry
                                key={entry.id}
                                chart={chart}
                                entry={entry}
                                onChangeChart={this.props.onChangeChart}
                                onRemoveEntry={this.props.onRemoveEntry}
                                />
                        )}
                    </tbody>
                </table>
            </div>
        ) : null;
    }
    
    render() {
        const charts = this.props.charts;
        const chart = this.props.chart;
        //console.log(charts);
        //console.log(chart);
        return (
            <div>
                <fieldset>
                    <legend>New Chart</legend>
                    <div className="col-md-6">
                        <DndInput
                            name="title"
                            label="Title"
                            dataType={util.dataTypes.string.STRING}
                            value={chart.title}
                            onChange={this.props.onChangeChart}
                            />
                    </div>
                    <div className="col-md-6">
                        <DndInput
                            name="dieRoll"
                            label="Die Roll"
                            dataType={util.dataTypes.special.DICE_ROLL}
                            valueObj={chart.dieRoll}
                            onChange={this.props.onChangeChart} />
                    </div>
                    {this.renderManageChartEntries(chart)}
                    <div>
                        <DndDataEntryButtonBar
                            onReset={this.props.onResetChart}
                            onSave={this.props.onAddChart}
                            />
                    </div>
                </fieldset>
                {this.renderCharts(charts)}
            </div>
        );
    }
}

DndManageCharts.propTypes = {
    charts: PropTypes.array.isRequired,
    chart: PropTypes.object.isRequired,
    onAddChart: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onChangeChart: PropTypes.func.isRequired,
    onRemoveChart: PropTypes.func.isRequired,
    onResetChart: PropTypes.func.isRequired,
    onSelectChart: PropTypes.func.isRequired,
    onRemoveEntry: PropTypes.func.isRequired
};

export default DndManageCharts;
