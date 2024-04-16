import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
import "./Form.css";
import { setItemInLocalStorage } from "../Utils";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import PasswordMask from "react-password-mask";

const SignInForm = (props) => {
  const navigate = useNavigate();
  const { userData, setCurrentUser } = useOutletContext();
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, steErrorMessage] = useState("");


  const handleUser = (e) => {
    e.preventDefault();
    let user_found = false;
    for (let user of userData) {
      if (
        user.email === formFields.email &&
        user.password === formFields.password
      ) {
        user_found = true;
        setCurrentUser(user);
        setItemInLocalStorage("user", user);
        navigate("/dashboard");
        return;
      }
    }
    if (!user_found) {
      steErrorMessage(" * Invalid email or password. Please try again or signup");
    }
  };
  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const handleSignUp = () =>{
    navigate("/signup");
  };

  return (
    <div className="form-singin">
      <Form onSubmit={handleUser }>
        <h3> Please Log In </h3>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address </Form.Label>
          <Form.Control
            name="email"
            autoComplete="email"
            placeholder="Email address"
            value={formFields.email}
            onChange={handleChange}
            className=" w-50"
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="Password"
            value={formFields.password}
            onChange={handleChange}
            className=" w-50"
            size="sm"
          />
        </Form.Group>
        {errorMessage && <p className="errorMessge">{errorMessage}</p>}
        <br />
        <div className="button-container">
        <Button variant="dark" type="submit">
          {" "}
          Sign In{" "}
        </Button> 
        <Button variant="dark" onClick={handleSignUp}>
          {" "}
          Sign Up{" "}
        </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignInForm;
