function NumbersArea(props) {
  return (
    <div id="numbers-area">
      {props.numbers && props.numbers.map((number) =>
        <div className="random-number">
          {number}
        </div>
      )}
    </div>
  );
}

export default NumbersArea;