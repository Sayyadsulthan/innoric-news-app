import { createContext } from "react";
import { useProvideAuth } from "../hooks";

const initialUserState = {
  user: null,
  login: () => {},
  signUp: () => {},
  logout: () => {},
  getUserFavourite: () => {},
  updateFavourite: () => {},
  loading: true,
};

export const AuthContext = createContext(initialUserState);

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
