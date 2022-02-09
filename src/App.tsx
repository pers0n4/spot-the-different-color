import React from "react";
import Board from "./components/Board";

export default function App() {
  const [stage, setStage] = React.useState(1);
  const [score, setScore] = React.useState(0);
  const [timeLimit, setTimeLimit] = React.useState(15);

  const handleCorrect = () => {
    setScore((currentScore) => currentScore + Math.pow(stage, 3) * timeLimit);
    setStage((currentState) => currentState + 1);
    setTimeLimit(15);
  };

  const handleIncorrect = () => {
    setTimeLimit((currentTimeLimit) => currentTimeLimit - 3);
  };

  return (
    <div>
      스테이지: {stage}, 남은 시간: {timeLimit}, 점수: {score}
      <Board
        stage={stage}
        onCorrect={handleCorrect}
        onIncorrect={handleIncorrect}
      />
    </div>
  );
}
