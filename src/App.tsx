import {ScatterPlot} from './chart/scatterPlot';
import {BarChart} from './chart/barChart';


const App = (): JSX.Element => {
  return (
    <div style={{width: '100%'}}>
      <ScatterPlot />
      <BarChart />
    </div>
  );
};

export default App;
