import Board from "./Board.tsx";
import { Button } from "react-bootstrap";
import { useEffect, useMemo, useState } from "react";
import { Board as BoardType, Player } from "./types.ts";

const emptyBoard: Array<null> = Array(9).fill(null);

const Game: React.FC = () => {
  const [gameState, setGameState] = useState<BoardType>(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | null>(null);
  const [isDraw, setIsDraw] = useState<boolean>(false);

  useEffect(() => {
    handleChangePlayer();
  }, [gameState]);

  const handleChangePlayer = () => {
    if (checkWinCondition()) {
      return;
    }
    setCurrentPlayer((prevState) => (prevState === "X" ? "O" : "X"));
  };

  const handleSquareClick = (index: number) => {
    if (isGameOver) return;
    setGameState((prevState: React.ComponentState) => {
      const newState = [...prevState];
      newState[index] = currentPlayer;
      return newState;
    });
  };

  const resetBoard = () => {
    setGameState(emptyBoard);
    setWinner(null);
    setIsDraw(false);
  };

  const checkWinCondition = () => {
    if (
      (gameState[0] === currentPlayer &&
        gameState[1] === currentPlayer &&
        gameState[2] === currentPlayer) ||
      (gameState[3] === currentPlayer &&
        gameState[4] === currentPlayer &&
        gameState[5] === currentPlayer) ||
      (gameState[6] === currentPlayer &&
        gameState[7] === currentPlayer &&
        gameState[8] === currentPlayer) ||
      (gameState[0] === currentPlayer &&
        gameState[3] === currentPlayer &&
        gameState[6] === currentPlayer) ||
      (gameState[1] === currentPlayer &&
        gameState[4] === currentPlayer &&
        gameState[7] === currentPlayer) ||
      (gameState[2] === currentPlayer &&
        gameState[5] === currentPlayer &&
        gameState[8] === currentPlayer) ||
      (gameState[0] === currentPlayer &&
        gameState[4] === currentPlayer &&
        gameState[8] === currentPlayer) ||
      (gameState[2] === currentPlayer &&
        gameState[4] === currentPlayer &&
        gameState[6] === currentPlayer)
    ) {
      setWinner(currentPlayer);
      return true;
    }

    if (gameState.filter(Boolean).length == 9) {
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
      <Board
        onSquareClick={handleSquareClick}
        squares={gameState}
        isGameOver={isGameOver}
      />
    </div>
  );
};

export default Game;
