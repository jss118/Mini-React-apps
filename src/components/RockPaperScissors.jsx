import { useState } from "react";

const RockPaperScissors = () => {
  const [startGame, setStartGame] = useState(false);
  const [scores, setScores] = useState({ player: 0, computer: 0 });

  const start = () => {
    setStartGame(true);
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
          <div className="options">
            <button>Rock</button>
            <button>Paper</button>
            <button>Scissors</button>
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
