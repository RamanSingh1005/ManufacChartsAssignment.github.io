import EChartsReact from 'echarts-for-react';
import {scatterOptions} from './constants';

//Required Scatter Plot component
export const ScatterPlot = (): JSX.Element => {

  return (
    <EChartsReact option={scatterOptions} style={{ height: 400 }} />
  );
};