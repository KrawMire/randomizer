import { useState } from 'react';

import GetNumberButton from 'src/components/get-number-button';
import MaxNumberInput from 'src/components/max-number-input';
import RandomArea from 'src/components/random-area/random-area';
import { getRandomNumber } from 'src/helpers/random';


const App = () => {
  const [maxNumber, setMaxNumber] = useState<number | null>(null);
  const [passedNumbers, setPassedNumbers] = useState<Array<number>>([]);
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);

  const handleGetRandomNumber = () => {
    if (!maxNumber) {
      alert('Wrong max number format');
      return;
    }

    const randomNumber = getRandomNumber(maxNumber);

    if (randomNumber) {
      setCurrentNumber(randomNumber);
      setPassedNumbers([randomNumber, ...passedNumbers]);
    }
  };

  const handleClearResult = () => {
    setPassedNumbers([]);
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
