import React from "react";

const TicTacToe = () => {
  return (
    <div className="ttt-container">
      <h1 className="ticTacToe-h1">Tic Tac Toe!</h1>
      <table className="ticTacToe-table">
        <tr>
          <td className="ticTacToe-tableCell" id="0"></td>
          <td className="ticTacToe-tableCell" id="1"></td>
          <td className="ticTacToe-tableCell" id="2"></td>
        </tr>
        <tr>
          <td className="ticTacToe-tableCell" id="3"></td>
          <td className="ticTacToe-tableCell" id="4"></td>
          <td className="ticTacToe-tableCell" id="5"></td>
        </tr>
        <tr>
          <td className="ticTacToe-tableCell" id="6"></td>
          <td className="ticTacToe-tableCell" id="7"></td>
          <td className="ticTacToe-tableCell" id="8"></td>
        </tr>
        <div className="ticTacToe-endGame"></div>
        <button>Reset</button>
      </table>
    </div>
  );
};

export default TicTacToe;
