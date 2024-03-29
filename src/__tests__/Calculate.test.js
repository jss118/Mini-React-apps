const calculate = require("../Utils/Calculate");

describe("Calculate", () => {
  test("the function returns a string", () => {
    const input = "1+1";
    expect(typeof calculate(input)).toBe("string");
  });
  test("the function takes in a sum as a string and returns the answer as a string", () => {
    const input = "1+1";
    const input1 = "6-5";
    const input2 = "6/2";
    const input3 = "4x2";

    const actual = calculate(input);
    const actual1 = calculate(input1);
    const actual2 = calculate(input2);
    const actual3 = calculate(input3);

    expect(actual).toBe("2");
    expect(actual1).toBe("1");
    expect(actual2).toBe("3");
    expect(actual3).toBe("8");
  });
  test("the function returns the correct answer for sums with multiple operaters", () => {
    const input = "1+1+1";
    const input1 = "8-4-2";
    const input2 = "8/2/2";
    const input3 = "2x2x2";

    const actual = calculate(input);
    const actual1 = calculate(input1);
    const actual2 = calculate(input2);
    const actual3 = calculate(input3);

    expect(actual).toBe("3");
    expect(actual1).toBe("2");
    expect(actual2).toBe("2");
    expect(actual3).toBe("8");
  });
  test("the function returns the correct answer when a mix of operaters are in the same sum", () => {
    const input = "2+4-3";
    const input1 = "2x4-2";
    const input2 = "1+1x4";
    const input3 = "9-2/2";

    const actual = calculate(input);
    const actual1 = calculate(input1);
    const actual2 = calculate(input2);
    const actual3 = calculate(input3);

    expect(actual).toBe("3");
    expect(actual1).toBe("6");
    expect(actual2).toBe("5");
    expect(actual3).toBe("8");
  });
  test("the function returns the correct answer when bigger numbers summed", () => {
    const input = "2x10-5";
    const input1 = "10+20/2";
    const input2 = "100+100x3";
    const input3 = "100-100/2";

    const actual = calculate(input);
    const actual1 = calculate(input1);
    const actual2 = calculate(input2);
    const actual3 = calculate(input3);

    expect(actual).toBe("15");
    expect(actual1).toBe("20");
    expect(actual2).toBe("400");
    expect(actual3).toBe("50");
  });
  test("the function returns the correct answer when a complicated sum is passed through", () => {
    const input = "100+500/2+50";
    const input1 = "600-2x100+50";
    const input2 = "2x50+2x50";

    const actual = calculate(input);
    const actual1 = calculate(input1);
    const actual2 = calculate(input2);

    expect(actual).toBe("400");
    expect(actual1).toBe("450");
    expect(actual2).toBe("200");
  });
  test("the function returns the correct answer when multiplication and division are included in the sum", () => {
    const input = "10+2/4x20";
    const input1 = "10+20x2/4";

    const actual = calculate(input);
    const actual1 = calculate(input1);

    expect(actual).toBe("20");
    expect(actual1).toBe("20");
  });
  test("the function works with negative numbers", () => {
    const input = "-1+1";
    const input1 = "-3x2";
    const input2 = "-4/2";
    const input3 = "-4-1";

    const actual = calculate(input);
    const actual1 = calculate(input1);
    const actual2 = calculate(input2);
    const actual3 = calculate(input3);

    expect(actual).toBe("0");
    expect(actual1).toBe("-6");
    expect(actual2).toBe("-2");
    expect(actual3).toBe("-5");
  });
  test("the function returns the correct answers when a multiple digit negative is present in the sum", () => {
    const input = "-50+5";
    const input1 = "-50-5";
    const input2 = "-500x2";
    const input3 = "-50/2";

    const actual = calculate(input);
    const actual1 = calculate(input1);
    const actual2 = calculate(input2);
    const actual3 = calculate(input3);

    expect(actual).toBe("-45");
    expect(actual1).toBe("-55");
    expect(actual2).toBe("-1000");
    expect(actual3).toBe("-25");
  });
});
