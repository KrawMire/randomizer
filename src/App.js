import { useState } from 'react';

import GetNumberButton from './components/get-number-button';
import MaxNumberInput from './components/max-number-input';
import RandomArea from './components/random-area';
import { getRandomNumber } from './helpers/random';


function App() {
  const [maxNumber, setMaxNumber] = useState(null);
  const [passedNumbers, setPassetNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(null);

  const handleGetRandomNumber = () => {
    const maxNum = parseInt(maxNumber);

    if (!maxNum) {
      alert('Wrong max number format');
      return;
    }

    const randomNumber = getRandomNumber(maxNum);

    if (randomNumber) {
      setCurrentNumber(randomNumber);
      setPassetNumbers([randomNumber, ...passedNumbers]);
    } else {
      alert('All numbers passed');
    }
  };

  const handleClearResult = () => {
    setPassetNumbers([]);
    setCurrentNumber(null);
  }

  return (
    <div id="main-container">
      <MaxNumberInput onChange={setMaxNumber} number={maxNumber} />
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
