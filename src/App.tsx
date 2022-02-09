import React from "react";
import Board from "./components/Board";
import Header from "./components/Header";

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

  React.useEffect(() => {
    setTimeLimit(15);
  }, [stage]);

  React.useEffect(() => {
    const timer = setTimeout(() => setTimeLimit((time) => time - 1), 1000);
    if (timeLimit <= 0) {
      clearTimeout(timer);
      window.alert(`GAME OVER!\n스테이지: ${stage}, 점수: ${score}`);
      setScore(0);
      setStage(1);
      setTimeLimit(15);
    }
    return () => clearTimeout(timer);
  }, [timeLimit, setTimeLimit]);

  return (
    <div>
      <Header score={score} stage={stage} timeLimit={timeLimit} />
      <Board
        stage={stage}
        onCorrect={handleCorrect}
        onIncorrect={handleIncorrect}
      />
    </div>
  );
}
