import "./style.css";

const PrizeScale = ({
  fibonacciPrizes,
  currentPrize,
  currentQuestionIndex,
  isGameOver,
  isWinner,
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
  </div>
);

export default PrizeScale;
