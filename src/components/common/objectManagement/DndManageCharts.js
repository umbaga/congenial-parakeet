import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';
import DndInput from '../inputs/DndInput';
import DndDataEntryButtonBar from '../buttons/DndDataEntryButtonBar';
//import DndCollapsibleTableRow from '../subcomponents/DndCollapsibleTableRow';
import DndStandardChartForm from './charts/forms/DndStandardChartForm';
import DndDieChartForm from './charts/forms/DndDieChartForm';
import DndCollapsibleList from './DndCollapsibleList';

class DndManageCharts extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showThisId: null
        };
        this.setShowThisId = this.setShowThisId.bind(this);
        this.renderChartForm = this.renderChartForm.bind(this);
        this.renderTypeSpecificForm = this.renderTypeSpecificForm.bind(this);
        this.renderFormButtons = this.renderFormButtons.bind(this);
        this.renderChartList = this.renderChartList.bind(this);
        this.validateChart = this.validateChart.bind(this);
        this._onSaveClick = this._onSaveClick.bind(this);
    }
    
    setShowThisId(chart) {
        let newId = null;
        if (this.state.showThisId != chart.id) {
            newId = chart.id;
        }
        this.setState({showThisId: newId});
    }
    
    renderChartList(charts) {
        if (charts && charts.length != 0) {
            return (
                <DndCollapsibleList
                    objects={charts}
                    onChange={this.props.onChange}
                    onSelectEditedItem={this.props.onSelectEdited}
                    removeItemAction={util.dataTypes.action.CHART.REMOVE}
                    selectItemAction={util.dataTypes.action.CHART.SELECT}
                    onReset={this.props.onReset}
                    moveItemDownAction={util.dataTypes.action.CHART.CHANGE_ENTRY_INDEX.DOWN}
                    moveItemUpAction={util.dataTypes.action.CHART.CHANGE_ENTRY_INDEX.UP}
                    />
            );
        }
        return null;
    }
    
    _onSaveClick(event) {
        this.props.onChange(event);
        this.props.onReset();
    }
    
    validateChart() {
        const chart = this.props.chart;
        let isValid = true;
        if (!chart.title || (chart.title && chart.title.length == 0)) {
            isValid = false;
        }
        switch (this.props.selectedChartType.id) {
            case util.itemTypes.CHARTS.DIE_ROLL:
                if (!util.dataTypes.compareDataType(chart.dice.rendered, util.dataTypes.special.DICE_ROLL)) {
                    isValid = false;
                }
                for (let q = 0; q < chart.entries.length; q++) {
                    if (!chart.entries[q].description || (chart.entries[q].description && chart.entries[q].description.length == 0)) {
                        isValid = false;
                    }
                }
                break;
            case util.itemTypes.CHARTS.STANDARD:
                if (chart.rowCount == 0 || chart.columnCount == 0) {
                    isValid = false;
                }
                for (let c = 0; c < chart.columns.length; c++) {
                    if (chart.columns[c].title.length == 0) {
                        isValid = false;
                    }
                }
                for (let e = 0; e < chart.entries.length; e++) {
                    if (chart.entries[e].description.length == 0) {
                        isValid = false;
                    }
                }
                break;
            default:
        }
        return isValid;
    }
    
    renderChartForm(chart) {
        return (this.props.selectedChartType.id != 0) ? (
            <div>
                <DndInput
                    dataType={util.dataTypes.string.STRING}
                    label="Title"
                    name="title"
                    onChange={this.props.onChange}
                    value={this.props.chart.title}
                    />
                {this.renderTypeSpecificForm(chart)}
            </div>
        ) : null;
    }
    
    renderTypeSpecificForm(chart) {
        switch (this.props.selectedChartType.id) {
            case util.itemTypes.CHARTS.DIE_ROLL:
                return (
                    <DndDieChartForm
                        chart={chart}
                        onChange={this.props.onChange}
                        />
                );
            case util.itemTypes.CHARTS.STANDARD:
                return (
                    <DndStandardChartForm
                        chart={chart}
                        onChange={this.props.onChange}
                        />
                );
            default:
                return null;
        }
    }
    
    renderFormButtons() {
        return this.validateChart() ? (
            <DndDataEntryButtonBar
                onSave={this._onSaveClick}
                onReset={this.props.onReset}
                saveAction={util.dataTypes.action.CHART.ADD}
                resetAction={util.dataTypes.action.CHART.RESET}
                />
        ) : null;
    }
    
    render() {
        const charts = this.props.charts;
        const chart = this.props.chart;
        const chartTypes = util.common.picklists.getPicklistItems(this.props.picklists, util.itemTypes.TYPES.CHART_TYPE);
        return (
            <div>
                <DndInput
                    dataType={util.dataTypes.picklist.CHART_TYPE}
                    label="Type of Chart"
                    name="charType"
                    onChange={this.props.onChange}
                    picklist={chartTypes}
                    valueObj={this.props.selectedChartType}
                    />
                {this.renderChartForm(chart)}
                {this.renderFormButtons()}
                {this.renderChartList(charts)}
            </div>
        );
    }
}
DndManageCharts.propTypes = {
    charts: PropTypes.array.isRequired,
    chart: PropTypes.object.isRequired,
    picklists: PropTypes.array,
    selectedChartType: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onSelectEdited: PropTypes.func.isRequired
};

export default DndManageCharts;
