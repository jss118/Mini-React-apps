import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Calculator from "./components/Calculator";
import ToDoList from "./components/ToDoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JokeGenerator from "./components/JokeGenerator";
import RockPaperScissors from "./components/RockPaperScissors";
import HexColours from "./components/HexColours";
import Weather from "./components/Weather";
import TicTacToe from "./components/TicTacToe";
import Dice from "./components/Dice";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/JokeGenerator" element={<JokeGenerator />} />
        <Route path="/RockPaperScissors" element={<RockPaperScissors />} />
        <Route path="/HexColours" element={<HexColours />} />
        <Route path="/WeatherApp" element={<Weather />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />
        <Route path="/Dice" element={<Dice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
