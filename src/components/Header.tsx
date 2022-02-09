import React from "react";

interface Props {
  score: number;
  stage: number;
  timeLimit: number;
}

export default function Header({ score, stage, timeLimit }: Props) {
  return (
    <header>
      스테이지: {stage}, 남은 시간: {timeLimit}, 점수: {score}
    </header>
  );
}
