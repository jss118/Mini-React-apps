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
    { value: 1 },
    { value: "=" },
    { value: "-" },
    { value: 0 },
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
      setSum(() => {
        return null;
      });
    }

    if (event.target.value === "=") {
      setSum(prevSum => calculate(prevSum));
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
            className="calculator__btn"
          >
            {button.value}
          </button>
        );
      })}
    </div>
  );
};
export default Calculator;
