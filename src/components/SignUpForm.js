import { useState } from "react";
import set from "lodash/set";
import "./Form.css";
import { useOutletContext, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { addUser } = useOutletContext();
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
    addUser({
      first_name: formFields.firstName,
      last_name: formFields.lastName,
      email: formFields.email,
      password: formFields.password,
      address: formFields.address,
    });
    setFormFields({
      firstName: formFields.firstName,
      lastName: formFields.lastName,
      email: formFields.email,
      password: formFields.password,
      address: {
        country: formFields.address.country,
        city: formFields.address.city,
        state: formFields.address.state,
        streetAddress: formFields.address.streetAddress,
        zipCode: formFields.address.zipCode,
      },
    });
    navigate("/");
  };

  const handleChange = (e) => {
    const formFieldsCopy = JSON.parse(JSON.stringify(formFields));
    set(formFieldsCopy, e.target.name, e.target.value);
    setFormFields(formFieldsCopy);
  };

  const handleSignIn = () =>{
    alert("User created successfully. Please sign in.");
    navigate("/signin");
  };

  return (
    <div className="form-signup">
      <Form onSubmit={FormSubmit} className="signup-form">
        <h3> Please Sign Up </h3>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Control
            name="firstName"
            placeholder="First Name"
            value={formFields.firstName}
            onChange={handleChange}
            className=" w-50"
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Control
            name="lastName"
            placeholder="Last Name"
            value={formFields.lastName}
            onChange={handleChange}
            className=" w-50"
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            placeholder="Email"
            value={formFields.email}
            onChange={handleChange}
            className=" w-50"
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            placeholder="Password"
            value={formFields.password}
            onChange={handleChange}
            className=" w-50"
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCountryName">
          <Form.Control
            name="address.country"
            placeholder="Country"
            value={formFields.address.country}
            onChange={handleChange}
            className=" w-50"
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCityName">
          <Form.Control
            name="address.city"
            placeholder="City"
            value={formFields.address.city}
            onChange={handleChange}
            className=" w-50"
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formStateName">
          <Form.Control
            name="address.state"
            placeholder="State"
            value={formFields.address.state}
            onChange={handleChange}
            className=" w-50"
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formStreetAddressName">
          <Form.Control
            name="address.streetAddress"
            placeholder="Stree address"
            value={formFields.address.streetAddress}
            onChange={handleChange}
            className=" w-50"
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formZipCodeName">
          <Form.Control
            name="address.zipCode"
            placeholder="Zip code"
            value={formFields.address.zipCode}
            onChange={handleChange}
            className=" w-50"
            size="sm"
          />
        </Form.Group>
        <div>
          <Button
            variant="dark"
            type="submit"
            onClick={handleSignIn}
          >
            Sign Up{" "}

          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;
