import React from "react";
import Board from "./components/Board";

export default function App() {
  const [stage, setStage] = React.useState(1);
  const [score, setScore] = React.useState(0);
  const [timeLimit, setTimeLimit] = React.useState(15);

  return (
    <div>
      스테이지: {stage}, 남은 시간: {timeLimit}, 점수: {score}
      <Board stage={stage} />
    </div>
  );
}
