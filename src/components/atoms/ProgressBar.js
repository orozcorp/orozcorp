const ProgressBar = ({ completed }) => {
  const containerStyles = {
    height: 25,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };
  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#008080",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    marginLeft: "10px",
    color: "white",
    fontWeight: "bold",
  };
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
