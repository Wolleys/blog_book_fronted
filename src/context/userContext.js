import { createContext, useContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

// UserContext
const UserContext = createContext(INITIAL_STATE);

// Custom hook to access the UserContext
export const useUser = () => {
  return useContext(UserContext);
};

// UserProvider component to provide the user context
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  const userContextValue = {
    user: state.user,
    isFetching: state.isFetching,
    error: state.error,
    dispatch,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};
