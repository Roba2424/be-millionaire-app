import "./style.css";

const OptionContainer = ({
  currentQuestion,
  options,
  selectedOption,
  onSelectOption,
  correctOptionIndex,
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
          } ${correctOptionIndex === index ? "correct-option" : ""}`}
          onClick={() => onSelectOption(index)}
        >
          {option}
        </button>
      ))}
    </div>
  </>
);

export default OptionContainer;
