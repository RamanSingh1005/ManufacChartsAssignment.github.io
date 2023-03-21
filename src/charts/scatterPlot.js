import EChartsReact from 'echarts-for-react';
import {wineDataSet} from './WineDataSet';

//Define data set for scatter plot.
const scatterData = wineDataSet.map((el)=>{
    return[el['Color intensity'],el.Hue];
  })

export const ScatterPlot = () => {
  // Define the options for the scatter plot
  const scatterOptions = {
    title: {
      text: 'Scatter Plot for- Color intensity Vs Hue',
    },
    xAxis: {
      type: 'value',
      label: {
        formatter: '{value} cm',
      },
    },
    yAxis: {
      type: 'value',
      label: {
        formatter: '{value} kg',
      },
    },
    series: [
      {
        data: scatterData,
        type: 'scatter',
      },
    ],
  };

  return (
    <EChartsReact option={scatterOptions} style={{ height: 400 }} />
  );
};