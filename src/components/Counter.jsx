import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount(currentCount => {
      return (currentCount -= 1);
    });
  };
  const incrementCount = () => {
    setCount(currentCount => {
      return (currentCount += 1);
    });
  };
  const resetCount = () => {
    setCount(() => {
      return 0;
    });
  };

  return (
    <div className="counter__border">
      <button className="counter__decrement-btn" onClick={decrementCount}>
        -
      </button>
      <h1 className="counter__count">{count}</h1>
      <button className="counter__increment-btn" onClick={incrementCount}>
        +
      </button>
      <button className="counter__reset-btn" onClick={resetCount}>
        Reset count
      </button>
    </div>
  );
};

export default Counter;
