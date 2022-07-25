import "./App.css";
import GameList from "./components/GameList/GameList";
import Header from "./components/Header/Header";

function App() {
  const name = "game site";

  return (
    <div className="App">
      <Header name={name} />
      <GameList />
    </div>
  );
}

export default App;
