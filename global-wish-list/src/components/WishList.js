import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Wishes from "../pages/Wishes";
import "./Home.css";
import { useOutletContext } from "react-router-dom";

const URL = "http://localhost:5000/users";

const WishList = () => {
  const [wishData, setWishData] = useState([]);
  const { userData } = useOutletContext();

  useEffect(() => {
    axios
      .get(`${URL}/wishes`)
      .then((response) => {
        const newWishes = response.data.result.map((userWish) => {
          return {
            id: userWish._id,
            wishList: userWish.wish,
            story: userWish.story,
            owner: userWish.owner_id,
            interested: userWish.interested,
            satisfied: userWish.satisfied,
          };
        });
        setWishData(newWishes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // working
  const [userWish, setUserWish] = useState("");
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
            interested: userWish.interested,
            satisfied: userWish.satisfied,
          };
        });
        setUserWish(user);
        console.log(userWish);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        {wishData.map((wish) => (
          <ul key={wish.id}>
            <article>
              <p>{wish.owner}</p>
              <p>{wish.wishList}</p>
              <p>{wish.story}</p>
            </article>
          </ul>
        ))}
      </div>
    </div>
  );
  // const { currentUser, searchInput, setSearchInput, userData } =
  //   useOutletContext();
  // // console.log(searchInput.id);
  // const result = [];
  // for (let wish of wishData) {
  //   for (let user of userData) {
  //     if (user.id === wish.owner) {
  //       result.push(user);
  //       result.push(wish);
  //       continue;
  //     }
  //   }
  // }
  // console.log(result);
  // console.log("current user wish", wishList);
  // }

  // return (
  //   <div>
  //     {searchedUserWish.map((user) => {
  //       return (
  //         <ul key={user.id}>
  //           <li>First Name: {user.firstName}</li>
  //           <li>Last Name: {user.lastName}</li>
  //           <li>Email: {user.email}</li>
  //           <li>Wish: {user.wishList} </li>
  //           <li>Story: {user.story}</li>
  //         </ul>
  //       );
  //     })}
  //   </div>
  // );
};

export default WishList;
