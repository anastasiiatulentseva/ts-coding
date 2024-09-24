import "./board.scss";
import { memo } from "react";

function Square({
  content,
  handleClick,
  gameOver,
}: {
  index: number;
  content: string | null;
  handleClick: () => void;
  gameOver: boolean;
}): React.ReactElement {
  return (
    <div
      onClick={handleClick}
      className={`cell ${content || gameOver ? "no-hover" : ""} `}
    >
      {content}
    </div>
  );
}

export default memo(Square);
