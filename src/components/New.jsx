import { useGlobalContext } from "../context";
import { ACTIONS } from "../context";

function New({ title, author, url, objectID: id }) {
  const { dispatch } = useGlobalContext();

  function handleRemove(id) {
    dispatch(ACTIONS.removeNew(id));
  }

  return (
    <div className="new">
      <p className="author">
        {author.replace(author[0], author[0].toUpperCase())}
      </p>
      <h3>{title}</h3>
      <div>
        <a href={url} target="_blank" rel="noreferrer">
          Read
        </a>
        <div className="btn-container">
          <button onClick={handleRemove.bind(null, id)}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default New;
