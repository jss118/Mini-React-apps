import { useState } from "react";

const WouldYouRather = () => {
  const [choices, setChoices] = useState([]);

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
      .then(response =>
        setChoices(() => {
          const choices = response[0].question.slice(17).split(" or ");
          return choices;
        })
      )
      .catch(err => console.error(err));
  };

  return (
    <div>
      <button className="WYR_btn" onClick={getChoices}>
        Would you rather...
      </button>
      {choices ? (
        <div className="choicesContainer">
          <h2 className="choiceOne">{choices[0]}</h2>
          <h1 className="choiceSeperater">OR</h1>
          <h2 className="choiceTwo">{choices[1]}</h2>
        </div>
      ) : null}
    </div>
  );
};

export default WouldYouRather;
