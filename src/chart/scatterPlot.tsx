import EChartsReact from 'echarts-for-react';
import {scatterOptions} from './constants';

export const ScatterPlot = (): JSX.Element => {

  return (
    <EChartsReact option={scatterOptions} style={{ height: 400 }} />
  );
};