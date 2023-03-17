import "./App.css";
import Counter from "./components/Counter";
import { GenreSelect } from "./components/GenreSelect";
import { Searchbar } from "./components/Searchbar";

function App() {
  const genres = ["All", "Dcumentary", "Comedy", "Horror", "Crime"];
  return (
    <div className="App">
      <div>
        <h2>1. Counter</h2>
        <Counter initial={10}></Counter>
      </div>
      <div>
        <h2>2. Searchbar</h2>
        <Searchbar initial="Alien" onSearch={console.log}></Searchbar>
      </div>
      <div>
        <h2>3. GenreSelect</h2>
        <GenreSelect
          genres={genres}
          selected={"All"}
          onSelect={console.log}
        ></GenreSelect>
      </div>
    </div>
  );
}

export default App;
