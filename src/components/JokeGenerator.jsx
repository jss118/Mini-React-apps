import { useState } from "react";
import Axios from "axios";

const JokeGenerator = () => {
  const [joke, setJoke] = useState("");
  const [punchline, setPunchline] = useState("");
  const [reveal, setReveal] = useState(false);
  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then(res => {
      setJoke(res.data.setup);
      setPunchline(res.data.punchline);
      setReveal(false);
    });
  };
  const showPunchline = () => {
    setReveal(true);
  };

  return (
    <section className="joke-gen__section">
      <button onClick={getJoke}>{joke ? "Another Joke" : "Joke"}</button>
      {joke ? <h2>{joke}</h2> : null}
      {joke ? <button onClick={showPunchline}>Punchline</button> : null}
      {reveal ? <h3>{punchline}</h3> : null}
    </section>
  );
};

export default JokeGenerator;
