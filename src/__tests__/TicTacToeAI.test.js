const findBestMove = require("../Utils/TicTacToeAI");

describe("findBestMove", () => {
  test("the function returns a number", () => {
    const squares = ["", "", "", "", "X", "", "", "", ""];
    const actual = findBestMove(squares);
    expect(typeof actual).toBe("number");
  });

  test("the function returns an index from the given array that contains an empty string", () => {
    const squares = ["", "", "", "", "X", "", "", "", ""];
    const actual = findBestMove(squares);
    expect(actual).toBeGreaterThanOrEqual(0);
    expect(actual).toBeLessThanOrEqual(8);
  });

  test("the function returns an index that creates a winning combination", () => {
    const squares = ["O", "O", "", "", "X", "X", "", "X", ""];
    const actual = findBestMove(squares);
    expect(actual).toBe(2);
  });
});
