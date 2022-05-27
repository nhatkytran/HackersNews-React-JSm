import { useGlobalContext } from "../context";
import { ACTIONS } from "../context";

function Search() {
  const { query, dispatch } = useGlobalContext();

  function handleSearch(event) {
    dispatch(ACTIONS.setPage(0));
    dispatch(ACTIONS.setQuery(event.target.value));
  }

  return (
    <div className="search">
      <input type="text" value={query} onChange={handleSearch} />
    </div>
  );
}

export default Search;
