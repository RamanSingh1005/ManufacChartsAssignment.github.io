import { getAverageMalicDist } from '../utils/getAverageMalicDist';
import { getColorIntensityVsHue } from '../utils/getColorIntensityVsHue';

const{categories, barData}: {categories: string[], barData: number[]} = getAverageMalicDist();
const scatterData: [string | number, number][] = getColorIntensityVsHue();

export const barOptions: echarts.EChartsOption = {
    title: {
      text: 'Bar Chart for- Alcohol category Vs Average malic acid',
    },
    xAxis: {
      type: 'category',
      name: 'Category',
      data: categories,
    },
    yAxis: {
      type: 'value',
      name: 'Malic Acid',
      
    },
    series: [
      {
        data: barData,
        type: 'bar',
      },
    ],
  };

// Define the options for the scatter plot
export const scatterOptions: echarts.EChartsOption = {
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