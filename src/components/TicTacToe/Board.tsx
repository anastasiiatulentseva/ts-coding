import "./board.scss";
import Square from "./Square.tsx";
import React from "react";
import { Board as BoardType } from "./types.ts";

function Board({
  squares,
  onSquareClick,
  isGameOver,
}: {
  squares: BoardType;
  onSquareClick: (index: number) => void;
  isGameOver: boolean;
}): React.ReactElement {
  return (
    <div className="board">
      {squares.map((content: string | null, index: number) => (
        <Square
          key={index}
          content={content}
          index={index}
          handleClick={() => onSquareClick(index)}
          gameOver={isGameOver}
        />
      ))}
    </div>
  );
}

export default Board;
