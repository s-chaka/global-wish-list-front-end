import { useState, useEffect, createContext, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getItemFromLocalStorage, setItemInLocalStorage } from "../Utils";

const AuthContext = createContext();

export const AuthProvider = ({ children, setCurrentUser, currentUser }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const lsUser = getItemFromLocalStorage("user");
    // console.log(lsUser);
    if (lsUser && !currentUser) {
      setCurrentUser(lsUser);
      navigate(location.pathname);
    } else if (!currentUser) {
      navigate("/");
    }
    // console.log(lsUser);
  }, []);
  // const login = (lsUser) => {
  //   setItemInLocalStorage("user", currentUser);
  //   // setUser(currentUser);
  //   console.log("current user form useAuth", currentUser);
  //   navigate("/dashboard");
  // };
  const logout = () => {
    setCurrentUser(null);
    setItemInLocalStorage("user", null);
    navigate("/");
  };
  const value = {
    // login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  return useContext(AuthContext);
};
