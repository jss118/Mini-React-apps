import { useState, useEffect } from "react";
const findBestMove = require("../Utils/TicTacToeAI");

const TicTacToe = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(null);
  let squares = [...cells];

  useEffect(() => {
    if (turn === "O") {
      setTimeout(() => {
        squares[findBestMove(squares)] = "O";
        setTurn("X");
      }, 500);
    }
    checkForWinner(squares);
    setCells(squares);
  }, [turn]);

  const checkForWinner = squares => {
    const winCombos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [6, 4, 2],
      ],
    };

    for (let combo in winCombos) {
      winCombos[combo].forEach(pattern => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
          // do nothing
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
      if (squares.every(square => square)) setWinner("Tie!");
    }
  };

  const Cell = ({ cellId }) => {
    return (
      <td
        onClick={() => {
          return turn === "X" ? handleClick(cellId) : null;
        }}
        className="ticTacToe-tableCell"
      >
        {cells[cellId]}
      </td>
    );
  };

  const handleClick = cellId => {
    if (cells[cellId] !== "") {
      alert("Square taken");
      return;
    }

    if (turn === "X") {
      squares[cellId] = "X";
      setTurn("O");
    }
    checkForWinner(squares);
    setCells(squares);
  };

  const resetGame = () => {
    setTurn("X");
    setCells(Array(9).fill(""));
    setWinner(null);
  };

  return (
    <div className="ttt-container">
      <h1 className="ticTacToe-h1">Tic Tac Toe!</h1>
      {winner ? (
        <>
          <h2 className="ticTacToe-winner_h2">
            {winner === "Tie!" ? `${winner}` : `${winner} wins!`}
          </h2>
          <button className="ticTacToe-resetBtn" onClick={resetGame}>
            Play again
          </button>
        </>
      ) : (
        <>
          <h2>Turn: {turn}</h2>
          <table className="ticTacToe-table">
            <tbody>
              <tr>
                <Cell cellId={0} />
                <Cell cellId={1} />
                <Cell cellId={2} />
              </tr>
              <tr>
                <Cell cellId={3} />
                <Cell cellId={4} />
                <Cell cellId={5} />
              </tr>
              <tr>
                <Cell cellId={6} />
                <Cell cellId={7} />
                <Cell cellId={8} />
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default TicTacToe;
