import { createContext, useContext, useReducer } from "react";
import useFetch from "../hooks/useFetch";
import reducer from "./reducer";

const AppContext = createContext();

const initState = {
  loading: false,
  error: { show: false, message: "" },
  query: "react",
  news: [],
  page: 0,
  pages: null,
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  // Async
  useFetch({ ...state, dispatch });

  const value = { ...state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useGlobalContext() {
  return useContext(AppContext);
}

export { useGlobalContext };
export default AppProvider;
