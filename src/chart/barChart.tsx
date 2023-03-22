import EChartsReact from 'echarts-for-react';
import {barOptions} from './constants';

// Required Bar Chart.
export const BarChart = (): JSX.Element => {

  return (
    <EChartsReact option={barOptions} style={{ height: 400 }} />
  );
};
