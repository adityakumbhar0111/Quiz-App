import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import questions from "../data/questions";
import "./Quiz.css";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const navigate = useNavigate();

  const selectedAnswer = userAnswers[current];

  const handleAnswer = (option) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[current] = option;
    setUserAnswers(updatedAnswers);
  };

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      const score = userAnswers.reduce((total, ans, i) => {
        return ans === questions[i].answer ? total + 1 : total;
      }, 0);

      navigate("/result", {
        state: {
          score,
          userAnswers: userAnswers.map((ans, i) => ({
            question: questions[i].question,
            selected: ans,
            correct: questions[i].answer,
          })),
        },
      });
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-box">
        <h2 className="quiz-progress">
          Question {current + 1} of {questions.length}
        </h2>
        <p className="quiz-question">{questions[current].question}</p>
        <div className="quiz-options">
          {questions[current].options.map((opt, index) => (
            <button
              key={index}
              className={`quiz-option ${
                selectedAnswer === opt ? "selected" : ""
              }`}
              onClick={() => handleAnswer(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="quiz-navigation">
          <button onClick={handlePrevious} disabled={current === 0}>
            Previous
          </button>
          <button onClick={handleNext}>
            {current === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
