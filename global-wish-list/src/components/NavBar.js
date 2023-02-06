import "./NavBar.css";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const NavBar = ({ currentUser }) => {
  const { logout, login, handleUser } = useAuth();

  // console.log(currentUser);
  return (
    <div className="navbar">
      <Link to="/" className="link">
        Home{" "}
      </Link>
      <Link to="/howitworks" className="link">
        How It Works{" "}
      </Link>
      <Link to="/wishes" className="link">
        Wish List{" "}
      </Link>
      {!currentUser && (
        <Link to="/signin" className="link" onClick={logout}>
          Sign In/ Sign Up{" "}
        </Link>
      )}
      {currentUser && (
        <Link to="/dashboard" className="link" onClick={handleUser}>
          {currentUser.firstName}'s Dashoard{" "}
        </Link>
      )}
      {currentUser && (
        <Link to="/" className="link" onClick={logout}>
          Sign Out{" "}
        </Link>
      )}
    </div>
  );
};

export default NavBar;
