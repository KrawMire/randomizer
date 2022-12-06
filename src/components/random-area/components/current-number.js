function CurrentNumber(props) {
  return (
    <div id="current-number-area">
      {props.number &&
      <span id="current-number">
        { props.number }
      </span>}
    </div>
  );
}

export default CurrentNumber;