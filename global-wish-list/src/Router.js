import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Homepage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import UnknownPage from "./pages/404";
import Wishes from "./pages/Wishes";
import SignInPage from "./pages/SingInPage";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import { AuthProvider } from "./hooks/useAuth";
import { getItemFromLocalStorage, setItemInLocalStorage } from "./Utils";
import HowItWorksPage from "./pages/HowItWorksPage";

// const URL=https://global-wish-list.herokuapp.com/users
const URL = "http://localhost:5000/users";

const MainLayout = () => {
  const [userData, setUserData] = useState([]);
  const [wishData, setWishData] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    getItemFromLocalStorage("user")
  );

  // get user working
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log("get user response", response);
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
            wishList: userWish.wish,
            story: userWish.story,
            owner: userWish.owner_id,
            id: userWish._id,
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
  const addWish = (wish, userId) => {
    axios
      .post(`${URL}/${userId}/wishlist`, wish)
      .then((response) => {
        // console.log("test response", response);
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
  // working
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

  const updateWish = (wishId, wish) => {
    axios
      .put(`${URL}/${wishId}/wishlist`, {
        wish: wish.wishList,
        story: wish.story,
        interested: wish.interested,
        satisfied: wish.satisfied,
      })
      .then(() => {
        const updateUserWish = (updatedWish) => {
          const updatedWishes = wishData.map((wish) => {
            if (wish.id === updatedWish.id) {
              return updatedWish;
            } else {
              return wish;
            }
          });
          setWishData(updatedWishes);
        };
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [searchResults, setSearchResults] = useState([]);
  const [foundUser, setFoundUser] = useState([]);
  const [foundUserWish, setFoundUserWish] = useState([]);
  const handleSearchResult = () => {
    const wishFound = [];
    const userFound = [];
    for (let wish of wishData) {
      for (let result of searchResults) {
        if (result.id === wish.owner) {
          wishFound.push(wish);
          if (!userFound.includes(result)) userFound.push(result);
          continue;
        }
        setFoundUserWish(wishFound);
        setFoundUser(userFound);
      }
      // if (!wishFound) {
      //   <p>"No wish found"</p>;
      // } else {
      navigate("/profile");
      // }
    }
  };

  const makeWishReal = (wish_id) => {
    setWishData((interestes) => {
      return interestes.map((interest) => {
        if (interest.id === wish_id) {
          return {
            ...interest,
            interested: !interest.interested,
          };
        } else {
          return interest;
        }
      });
    });

    setFoundUserWish((interestes) => {
      return interestes.map((interest) => {
        if (interest.id === wish_id) {
          return {
            ...interest,
            interested: !interest.interested,
          };
        } else {
          return interest;
        }
      });
    });
  };

  const satisfyWish = (wish_id) => {
    setWishData((satisfies) => {
      return satisfies.map((satisfy) => {
        if (satisfy.id === wish_id) {
          return {
            ...satisfy,
            satisfied: !satisfy.satisfied,
          };
        } else {
          return satisfy;
        }
      });
    });

    setFoundUserWish((satisfies) => {
      return satisfies.map((satisfy) => {
        if (satisfy.id === wish_id) {
          return {
            ...satisfy,
            satisfied: !satisfy.satisfied,
          };
        } else {
          return satisfy;
        }
      });
    });
  };
  const pickYellowHeart = (interested) => {
    if (interested) {
      return "💛";
    } else {
      return "🤍";
    }
  };
  const pickGreenHeart = (satisfied) => {
    if (satisfied) {
      return "💚";
    } else {
      return "🤍";
    }
  };

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
            handleSearchResult,
            foundUserWish,
            foundUser,
            updateWish,
            makeWishReal,
            pickYellowHeart,
            pickGreenHeart,
            satisfyWish,
            // logout
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
