import { useState } from "react";
import PropTypes from "prop-types";
// import set from "lodash/set";
const WishForm = (props) => {
  const userData = props.userData;
  const wishData = props.wishData;
  console.log("currentUser from wish form", props.currentUser);
  // const getCurrenUserId = (id) => {
  //   for (let user of userData) {
  //     for (let owner of wishData) {
  //       if (user.id === owner.owner_id) {
  //         return user.id;
  //       }
  //     }
  //     // console.log("get id", user.email);
  //   }
  // };

  const [formFields, setFormFields] = useState({
    wishList: "",
    story: "",
    // email: "",
  });

  // const userData = props.userData;
  // <div>
  //   {userData.map((user) => (
  //     <ul>id={user.id}</ul>
  //   ))}
  // </div>;

  // console.log(userData.id);
  const FormSubmit = (e) => {
    console.log(props.data);
    e.preventDefault();
    props.onAddWishData(
      {
        wish: formFields.wishList,
        story: formFields.story,
        // email: formFields.email,
      },
      props.currentUser.id

      // props.userData[0].id // find a way to get the current user
    );
    setFormFields({
      wishList: "",
      story: "",
      // email: "",
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
      {/* <div>
        <label htmlFor="email">Email: </label>
        <input name="email" value={formFields.email} onChange={handleChange} />
      </div> */}
      <br />
      <button type="submit"> Sumbit Wish </button>
    </form>
  );
};

export default WishForm;
