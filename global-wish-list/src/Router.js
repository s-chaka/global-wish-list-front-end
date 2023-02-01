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
// import { AuthProvider } from "./hooks/useAuth";

const URL = "http://localhost:5000/users";

const MainLayout = () => {
  const [userData, setUserData] = useState([]);
  const [wishData, setWishData] = useState([]);
  // const [token, setToken] = useState();
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
            password: user.password,
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
  // const [user, setUser] = useState(null);
  // const navigate = useNavigate();
  // const location = useLocation();
  // const logIn = () => {
  //   // setItemInLocalStorge("user", userData[0]);
  //   setUser(userData[0]);
  //   navigate("/dashboard");
  // };
  // const logOut = () => {
  //   setUser(null);
  //   // setItemInLocalStorge("user", null);
  //   navigate("/home");
  // };
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
            owner: userWish.owner_id,
          };
        });
        setWishData(newWishes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // working on this ??????????? find a way to get the current userId
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

  // this is not in NavBar
  // if (!token) {
  //   return <SignIn setToken={setToken} />;
  // }

  return (
    // <AuthProvider>
    <Layout>
      <Outlet context={{ addUser, addWish, userData, wishData }} />
    </Layout>
    // </AuthProvider>
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
