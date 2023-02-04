// import SignUpForm from "../components/SignUpForm";
// import { Link } from "react-router-dom";
import Home from "../components/Home";
import { useOutletContext } from "react-router-dom";
import UsersTable from "../components/UsersTable";
import { AuthProvider } from "../hooks/useAuth";

const Homepage = () => {
  const { userData, addWish, currentUser } = useOutletContext();
  return (
    <div>
      <h2 className="h2">Global Wish List </h2>
      <Home data={userData} />
      {/* <UsersTable data={userData} /> */}
      {/* <AuthProvider currentUser={currentUser} /> */}
    </div>
  );
};
export default Homepage;
