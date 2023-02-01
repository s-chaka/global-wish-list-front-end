// import { useState, useEffect, createContext, useContext } from "react";
// import { useOutletContext } from "react-router-dom";
// import { useLocation, useNavigate } from "react-router-dom";
// import { getItemFromLocalStorage, setItemInLocalStorge } from "../Utils";

// // const { userData } = useOutletContext();

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   // const { userData } = useOutletContext();
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();
//   useEffect(() => {
//     const lsUser = getItemFromLocalStorage("user");
//     if (lsUser) {
//       setUser(lsUser);
//     } else {
//       navigate(location.pathname);
//     }
//   }, []);
//   const login = (props) => {
//     // setItemInLocalStorge("user", props.userData[0]);
//     setUser(props.data[0]);
//     navigate("/dashboard");
//   };
//   const logout = () => {
//     setUser(null);
//     setItemInLocalStorge("user", null);
//     navigate("/home");
//   };
//   const value = {
//     user,
//     login,
//     logout,
//   };
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
// export const useAuth = () => {
//   return useContext(AuthContext);
// };
