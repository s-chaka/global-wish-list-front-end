import { useState, useEffect, createContext, useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { getItemFromLocalStorage, setItemInLocalStorage } from "../Utils";

// const { userData } = useOutletContext();

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const { currentUser } = useOutletContext();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const lsUser = getItemFromLocalStorage("user");
    if (lsUser) {
      setUser(lsUser);
      navigate(location.pathname);
    } else {
      navigate("/");
    }
  }, []);
  const login = () => {
    setItemInLocalStorage("user", user);
    setUser(user);
    console.log("current user form useAuth", user);
    navigate("/dashboard");
  };
  const logout = () => {
    setUser(null);
    setItemInLocalStorage("user", null);
    navigate("/");
  };
  const value = {
    user,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  return useContext(AuthContext);
};
