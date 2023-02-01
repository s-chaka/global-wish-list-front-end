import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
// import { setItemInLocalStorge } from "../Utils";
// import { useAuth } from "../hooks/useAuth";
// import { getItemFromLocalStorage, setItemInLocalStorage } from "../Utils";

const SignInForm = (props) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    // console.log(e);
    // console.log("me", props.data[0]);
    // setItemInLocalStorge("user", props.data[0]);
    // navigate("/dashboard");m
    let user_found = false;
    for (let user of props.data) {
      // console.log(user.email);
      if (
        user.email === formFields.email &&
        user.password === formFields.password
      ) {
        user_found = true;
        navigate("/dashboard");
        break;
      }
    }
    if (!user_found) {
      navigate("/signup");
    }
  };

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const FormSubmit = (e) => {
    e.preventDefault();
    handleClick({
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
        <button type="submit" onClick={handleClick}>
          {" "}
          Log in{" "}
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
