import { useState } from "react";
import PropTypes from "prop-types";
// import set from "lodash/set";
const WishForm = (props) => {
  const userData = props.userData;
  const wishData = props.wishData;
  console.log("currentUser from wish form", props.currentUser);

  const [formFields, setFormFields] = useState({
    wishList: "",
    story: "",
  });

  const FormSubmit = (e) => {
    console.log(props.data);
    e.preventDefault();
    props.onAddWishData(
      {
        wish: formFields.wishList,
        story: formFields.story,
      },
      props.currentUser.id
    );
    setFormFields({
      wishList: "",
      story: "",
    });
  };

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={FormSubmit}>
      <div>
        <br />
        <label htmlFor="wishList">Wish: </label>
        <input
          name="wishList"
          value={formFields.wishList}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <label htmlFor="story">Story: </label>
        <input name="story" value={formFields.story} onChange={handleChange} />
      </div>
      <br />
      <button type="submit"> Sumbit Wish </button>
    </form>
  );
};

export default WishForm;
