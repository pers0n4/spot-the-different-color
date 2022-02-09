import React from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import "./App.css";

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
    setTimeLimit((currentTimeLimit) =>
      currentTimeLimit - 3 > 0 ? currentTimeLimit - 3 : 0,
    );
  };

  React.useEffect(() => {
    if (timeLimit <= 0) {
      window.alert(`GAME OVER!\n스테이지: ${stage}, 점수: ${score}`);
      setScore(0);
      setStage(1);
      setTimeLimit(15);
    }
    const timer = setTimeout(() => setTimeLimit((time) => time - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLimit]);

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
