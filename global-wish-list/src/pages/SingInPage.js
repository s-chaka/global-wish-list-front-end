import { useOutletContext } from "react-router-dom";
import LogIn from "../components/LogIn";
import Profile from "../components/Profile";
import SignInForm from "../components/SingInForm";

const SignIn = () => {
  const { userData, logIn, logOut } = useOutletContext();
  return (
    <div>
      {/* <LogIn /> */}
      {/* <Profile /> */}
      <SignInForm data={userData} onLogIn={logIn} onLogOut={logOut} />
    </div>
  );
};
export default SignIn;
