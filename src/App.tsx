import {ScatterPlot} from './chart/scatterPlot';
import {BarChart} from './chart/barChart';
import './app.css';


const App = (): JSX.Element => {
  return (
    <div className="App">
      <div>
        <ScatterPlot />
      </div>
      <div>
        <BarChart />
      </div>
    </div>
  );
};

export default App;
