type GetNumberButtonProps = {
  onClick: () => void;
}

const GetNumberButton = (props: GetNumberButtonProps) => {
  return (
    <button id="random-button" onClick={() => props.onClick()}>
      Get radom number
    </button>
  );
}

export default GetNumberButton;