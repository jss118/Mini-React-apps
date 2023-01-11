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

function findBestMove(squares) {
  let availableSquares = [];
  squares.forEach((square, index) => {
    if (square === "") availableSquares.push(index);
  });
  const random = Math.floor(Math.random() * availableSquares.length);
  return availableSquares[random];
}

module.exports = findBestMove;
