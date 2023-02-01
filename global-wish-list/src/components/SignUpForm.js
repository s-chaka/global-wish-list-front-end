import { useState } from "react";
import PropTypes from "prop-types";
import set from "lodash/set";
import "./Form.css";

const SignUpForm = (props) => {
  // console.log(props.onAddUserData);
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: {
      country: "",
      city: "",
      state: "",
      streetAddress: "",
      zipCode: "",
    },
  });
  const FormSubmit = (e) => {
    e.preventDefault();
    props.onAddUserData({
      first_name: formFields.firstName,
      last_name: formFields.lastName,
      email: formFields.email,
      password: formFields.password,
      address: formFields.address,
    });
    setFormFields({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: {
        country: "",
        city: "",
        state: "",
        streetAddress: "",
        zipCode: "",
      },
    });
  };

  const handleChange = (e) => {
    const formFieldsCopy = JSON.parse(JSON.stringify(formFields));
    set(formFieldsCopy, e.target.name, e.target.value);
    setFormFields(formFieldsCopy);
  };
  return (
    <div className="form-container">
      <h3> Please Sign Up </h3>
      <form onSubmit={FormSubmit} className="signup-form">
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            name="firstName"
            placeholder="your first name"
            value={formFields.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            name="lastName"
            placeholder="your last name"
            value={formFields.lastName}
            onChange={handleChange}
          />
        </div>
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
            placeholder="create password"
            value={formFields.password}
            onChange={handleChange}
          />
        </div>
        <div>Address </div>
        <div>
          <label htmlFor="country">Country: </label>
          <input
            name="address.country"
            placeholder="yout current country"
            value={formFields.address.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">City: </label>
          <input
            name="address.city"
            placeholder="yout current city"
            value={formFields.address.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="state">State: </label>
          <input
            name="address.state"
            placeholder="your current state"
            value={formFields.address.state}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="streetAddress">Stree address: </label>
          <input
            name="address.streetAddress"
            placeholder="your current street-address"
            value={formFields.address.streetAddress}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="zipCode">Zip code: </label>
          <input
            name="address.zipCode"
            placeholder="your zip code"
            value={formFields.address.zipCode}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up </button>
      </form>
    </div>
  );
};

export default SignUpForm;
