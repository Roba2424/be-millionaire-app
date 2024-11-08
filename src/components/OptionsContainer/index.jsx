import "./style.css";

const OptionContainer = ({
  currentQuestion,
  options,
  selectedOption,
  onSelectOption,
  correctOptionIndex,
  hiddenOptions,
  hasUsedAudience,
  audienceVotes
}) => (
  <>
    <div className="question-container">
      <h2>{currentQuestion}</h2>
    </div>
    <div className="options-container">
      {options.map((option, index) => (
        <button
          key={index}
          className={`option-button ${
            selectedOption === index ? "selected" : ""
          } ${correctOptionIndex === index ? "correct-option" : ""}
          ${hiddenOptions.includes(index) ? "hidden-option" : ""}`}
          onClick={() => onSelectOption(index)}
        >
          {option}
          {hasUsedAudience && audienceVotes.length > 0 && (
            <span className="audience-vote">({audienceVotes[index]}%)</span>
          )}
        </button>
      ))}
    </div>
  </>
);

export default OptionContainer;
