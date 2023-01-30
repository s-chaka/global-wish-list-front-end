import SignUpForm from "../components/SignUpForm";
import Users from "../components/Users";
import { Link } from "react-router-dom";
import Home from "../components/Home";

const Homepage = () => {
  return (
    <div>
      <h2 className="h2">Global Wish List </h2>
      <Home />
      {/* <Users /> */}
    </div>
  );
};
export default Homepage;
