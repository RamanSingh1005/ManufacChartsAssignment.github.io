import EChartsReact from 'echarts-for-react';
import {wineDataSet, IWineData} from './WineDataSet';

//Define data set for scatter plot.
const scatterData:[number| string ,number][] = wineDataSet.map((dataPoint: IWineData)=>{
    return[dataPoint['Color intensity'],dataPoint.Hue];
  })

export const ScatterPlot = (): JSX.Element => {
  // Define the options for the scatter plot
  const scatterOptions: echarts.EChartsOption = {
    title: {
      text: 'Scatter Plot for- Color intensity Vs Hue',
    },
    xAxis: {
      type: 'value',
      name: 'Color Intensity',
      axisLabel: {
        formatter: '{value}',
      },
    },
    yAxis: {
      type: 'value',
      name: 'Hue',
      axisLabel: {
        formatter: '{value}',

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