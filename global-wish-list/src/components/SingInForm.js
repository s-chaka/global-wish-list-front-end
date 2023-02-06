import { useNavigate, useLocation, Router } from "react-router-dom";
import { useState, useContex } from "react";
import PropTypes from "prop-types";
import WishForm from "./WishForm";
// import { setItemInLocalStorge } from "../Utils";
import { useAuth } from "../hooks/useAuth";
import { useOutletContext } from "react-router-dom";
import { getItemFromLocalStorage, setItemInLocalStorage } from "../Utils";

const SignInForm = (props) => {
  const navigate = useNavigate();
  const { userData, setCurrentUser } = useOutletContext();
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  // const { login, user } = useAuth();
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
      // login();
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
    <div className="form-container">
      <h3> Please Log In </h3>
      <form onSubmit={FormSubmit} className="singin-from">
        <div>
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            placeholder="your email"
            value={formFields.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            name="password"
            placeholder="*******"
            value={formFields.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleUser}>
          {" "}
          Sign In/Sign Up{" "}
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
