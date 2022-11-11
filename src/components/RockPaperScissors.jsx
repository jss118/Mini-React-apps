import { useState, useEffect } from "react";

const RockPaperScissors = () => {
  const [startGame, setStartGame] = useState(false);
  const [scores, setScores] = useState({ player: 0, computer: 0 });
  const [playerOption, setPlayerOption] = useState("");
  const [computerOption, setComputerOption] = useState("");

  useEffect(() => {
    if (playerOption && computerOption) {
      return playerOption === "Rock" && computerOption === "Paper"
        ? setScores(prevScore => {
            prevScore.computer++;
          })
        : playerOption === "Rock" && computerOption === "Scissors"
        ? setScores(prevScore => {
            prevScore.player++;
          })
        : playerOption === "Paper" && computerOption === "Rock"
        ? setScores(prevScore => {
            prevScore.player++;
          })
        : playerOption === "Paper" && computerOption === "Scissors"
        ? setScores(prevScore => {
            prevScore.computer++;
          })
        : playerOption === "Scissors" && computerOption === "Paper"
        ? setScores(prevScore => {
            prevScore.player++;
          })
        : playerOption === "Scissors" && computerOption === "Rock"
        ? setScores(prevScore => {
            prevScore.computer++;
          })
        : null;
    }
  }, [computerOption, playerOption]);
  const start = () => {
    setStartGame(true);
  };

  const chooseOption = event => {
    setPlayerOption(event.target.innerText);
    setComputerOption(() => {
      const choices = {
        1: "Rock",
        2: "Paper",
        3: "Scissors",
      };
      const choice = Math.floor(Math.random() * 3) + 1;
      return choices[choice];
    });
  };

  return (
    <section className="RPS__section">
      <h1>Rock Paper Scissors</h1>
      {startGame ? (
        <div className="game">
          <div className="game_scores">
            <div className="score">
              <h3>Player:</h3>
              <h4>{scores.player}</h4>
            </div>
            <div className="score">
              <h3>Computer:</h3>
              <h4>{scores.computer}</h4>
            </div>
          </div>
          <div className="plays">
            {playerOption ? <h2>{playerOption}</h2> : null}
            {computerOption ? <h2>{computerOption}</h2> : null}
          </div>
          <div className="options">
            <button onClick={chooseOption}>Rock</button>
            <button onClick={chooseOption}>Paper</button>
            <button onClick={chooseOption}>Scissors</button>
          </div>
        </div>
      ) : (
        <button onClick={start} className="RPS__start-btn">
          Start
        </button>
      )}
    </section>
  );
};

export default RockPaperScissors;
