import {IWineData, wineDataSet} from './constants';


export const getAverageMalicDist = (): {categories: string[], barData: number[]} =>{
    // Declare Typescript Record to store malic acid sum and count for each type in the data set.
    const alcoholCat: Record<string, { malicSum: number; count: number }> = {};

    //forEach loop to populate alcoholCat Record.
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
    // for loop to populate barData with average Malic Acid for all categories.
    for( const alcohol in alcoholCat){
    barData.push(Number(alcoholCat[alcohol].malicSum)/Number(alcoholCat[alcohol].count));
    }
    
    //return the object with required variables. 
    //These can be destructued and used where required.
    //categories is an Array of all the categories.
    //barData is an Array of avaerage Malic Acid corresponding to above categories.
    return{ 
        categories: Object.keys(alcoholCat),
        barData,
    };
}