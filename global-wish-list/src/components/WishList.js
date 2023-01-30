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
        console.log("test wish respones", response);
        const newWishes = response.data.result.map((userWish) => {
          return {
            id: userWish.id,
            wishList: userWish.wish,
            story: userWish.story,
          };
        });
        setWishData(newWishes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {wishData.map((wish) => (
        <div>
          <ul>
            <li key={wish.id}>
              <p>{wish.wishList}</p>
              <p>{wish.story}</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WishList;
