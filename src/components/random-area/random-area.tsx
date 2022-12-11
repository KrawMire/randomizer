import ClearResult from './components/clear-result-button';
import CurrentNumber from './components/current-number';
import NumbersArea from './components/numbers-area';

type RandomAreaProps = {
  clear: () => void;
  passedNumbers: Array<number>;
  currentNumber: number | null;
}

const RandomArea = (props: RandomAreaProps) => {
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