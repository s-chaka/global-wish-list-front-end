import "./NavBar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/SignUp";
import Wishes from "../pages/Wishes";

const NavBar = () => {
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
        Singin{" "}
      </Link>
    </div>
  );
};

export default NavBar;
