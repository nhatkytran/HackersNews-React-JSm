const TYPES = {
  loading: "SET_LOADING",
  error: "SET_ERROR",
  query: "SET_QUERY",
  news: "SET_NEWS",
  page: "SET_PAGE",
  pages: "SET_PAGES",
  removal: "REMOVE",
};

const ACTIONS = {
  setLoading(payload) {
    return { type: TYPES.loading, payload };
  },
  setError(payload) {
    return { type: TYPES.error, payload };
  },
  setQuery(payload) {
    return { type: TYPES.query, payload };
  },
  setNews(payload) {
    return { type: TYPES.news, payload };
  },
  setPage(payload) {
    return { type: TYPES.page, payload };
  },
  setPages(payload) {
    return { type: TYPES.pages, payload };
  },
  removeNew(payload) {
    return { type: TYPES.removal, payload };
  },
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.loading:
      return { ...state, loading: action.payload };
    case TYPES.error:
      return {
        ...state,
        error: {
          ...state.error,
          show: action.payload.show,
          message: action.payload.message,
        },
      };
    case TYPES.query:
      return { ...state, query: action.payload };
    case TYPES.news:
      return { ...state, news: action.payload };
    case TYPES.page:
      return { ...state, page: action.payload };
    case TYPES.pages:
      return { ...state, pages: action.payload };
    case TYPES.removal:
      return {
        ...state,
        news: state.news.filter(
          (newItem) => newItem.objectID !== action.payload
        ),
      };
    default:
      throw new Error("Invalid action! Please check again");
  }
}

export { ACTIONS };
export default reducer;
