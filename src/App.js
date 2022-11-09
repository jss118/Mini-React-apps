import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Calculator from "./components/Calculator";
import ToDoList from "./components/ToDoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JokeGenerator from "./components/JokeGenerator";
import RockPaperScissors from "./components/RockPaperScissors";

function App() {
  return (
    <div className="page_div">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/ToDoList" element={<ToDoList />} />
          <Route path="/JokeGenerator" element={<JokeGenerator />} />
          <Route path="/RockPaperScissors" element={<RockPaperScissors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
