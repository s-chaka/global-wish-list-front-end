// import SignUpForm from "../components/SignUpForm";
// import { Link } from "react-router-dom";
import Home from "../components/Home";
import { useOutletContext } from "react-router-dom";
import UsersTable from "../components/UsersList";
import { AuthProvider } from "../hooks/useAuth";
import SearchBar from "../components/SearchBar";
import UsersList from "../components/UsersList";

const Homepage = () => {
  const { userData } = useOutletContext();
  return (
    <div>
      <h2 className="h2">Global Wish List </h2>
      <Home data={userData} />
    </div>
  );
};
export default Homepage;
