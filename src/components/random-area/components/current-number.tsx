type CurrentNumberProps = {
  number: number | null;
}

const CurrentNumber = (props: CurrentNumberProps) => {
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