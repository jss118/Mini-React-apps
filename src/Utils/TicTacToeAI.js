function findBestMove(squares) {
  let availableSquares = [];
  squares.forEach((square, index) => {
    if (square === "") availableSquares.push(index);
  });

  for (let i = 0; i < squares.length; i += 3) {
    if (squares[i] === "O" && squares[i + 1] === "O" && squares[i + 2] === "") {
      return i + 2;
    } else if (
      squares[i] === "O" &&
      squares[i + 2] === "O" &&
      squares[i + 1] === ""
    ) {
      return i + 1;
    } else if (
      squares[i + 1] === "O" &&
      squares[i + 2] === "O" &&
      squares[i] === ""
    ) {
      return i;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (squares[i] === "O" && squares[i + 6] === "O" && squares[i + 3] === "") {
      return i + 3;
    } else if (
      squares[i] === "" &&
      squares[i + 6] === "O" &&
      squares[i + 3] === "O"
    ) {
      return i;
    } else if (
      squares[i] === "O" &&
      squares[i + 3] === "O" &&
      squares[i + 6] === ""
    ) {
      return i + 6;
    }
  }

  if (squares[0] === "" && squares[4] === "O" && squares[8] === "O") {
    return 0;
  } else if (squares[0] === "O" && squares[4] === "" && squares[8] === "O") {
    return 4;
  } else if (squares[0] === "O" && squares[4] === "O" && squares[8] === "") {
    return 8;
  }

  if (squares[2] === "" && squares[4] === "O" && squares[6] === "O") {
    return 2;
  } else if (squares[2] === "O" && squares[4] === "" && squares[6] === "O") {
    return 4;
  } else if (squares[2] === "O" && squares[4] === "O" && squares[6] === "") {
    return 6;
  }

  for (let i = 0; i < squares.length; i += 3) {
    if (squares[i] === "X" && squares[i + 1] === "X" && squares[i + 2] === "") {
      return i + 2;
    } else if (
      squares[i] === "X" &&
      squares[i + 2] === "X" &&
      squares[i + 1] === ""
    ) {
      return i + 1;
    } else if (
      squares[i + 1] === "X" &&
      squares[i + 2] === "X" &&
      squares[i] === ""
    ) {
      return i;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (squares[i] === "X" && squares[i + 6] === "X" && squares[i + 3] === "") {
      return i + 3;
    } else if (
      squares[i] === "" &&
      squares[i + 6] === "X" &&
      squares[i + 3] === "X"
    ) {
      return i;
    } else if (
      squares[i] === "X" &&
      squares[i + 3] === "X" &&
      squares[i + 6] === ""
    ) {
      return i + 6;
    }
  }

  if (squares[0] === "" && squares[4] === "X" && squares[8] === "X") {
    return 0;
  } else if (squares[0] === "X" && squares[4] === "" && squares[8] === "X") {
    return 4;
  } else if (squares[0] === "X" && squares[4] === "X" && squares[8] === "") {
    return 8;
  }

  if (squares[2] === "" && squares[4] === "X" && squares[6] === "X") {
    return 2;
  } else if (squares[2] === "X" && squares[4] === "" && squares[6] === "X") {
    return 4;
  } else if (squares[2] === "X" && squares[4] === "X" && squares[6] === "") {
    return 6;
  }

  const random = Math.floor(Math.random() * availableSquares.length);
  return availableSquares[random];
}

module.exports = findBestMove;
