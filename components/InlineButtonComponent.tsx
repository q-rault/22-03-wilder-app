const InlineButton = ({ children, handleClick }) => {
  return (
    <span onClick={handleClick} className="inline-button">
      {children}
    </span>
  );
};

export default InlineButton;
