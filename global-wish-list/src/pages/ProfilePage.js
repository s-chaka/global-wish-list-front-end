import Profile from "../components/Profile";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div>
      <h2 className="h2">Profile </h2>
      <Profile />
      {/* <Users /> */}
    </div>
  );
};
export default ProfilePage;
