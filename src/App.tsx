import React from "react";

export default function App() {
  const [stage, setStage] = React.useState(1);
  const [score, setScore] = React.useState(0);
  const [timeLimit, setTimeLimit] = React.useState(15);

  const tileCount = React.useMemo(
    () => Math.pow(Math.round((stage + 0.5) / 2) + 1, 2),
    [stage],
  );

  return (
    <div>
      스테이지: {stage}, 남은 시간: {timeLimit}, 점수: {score}
      {Array.from({ length: tileCount }, (_, i) => (
        <div key={i}>{i}</div>
      ))}
    </div>
  );
}
