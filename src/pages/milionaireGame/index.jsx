import React, { useState } from "react";
import { questions } from "../../core/utils/constants/index";
import { generateFibonacciPrizes } from "../../core/utils/function/fibonacci";
import GameLayout from "../../components/layout/GameLayout/index";
import GameOverMessage from "../../components/shared/GameOverMessage";
import WinMessage from "../../components/shared/WinMessage/index";
import OptionContainer from "../../components/OptionsContainer";
import PrizeScale from "../../components/PrizeScale";
import { generateAudienceVotes } from "../../core/utils/function/generateAudiencVotes";
import Header from "../../global/Header";
import "./style.css";

const MillionaireGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [prize, setPrize] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [isWinner, setIsWinner] = useState(false);
  const [correctOptionIndex, setCorrectOptionIndex] = useState(null);
  const [hasUsedFiftyFifty, setHasUsedFiftyFifty] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState([]);
  const [hasUsedAudience, setHasUsedAudience] = useState(false);
  const [audienceVotes, setAudienceVotes] = useState([]);

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
          setHiddenOptions([]);
          setAudienceVotes([]);
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

  const handleFiftyFifty = () => {
    if (hasUsedFiftyFifty) return;
    setHasUsedFiftyFifty(true);

    const incorrectOptions = currentQuestion.options
      .map((_, index) => index)
      .filter((index) => index !== currentQuestion.correctOption);

    const optionsToHide = incorrectOptions
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);
    setHiddenOptions(optionsToHide);
  };

  const handleAskAudience = () => {
    if (hasUsedAudience) return;

    setHasUsedAudience(true);
    const votes = generateAudienceVotes(currentQuestion.correctOption);
    setAudienceVotes(votes);
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setPrize(0);
    setIsGameOver(false);
    setCorrectAnswers([]);
    setIsWinner(false);
    setCorrectOptionIndex(null);
    setHasUsedFiftyFifty(false);
    setHasUsedAudience(false);
    setHiddenOptions([]);
    setAudienceVotes([]);
  };

  return (
    <Header>
      <GameLayout>
        {/* Question Section */}
        <div className="left-panel">
          {isGameOver ? (
            <GameOverMessage resetGame={resetGame} prize={prize} />
          ) : isWinner ? (
            <WinMessage prize={prize} resetGame={resetGame} />
          ) : (
            <>
              <OptionContainer
                options={currentQuestion.options}
                onSelectOption={handleOptionClick}
                selectedOption={selectedOption}
                correctOptionIndex={correctOptionIndex}
                currentQuestion={currentQuestion.question}
                hiddenOptions={hiddenOptions}
                audienceVotes={audienceVotes}
                hasUsedAudience={hasUsedAudience}
              />
            </>
          )}
        </div>

        {/* Prize Scale */}
        <PrizeScale
          fibonacciPrizes={fibonacciPrizes}
          currentPrize={correctAnswers}
          currentQuestionIndex={currentQuestionIndex}
          isGameOver={isGameOver}
          isWinner={isWinner}
          handleAskAudience={handleAskAudience}
          hasUsedAudience={hasUsedAudience}
          handleFiftyFifty={handleFiftyFifty}
          hasUsedFiftyFifty={hasUsedFiftyFifty}
        />
      </GameLayout>
    </Header>
  );
};

export default MillionaireGame;
