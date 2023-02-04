import Dashboard from "../components/Dashboard";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import WishForm from "../components/WishForm";

const DashboardPage = () => {
  const { userData, addWish, wishData, deleteWish, deleteUser, currentUser } =
    useOutletContext();
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <h2 className="h2">Dashboard </h2>
      <Dashboard
        data={userData}
        currentUser={currentUser}
        wishData={wishData}
        OnDeleteWish={deleteWish}
        OnDeleteUser={deleteUser}
      />
      <button type="button" onClick={() => setShowForm(!showForm)}>
        {showForm === true ? "Hide Create Wish Form" : "Create Wish"}
      </button>
      {showForm && (
        <WishForm
          onAddWishData={addWish}
          userData={userData}
          wishData={wishData}
          currentUser={currentUser}
        />
      )}
    </div>
  );
};
export default DashboardPage;
