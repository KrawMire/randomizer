type ClearResultButtonProps = {
  clear: () => void;
}

const ClearResultButton = (props: ClearResultButtonProps) => {
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