import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Wishes from "../pages/Wishes";

const URL = "http://localhost:5000/users";

const WishList = () => {
  const [wishData, setWishData] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/wishes`)
      .then((response) => {
        // console.log("test wish respones", response);
        const newWishes = response.data.result.map((userWish) => {
          return {
            id: userWish._id,
            wishList: userWish.wish,
            story: userWish.story,
            owner: userWish.owner_id,
          };
        });
        setWishData(newWishes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // working
  const [userWish, setUserWish] = "";
  const getUsersWish = (user_id) => {
    axios
      .get(`${URL}/${user_id}/wishlist`)
      .then((response) => {
        console.log(" user wish print", response);
        const user = response.data.result.map((userWish) => {
          return {
            id: userWish._id,
            wishList: userWish.wish,
            story: userWish.story,
            owner: userWish.owner_id,
          };
        });
        setUserWish(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {wishData.map((wish) => (
        <ul key={wish.id}>
          <li>
            <p>{wish.owner}</p>
            <p>{wish.wishList}</p>
            <p>{wish.story}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default WishList;
