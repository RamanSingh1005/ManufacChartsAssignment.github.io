import {ScatterPlot} from './chart/scatterPlot';
import {BarChart} from './chart/barChart';
import './App.css';


const App = (): JSX.Element => {
  return (
    <div className="app-container">
      <ScatterPlot />
      <BarChart />
    </div>
  );
};

export default App;
