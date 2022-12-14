import { useState } from "react";

const WouldYouRather = () => {
  const [choices, setChoices] = useState("");

  const getChoices = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "would-you-rather.p.rapidapi.com",
      },
    };

    fetch("https://would-you-rather.p.rapidapi.com/wyr/random", options)
      .then(response => response.json())
      .then(response => setChoices(response[0].question))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <button className="WYR_btn" onClick={getChoices}>
        Would you rather...
      </button>
      {choices ? (
        <>
          <h2 className="WYR_h2">{choices}</h2>
        </>
      ) : null}
    </div>
  );
};

export default WouldYouRather;
