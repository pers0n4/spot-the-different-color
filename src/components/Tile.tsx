import React from "react";
import type { RGB } from "../helpers/color";

interface Props {
  id: number;
  color: RGB;
  onClick: (id: number) => void;
}

export default function Tile({ id, color, onClick }: Props) {
  const handleClick = () => onClick(id);

  return (
    <div
      style={{
        backgroundColor: `rgba(${color})`,
      }}
      onClick={handleClick}
    />
  );
}
