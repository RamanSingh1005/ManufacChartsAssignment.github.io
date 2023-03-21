import EChartsReact from 'echarts-for-react';
import {wineDataSet} from './WineDataSet';

// Define the data for the bar chart

//Object literal to store malic acid sum and count for each type.
const alcoholCat = {};

//forEach loop to populate alcoholCat object literal.
wineDataSet.forEach((el)=>{
  if(alcoholCat[el.Alcohol]){
    alcoholCat[el.Alcohol].malicSum = alcoholCat[el.Alcohol].malicSum+el['Malic Acid'];
    alcoholCat[el.Alcohol].count = alcoholCat[el.Alcohol].count + 1;
  }
  else{
    alcoholCat[el.Alcohol]={malicSum : el['Malic Acid'], count: 1};
  }
});
console.log(alcoholCat);

const barData = [];
for( const alcohol in alcoholCat){
  barData.push(Number(alcoholCat[alcohol].malicSum)/Number(alcoholCat[alcohol].count));
}
 console.log(barData);

export const BarChart = () => {
  // Define the options for the bar chart
  const barOptions = {
    title: {
      text: 'Bar Chart for- Alcohol category Vs Average malic acid',
    },
    legend: {
      data: 'data',
    },
    xAxis: {
      type: 'category',
      data: Object.keys(alcoholCat),
    },
    yAxis: {
      type: 'value',
      label: {
        formatter: '{value} %',
      },
    },
    series: [
      {
        data: barData,
        type: 'bar',
      },
    ],
  };

  return (
    <EChartsReact option={barOptions} style={{ height: 400 }} />
  );
};
