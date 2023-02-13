import { useNavigate, useOutletContext } from "react-router-dom";
import { useState, useContex } from "react";
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

  const handleUser = (e) => {
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
        break;
      }
    }
    if (!user_found) {
      navigate("/signup");
    }
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    handleUser({
      email: formFields.email,
      password: formFields.password,
    });
  };

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };
  return (
    <div className="form-singin">
      <Form onSubmit={FormSubmit}>
        <h3> Please Log In </h3>
        <Form.Group className="mb-3" controlId="signin-form">
          <Form.Label>Email address </Form.Label>
          <Form.Control
            name="email"
            placeholder="Email address"
            value={formFields.email}
            onChange={handleChange}
            className=" w-50"
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="signin-form">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            placeholder="Password"
            value={formFields.password}
            onChange={handleChange}
            // useVendorStyles={false}
            className=" w-50"
            size="sm"
          />
        </Form.Group>
        <br />
        <Button variant="dark" type="submit" onClick={handleUser}>
          {" "}
          Sign In/Sign Up{" "}
        </Button>
      </Form>
    </div>
  );
};

export default SignInForm;
