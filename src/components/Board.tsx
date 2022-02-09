import React from "react";
import Tile from "./Tile";

interface Props {
  stage: number;
}

export default function Board({ stage }: Props) {
  const [tileCount, targetTileId] = React.useMemo(() => {
    const count = Math.pow(Math.round((stage + 0.5) / 2) + 1, 2);
    const target = Math.floor(Math.random() * count);
    return [count, target];
  }, [stage]);

  const lineCount = React.useMemo(() => Math.sqrt(tileCount), [tileCount]);

  const handleTileClick = React.useCallback(
    (tileId: number) => {
      if (tileId === targetTileId) {
        // TODO: 다음 스테이지
        console.log("성공");
      } else {
        // TODO: 시간 감소
      }
    },
    [targetTileId],
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${lineCount}, 1fr)`,
        gridTemplateRows: `repeat(${lineCount}, 1fr)`,
        gap: "5px",
        width: "360px",
        height: "360px",
      }}
    >
      {Array.from({ length: tileCount }, (_, i) => (
        <Tile key={i} id={i} onClick={handleTileClick} />
      ))}
    </div>
  );
}
