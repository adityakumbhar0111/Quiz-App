import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import "./Result.css";
import questions from "../data/questions";

function Result() {
  const {state} = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="result-container">
        <p className="result-message">
          No quiz data found. Please take the quiz first.
        </p>
        <button className="result-btn" onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="result-container">
      <h2 className="result-title">
        Your Score : {state.score} / {questions.length} <br />
        <hr />
        Solve Que : {state.score} <br />
        Unsolve Que : {questions.length - state.score}
      </h2>
      <div className="result-list">
        {state.userAnswers.map((item, index) => (
          <div key={index} className="result-card">
            <p className="question">
              Q{index + 1}: {item.question}
            </p>
            <p
              className={
                item.selected === item.correct ? "correct" : "incorrect"
              }
            >
              Your Answer: {item.selected}
            </p>
            <p className="correct-answer">Correct Answer: {item.correct}</p>
          </div>
        ))}
      </div>
      <button className="result-btn" onClick={() => navigate("/Instruction")}>
        Try Again
      </button>
    </div>
  );
}

export default Result;
