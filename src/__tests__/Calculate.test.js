const calculate = require("../Utils/Calculate");

describe("Calculate", () => {
  test("the function returns a string", () => {
    const input = "1+1";
    expect(typeof calculate(input)).toBe("string");
  });
  test("the function takes in a sum as a string and returns the asnwer as a string", () => {
    const input = "1+1";
    const input1 = "6-5";
    const input2 = "6/2";
    const input3 = "4*2";

    const actual = calculate(input);
    const actual1 = calculate(input1);
    const actual2 = calculate(input2);
    const actual3 = calculate(input3);

    expect(actual).toBe("2");
    expect(actual1).toBe("1");
    expect(actual2).toBe("3");
    expect(actual3).toBe("8");
  });
  test("the function returns the correct answer for sums with mulitple operaters", () => {
    const input = "1+1+1";
    const input1 = "8-4-2";
    const input2 = "8/2/2";
    const input3 = "2*2*2";

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
    const input1 = "2*4-2";
    const input2 = "1+1*4";
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
});
