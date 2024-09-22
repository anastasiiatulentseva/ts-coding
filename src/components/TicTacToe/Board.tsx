import "./board.scss";
import Square from "./Square.tsx";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";

const emptyBoard: Array<null> = Array(9).fill(null);
type iPlayer = "X" | "O";

function Board(): React.ReactElement {
  const [boardState, setBoardState] =
    useState<Array<string | null>>(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState<iPlayer>("X");
  const [winner, setWinner] = useState<iPlayer | null>(null);
  const [isDraw, setIsDraw] = useState<boolean>(false);

  useEffect(() => {
    handleChangePlayer();
  }, [boardState]);

  const handleSquareClick = (index: number) => {
    setBoardState((prevState: React.ComponentState) => {
      const newState = [...prevState];
      newState[index] = currentPlayer;
      return newState;
    });
  };

  const handleChangePlayer = () => {
    if (checkWinCondition()) {
      return;
    }
    setCurrentPlayer((prevState) => (prevState === "X" ? "O" : "X"));
  };

  const resetBoard = () => {
    setBoardState(emptyBoard);
    setWinner(null);
    setIsDraw(false);
  };

  const checkWinCondition = () => {
    if (
      (boardState[0] === currentPlayer &&
        boardState[1] === currentPlayer &&
        boardState[2] === currentPlayer) ||
      (boardState[3] === currentPlayer &&
        boardState[4] === currentPlayer &&
        boardState[5] === currentPlayer) ||
      (boardState[6] === currentPlayer &&
        boardState[7] === currentPlayer &&
        boardState[8] === currentPlayer) ||
      (boardState[0] === currentPlayer &&
        boardState[3] === currentPlayer &&
        boardState[6] === currentPlayer) ||
      (boardState[1] === currentPlayer &&
        boardState[4] === currentPlayer &&
        boardState[7] === currentPlayer) ||
      (boardState[2] === currentPlayer &&
        boardState[5] === currentPlayer &&
        boardState[8] === currentPlayer) ||
      (boardState[0] === currentPlayer &&
        boardState[4] === currentPlayer &&
        boardState[8] === currentPlayer) ||
      (boardState[2] === currentPlayer &&
        boardState[4] === currentPlayer &&
        boardState[6] === currentPlayer)
    ) {
      setWinner(currentPlayer);
      return true;
    }

    if (boardState.filter(Boolean).length == 9) {
      setIsDraw(true);
      return true;
    }
    return false;
  };

  const isGameOver = useMemo(() => !!winner || isDraw, [winner, isDraw]);

  return (
    <div className="board-container">
      <div className="game-header">Tic Tac Toe</div>
      <Button variant="link" onClick={resetBoard}>
        Click to start again.
      </Button>
      {!winner && (
        <div className="current-player">{`Current Player: ${currentPlayer}`}</div>
      )}
      {winner && (
        <div className="winner-label">{`Player ${currentPlayer} won! Congratulations!`}</div>
      )}
      {isDraw && <div className="draw-label">It's a draw.</div>}
      <div className="board">
        {boardState.map((content: string | null, index: number) => (
          <Square
            key={index}
            content={content}
            index={index}
            handleClick={handleSquareClick}
            gameOver={isGameOver}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
