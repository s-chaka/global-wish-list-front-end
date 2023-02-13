import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

const WishForm = () => {
  const { currentUser, addWish } = useOutletContext();

  const [formFields, setFormFields] = useState({
    url: "",
    wishList: "",
    story: "",
  });

  const FormSubmit = (e) => {
    e.preventDefault();
    addWish(
      {
        url: formFields.url,
        wish: formFields.wishList,
        story: formFields.story,
      },
      currentUser.id
    );
    setFormFields({
      url: "",
      wishList: "",
      story: "",
    });
  };

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };
  return (
    <Form onSubmit={FormSubmit}>
      <br />
      <Form.Group className="mb-3">
        <Form.Control
          type="url"
          name="url"
          value={formFields.url}
          onChange={handleChange}
          placeholder="https://example.com"
          size="sm"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          name="wishList"
          value={formFields.wishList}
          placeholder="Wish"
          onChange={handleChange}
          size="sm"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          name="story"
          value={formFields.story}
          placeholder="Story"
          onChange={handleChange}
          size="sm"
        />
      </Form.Group>
      <Button variant="success" size="sm" type="submit">
        {" "}
        Sumbit Wish{" "}
      </Button>
    </Form>
  );
};

export default WishForm;
