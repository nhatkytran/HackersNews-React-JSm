import { ACTIONS, useGlobalContext } from "../context";

function Pagination() {
  const { loading, error, page, pages, dispatch } = useGlobalContext();

  function handlePage(event) {
    let newPage;
    if (event.target.name === "prev") {
      newPage = page === 0 ? pages - 1 : page - 1;
    } else if (event.target.name === "next") {
      newPage = page === pages - 1 ? 0 : page + 1;
    }
    dispatch(ACTIONS.setPage(newPage));
  }

  if (loading || error.show) return <div>...</div>;

  return (
    <div className="pagination">
      <button name="prev" onClick={handlePage}>
        {"<"}
      </button>
      <span style={{ padding: "4px 6px" }}>
        {page + 1} of {pages}
      </span>
      <button name="next" onClick={handlePage}>
        {">"}
      </button>
    </div>
  );
}

export default Pagination;
