import {wineDataSet, IWineData} from './constants';

//Define data set for scatter plot.
export const getColorIntensityVsHue = (): [string | number, number][] => {
    const scatterData:[number| string ,number][] = wineDataSet.map((dataPoint: IWineData)=>{
    return[dataPoint['Color intensity'],dataPoint.Hue];
  })
  return scatterData;
}