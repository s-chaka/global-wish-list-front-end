import { useAuth0 } from "@auth0/auth0-react";

const LogIn = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>Sing In</button>
    )
  );
};
export default LogIn;
