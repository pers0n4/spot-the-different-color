import React from "react";

interface Props {
  id: number;
  onClick: (id: number) => void;
}

export default function Tile({ id, onClick }: Props) {
  const handleClick = () => onClick(id);

  return (
    <div
      style={{
        backgroundColor: `rgba(0, 0, 0)`,
      }}
      onClick={handleClick}
    />
  );
}
