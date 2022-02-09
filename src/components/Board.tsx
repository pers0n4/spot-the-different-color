import React from "react";
import Tile from "./Tile";
import { differenceColor } from "../helpers/color";
import type { RGB } from "../helpers/color";

interface Props {
  stage: number;
  onCorrect: () => void;
  onIncorrect: () => void;
}

export default function Board({ stage, onCorrect, onIncorrect }: Props) {
  const [tileCount, targetTileId] = React.useMemo(() => {
    const count = Math.pow(Math.round((stage + 0.5) / 2) + 1, 2);
    const target = Math.floor(Math.random() * count);
    return [count, target];
  }, [stage]);

  const tileColor: RGB = React.useMemo(() => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [r, g, b];
  }, [stage]);

  const handleTileClick = React.useCallback(
    (tileId: number) => {
      if (tileId === targetTileId) {
        onCorrect();
      } else {
        onIncorrect();
      }
    },
    [targetTileId],
  );

  const tiles = React.useMemo(
    () =>
      Array.from({ length: tileCount }, (_, i) => (
        <Tile
          key={i}
          id={i}
          color={
            i === targetTileId ? differenceColor(tileColor, stage) : tileColor
          }
          onClick={handleTileClick}
        />
      )),
    [stage],
  );

  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${Math.sqrt(tileCount)}, 1fr)`,
        gridTemplateRows: `repeat(${Math.sqrt(tileCount)}, 1fr)`,
        gap: "5px",
        aspectRatio: "1",
      }}
    >
      {tiles}
    </main>
  );
}
