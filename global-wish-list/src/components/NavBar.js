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
// import { getItemFromLocalStorage, setItemInLocalStorage } from "../Utils";

const NavBar = () => {
  const handleClick = () => {
    // setItemInLocalStorge("user", null);
  };
  // const user = getItemFromLocalStorage("");
  // console.log("user", user);
  return (
    <div className="navbar">
      {/* <h2 className="h2">Global Wish List </h2> */}
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
      {/* <button> Log Out</button> */}
    </div>
  );
};

export default NavBar;
