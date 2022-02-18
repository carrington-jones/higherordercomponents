import './App.css';
import {WithNumberGenerator} from "./components/WithNumberGenerator";
import RandomNumber from "./components/RandomNumber";

const EnhancedRandomNum = WithNumberGenerator(RandomNumber)
//WithNumberGenerator takes in RandomNumber component and enhances it making it better with logic that is in WithNumberGenerator


function App() {
  return (
    <div className="App">
      <EnhancedRandomNum/>
    </div>
  );
}

export default App;
