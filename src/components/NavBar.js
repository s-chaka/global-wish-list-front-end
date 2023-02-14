import "./NavBar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = ({ currentUser }) => {
  const { logout, handleUser } = useAuth();
  return (
    <div>
      <Navbar variant="dark" className="nav-background ">
        <Container>
          <Navbar.Brand href="/" className="nav-color">
            GWL
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-color">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/howitworks" className="nav-color">
              How It Works
            </Nav.Link>
            {!currentUser && (
              <Nav.Link
                as={Link}
                to="/signin"
                className="nav-color"
                onClick={logout}
              >
                Sign In/ Sign Up
              </Nav.Link>
            )}
            {currentUser && (
              <Nav.Link
                as={Link}
                to="/dashboard"
                className="nav-color"
                onClick={handleUser}
              >
                {currentUser.firstName}'s Dashoard
              </Nav.Link>
            )}
            {currentUser && (
              <Nav.Link as={Link} to="/" className="nav-color" onClick={logout}>
                Sign Out
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
