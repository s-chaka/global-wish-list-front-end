import { useEffect, createContext, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getItemFromLocalStorage, setItemInLocalStorage } from "../Utils";

const AuthContext = createContext();

export const AuthProvider = ({ children, setCurrentUser, currentUser }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const lsUser = getItemFromLocalStorage("user");
    if (lsUser && !currentUser) {
      setCurrentUser(lsUser);
      navigate(location.pathname);
    } else if (!currentUser) {
      navigate("/");
    }
  }, []);

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
