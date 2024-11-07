import "./style.css";
const WinMessage = ({ prize, resetGame }) => {
  return (
    <div className="win-message">
      <h2>Congratulations!</h2>
      <p>You Win ${prize}!</p>
      <button onClick={resetGame} className="reset-button">
        Play Again
      </button>
    </div>
  );
};

export default WinMessage;
