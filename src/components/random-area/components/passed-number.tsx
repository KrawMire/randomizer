type PassedNumberProps = {
  value: number;
}

const PassedNumber = (props: PassedNumberProps) => {
  return (
    <div className="random-number">
      {props.value}
    </div>
  );
}

export default PassedNumber;