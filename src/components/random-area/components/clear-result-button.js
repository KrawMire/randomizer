function ClearResultButton(props) {
  return (
    <div>
      <p
        className="clear-res"
        onClick={() => props.clear()}
      >Clear results</p>
    </div>
  );
}

export default ClearResultButton;