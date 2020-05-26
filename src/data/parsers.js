import format from './format';
import moment from 'moment';

function usStats(data) {
    const [usStatRaw] = data;

    return parseStats(usStatRaw);

}

function stateStats(state, data) {

  const stateRawData = data.find(d => d.state === state);
  return parseStats(stateRawData);
}

function historicUs(historicData) {
 
    parseHistoric(historicData);
   
}

function parseHistoric(historicData) {

}


function parseChart(historicData, key, label, color) {
    const chartData = historicData.map(data => {
        return {
            x: moment(data.date, 'YYYYMMDD'),
            y: data[key] || 0,
        }
    });
    return {
        label,
        data: chartData,
        fill: false,
        borderColor: color,
    }
}


function parseStats(rawStats) {

    return{
        cases: format.number(rawStats.positive),
        deaths:format.number(rawStats.death),
        recovered:format.number( rawStats.recovered),
        ventilator: format.number(rawStats.onVentilatorCurrently),
        hospitalized:format.number( rawStats.hospitalized),
        icu:format.number( rawStats.inIcuCurrently),
        tested: format.number(rawStats.totalTestResults),
        updated:moment( rawStats.lastModified).format('LLLL')


    };


}



export default {
    usStats, 
    stateStats,
    historicUs,
};