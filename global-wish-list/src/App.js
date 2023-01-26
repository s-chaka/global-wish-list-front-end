import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SignUpForm from "./components/SignUpForm";
// import WishList from "./components/WishList";

// const URL = process.env['REACT_APP_BACKEND_URL'];
const URL = "http://localhost:5000";

const App = () => {
  const [userData, setUserData] = useState([]);
  // const [wishData, setWishData] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/users`)
      .then((response) => {
        console.log("test response", response);
        const newUsers = response.data.result.map((user) => {
          return {
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            address: user.address,
            wishList: user.wish_list,
            story: user.story,
          };
        });
        setUserData(newUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(userData);
  const addUser = (user) => {
    axios
      .post(`${URL}/users`, user)
      .then((response) => {
        const newUsers = [...userData];
        newUsers.$push({
          id: response.data.user.id,
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          wishList: "",
          story: "",
          ...user,
        });
        setUserData(newUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteUser = (id) => {
    axios
      .delete(`${URL}/users/${id}`)
      .then(() => {
        const newUsers = userData.filter((user) => user.id !== id);
        setUserData(newUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h3> welcome to global-wish-list </h3>

      {/* <WishList wishs={wishData} /> */}
      <SignUpForm onAddUserData={addUser} />
    </div>
  );
};

export default App;
