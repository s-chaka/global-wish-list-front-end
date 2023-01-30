import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Router } from "react-router-dom";
import axios from "axios";
import Layout from "./components/Layout";
import Homepage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import UnknownPage from "./pages/404";
import Wishes from "./pages/Wishes";
import SignUpForm from "./components/SignUpForm";
import Home from "./components/Home";
import WishList from "./components/WishList";
import WishForm from "./components/WishForm";
import Users from "./components/Users";

// import WishList from "./components/WishList";

const URL = "http://localhost:5000/users";

const MainLayout = () => {
  const [userData, setUserData] = useState([]);
  const [wishData, setWishData] = useState([]);

  // get user working
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log("test response", response);
        const newUsers = response.data.result.map((user) => {
          return {
            id: user._id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            address: user.address,
          };
        });
        setUserData(newUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // add user working
  const addUser = (user) => {
    axios
      .post(URL, user)
      .then((response) => {
        console.log("test response", response);
        const newUsers = [...userData];
        newUsers.push({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          address: {
            country: "",
            city: "",
            state: "",
            streetAddress: "",
            zipCode: "",
          },
          ...user,
        });
        setUserData(newUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // not checked yet
  const deleteUser = (id) => {
    axios
      .delete(`${URL}/${id}`)
      .then(() => {
        const newUsers = userData.filter((user) => user.id !== id);
        setUserData(newUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // getUsersWish = () => {
  useEffect(() => {
    axios
      .get(`${URL}/wishes`)
      // .get(`${URL}/${user_id}/wishlist`)
      .then((response) => {
        console.log("test wish respones", response);
        const newWishes = response.data.result.map((userWish) => {
          return {
            // id: userWish.id,
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
  // working on this ?????????????????????????????????????
  const addWish = (wish, userId) => {
    axios
      .post(`${URL}/${userId}/wishlist`, wish)
      .then((response) => {
        console.log("test response", response);
        const newWish = [...wishData];
        newWish.push({
          wishList: "",
          story: "",
          // ...userId,
        });
        setUserData(newWish);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const users = userData.map((id) => <WishForm userId={id} />);
  // console.log("me", userData);

  return (
    <Layout>
      <Outlet context={{ addUser, addWish, userData }} />
    </Layout>
  );
};

export const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        element: <Homepage />,
        path: "/",
      },
      {
        element: <SignUp />,
        path: "/signup",
      },
      {
        element: <Wishes />,
        path: "/wishes",
      },
    ],
  },
  {
    path: "/404",
    element: <UnknownPage />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
];
