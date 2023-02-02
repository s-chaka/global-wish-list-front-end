import React, { useState } from "react";
import "./Dashboard.css";
// import axios from "axios";

// const URL = "http://localhost:5000/users";

const Dashboard = (props) => {
  const currentUser = props.currentUser;
  const wishData = props.wishData;
  // console.log("current user from dashboard", currentUser.id);
  const wishList = [];
  for (let wish of wishData) {
    if (currentUser.id === wish.owner) {
      wishList.push(wish);
      continue;
    }
    // console.log("current user wish", wishList);
  }
  return (
    <div>
      <p className="userName"> Hello {currentUser.firstName}</p>
      <div className="dashboardProfile">
        <p>First Name: {currentUser.firstName}</p>
        <p>Last Name: {currentUser.lastName}</p>
        <p>Email: {currentUser.email}</p>
        <p className="address">Address </p>
        <p> Contry: {currentUser.address?.country}</p>
        <p> City: {currentUser.address?.city}</p>
        <p> State: {currentUser.address?.state}</p>
        <p> Street Address: {currentUser.address?.streetAddress}</p>
        <p> Zip Code: {currentUser.address?.zipCode}</p>
        <p></p>
      </div>
      <p>My Wish List </p>
      {wishList.map((wish) => {
        return (
          <ul key={wish.id}>
            <li>Wish: {wish.wishList}</li>
            <li>Story: {wish.story}</li>
          </ul>
        );
      })}
    </div>
  );
};
export default Dashboard;
