import { useState, useEffect } from "react";

const HexColours = () => {
  const [code, setCode] = useState("#FFFFFF");

  useEffect(() => {
    document.querySelector("body").style.backgroundColor = code;
  }, [code]);

  const getHexCode = () => {
    setCode("#");
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    setCode(prevCode => {
      for (let i = 0; i < 6; i++) {
        prevCode += hex[Math.floor(Math.random() * 16)];
      }
      return prevCode;
    });
  };

  const reset = () => {
    setCode(null);
  };

  return (
    <>
      <div className="hexBtnContainer">
        <button className="hex-btn" onClick={getHexCode}>
          Hex code
        </button>
        <button className="hex-btn" onClick={reset}>
          Reset
        </button>
      </div>

      {code === null ? null : (
        <h2 className="hex-h2">
          This background colour is the Hex code {code}
        </h2>
      )}
    </>
  );
};

export default HexColours;
