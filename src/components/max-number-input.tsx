type MaxNumberInputProps = {
  number: number | null;
  onChange: (value: number | null) => void;
}

const MaxNumberInput = (props: MaxNumberInputProps) => {

  const handleOnChange = (value: string): void => {
    if (value === "") {
      props.onChange(null);
      return;
    }

    const newValue = parseInt(value) || 0;
    props.onChange(newValue);
  };

  return (
      <input
        type="text"
        placeholder="Input max random number..."
        name="max-number"
        id="max-number"
        pattern="\d*"
        onChange={(event) => handleOnChange(event.target.value)}
        value={props.number ?? ""}
      />
  );
}

export default MaxNumberInput;