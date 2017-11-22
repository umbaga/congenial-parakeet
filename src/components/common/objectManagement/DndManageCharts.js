import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';
import DndButton from '../buttons/DndButton';
import DndInput from '../inputs/DndInput';
import DndDataEntryButtonBar from '../buttons/DndDataEntryButtonBar';
import DndManageChartEntry from '../subcomponents/DndManageChartEntry';
import DndListItemButtonBar from '../buttons/DndListItemButtonBar';
import DndIncrementButtons from '../buttons/DndIncrementButtons';

class DndManageCharts extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.renderEditChart = this.renderEditChart.bind(this);
    }
    
    renderEditChart() {
        let renderThis = false;
        const chart = this.props.chart;
        if (this.props.chart.columnCount > 0 && this.props.chart.rowCount > 0) {
            renderThis = true;
        }
        return renderThis ? (
            <div className="col-sm-12">
                <table className="table table-sm table-striped table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            {chart.columns.map(column =>
                                <th
                                    contentEditable
                                    onBlur={this.props.onChange}
                                    key={column.id}
                                    id={column.id + '_columns_title'}>
                                                   {column.title}
                                               </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {chart.rows.map(row =>
                        <tr
                            key={row.id}>
                            <th
                                    contentEditable
                                    onBlur={this.props.onChange}
                            id={row.id + '_rows_title'}>
                                {row.title}
                            </th>
                            {chart.entries.filter(function(entry) {
                                return row.id == -1 * (entry.rowIndex + 1);
                            }).map(entry =>
                                <td
                                    contentEditable
                                    onBlur={this.props.onChange}
                                    id={entry.id + '_entries_description'}
                                    key={entry.id}>
                                       {entry.description}
                                </td>
                            )}
                        </tr>)}
                    </tbody>
                </table>
            </div>
        ) : null;
    }
    
    render() {
        const charts = this.props.charts;
        const chart = this.props.chart;
        return (
            <div>
                <div>
                    <div className="col-sm-6">
                        <DndInput
                            dataType={util.dataTypes.number.INT}
                            name="columnCount"
                            label="Coulmns"
                            value={chart.columnCount.toString()}
                            onChange={this.props.onChange}
                            />
                    </div>
                    <div className="col-sm-6">
                        <DndInput
                            dataType={util.dataTypes.number.INT}
                            name="rowCount"
                            label="Rows"
                            value={chart.rowCount.toString()}
                            onChange={this.props.onChange}
                            />
                    </div>
                    {this.renderEditChart()}
                    <DndDataEntryButtonBar
                        onCancel={this.props.onResetChart}
                        onSave={this.props.onAddChart}
                        />
                </div>
            </div>
        );
    }
}

DndManageCharts.propTypes = {
    charts: PropTypes.array.isRequired,
    chart: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onChangeChartOrder: PropTypes.func.isRequired,
    onAddChart: PropTypes.func.isRequired,
    onAddColumn: PropTypes.func.isRequired,
    onAddRow: PropTypes.func.isRequired,
    onCreateChart: PropTypes.func.isRequired,
    onRemoveChart: PropTypes.func.isRequired,
    onRemoveColumn: PropTypes.func.isRequired,
    onRemoveRow: PropTypes.func.isRequired,
    onSelectChart: PropTypes.func.isRequired,
    onResetChart: PropTypes.func.isRequired
};

export default DndManageCharts;
