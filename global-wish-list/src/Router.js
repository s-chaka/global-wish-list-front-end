import {
  Navigate,
  Outlet,
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Router } from "react-router-dom";
import axios from "axios";
import Homepage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import UnknownPage from "./pages/404";
import Wishes from "./pages/Wishes";
import SignInPage from "./pages/SingInPage";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import { AuthProvider } from "./hooks/useAuth";
import { getItemFromLocalStorage, setItemInLocalStorage } from "./Utils";
import HowItWorksPage from "./pages/HowItWorksPage";
import UsersList from "./components/UsersList";

// const URL=https://global-wish-list.herokuapp.com/users
const URL = "http://localhost:5000/users";

const MainLayout = () => {
  const [userData, setUserData] = useState([]);
  const [wishData, setWishData] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    getItemFromLocalStorage("user")
  );
  const [searchResults, setSearchResults] = useState([]);
  // const [searchInput, setSearchInput] = useState("");

  // console.log(searchResults);

  // get user working
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        // console.log("user test response", response);
        const newUsers = response.data.result.map((user) => {
          return {
            id: user._id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            password: user.password,
            address: user.address,
          };
        });
        setUserData(newUsers);
        setSearchResults(newUsers);
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
        // console.log(" add user test response", response);
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

  const navigate = useNavigate();
  // working
  const deleteUser = (id) => {
    // const result = window.confirm('Account deleted successfully')
    axios
      .delete(`${URL}/${id}`)
      .then(() => {
        const newUsers = userData?.filter((user) => user?.id !== id);
        setUserData(newUsers);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };

  // get all Users
  useEffect(() => {
    axios
      .get(`${URL}/wishes`)
      // .get(`${URL}/${user_id}/wishlist`)
      .then((response) => {
        // console.log(" wish test respones", response);
        const newWishes = response.data.result.map((userWish) => {
          return {
            // id: userWish.id,
            wishList: userWish.wish,
            story: userWish.story,
            owner: userWish.owner_id,
            id: userWish._id,
          };
        });
        setWishData(newWishes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // working
  const addWish = (wish, userId) => {
    axios
      .post(`${URL}/${userId}/wishlist`, wish)
      .then((response) => {
        console.log("test response", response);
        const newWish = [...wishData];
        newWish.push({
          wishList: "",
          story: "",
        });
        setUserData(newWish);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteWish = (wishId) => {
    axios
      .delete(`${URL}/${wishId}/wishlist`)
      .then(() => {
        const newWishes = wishData.filter((wish) => wish.id !== wishId);
        setWishData(newWishes);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const updateWish = (wishId) => {
  //   axios
  //     .put(`${URL}/${wishId}/wishlist`)
  //     .then(() => {
  //       const newWishes = wishData((wish) => wish.id === wishId);
  //       setWishData(newWishes);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const logedInMyUser = window.localStorage.getItem("myuser");
  // console.log(logedInMyUser, "login");
  // console.log(userData);

  return (
    <AuthProvider setCurrentUser={setCurrentUser}>
      <Layout currentUser={currentUser}>
        <Outlet
          context={{
            addUser,
            addWish,
            userData,
            wishData,
            setCurrentUser,
            currentUser,
            deleteWish,
            deleteUser,
            setSearchResults,
            searchResults,
          }}
        />
      </Layout>
    </AuthProvider>
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
        element: <HowItWorksPage />,
        path: "/howitworks",
      },
      {
        element: <SignUpPage />,
        path: "/signup",
      },
      {
        element: <Wishes />,
        path: "/wishes",
      },
      {
        element: <SignInPage />,
        path: "/signin",
      },
      {
        element: <DashboardPage />,
        path: "/dashboard",
      },
      {
        element: <ProfilePage />,
        path: "/profile",
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
