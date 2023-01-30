import { useState } from "react";
import PropTypes from "prop-types";
// import set from "lodash/set";

const WishForm = (props) => {
  const [formFields, setFormFields] = useState({
    wishList: "",
    story: "",
  });

  // const userData = props.userData;
  // <div>
  //   {userData.map((user) => (
  //     <ul>id={user.id}</ul>
  //   ))}
  // </div>;

  // console.log(userData.id);
  const FormSubmit = (e) => {
    e.preventDefault();
    props.onAddWishData(
      {
        wish: formFields.wishList,
        story: formFields.story,
      },
      props.userData._id
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
        <label htmlFor="wishList">Wish List: </label>
        <input
          name="wishList"
          value={formFields.wishList}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="story">Story: </label>
        <input name="story" value={formFields.story} onChange={handleChange} />
      </div>
      <button type="submit"> Add Wish </button>
    </form>
  );
};

export default WishForm;
