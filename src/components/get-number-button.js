function GetNumberButton(props) {
  return (
    <button id="random-button" onClick={() => props.onClick()}>
      Get radom number
    </button>
  );
}

export default GetNumberButton;