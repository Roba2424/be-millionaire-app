import React, { useState } from "react";
import { questions } from "../../core/utils/constants/index";
import { generateFibonacciPrizes } from "../../core/utils/function/fibonacci";
import "./style.css";

const MillionaireGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [prize, setPrize] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [isWinner, setIsWinner] = useState(false);
  const [correctOptionIndex, setCorrectOptionIndex] = useState(null);

  const fibonacciPrizes = generateFibonacciPrizes(questions.length);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (index) => {
    setSelectedOption(index);

    if (index === currentQuestion.correctOption) {
      setCorrectOptionIndex(index);
      const nextPrize = fibonacciPrizes[currentQuestionIndex];
      setPrize(nextPrize);
      setCorrectAnswers([...correctAnswers, currentQuestionIndex]);

      if (currentQuestionIndex === questions.length - 1) {
        setIsWinner(true);
      } else {
        setTimeout(() => {
          setSelectedOption(null);
          setCorrectOptionIndex(null);
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }, 2000);
      }
    } else {
      setTimeout(() => {
        setSelectedOption(null);
        setCorrectOptionIndex(null);
        setIsGameOver(true);
      }, 2000);
    }
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setPrize(0);
    setIsGameOver(false);
    setCorrectAnswers([]);
    setIsWinner(false);
    setCorrectOptionIndex(null);
  };

  return (
    <div className="game-layout">
      {/* Question Section */}
      <div className="left-panel">
        {isGameOver ? (
          <div className="game-over-message">
            <h2>Game Over!</h2>
            <p>You lost the game. Final prize: ${prize}</p>
            <button onClick={resetGame} className="reset-button">
              Try Again
            </button>
          </div>
        ) : isWinner ? (
          <div className="win-message">
            <h2>Congratulations!</h2>
            <p>You Win ${prize}!</p>
            <button onClick={resetGame} className="reset-button">
              Play Again
            </button>
          </div>
        ) : (
          <>
            <div className="question-container">
              <h2>{currentQuestion.question}</h2>
            </div>
            <div className="options-container">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  className={`option-button ${
                    selectedOption === index ? "selected" : ""
                  } ${correctOptionIndex === index ? "correct-option" : ""}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Prize Scale */}
      <div className="right-panel">
        {fibonacciPrizes.map((prizeAmount, index) => (
          <div
            key={index}
            className={`prize-item ${
              correctAnswers.includes(index) ? "won-prize" : ""
            } ${
              index === currentQuestionIndex && !isGameOver && !isWinner
                ? "current-prize"
                : ""
            }`}
          >
            {index + 1}. ${prizeAmount.toLocaleString()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MillionaireGame;
