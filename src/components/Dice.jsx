import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const Dice = () => {
  const handleChangeOfNum = event => {
    console.log(event.target.value);
  };

  return (
    <div className="diceApp_container">
      <div className="dice_container"></div>
      <button className="roll-btn">Roll</button>
      <div className="diceOptions">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Number of dice:
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="2"
            name="radio-buttons-group"
            onChange={handleChangeOfNum}
          >
            <FormControlLabel value="1" control={<Radio />} label="1" />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
            <FormControlLabel value="5" control={<Radio />} label="5" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default Dice;
