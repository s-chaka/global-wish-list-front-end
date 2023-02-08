import { useState } from "react";
import set from "lodash/set";
import "./Form.css";
import { useOutletContext, useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { userData, addUser } = useOutletContext();
  const [error, setError] = useState(false);
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
    // if (
    //   formFields.firstName.length === 0 ||
    //   formFields.lastName.length === 0 ||
    //   formFields.email.length === 0 ||
    //   formFields.address.country.length === 0
    // ) {
    //   setError(true);
    // }
    addUser({
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
    // alert("user deleted successfully");
    navigate("/signin");
  };

  const alertMessage = () => {
    alert("User created successfully please sign in!");
  };
  const handleChange = (e) => {
    const formFieldsCopy = JSON.parse(JSON.stringify(formFields));
    set(formFieldsCopy, e.target.name, e.target.value);
    setFormFields(formFieldsCopy);
  };
  return (
    <div className="form-container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
        {error && formFields.firstName <= 0 ? (
          <label className="error-lable">*First Name can't be empty</label>
        ) : (
          ""
        )}
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            name="lastName"
            placeholder="your last name"
            value={formFields.lastName}
            onChange={handleChange}
          />
        </div>
        {error && formFields.lastName <= 0 ? (
          <label className="error-lable">*Last Name can't be empty</label>
        ) : (
          ""
        )}
        <div>
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            placeholder="your email"
            value={formFields.email}
            onChange={handleChange}
          />
        </div>
        {error && formFields.email <= 0 ? (
          <label className="error-lable"> *Email can't be empty</label>
        ) : (
          ""
        )}
        <div>
          <label htmlFor="password">Password: </label>
          <input
            name="password"
            placeholder="create password"
            value={formFields.password}
            onChange={handleChange}
          />
        </div>
        {error && formFields.password <= 0 ? (
          <label className="error-lable"> *Password can't be empty</label>
        ) : (
          ""
        )}
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
        {error && formFields.country <= 0 ? (
          <label className="error-lable"> *Country can't be empty</label>
        ) : (
          ""
        )}
        <div>
          <label htmlFor="city">City: </label>
          <input
            name="address.city"
            placeholder="yout current city"
            value={formFields.address.city}
            onChange={handleChange}
          />
        </div>
        {error && formFields.city <= 0 ? (
          <label className="error-lable">*City can't be empty</label>
        ) : (
          ""
        )}
        <div>
          <label htmlFor="state">State: </label>
          <input
            name="address.state"
            placeholder="your current state"
            value={formFields.address.state}
            onChange={handleChange}
          />
        </div>
        {error && formFields.state <= 0 ? (
          <label className="error-lable"> *State can't be empty</label>
        ) : (
          ""
        )}
        <div>
          <label htmlFor="streetAddress">Stree address: </label>
          <input
            name="address.streetAddress"
            placeholder="your current street-address"
            value={formFields.address.streetAddress}
            onChange={handleChange}
          />
        </div>
        {error && formFields.streetAddress <= 0 ? (
          <label className="error-lable"> *Street Address can't be empty</label>
        ) : (
          ""
        )}
        <div>
          <label htmlFor="zipCode">Zip code: </label>
          <input
            name="address.zipCode"
            placeholder="your zip code"
            value={formFields.address.zipCode}
            onChange={handleChange}
          />
        </div>
        {error && formFields.zipCode <= 0 ? (
          <label className="error-lable"> *Zip code can't be empty</label>
        ) : (
          ""
        )}
        <div>
          <button type="submit" onClick={alertMessage}>
            Sign Up{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
