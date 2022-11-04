import { useState } from "react";

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
      setSum(prevSum => {
        const newSum = prevSum.slice(0, prevSum.length - 1);
        let num1 = null;
        let num2 = null;
        let operater = "";
        for (let i = 0; i < newSum.length; i++) {
          if (isNaN(newSum[i])) {
            num1 = Number(newSum.slice(0, i));
            operater += newSum[i];
            num2 = Number(newSum.slice(i + 1));
          }
        }

        return operater === "+"
          ? (num1 + num2).toString()
          : operater === "-"
          ? (num1 - num2).toString()
          : operater === "x"
          ? (num1 * num2).toString()
          : (num1 / num2).toString();
      });
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
