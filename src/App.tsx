import { useState } from 'react';

import GetNumberButton from './components/get-number-button';
import MaxNumberInput from './components/max-number-input';
import RandomArea from './components/random-area/random-area';
import { getRandomNumber } from './helpers/random';


const App = () => {
  const [maxNumber, setMaxNumber] = useState<number | null>(null);
  const [passedNumbers, setPassetNumbers] = useState<Array<number>>([]);
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);


  const handleChangeLocale = () => {

  }

  const handleGetRandomNumber = () => {
    if (!maxNumber) {
      alert('Wrong max number format');
      return;
    }

    const randomNumber = getRandomNumber(maxNumber);

    if (randomNumber) {
      setCurrentNumber(randomNumber);
      setPassetNumbers([randomNumber, ...passedNumbers]);
    }
  };

  const handleClearResult = () => {
    setPassetNumbers([]);
    setCurrentNumber(null);
  }

  return (
    <div id="main-container">
      <MaxNumberInput
        onChange={setMaxNumber}
        number={maxNumber}
      />
      <GetNumberButton onClick={handleGetRandomNumber} />
      <RandomArea
        clear={handleClearResult}
        currentNumber={currentNumber}
        passedNumbers={passedNumbers}
      />
    </div>
  );
}

export default App;
