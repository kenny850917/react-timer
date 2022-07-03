import './App.css';
import CountDown from './components/countdown';
import Timer from './components/timer'

function App() {
  return (
    <div className="App">
      <CountDown />
      {/* <Timer minutes={1} seconds={5} /> */}

    </div>
  );
}

export default App;
