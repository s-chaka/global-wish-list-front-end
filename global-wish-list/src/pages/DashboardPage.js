import Dashboard from "../components/Dashboard";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import WishForm from "../components/WishForm";

const DashboardPage = () => {
  const { userData, addWish, wishData, setCurrentUser, currentUser } =
    useOutletContext();

  return (
    <div>
      <h2 className="h2">Dashboard </h2>
      <Dashboard
        data={userData}
        currentUser={currentUser}
        wishData={wishData}
      />
      <WishForm
        onAddWishData={addWish}
        userData={userData}
        wishData={wishData}
        currentUser={currentUser}
      />
    </div>
  );
};
export default DashboardPage;
