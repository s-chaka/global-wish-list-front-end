import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Profile = () => {
  const {
    updateWish,
    foundUserWish,
    foundUser,
    wishData,
    makeWishReal,
    pickYellowHeart,
    pickGreenHeart,
  } = useOutletContext();

  const alertMessage = () => {
    alert("If you'r intrested please conatct the wish owner!");
  };

  return (
    <div>
      <div className="wishes-article">
        {foundUser.map((user, id) => {
          return (
            <div key={id}>
              <p> You're viewing {user.firstName}'s Wish List </p>
              <ul>
                <li>First Name: {user.firstName}</li>
                <li>Last Name: {user.lastName}</li>
                <li>email: {user.email}</li>
                <li>Country: {user.address.country}</li>
                <li>City: {user.address.city}</li>
                <li>State: {user.address.state}</li>
                <li>Zip Code: {user.address.zipCode}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="wishes-article">
        <p>Wish List </p>
        {foundUserWish.map((wish, id) => {
          return (
            <ul key={id}>
              <li>
                Wish: {wish.wishList}
                {pickGreenHeart(wish.satisfied)}
                <button
                  onClick={() => {
                    makeWishReal(wish.id);
                    updateWish(wish.id, {
                      ...wish,
                      interested: !wish.interested,
                    });
                    alertMessage();
                  }}
                >
                  Interested
                </button>
                {pickYellowHeart(wish.interested)}
              </li>
              <li>Story: {wish.story}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
export default Profile;
