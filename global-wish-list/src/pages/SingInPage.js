import { useOutletContext } from "react-router-dom";

import Profile from "../components/Profile";
import SignInForm from "../components/SingInForm";

const SignIn = () => {
  const { userData, logIn, logOut, setCurrentUser, currentUser } =
    useOutletContext();
  return (
    <div>
      {/* <LogIn /> */}
      {/* <Profile /> */}
      <SignInForm
        data={userData}
        onLogIn={logIn}
        onLogOut={logOut}
        onSetCurrentUser={setCurrentUser}
        currentUser={currentUser}
      />
    </div>
  );
};
export default SignIn;
