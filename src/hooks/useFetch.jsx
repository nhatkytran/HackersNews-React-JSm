import { useCallback, useEffect } from "react";
import { ACTIONS } from "../context";

const API = "https://hn.algolia.com/api/v1/search";

function useFetch({ query, page, dispatch }) {
  const fetchAPI = useCallback(
    async (url) => {
      try {
        dispatch(ACTIONS.setLoading(true));
        dispatch(ACTIONS.setError({ show: false, message: "" }));

        const res = await fetch(url);

        if (!res.ok)
          throw new Error("Something went wrong! Please check again");

        const data = await res.json();
        console.log(data);
        dispatch(ACTIONS.setNews(data.hits));
        dispatch(ACTIONS.setPages(data.nbPages));
      } catch (error) {
        console.error("Somethong went wrong!");
        console.log(error.message);
        dispatch(ACTIONS.setError({ show: true, message: error.message }));
      } finally {
        dispatch(ACTIONS.setLoading(false));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
      fetchAPI(`${API}?query=${query}&page=${page}`);
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [fetchAPI, query, page]);
}

export default useFetch;
