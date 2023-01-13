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

  test("the function returns index 2 that creates a horizontal winning combination", () => {
    const squares = ["O", "O", "", "", "X", "X", "", "X", ""];
    const actual = findBestMove(squares);
    expect(actual).toBe(2);
  });

  test("the function returns index 4 for a horizontal winning combination", () => {
    const squares = ["O", "X", "X", "O", "", "O", "X", "X", ""];
    const actual = findBestMove(squares);
    expect(actual).toBe(4);
  });

  test("the function returns index 6 for a horizontal winning combination", () => {
    const squares = ["O", "X", "X", "X", "X", "", "", "O", "O"];
    const actual = findBestMove(squares);
    expect(actual).toBe(6);
  });

  test("the function returns index 3 for a vertical winning combination", () => {
    const squares = ["O", "X", "X", "", "X", "", "O", "X", "O"];
    const actual = findBestMove(squares);
    expect(actual).toBe(3);
  });

  test("the function returns index 0 for a vertical winning combination", () => {
    const squares = ["", "X", "X", "O", "X", "", "O", "X", "O"];
    const actual = findBestMove(squares);
    expect(actual).toBe(0);
  });

  test("the function returns index 6 for a vertical winning combination", () => {
    const squares = ["O", "X", "X", "O", "X", "", "", "X", ""];
    const actual = findBestMove(squares);
    expect(actual).toBe(6);
  });

  test("the function returns index 5 for a vertical winning combination", () => {
    const squares = ["X", "X", "O", "", "X", "", "", "", "O"];
    const actual = findBestMove(squares);
    expect(actual).toBe(5);
  });

  test("the function returns index 0 for a diagonal winning combination", () => {
    const squares = ["", "X", "X", "X", "O", "", "", "", "O"];
    const actual = findBestMove(squares);
    expect(actual).toBe(0);
  });

  test("the function returns index 4 for a diagonal winning combination", () => {
    const squares = ["O", "X", "X", "X", "", "", "", "", "O"];
    const actual = findBestMove(squares);
    expect(actual).toBe(4);
  });

  test("the function returns index 8 for a diagonal winning combination", () => {
    const squares = ["O", "X", "X", "X", "O", "", "", "", ""];
    const actual = findBestMove(squares);
    expect(actual).toBe(8);
  });

  test("the function returns index 2 for a diagonal winning combination", () => {
    const squares = ["", "X", "", "X", "O", "", "O", "", ""];
    const actual = findBestMove(squares);
    expect(actual).toBe(2);
  });

  test("the function returns the middle square (index 4) for a diagonal winning combination", () => {
    const squares = ["", "X", "O", "X", "", "", "O", "", ""];
    const actual = findBestMove(squares);
    expect(actual).toBe(4);
  });

  test("the function returns index 6 for a diagonal winning combination", () => {
    const squares = ["", "X", "O", "X", "O", "", "", "", ""];
    const actual = findBestMove(squares);
    expect(actual).toBe(6);
  });

  test("the function returns the correct index to stop X from getting a winning combination", () => {
    const squares = ["X", "", "X", "", "O", "", "", "", ""];
    const actual = findBestMove(squares);

    const squares1 = ["X", "O", "X", "X", "X", "", "", "", ""];
    const actual1 = findBestMove(squares1);

    const squares2 = ["X", "O", "", "", "", "O", "X", "X", ""];
    const actual2 = findBestMove(squares2);

    expect(actual).toBe(1);
    expect(actual1).toBe(5);
    expect(actual2).toBe(8);
  });

  test("the function returns the correct index to stop X from getting a vertical winning combination", () => {
    const squares = ["", "O", "X", "", "", "X", "", "", ""];
    const actual = findBestMove(squares);

    const squares1 = ["X", "O", "", "X", "", "", "", "", ""];
    const actual1 = findBestMove(squares1);

    const squares2 = ["O", "X", "", "", "", "", "", "X", ""];
    const actual2 = findBestMove(squares2);

    expect(actual).toBe(8);
    expect(actual1).toBe(6);
    expect(actual2).toBe(4);
  });

  test("the function returns the correct index to stop X from getting a diagonal winning combination", () => {
    const squares = ["X", "", "", "O", "X", "", "", "", ""];
    const actual = findBestMove(squares);

    const squares1 = ["", "", "X", "", "X", "", "", "", ""];
    const actual1 = findBestMove(squares1);

    expect(actual).toBe(8);
    expect(actual1).toBe(6);
  });
  test("if Xs first move is the middle square, do NOT return any of the following indexs: 1, 3, 5 or 7", () => {
    const squares = ["", "", "", "", "X", "", "", "", ""];
    const actual = findBestMove(squares);

    expect(actual).not.toBe(1);
    expect(actual).not.toBe(3);
    expect(actual).not.toBe(5);
    expect(actual).not.toBe(7);
  });
  test("if index 4 is available on Os first go, return it", () => {
    const squares = ["", "", "X", "", "", "", "", "", ""];
    const actual = findBestMove(squares);

    expect(actual).toBe(4);
  });
});
