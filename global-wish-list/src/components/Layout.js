import NavBar from "./NavBar";

const Layout = ({ children, currentUser }) => {
  return (
    <div>
      <NavBar currentUser={currentUser} />
      {children}
    </div>
  );
};

export default Layout;
