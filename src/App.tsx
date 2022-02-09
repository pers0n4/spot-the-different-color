import React from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import "./App.css";

type State = {
  score: number;
  stage: number;
  timeLimit: number;
};

type Action =
  | { type: "RESET" }
  | { type: "NEXT_STAGE" }
  | { type: "CHANGE_TIME"; payload: number };

const initialState: State = {
  score: 0,
  stage: 1,
  timeLimit: 15,
};

const reducer = (state: State, action: Action) => {
  const { score, stage, timeLimit } = state;
  switch (action.type) {
    case "RESET":
      return initialState;
    case "NEXT_STAGE":
      return {
        score: score + Math.pow(stage, 3) * timeLimit,
        stage: stage + 1,
        timeLimit: 15,
      };
    case "CHANGE_TIME":
      const time = timeLimit + action.payload;
      return {
        ...state,
        timeLimit: time > 0 ? time : 0,
      };
  }
};

export default function App() {
  const [{ score, stage, timeLimit }, dispatch] = React.useReducer(
    reducer,
    initialState,
  );

  const handleCorrect = () => {
    dispatch({ type: "NEXT_STAGE" });
  };

  const handleIncorrect = () => {
    dispatch({ type: "CHANGE_TIME", payload: -3 });
  };

  React.useEffect(() => {
    if (timeLimit <= 0) {
      window.alert(`GAME OVER!\n스테이지: ${stage}, 점수: ${score}`);
      dispatch({ type: "RESET" });
    }
    const timer = setTimeout(
      () => dispatch({ type: "CHANGE_TIME", payload: -1 }),
      1000,
    );
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
