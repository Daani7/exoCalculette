const Result = ({ result, message }) => {
  return (
    <div className="result">
      <div className="display">{result}</div>
      {message && <div className="error">{message}</div>}
    </div>
  );
};

export default Result;
