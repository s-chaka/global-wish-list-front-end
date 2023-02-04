import "./NavBar.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/SignUpPage";
import Wishes from "../pages/Wishes";
import { getItemFromLocalStorage, setItemInLocalStorage } from "../Utils";
import { useAuth } from "../hooks/useAuth";

const NavBar = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  // const handleClick = () => {

  //   setItemInLocalStorage("user", null);
  //   console.log("user");
  //   navigate("/");
  //   window.localStorage.removeItem("myuser");
  // };
  // const user = getItemFromLocalStorage("user");
  // console.log("user");
  return (
    <div className="navbar">
      <Link to="/" className="link">
        Home{" "}
      </Link>
      <Link to="/wishes" className="link">
        Wish List{" "}
      </Link>
      <Link to="/signup" className="link">
        Signup{" "}
      </Link>
      <Link to="/signin" className="link">
        Signin{" "}
      </Link>
      {/* {user && <button onClick={handleClick}> Log Out</button>} */}
      {user && <button onClick={logout}> Log Out</button>}
    </div>
  );
};

export default NavBar;
