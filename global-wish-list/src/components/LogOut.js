import { useAuth0 } from "@auth0/auth0-react";

const LogOut = () => {
  const { logout, isAuthenticated } = useAuth0();

  return isAuthenticated && <button onClick={() => logout()}>Sing Out</button>;
};
export default LogOut;
