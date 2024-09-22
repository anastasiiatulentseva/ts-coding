import "./board.scss";

function Square({
  index,
  content,
  handleClick,
  gameOver,
}: {
  index: number;
  content: string | null;
  handleClick: (index: number) => void;
  gameOver: boolean;
}): React.ReactElement {
  const handleSelfClick = () => {
    if (content || gameOver) return;
    handleClick(index);
  };

  return (
    <div
      onClick={handleSelfClick}
      className={`cell ${content || gameOver ? "no-hover" : ""} `}
    >
      {content}
    </div>
  );
}

export default Square;
