import { useOutletContext } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import WishForm from "../components/WishForm";

const SignUpPage = () => {
  const { addUser, addWish, userData } = useOutletContext();
  return (
    <div>
      <SignUpForm onAddUserData={addUser} />
      <br />
      <WishForm onAddWishData={addWish} data={userData} />
    </div>
  );
};
export default SignUpPage;