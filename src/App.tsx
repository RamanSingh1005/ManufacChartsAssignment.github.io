import {ScatterPlot} from './chart/scatterPlot';
import {BarChart} from './chart/barChart';


const App = (): JSX.Element => {
  return (
    <div>
      <ScatterPlot />
      <BarChart />
    </div>
  );
};

export default App;
