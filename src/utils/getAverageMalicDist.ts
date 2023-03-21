import {IWineData, wineDataSet} from './constants';


export const getAverageMalicDist = (): {categories: string[], barData: number[]} =>{
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
    const barData: number[] = [];
    for( const alcohol in alcoholCat){
    barData.push(Number(alcoholCat[alcohol].malicSum)/Number(alcoholCat[alcohol].count));
    }
    return{ categories: Object.keys(alcoholCat), barData,};
}