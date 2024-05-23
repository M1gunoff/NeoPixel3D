const Arrow = ({ className, style, onClick, direction }) => {
  return (
    <div
      className={`${className} custom-arrow ${direction}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export default Arrow;