import "./style.css";

const GameOverMessage = ({ resetGame, prize }) => {
  return (
    <div className="game-over-message">
      <h2>Game Over!</h2>
      <p>You lost the game. Final prize: ${prize}</p>
      <button onClick={resetGame} className="reset-button">
        Try Again
      </button>
    </div>
  );
};

export default GameOverMessage;
