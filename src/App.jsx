import "./App.css";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import News from "./components/News";

function App() {
  return (
    <div className="App">
      <h1>Hacker News</h1>
      <hr />
      <Search />
      <hr />
      <Pagination />
      <hr />
      <News />
    </div>
  );
}

export default App;
