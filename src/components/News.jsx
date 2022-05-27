import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Error from "./Error";
import New from "./New";

function News() {
  const { loading, error, news } = useGlobalContext();

  return (
    <>
      {loading && <Loading />}
      {!loading && error.show && <Error message={error.message} />}
      {!loading && !error.show && news.length === 0 && (
        <div>
          <h3>Empty News</h3>
        </div>
      )}
      {!loading && !error.show && news.length > 0 && (
        <div className="news">
          {news.map((newItem) => (
            <New key={newItem.objectID} {...newItem} />
          ))}
        </div>
      )}
    </>
  );
}

export default News;
