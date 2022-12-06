function MaxNumberInput(props) {
  return (
    <input
      type="text"
      placeholder="Input max random number..."
      name="max-number"
      id="max-number"
      pattern="\d*"
      onChange={(e) => props.onChange(e.target.value)}
      value={props.number}>
    </input>
  );
}

export default MaxNumberInput;