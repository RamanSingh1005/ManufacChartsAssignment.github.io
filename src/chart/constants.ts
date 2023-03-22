import { getAverageMalicDist } from '../utils/getAverageMalicDist';
import { getColorIntensityVsHue } from '../utils/getColorIntensityVsHue';

//util functions to get the required data.
const{categories, barData}: {categories: string[], barData: number[]} = getAverageMalicDist();
const scatterData: [string | number, number][] = getColorIntensityVsHue();

// Define the options for the Bar Chart.
export const barOptions: echarts.EChartsOption = {
    title: {
      text: 'Category vs Average malic acid',
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
      text: 'Color intensity Vs Hue',
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