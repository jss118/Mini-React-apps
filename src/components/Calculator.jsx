import { useState } from "react";
const calculate = require("../Utils/Calculate");

const Calculator = () => {
  const [sum, setSum] = useState("");

  const buttons = [
    { value: 8 },
    { value: 9 },
    { value: "C" },
    { value: 6 },
    { value: 7 },
    { value: "x" },
    { value: 4 },
    { value: 5 },
    { value: "/" },
    { value: 2 },
    { value: 3 },
    { value: "+" },
    { value: 0 },
    { value: 1 },
    { value: "-" },
    { value: "=" },
  ];

  const handleClick = event => {
    setSum(currSum => {
      if (typeof currSum !== "string" && typeof currSum !== "number") {
        return event.target.value;
      } else {
        const newSum = (currSum += event.target.value);
        return newSum;
      }
    });

    if (event.target.value === "C") {
      setSum(() => "");
    }

    if (event.target.value === "=") {
      if (sum.length === 0) {
        alert(
          'Click on a number, followed by an operater, then another number. Then you can click "=" to recieve the result. For example: "3+5" then "=".'
        );
        setSum("");
      } else {
        setSum(prevSum => calculate(prevSum));
      }
    }
  };

  return (
    <div className="calculator__border">
      <h2 className="calculator__screen">{sum}</h2>
      {buttons.map(button => {
        return (
          <button
            key={button.value}
            value={button.value}
            onClick={handleClick}
            className={
              typeof button.value === "number"
                ? "calculator__btn numBtn"
                : button.value === "="
                ? "calculator__btn opBtn equalsBtn"
                : "calculator__btn opBtn"
            }
          >
            {button.value}
          </button>
        );
      })}
    </div>
  );
};
export default Calculator;
