import React, { useState, useContext } from "react";
import "./Dashboard.css";
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const {
    wishData,
    currentUser,
    deleteUser,
    deleteWish,
    satisfyWish,
    pickGreenHeart,
    pickYellowHeart,
    updateWish,
    logout,
  } = useOutletContext();
  // };
  // const pickGreenHeart = (satisfied) => {
  //   if (satisfied) {
  //     return "💚";
  //   } else {
  //     return "🤍";
  //   }
  // };
  const wishList = [];
  for (let wish of wishData) {
    if (currentUser.id === wish.owner) {
      wishList.push(wish);
      continue;
    }
    // console.log("current user wish", wishList);
  }
  const alertUserMessages = () => {
    alert("User will be deleted!");
  };
  const alertWishMessage = () => {
    alert("Wish will be deleted!");
  };
  return (
    <div>
      <button
        onClick={() => {
          deleteUser?.(currentUser.id);
          alertUserMessages();
          // logout();
        }}
      >
        Delete My Account
      </button>
      <p className="userName"> Hello {currentUser.firstName} 👋🏼</p>
      <article className="dashboardProfile">
        <p>First Name: {currentUser.firstName}</p>
        <p>Last Name: {currentUser.lastName}</p>
        <p>Email: {currentUser.email}</p>
        <p>Address </p>
        <p> Contry: {currentUser.address?.country}</p>
        <p> City: {currentUser.address?.city}</p>
        <p> State: {currentUser.address?.state}</p>
        <p> Street Address: {currentUser.address?.streetAddress}</p>
        <p> Zip Code: {currentUser.address?.zipCode}</p>
        <p></p>
      </article>
      <div className="wishes-article">
        <p>My Wish List </p>
        {wishList.map((wish) => {
          return (
            <ul key={wish.id}>
              <li>
                Wish: {wish.wishList}
                {pickGreenHeart(wish.satisfied)}
                <button
                  onClick={() => {
                    satisfyWish(wish.id);
                    updateWish(wish.id, {
                      ...wish,
                      satisfied: !wish.satisfied,
                    });
                  }}
                >
                  Satisfied{" "}
                </button>
                {pickYellowHeart(wish.interested)}
                <button
                  onClick={() => {
                    deleteWish?.(wish.id);
                    alertWishMessage();
                  }}
                >
                  {" "}
                  Remove Wish{" "}
                </button>
              </li>
              <li>Story: {wish.story}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
export default Dashboard;
