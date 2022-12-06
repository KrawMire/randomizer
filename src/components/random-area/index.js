import ClearResult from './components/clear-result-button';
import CurrentNumber from './components/current-number';
import NumbersArea from './components/numbers-area';


function RandomArea(props) {
  return (
    <div id="random-area">
      <h1>Numbers</h1>
      <ClearResult clear={() => props.clear()} />
      <NumbersArea numbers={props.passedNumbers} />
      <CurrentNumber number={props.currentNumber}/>
    </div>
  );
}

export default RandomArea;