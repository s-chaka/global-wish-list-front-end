import NavBar from "./NavBar";

const Layout = ({ children, currentUser, logout }) => {
  return (
    <div>
      <NavBar currentUser={currentUser} logout={logout} />
      {children}
    </div>
  );
};

export default Layout;
