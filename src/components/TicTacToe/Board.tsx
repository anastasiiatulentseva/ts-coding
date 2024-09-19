import "./board.scss";

function Board() {
  return (
    <div className="board-container">
      <div className="game-header">Tic Tac Toe</div>
      <div className="current-player">Current Player: N</div>
      <div className="draw-label">Congratulations you!</div>
      <div className="board">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="cell --no-hover--">
            XO
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
