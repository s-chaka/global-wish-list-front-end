// import "./App.css";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import SignUpForm from "./components/SignUpForm";
// import SearchBar from "./components/SearchBar";
// import WishList from "./components/WishList";
// import WishForm from "./components/WishForm";
// import Users from "./components/Users";
// import { Router } from "react-router-dom";

// const URL = process.env['REACT_APP_BACKEND_URL'];

// const URL = "http://localhost:5000/users";
// const WishURL = "http://localhost:5000/wishes";

// const App = () => {
// const [userData, setUserData] = useState([]);
// const [wishData, setWishData] = useState([]);
// // get user working
// useEffect(() => {
//   axios
//     .get(URL)
//     .then((response) => {
//       console.log("test response", response);
//       const newUsers = response.data.result.map((user) => {
//         return {
//           id: user._id,
//           firstName: user.first_name,
//           lastName: user.last_name,
//           email: user.email,
//           address: user.address,
//         };
//       });
//       setUserData(newUsers);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);
// // add user working
// const addUser = (user) => {
//   axios
//     .post(URL, user)
//     .then((response) => {
//       console.log("test response", response);
//       const newUsers = [...userData];
//       newUsers.push({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         address: {
//           country: "",
//           city: "",
//           state: "",
//           streetAddress: "",
//           zipCode: "",
//         },
//         ...user,
//       });
//       setUserData(newUsers);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// // not checked yet
// const deleteUser = (id) => {
//   axios
//     .delete(`${URL}/${id}`)
//     .then(() => {
//       const newUsers = userData.filter((user) => user.id !== id);
//       setUserData(newUsers);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// // getUsersWish = () => {
// useEffect(() => {
//   axios
//     .get(`${URL}/wishes`)
//     // .get(`${URL}/${user_id}/wishlist`)
//     .then((response) => {
//       console.log("test wish respones", response);
//       const newWishes = response.data.result.map((userWish) => {
//         return {
//           // id: userWish.id,
//           wishList: userWish.wish,
//           story: userWish.story,
//         };
//       });
//       setWishData(newWishes);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);
// // working on this ?????????????????????????????????????
// const addWish = (wish, userId) => {
//   axios
//     .post(`${URL}/${userId}/wishlist`, wish)
//     .then((response) => {
//       console.log("test response", response);
//       const newWish = [...wishData];
//       newWish.push({
//         wishList: "",
//         story: "",
//         // ...userId,
//       });
//       setUserData(newWish);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// const users = userData.map((id) => <WishForm userId={id} />);
// // console.log("me", userData);
// return (
//   <Router>
//     <div className="App">
//       <h3> welcome to global-wish-list </h3>
//       {/* <WishList wishs={wishData} /> */}
//       <SignUpForm onAddUserData={addUser} />
//       <SearchBar data={userData} />
//       <WishForm onAddWishData={addWish} />
//       <WishList wishData={wishData} />
//       <Users data={userData} />
//     </div>
//   </Router>
// );
// };

// export default App;
