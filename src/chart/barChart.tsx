import EChartsReact from 'echarts-for-react';
import {IWineData, wineDataSet} from './WineDataSet';

// Define the data for the bar chart

// Typescript Record to store malic acid sum and count for each type.

const alcoholCat: Record<string, { malicSum: number; count: number }> = {};

//forEach loop to populate alcoholCat object literal.
wineDataSet.forEach((dataPoint: IWineData)=>{
  if(alcoholCat[dataPoint.Alcohol]){
    alcoholCat[dataPoint.Alcohol].malicSum = alcoholCat[dataPoint.Alcohol].malicSum+dataPoint['Malic Acid'];
    alcoholCat[dataPoint.Alcohol].count = alcoholCat[dataPoint.Alcohol].count + 1;
  }
  else{
    alcoholCat[dataPoint.Alcohol]={malicSum : dataPoint['Malic Acid'], count: 1};
  }
});
console.log(alcoholCat);

const barData: number[] = [];
for( const alcohol in alcoholCat){
  barData.push(Number(alcoholCat[alcohol].malicSum)/Number(alcoholCat[alcohol].count));
}
 console.log(barData);

export const BarChart = (): JSX.Element => {
  // Define the options for the bar chart
  const barOptions: echarts.EChartsOption = {
    title: {
      text: 'Bar Chart for- Alcohol category Vs Average malic acid',
    },
    xAxis: {
      type: 'category',
      name: 'Category',
      data: Object.keys(alcoholCat),
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

  return (
    <EChartsReact option={barOptions} style={{ height: 400 }} />
  );
};
