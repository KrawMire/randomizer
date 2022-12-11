import PassedNumber from './passed-number';

type PassedNumbersAreaProps = {
  numbers: Array<number>
}

const PassedNumbersArea = (props: PassedNumbersAreaProps) => {
  return (
    <div id="numbers-area">
      {props.numbers && props.numbers.map((number: number, index: number) =>
        <PassedNumber
          value={number}
          key={index}
        />
      )}
    </div>
  );
}

export default PassedNumbersArea;