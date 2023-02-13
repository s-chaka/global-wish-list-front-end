import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import set from "lodash/set";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const UpdateForm = () => {
  const { updateUser, currentUser } = useOutletContext();

  const [formFields, setFormFields] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: currentUser.password,
    address: {
      country: currentUser.address.country,
      city: currentUser.address.city,
      state: currentUser.address.state,
      streetAddress: currentUser.address.streetAddress,
      zipCode: currentUser.address.zipCode,
    },
  });
  const FormSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const formFieldsCopy = JSON.parse(JSON.stringify(formFields));
    set(formFieldsCopy, e.target.name, e.target.value);
    setFormFields(formFieldsCopy);
  };
  return (
    <div className="container">
      <br />
      <Form onSubmit={FormSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type={"text"}
            name="firstName"
            placeholder="First name"
            value={formFields.firstName}
            onChange={handleChange}
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type={"text"}
            name="lastName"
            placeholder="Last name"
            value={formFields.lastName}
            onChange={handleChange}
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            name="email"
            placeholder="Email"
            value={formFields.email}
            onChange={handleChange}
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            name="password"
            placeholder="Password"
            value={formFields.password}
            onChange={handleChange}
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            name="address.country"
            placeholder="Country"
            value={formFields.address.country}
            onChange={handleChange}
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            name="address.city"
            placeholder="City"
            value={formFields.address.city}
            onChange={handleChange}
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            name="address.state"
            placeholder="State"
            value={formFields.address.state}
            onChange={handleChange}
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            name="address.streetAddress"
            placeholder="Street address"
            value={formFields.address.streetAddress}
            onChange={handleChange}
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type={"text"}
            name="address.zipCode"
            placeholder="Zip code"
            value={formFields.address.zipCode}
            onChange={handleChange}
            size="sm"
          />
        </Form.Group>
        <Button
          size="sm"
          variant="outline-info"
          onClick={() => updateUser(currentUser.id, formFields)}
        >
          Save
        </Button>
      </Form>
    </div>
  );
};

export default UpdateForm;
