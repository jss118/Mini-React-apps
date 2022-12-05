import React from "react";

const Dice = () => {
  return (
    <div className="diceApp_container">
      <div className="dice_container"></div>
      <button className="roll-btn">Roll</button>
      <div className="diceOptions">
        <label for="diceForm">Number of dice:</label>
        <form className="diceForm">
          <input type="radio" id="1" />
          <label for="1">1</label>
          <input type="radio" id="2" />
          <label for="2">2</label>
          <input type="radio" id="3" />
          <label for="3">3</label>
          <input type="radio" id="4" />
          <label for="4">4</label>
          <input type="radio" id="5" />
          <label for="5">5</label>
        </form>
      </div>
    </div>
  );
};

export default Dice;
