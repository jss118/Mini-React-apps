import { useState } from "react";

const RockPaperScissors = () => {
  const [startGame, setStartGame] = useState(false);
  const [scores, setScores] = useState({ player: 0, computer: 0 });
  const [playerOption, setPlayerOption] = useState("");
  const [computerOption, setComputerOption] = useState("");
  const [whoWins, setWhoWins] = useState("");

  const start = () => {
    setStartGame(true);
  };

  const chooseOption = event => {
    setPlayerOption(event.target.value);
    setComputerOption(prevChoice => {
      const choices = {
        1: "Rock",
        2: "Paper",
        3: "Scissors",
      };
      let choice = Math.floor(Math.random() * 3) + 1;
      while (choices[choice] === prevChoice) {
        choice = Math.floor(Math.random() * 3) + 1;
      }
      return choices[choice];
    });

    if (
      (playerOption === "Rock" && computerOption === "Scissors") ||
      (playerOption === "Scissors" && computerOption === "Paper") ||
      (playerOption === "Paper" && computerOption === "Rock")
    ) {
      setScores(prevScores => {
        const newScores = prevScores;
        newScores.player += 1;
        return newScores;
      });
    }

    if (
      (playerOption === "Rock" && computerOption === "Paper") ||
      (playerOption === "Scissors" && computerOption === "Rock") ||
      (playerOption === "Paper" && computerOption === "Scissors")
    ) {
      setScores(prevScores => {
        const newScores = prevScores;
        newScores.computer += 1;
        return newScores;
      });
    }

    if (scores.computer === 3 || scores.player === 3) {
      if (scores.computer > scores.player) {
        setWhoWins("Computer Wins!");
      } else {
        setWhoWins("You Win!");
      }
      setScores({ player: 0, computer: 0 });
      setComputerOption("");
      setPlayerOption("");
      setStartGame(false);
    }
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
            <button className="option-btn" value="Rock" onClick={chooseOption}>
              Rock
            </button>
            <button className="option-btn" value="Paper" onClick={chooseOption}>
              Paper
            </button>
            <button
              className="option-btn"
              value="Scissors"
              onClick={chooseOption}
            >
              Scissors
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="winner">{whoWins}</h2>
          <button onClick={start} className="RPS__start-btn">
            {whoWins ? "Play Again!" : "Start"}
          </button>
        </>
      )}
    </section>
  );
};

export default RockPaperScissors;
