import React from "react";
// import axios from "axios";

// const URL = "http://localhost:5000/users";

const Dashboard = (props) => {
  const [currentUser, setCurrentUser] = "";
  const data = props.data;

  const userInfo = () => {
    for (let user of data) {
      console.log(user);
      if (user === currentUser) {
        return user;
      }
    }
  };

  return <h2> Hello {currentUser} </h2>;
};
export default Dashboard;
