export function expandChart(chart) {
    console.log(chart);
    let retVal = chart;
    chart.entries = [];
    for (let e = chart.dieRoll.dieCount; e <= chart.dieRoll.dieCount * chart.dieRoll.dieType; e++) {
        let newEntry = {};
        newEntry.id = -1 * e;
        newEntry.description = '';
        newEntry.minimum = e;
        newEntry.maximum = e;
        chart.entries.push(newEntry);
    }
    return retVal;
}