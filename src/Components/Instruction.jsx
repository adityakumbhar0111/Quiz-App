import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Instruction.css";

function Instruction() {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="home-container">
      <div className="home-box">
        <h1 className="home-title">🚀 Welcome to the Quiz App</h1>
        <p className="home-subtitle">
          Test your knowledge with multiple-choice questions.
        </p>

        <div className="home-instructions">
          <h3>📋 Instructions:</h3>
          <ul>
            <li>✅ Each question has one correct answer.</li>
            <li>✅ Click on an option to select your answer.</li>
            <li>✅ You will get your score after submitting the quiz.</li>
            <li>✅ No negative marking.</li>
          </ul>
        </div>

        <div className="home-checkbox">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label>I have read and understood the instructions.</label>
        </div>

        {agreed && (
          <button className="home-button" onClick={() => navigate("/quiz")}>
            Start Quiz
          </button>
        )}
      </div>
    </div>
  );
}

export default Instruction;
