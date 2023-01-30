import { useState } from "react";
import PropTypes from "prop-types";
import set from "lodash/set";

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
    // setFormFields({ ...formFields, [e.target.name]: e.target.value });
    const formFieldsCopy = JSON.parse(JSON.stringify(formFields));
    set(formFieldsCopy, e.target.name, e.target.value);
    setFormFields(formFieldsCopy);
  };
  return (
    <form onSubmit={FormSubmit}>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input
          name="firstName"
          value={formFields.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input
          name="lastName"
          value={formFields.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input name="email" value={formFields.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          name="password"
          value={formFields.password}
          onChange={handleChange}
        />
      </div>
      <div>Address </div>
      <div>
        <label htmlFor="country">Country: </label>
        <input
          name="address.country"
          value={formFields.address.country}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="city">City: </label>
        <input
          name="address.city"
          value={formFields.address.city}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="state">State: </label>
        <input
          name="address.state"
          value={formFields.address.state}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="streetAddress">Stree address: </label>
        <input
          name="address.streetAddress"
          value={formFields.address.streetAddress}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="zipCode">Zip code: </label>
        <input
          name="address.zipCode"
          value={formFields.address.zipCode}
          onChange={handleChange}
        />
      </div>

      {/* <div>
            <label htmlFor="wishList">Wish List: </label>
            <input 
                name="wishList" 
                value={formFields.wishList}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="story">Story: </label>
            <input 
                name="story" 
                value={formFields.story}
                onChange={handleChange}
            />
        </div> */}
      <button type="submit">Sign Up </button>
    </form>
  );
};

export default SignUpForm;
