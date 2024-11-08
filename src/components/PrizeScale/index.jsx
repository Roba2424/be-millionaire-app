import "./style.css";

const PrizeScale = ({
  fibonacciPrizes,
  currentPrize,
  currentQuestionIndex,
  isGameOver,
  isWinner,
  handleFiftyFifty,
  hasUsedFiftyFifty,
  handleAskAudience,
  hasUsedAudience,
}) => (
  <div className="right-panel">
    <ol>
      {fibonacciPrizes.map((prize, index) => (
        <li
          key={index}
          className={`prize-item ${
            currentPrize.includes(index) ? "won-prize" : ""
          } ${
            index === currentQuestionIndex && !isGameOver && !isWinner
              ? "current-prize"
              : ""
          }`}
        >
          {index + 1}. ${prize}
        </li>
      ))}
    </ol>
    <div className="help-container">
      <button
        onClick={handleFiftyFifty}
        disabled={hasUsedFiftyFifty}
        className="help-button"
      >
        50 : 50
      </button>
      <button
        onClick={handleAskAudience}
        disabled={hasUsedAudience}
        className="help-button"
      >
        Ask the Audience
      </button>
    </div>
  </div>
);

export default PrizeScale;
